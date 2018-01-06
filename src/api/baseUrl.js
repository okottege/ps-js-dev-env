export default function getBaseUrl(){
    return getQueryStringParameterByName('useMockApi') ? 'http://localhost:3001/' : '/';
}

function getQueryStringParameterByName(name, url) {
  if(!url) url = window.location.href;

  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
  var results = regex.exec(url);

  if(!results) return null;
  if(!results[1]) return '';

  return decodeURIComponent(results[1].replace(/\+/g, ' '));
}
