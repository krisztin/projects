const triggers = document.querySelectorAll('a');

// create highlight element (the little pill that will follow the mouse and resize)
const highlight = document.createElement('span');
highlight.classList.add('highlight');
document.body.append(highlight);

function highlightLink() {
  const linkCoords = this.getBoundingClientRect(); // gBC gets coordinate info of each element

  const coords = {
    width: linkCoords.width,
    height: linkCoords.height,
    // when scrolling down or sideways the highlight goes offset without this
    top: linkCoords.top + window.scrollY,
    left: linkCoords.left + window.scrollX,
  };

  highlight.style.width = `${coords.width}px`;
  highlight.style.height = `${coords.height}px`;

  highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
}

triggers.forEach(a => a.addEventListener('mouseenter', highlightLink));
