function sbShowData(){$("#sickbeard .sb-missed").empty(),$("#sickbeard .sb-today").empty(),$("#sickbeard .sb-soon").empty(),$("#sickbeard .sb-later").empty();var a=(serviceData.SB.apiUrl,serviceData.SB.error);"true"==a&&$("#sickbeard .error").slideDown("slow"),"false"==a&&$("#sickbeard .error").slideUp("slow"),serviceData.SB.MissedHTML&&$(".sb-missed").html(serviceData.SB.MissedHTML),serviceData.SB.TodayHTML&&$(".sb-today").html(serviceData.SB.TodayHTML),serviceData.SB.SoonHTML&&$(".sb-soon").html(serviceData.SB.SoonHTML),serviceData.SB.LaterHTML&&$(".sb-later").html(serviceData.SB.LaterHTML),$(".sb-poster").lazyload({threshold:200,effect:"fadeIn",container:$("#sickbeard .panel-content")})}function searchEpisode(a){a.fadeOut(400,function(){a.removeClass("search-icon"),a.removeClass("error-icon"),a.html(serviceData.spinner),a.fadeIn(400)});var b=serviceData.SB.apiUrl,c=b+"/?cmd=episode.search&tvdbid="+a.data("tvdbid")+"&season="+a.data("season")+"&episode="+a.data("episode");$.ajax({url:c}).done(function(b){a.fadeOut(400,function(){"failure"==b.result?(a.addClass("error-icon"),a.attr("title",b.message)):a.addClass("done-icon"),a.html(""),a.fadeIn(400)})}).fail(function(){a.fadeOut(400,function(){a.addClass("error-icon"),a.attr("title","There was an error"),a.fadeIn(400)})})}function markEpisode(a){a.fadeOut(400,function(){a.removeClass("search-icon"),a.removeClass("error-icon"),a.html(serviceData.spinner),a.fadeIn(400)});var b=serviceData.SB.apiUrl,c=b+"/?cmd=episode.setstatus&tvdbid="+a.data("tvdbid")+"&season="+a.data("season")+"&episode="+a.data("episode")+"&status=skipped";$.ajax({url:c}).done(function(b){a.fadeOut(400,function(){"failure"==b.result?(a.attr("class","icon-button error-icon sb-mark-episode waves-effect"),a.attr("title",b.message)):a.attr("class","icon-button done-all-icon sb-mark-episode waves-effect"),a.html(""),a.fadeIn(400)})}).fail(function(){a.fadeOut(400,function(){a.addClass("error-icon"),a.attr("title","There was an error"),a.fadeIn(400)})})}$.when(serviceDataRefreshDone).done(function(){serviceData.SB.status&&($("#sickbeard .refresh-sb").click(function(){$("#sickbeard .error:visible").slideUp(400),$(".refresh-sb").fadeOut(400,function(){$(this).html(serviceData.spinner),$(this).fadeIn(400,function(){chrome.runtime.getBackgroundPage(function(a){a.getSickBeardData(function(){$(".refresh-sb").fadeOut(400,function(){$(this).html('<img src="img/icons/refresh.svg" alt="Refresh Sickbeard" draggable=false>'),$(this).fadeIn(400)})})})})})}),$("#sickbeard .panel-header .panel-header-foreground .bottom a").attr("href",serviceData.SB.url))}),$("html").on("click",".sb-search-episode",function(){searchEpisode($(this))}),$("html").on("click",".sb-mark-episode",function(){markEpisode($(this))});