import * as $ from 'jquery';
/* tslint:disable */

  let debounce = function(func, waitTime) {
    let timeout = false;
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

  let closeToc = function() {
    $(".toc-wrapper").removeClass('open');
  };

  export function loadToc($toc, tocLinkSelector, tocListSelector, scrollOffset) {
    let headerHeights = {};
    let pageHeight = 0;
    let windowHeight = 0;
    let originalTitle = document.title;

    let recacheHeights = function() {
      headerHeights = {};
      pageHeight = $(document).height();
      windowHeight = $(window).height();
      $toc.find(tocLinkSelector).each(function() {
        console.log(32, $(this));
        let targetId = $(this).attr('data-href');
        if (targetId[0] === "#") {
          headerHeights[targetId] = $(targetId).offset().top;
        }
      });
    };

    let refreshToc = function() {
      let currentTop = $(document).scrollTop() + scrollOffset;

      if (currentTop + windowHeight >= pageHeight) {
        // at bottom of page, so just select last header by making currentTop very large
        // this fixes the problem where the last header won't ever show as active if its content
        // is shorter than the window height
        currentTop = pageHeight + 1000;
      }

      let best = null;
      for (let name in headerHeights) {
        if ((headerHeights[name] < currentTop && headerHeights[name] > headerHeights[best]) || best === null) {
          best = name;
        }
      }
      // Catch the initial load case
      let $best = $toc.find("[data-href='" + best + "']").first();
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
        let thisTitle = $best.data("title")
        if (thisTitle !== undefined && thisTitle.length > 0) {
          document.title = thisTitle + " – " + originalTitle;
        } else {
          document.title = originalTitle;
        }
      }
    };

    let makeToc = function() {
      recacheHeights();
      refreshToc();
      $("#nav-button").click(function() {
        $(".toc-wrapper").toggleClass('open');
        $("#nav-button").toggleClass('open');
        return false;
      });
      $(".page-wrapper").click(closeToc);
      $(".toc-link").click(closeToc);
      console.log(89, $toc);
      console.log(90, tocLinkSelector);
      $toc.find(tocLinkSelector + '.toc-h1').click(function(e) {
        setTimeout(function() {
          handleClickH1(e);
        }, 0);
      });
      $toc.find(tocLinkSelector + '.toc-h2').click(function(e) {
        setTimeout(function() {
          handleClickH2(e);
        }, 0);
      });

      $(window).scroll(debounce(refreshToc, 200));
      $(window).resize(debounce(recacheHeights, 200));
    };

    let handleClickH1 = function(e) {
      const $best = $(e.target);
      // console.log(98, $best);

      const best = $best.attr('data-href');
      if (!$best.hasClass("active")) {
        $toc.find(".active").removeClass("active");
        $toc.find(".active-parent").removeClass("active-parent");
        $best.addClass("active");
        $best.parents(tocListSelector).addClass("active").siblings(tocLinkSelector).addClass('active-parent');
        $best.siblings(tocListSelector).addClass("active");

        $toc.find(tocListSelector).filter(":not(.active)").slideUp(150);
        $toc.find(tocListSelector).filter(".active").slideDown(150);

        let dest = 0;
        for (let name in headerHeights) {
          if(name === best) {
            dest = headerHeights[name];
          }
        }
        $(window).scrollTop(dest);
      }
    };

    let handleClickH2 = function(e) {
      let $best = $(e.target);
      if (!$best.hasClass('toc-h2')) {
        $best = $(e.target).parent();
      }
      // console.log(98, $best);

      const best = $best.attr('data-href');
      if (!$best.hasClass("active")) {
        $toc.find(".active").removeClass("active");
        $toc.find(".active-parent").removeClass("active-parent");
        $best.addClass("active");
        $best.parents(tocListSelector).addClass("active").siblings(tocLinkSelector).addClass('active-parent');
        $best.siblings(tocListSelector).addClass("active");

        $toc.find(tocListSelector).filter(":not(.active)").slideUp(150);
        $toc.find(tocListSelector).filter(".active").slideDown(150);

        let dest = 0;
        for (let name in headerHeights) {
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
