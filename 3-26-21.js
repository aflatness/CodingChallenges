const htmlElements = (str) => {
  const tags = {
    '/div': 'div',
    '/i': 'i',
    '/em': 'em',
    '/b': 'b',
    '/p':'p'
  }

  const stack = [];
  const strTags = str.split(/<|><|>/);

  for (let i = 1; i < strTags.length - 1; i++) {
    const tag = strTags[i];

    if (/^\w+$/.test(tag)) {
      stack.push(tag]);
    } else if (tags[tag] === stack[stack.length - 1]) {
      stack.pop();
    } else {
      return stack.pop();
    }
  }
  return true;
}

const tag = '<div><b><i></i></b></div>';
console.log(htmlElements(tag));