import * as $ from 'jquery';
/* tslint:disable */

  var htmlPattern = /<[^>]*>/g;
  var loaded = false;

  var debounce = function(func, waitTime) {
    var timeout = false;
    return function() {
      if (timeout === false) {
        setTimeout(function() {
          func();
          timeout = false;
        }, waitTime);
        timeout = true;
      }
    };
  };

  var closeToc = function() {
    $(".toc-wrapper").removeClass('open');
  };

  export function loadToc($toc, tocLinkSelector, tocListSelector, scrollOffset) {
    console.log('loadToc');
    var headerHeights = {};
    var pageHeight = 0;
    var windowHeight = 0;
    var originalTitle = document.title;

    var recacheHeights = function() {
      headerHeights = {};
      pageHeight = $(document).height();
      windowHeight = $(window).height();
      $toc.find(tocLinkSelector).each(function() {
        var targetId = $(this).attr('data-href');
        console.log(47, targetId,  $(targetId).offset());
        if (targetId[0] === "#") {
          headerHeights[targetId] = $(targetId).offset().top;
        }
      });
    };

    var refreshToc = function() {
      console.log('refreshToc');
      var currentTop = $(document).scrollTop() + scrollOffset;

      if (currentTop + windowHeight >= pageHeight) {
        // at bottom of page, so just select last header by making currentTop very large
        // this fixes the problem where the last header won't ever show as active if its content
        // is shorter than the window height
        currentTop = pageHeight + 1000;
      }

      var best = null;
      for (var name in headerHeights) {
        if ((headerHeights[name] < currentTop && headerHeights[name] > headerHeights[best]) || best === null) {
          // console.log(67, name);
          best = name;
        }
      }
      console.log(70, headerHeights);

      // Catch the initial load case
      var $best = $toc.find("[data-href='" + best + "']").first();
      // console.log(78, $best);
      if (!$best.hasClass("active")) {
        // .active is applied to the ToC link we're currently on, and its parent <ul>s selected by tocListSelector
        // .active-expanded is applied to the ToC links that are parents of this one
        $toc.find(".active").removeClass("active");
        $toc.find(".active-parent").removeClass("active-parent");
        $best.addClass("active");
        $best.parents(tocListSelector).addClass("active").siblings(tocLinkSelector).addClass('active-parent');
        $best.siblings(tocListSelector).addClass("active");
        $toc.find(tocListSelector).filter(":not(.active)").slideUp(150);
        $toc.find(tocListSelector).filter(".active").slideDown(150);
        var thisTitle = $best.data("title")
        if (thisTitle !== undefined && thisTitle.length > 0) {
          document.title = thisTitle + " – " + originalTitle;
        } else {
          document.title = originalTitle;
        }
      }
    };

    var makeToc = function() {
      recacheHeights();
      refreshToc();
      $("#nav-button").click(function() {
        $(".toc-wrapper").toggleClass('open');
        $("#nav-button").toggleClass('open');
        return false;
      });
      $(".page-wrapper").click(closeToc);
      $(".toc-link").click(closeToc);
      $toc.find(tocLinkSelector).click(function(e) {
        setTimeout(function() {
          console.log(121, 'refreshtoc', e);
          handleClick(e);
        }, 0);
      });

      $(window).scroll(debounce(refreshToc, 200));
      $(window).resize(debounce(recacheHeights, 200));
    };

    var handleClick = function(e) {
      const $best = $(e.target);

      const best = $best.attr('data-href');

      if (!$best.hasClass("active")) {
        $toc.find(".active").removeClass("active");
        $toc.find(".active-parent").removeClass("active-parent");
        $best.addClass("active");

        $best.parents(tocListSelector).addClass("active").siblings(tocLinkSelector).addClass('active-parent');
        $best.siblings(tocListSelector).addClass("active");
        $toc.find(tocListSelector).filter(":not(.active)").slideUp(150);
        $toc.find(tocListSelector).filter(".active").slideDown(150);
        var dest = 0;
        for (var name in headerHeights) {
          if(name === best) {
            dest = headerHeights[name];
          }
        }
        $(window).scrollTop(dest);
      }
    };

    makeToc();
    (window as any).recacheHeights = recacheHeights;
    (window as any).refreshToc = refreshToc;
  }
