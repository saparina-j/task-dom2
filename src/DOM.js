function appendToBody(tag, content, count) {
  for (let i = 0; i < count; i++) {
    const el = document.createElement(tag);
    el.textContent = content;
    document.body.appendChild(el);
  }
}

function generateTree(childrenCount, level) {
  function build(currentLevel) {
    const node = document.createElement('div');
    node.className = `item_${currentLevel}`;

    if (currentLevel >= level) {
      return node;
    }

    for (let i = 0; i < childrenCount; i++) {
      node.appendChild(build(currentLevel + 1));
    }

    return node;
  }

  return build(1);
}

function replaceNodes() {
  const root = generateTree(2, 3);
  const nodesToReplace = root.querySelectorAll('.item_2');

  nodesToReplace.forEach((divNode) => {
    const section = document.createElement('section');
    section.className = divNode.className;

    while (divNode.firstChild) {
      section.appendChild(divNode.firstChild);
    }

    divNode.parentNode.replaceChild(section, divNode);
  });

  return root;
}