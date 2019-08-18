import ajax from 'modules/ajax';

export default {
  computed: {
    githubService () {
      return this.services.find(s => s.id === 8);
    }
  },

  methods: {
    github () {
      localStorage.setItem('githubError', false);
      return this.githubRequest()
        .then(this.githubBuildJson)
        .then(this.githubComponents)
        .catch((error) => {
          if (error) console.error(error); // eslint-disable-line no-console
          localStorage.setItem('githubError', true);
        });
    },

    githubRequest () {
      var url = `https://github.com/trending?since=${this.githubService.time}`;
      return ajax('GET', url);
    },

    githubBuildJson (html) {
      return new Promise((resolve) => {
        const repos = [];
        const parsedDom = document.createElement('html');
        parsedDom.innerHTML = html;

        const repoListItems = parsedDom.querySelectorAll('.Box article');
        repoListItems.forEach((repoListItem) => {
          const languageElement = repoListItem.querySelector('[itemprop="programmingLanguage"]');
          const language = languageElement ? languageElement.innerText.trim() : null;
          const starGazersLink = repoListItem.querySelector('[href$="/stargazers"]');
          const stars = starGazersLink ? starGazersLink.innerText.trim() : 0;
          const urlPath = repoListItem.querySelector('a').getAttribute('href');
          const title = urlPath.split('/')[urlPath.split('/').length - 1];
          const owner = urlPath.split('/')[1];
          const descriptionElement = repoListItem.querySelector('p.text-gray');
          const description = descriptionElement ? descriptionElement.innerText.trim() : null;
          const url = 'https://github.com' + urlPath;

          repos.push({
            language,
            stars,
            title,
            owner,
            description,
            url
          });
        });

        resolve(repos);
      });
    },

    githubComponents (json) {
      let components = [];

      json.forEach((repo) => {
        let extraTitle = '';
        if (repo.language) {
          extraTitle += `${repo.language} - `;
        }
        extraTitle += `${repo.stars} Stars`;

        components.push({
          name: 'v-panel-item',
          props: {
            url: repo.url,
            title: `${repo.owner}/${repo.title}`,
            extraTitle,
            subtitle: repo.description
          }
        });
      });

      if (components.length === 0) {
        components.push({
          name: 'v-panel-item',
          props: {
            title: 'There are no repositories to show at the moment.'
          }
        });
      }

      localStorage.setItem('githubComponents', JSON.stringify(components));
    }
  }
};
