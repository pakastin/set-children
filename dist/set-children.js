(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.setChildren = factory());
}(this, function () { 'use strict';

  function index (parent, children) {
    var traverse = parent.firstChild;

    for (var i = 0; i < children.length; i++) {
      var child = children[i];

      if (child === traverse) {
        // already in place
        traverse = traverse.nextSibling;
        continue;
      }

      if (traverse) {
        parent.insertBefore(child, traverse);
      } else {
        parent.appendChild(child);
      }
    }

    // remove extra nodes
    while (traverse) {
      var next = traverse.nextSibling;

      parent.removeChild(traverse);

      traverse = next;
    }
  }

  return index;

}));