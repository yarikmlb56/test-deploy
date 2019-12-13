import * as $ from 'jquery';
/* tslint:disable */

let languages = [];

(window as any).setupLanguages = setupLanguages;
(window as any).activateLanguage = activateLanguage;
(window as any).getLanguageFromQueryString = getLanguageFromQueryString;

function activateLanguage(language) {
  if (!language) {
    return;
  }
  if (language === '') {
    return;
  }

  $('.lang-selector a').removeClass('active');
  $('.lang-selector a[data-language-name=\'' + language + '\']').addClass('active');
  for (let i = 0; i < languages.length; i++) {
    $('.highlight.tab-' + languages[i]).hide();
    $('.lang-specific.' + languages[i]).hide();
  }
  $('.highlight.tab-' + language).show();
  $('.lang-specific.' + language).show();

  (window as any).recacheHeights();

  // scroll to the new location of the position
  if ($(window.location.hash).get(0)) {
    $(window.location.hash).get(0).scrollIntoView(true);
  }
}

// parseURL and stringifyURL are from https://github.com/sindresorhus/query-string
// MIT licensed
// https://github.com/sindresorhus/query-string/blob/7bee64c16f2da1a326579e96977b9227bf6da9e6/license
function parseURL(str) {
  if (typeof str !== 'string') {
    return {};
  }

  str = str.trim().replace(/^(\?|#|&)/, '');

  if (!str) {
    return {};
  }

  return str.split('&').reduce(function(ret, param) {
    let parts = param.replace(/\+/g, ' ').split('=');
    let key = parts[0];
    let val = parts[1];

    key = decodeURIComponent(key);
    // missing `=` should be `null`:
    // http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
    val = val === undefined ? null : decodeURIComponent(val);

    if (!ret.hasOwnProperty(key)) {
      ret[key] = val;
    } else if (Array.isArray(ret[key])) {
      ret[key].push(val);
    } else {
      ret[key] = [ret[key], val];
    }

    return ret;
  }, {});
};

function stringifyURL(obj) {
  return obj ? Object.keys(obj).sort().map(function(key) {
    let val = obj[key];

    if (Array.isArray(val)) {
      return val.sort().map(function(val2) {
        return encodeURIComponent(key) + '=' + encodeURIComponent(val2);
      }).join('&');
    }

    return encodeURIComponent(key) + '=' + encodeURIComponent(val);
  }).join('&') : '';
};

// gets the language set in the query string
function getLanguageFromQueryString() {
  if (location.search.length >= 1) {
    let language = parseURL(location.search).language;
    if (language) {
      return language;
    } else if ($.inArray(location.search.substr(1), languages) != -1) {
      return location.search.substr(1);
    }
  }

  return false;
}

// returns a new query string with the new language in it
function generateNewQueryString(language) {
  let url = parseURL(location.search);
  if (url.language) {
    url.language = language;
    return stringifyURL(url);
  }
  return language;
}

// if a button is clicked, add the state to the history
function pushURL(language) {
  if (!history) {
    return;
  }
  let hash = window.location.hash;
  if (hash) {
    hash = hash.replace(/^#+/, '');
  }

  // TODO rewrote if needed URL changes for languages
  // history.pushState({}, '', '?' + generateNewQueryString(language));

  // save language as next default
  localStorage.setItem('language', language);
}

export function setupLanguages(l) {
  let defaultLanguage = localStorage.getItem('language');

  languages = l;
  let presetLanguage = getLanguageFromQueryString();
  if (presetLanguage) {
    // the language is in the URL, so use that language!
    activateLanguage(presetLanguage);

    localStorage.setItem('language', presetLanguage);
  } else if ((defaultLanguage !== null) && ($.inArray(defaultLanguage, languages) != -1)) {
    // the language was the last selected one saved in localstorage, so use that language!
    activateLanguage(defaultLanguage);
  } else {
    // no language selected, so use the default
    console.log(151, languages);
    activateLanguage(languages[0]);
  }
}

// if we click on a language tab, activate that language
$(function() {
  $('.lang-selector a').on('click', function() {
    let language = $(this).data('language-name');
    pushURL(language);
    activateLanguage(language);
    return false;
  });
});