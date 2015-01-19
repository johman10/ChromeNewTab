// Docs:
// http://nas.pxdesign.nl:5050/docs

// "media.list" lists all movies, "movie.status" returns the status of the movie
$(document).ready(function() {
  chrome.storage.sync.get({
    CP_status: '',
    CP_address: '',
    CP_port: ''
  }, function(items) {
    if (items.CP_status === true) {
      cpShowData();

      $('.refresh_cp').click(function() {
        if ($('#couchpotato .error:visible')) {
          $('#couchpotato .error:visible').slideUp(400);
        }
        $('.refresh_cp').fadeOut(400, function() {
          $('.loading_cp').attr('active', true);
          chrome.runtime.getBackgroundPage(function(backgroundPage) {
            backgroundPage.getWantedCouchPotato();
            backgroundPage.getSnatchedCouchPotato(function() {
              $.when(cpShowData()).done(function() {
                $('.loading_cp').attr('active', false);
                setTimeout(function() {
                  $('.refresh_cp').fadeIn(400);
                }, 400);
              });
            });
          });
        });
      });

      $('#couchpotato core-toolbar a').attr('href', items.CP_address + ':' + items.CP_port);

      $('#couchpotato').show();
      $('body').width($('body').width() + $('#couchpotato').width());
    }
  });
});

$('html').on('click', '.cp_search_movie', function(event) {
  searchMovie($(this));
});

$('html').on('click', '.cp_item', function(event) {
  var collapseItem = $(this).next('.cp_collapse');
  var collapseIcon = $(this).find('.cp_collapse_icon');
  if (collapseItem.attr('opened') == 'false') {
    $('.cp_collapse').attr('opened', false);
    $('.cp_item').css('background-color', '#fafafa');
    $('.cp_collapse_icon_container').css('background-color', '#fafafa');
    $('.cp_collapse_icon[icon=expand-less]').fadeOut(165, function() {
      $(this).attr('icon', 'expand-more');
      $(this).fadeIn(165);
    });
    $(this).css('background-color', '#eee');
    collapseIcon.parent().css('background-color', '#eee');
    collapseItem.attr('opened', true);
    collapseIcon.fadeOut(165, function() {
      collapseIcon.attr('icon', 'expand-less');
      collapseIcon.fadeIn(165);
    });
  }
  else {
    $(this).css('background-color', '#fafafa');
    collapseIcon.parent().css('background-color', '#fafafa');
    collapseItem.attr('opened', false);
    collapseIcon.fadeOut(165, function() {
      collapseIcon.attr('icon', 'expand-more');
      collapseIcon.fadeIn(165);
    });
  }
});

function cpShowData() {
  chrome.storage.sync.get({
    CP_key: '',
    CP_status: '',
    CP_address: '',
    CP_port: ''
  }, function(items) {
    $('.wanted').empty();
    $('.snatched').empty();

    var wantedError = localStorage.getItem('CouchpotatoWanted_error');
    var snatchedError = localStorage.getItem('CouchpotatoSnatched_error');

    if (wantedError == "true" || snatchedError == "true") {
      $('#couchpotato .error').slideDown('slow');
    } else {
      $('#couchpotato .error').slideUp('slow');
    }

    if (localStorage.CouchpotatoWantedHTML && localStorage.CouchpotatoSnatchedHTML) {
      $('.snatched').append(localStorage.getItem('CouchpotatoSnatchedHTML'));
      $('.wanted').append(localStorage.getItem('CouchpotatoWantedHTML'));

      $('.cp_poster').unveil();

      if ($('.snatched core-item').length === 0) {
        $('.snatched').append("<core-item label='No snatched movies at this moment.'></core-item>");
      }
      if ($('.wanted core-item').length === 0) {
        $('.wanted').append("<core-item label='No wanted movies at this moment.'></core-item>");
      }
    }
  });
}

function searchMovie(clickedObject) {
  var movieId = clickedObject.attr('id');

  chrome.storage.sync.get({
    CP_key: '',
    CP_address: '',
    CP_port: ''
  }, function(items) {
    var url = items.CP_address + ":" + items.CP_port  + "/api/" + items.CP_key;
    var searchApiUrl = url + "/movie.refresh/?id=" + movieId;

    $.ajax({
      url: searchApiUrl,
      success: function(data) {
        if (data.success) {
          clickedObject.attr('icon', 'done');
        } else {
          clickedObject.attr('icon', 'error');
        }
      },
      error: function() {
        clickedObject.attr('icon', 'error');
      }
    });
  });
}