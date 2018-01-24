import moment from 'moment';
import ajax from 'modules/ajax';
import imageResize from 'modules/image-resize';
import URI from 'urijs';

export default {
  computed: {
    couchPotatoService () {
      return this.services.find(s => s.id === 3);
    }
  },
  methods: {
    couchPotato () {
      localStorage.setItem('couchPotatoError', false);
      return this.couchpotatoMovies()
        .then(this.couchPotatoImages)
        .then(this.couchPotatoComponents)
        .catch((error) => {
          if (error) console.error(error); // eslint-disable-line no-console
          localStorage.setItem('couchPotatoError', true);
        });
    },

    couchpotatoMovies () {
      const baseUri = new URI(this.couchPotatoService.url).segment(`/api/${this.couchPotatoService.key}/movie.list`);
      const dataUrl = [
        baseUri.search('release_status=snatched,downloaded,available').toString(),
        baseUri.search('status=active&limit_offset=25').toString()
      ];
      const promises = dataUrl.map(dataUrl => ajax('GET', dataUrl));
      return Promise.all(promises);
    },

    couchPotatoImages ([snatched, wanted]) {
      const snatchedPromises = Promise.all(snatched.movies.map(this.couchPotatoPoster));
      const wantedPromises = Promise.all(wanted.movies.map(this.couchPotatoPoster));
      return Promise.all([snatchedPromises, wantedPromises]).then(([snatchedMovies, wantedMovies]) => {
        return { snatchedMovies, wantedMovies };
      });
    },

    couchPotatoPoster (movie) {
      const movieClone = Object.assign({}, movie);
      return imageResize(movieClone.info.images.poster[0]).then((posterString) => {
        movieClone.customPoster = posterString;
        return movieClone;
      });
    },

    couchPotatoComponents (data) {
      let components = [];

      components.push({
        name: 'v-panel-subheader',
        props: {
          text: 'Snatched'
        }
      });

      if (data.snatchedMovies.length) {
        data.snatchedMovies.forEach((movie) => {
          components.push(this.couchPotatoMovieItem(movie));
        });
      } else {
        components.push({
          name: 'v-panel-item',
          props: {
            title: 'There are no snatched movies at the moment.'
          }
        });
      }

      components.push({
        name: 'v-panel-subheader',
        props: {
          text: 'Wanted'
        }
      });

      if (data.wantedMovies.length) {
        data.wantedMovies.forEach((movie) => {
          components.push(this.couchPotatoMovieItem(movie));
        });
      } else {
        components.push({
          name: 'v-panel-item',
          props: {
            title: 'There are no wanted movies at the moment.'
          }
        });
      }

      localStorage.setItem('couchPotatoComponents', JSON.stringify(components));
    },

    couchPotatoMovieItem (movie) {
      var movieDate = new Date(movie.info.released);
      var date;

      if (moment(movieDate).year() != moment().year()) {
        date = moment(movieDate).format('MMM D, YYYY');
      } else {
        date = moment(movieDate).format('MMM D');
      }

      return {
        name: 'v-panel-item',
        props: {
          image: movie.customPoster,
          title: movie.title,
          collapseText: date,
          components: [
            {
              name: 'v-panel-item-button',
              props: {
                url: `http://www.imdb.com/title/${movie.identifiers.imdb}`,
                iconClass: 'info-icon'
              }
            }
          ]
        }
      };
    }
  }
};
