import * as $ from 'jquery';

export function handleSchemaClick(el, $toc, tocLinkSelector) {
  $(el).on('click', 'a', function(e) {
    let headerHeights = {};
    e.preventDefault();
    $toc.find(tocLinkSelector).each(function() {
      $toc.find(tocLinkSelector).each(function() {
        let targetId = $(this).attr('data-href');
        if (targetId[0] === '#') {
          headerHeights[targetId] = $(targetId).offset().top;
        }
      });
    });

    debugger;
  });
}
