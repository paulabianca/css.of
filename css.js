function aux(obj = {}, tab = '\t', lvl = 0) {
  var css   = '';
  var nodes = Object.keys(obj);

  for ( let i = 0; i < nodes.length; i++ ) {
    var node   = nodes[i];
    var isLast = i === nodes.length - 1;

    css += (
      typeof obj[node] !== 'object' ?
        node.charAt(0) !== '@' ?
          tab.repeat(lvl) + node + ': ' + obj[node] + ';' + ( isLast ? '' : '\n' ) :
          node + ' ' + obj[node] + ';\n'
        :
        tab.repeat(lvl) + node + ' {\n' + aux(obj[node], tab, lvl + 1) + '\n' + tab.repeat(lvl) + '}' + ( isLast ? '' : '\n' )
    );

  }

  return css;
}

module.exports = {
  of: function(obj = {}, tab = '\t') {
    return aux(obj, tab, 0);
  }
};
