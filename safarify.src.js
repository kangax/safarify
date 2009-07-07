(function(){
  
  var map = {
    '412':      '2.0',
    '413':      '~2.0', // unofficial
    '416.11':   '2.0.2',
    '419.3':    '2.0.4',
    
    '522.11':   '3.0',
    '522.12':   '3.0.2',
    '522.12.1': '3.0.3',
    '523.10':   '3.0.4',
    '523.12':   '~3.0.4', // unofficial
    '523.15':   '~3.0.4', // unofficial
    '525.13':   '3.1',
    '525.17':   '3.1.1',
    '525.18':   '~3.1.1', // unofficial
    '525.19':   '~3.1.1', // unofficial
    '525.20':   '3.1.1',
    
    '525.21':   '3.1.2',
    '525.22':   '~3.1.2', // unofficial
    '525.26':   '3.2',
    '525.27':   '3.2.1',
    '525.28':   '3.2.3',
    
    '526.11.2': '4.0 beta',
    '528.5':    '4.0 beta', // unofficial
    '528.7':    '4.0 beta', // unofficial
    '528.16':   '4.0 beta',
    '528.17':   '4.0 beta',
    
    '530.9':    '~4.0', // unofficial
    '530.15':   '~4.0', // unofficial
    '530.17':   '4.0',
    '530.18':   '4.0.1',
    '530.19':   '~4.0.1' // unofficial
  };
  
  function trim(str) {
    return str.replace(/^\s+/, '').replace(/\s+$/, '');
  }
  
  function insertAfter(origEl, newEl) {
    if (origEl.nextChild) {
      origEl.parentNode.insertBefore(newEl, origEl.nextChild);
    }
    else {
      origEl.parentNode.appendChild(newEl);
    }
  }
  
  function createVersionEl(buildNumber) {
    var el = document.createElement('span');
    el.innerHTML = '(' + buildNumber + ')';
    return el;
  }
  
  function tryNormalizeBuildNumber(buildNumber) {
    var reTripleNumber = /^(\d+)\.(\d+)\.(\d+)$/,
        match = buildNumber.match(reTripleNumber);
    if (match) {
      return match[1] + '.' + match[2];
    }
  }
  
  function isValid(buildNumber) {
    return !!(buildNumber && (buildNumber in map));
  }
  
  var links = document.getElementsByTagName('a'), 
      link, 
      i = 0;
  
  for (; link = links[i++]; ) {
    var buildNumber = trim(link.innerHTML);
    if (!isValid(buildNumber)) {
      buildNumber = tryNormalizeBuildNumber(buildNumber);
    }
    if (isValid(buildNumber)) {
      insertAfter(link, createVersionEl(map[buildNumber]));
    }
  }
})();