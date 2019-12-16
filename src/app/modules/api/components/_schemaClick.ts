import * as $ from 'jquery';

export function handleSchemaClick(el) {
  $(el).on('click', 'a', function(e) {
    e.preventDefault();
    $(window).scrollTop($(this.attributes.href.value).offset().top);
  });
}
