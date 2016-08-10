
export default function (parent, children) {
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
