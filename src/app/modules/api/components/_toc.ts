import * as $ from 'jquery';
/* tslint:disable */
// export function initToc(): void {
//   console.log(4);

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
    // console.log('closeToc');
    $(".toc-wrapper").removeClass('open');
    // $("#nav-button").removeClass('open');
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
      // console.log(39, $toc.find(tocLinkSelector));
      $toc.find(tocLinkSelector).each(function() {
        // console.log(40, this);
        var targetId = $(this).attr('href');
        // console.log(42, targetId);
        // console.log(43,  $(targetId));
        // console.log(44,  $(targetId).offset());
        if (targetId[0] === "#") {
          headerHeights[targetId] = $(targetId).offset().top;
        }
      });
    };

    var refreshToc = function() {
      // console.log('refreshToc');
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
          best = name;
        }
      }

      // Catch the initial load case
      if (currentTop == scrollOffset && !loaded) {
        best = window.location.hash;
        loaded = true;
      }

      var $best = $toc.find("[href='" + best + "']").first();
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
        if (window.history.replaceState) {
          window.history.replaceState(null, "", best);
        }
        var thisTitle = $best.data("title")
        if (thisTitle !== undefined && thisTitle.length > 0) {
          document.title = thisTitle + " – " + originalTitle;
        } else {
          document.title = originalTitle;
        }
      }
    };

    var makeToc = function() {
      // console.log('makeToc');
      recacheHeights();
      refreshToc();
      // console.log(99, $("#nav-button"));
      // $("#nav-button").click(function() {
      //   $(".toc-wrapper").toggleClass('open');
      //   $("#nav-button").toggleClass('open');
      //   return false;
      // });
      $(".page-wrapper").click(closeToc);
      // console.log(107, $(".toc-link"));
      $(".toc-link").click(closeToc);

      // reload immediately after scrolling on toc click
      // console.log(110, $toc);
      // console.log(111, tocLinkSelector);
      $toc.find(tocLinkSelector).click(function(e) {
        // console.log(113, 'click');
        // e.preventDefault();
        setTimeout(function() {
          refreshToc();
        }, 0);
      });

      $(window).scroll(debounce(refreshToc, 200));
      $(window).resize(debounce(recacheHeights, 200));
    };

    makeToc();
    //
    (window as any).recacheHeights = recacheHeights;
    (window as any).refreshToc = refreshToc;
  }

  // (window as any).loadToc = loadToc;
// };
