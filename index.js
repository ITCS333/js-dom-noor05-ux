/**
 * Selects the element with the id 'main-heading' and changes its text content to 'DOM Manipulation Challenge'.
 */
function changeHeadingText() {
  // TODO: Implement this function
  let newtext = document.getElementById('main-heading');
  newtext.textContent ='DOM Manipulation Challenge';
}

/**
 * Selects the element with the id 'box-to-modify' and changes its background color to 'lightblue'.
 */
function changeBoxColor() {
  // TODO: Implement this function
  let boxColor =document.getElementById('box-to-modify');
  boxColor.style.backgroundColor = 'lightblue';
}

/**
 * Creates a new <li> element, sets its text content to 'New Item', and appends it to the <ul> with the id 'item-list'.
 */
function addNewItem() {
  // TODO: Implement this function
  let newitem = document.createElement('li');
  newitem.textContent='New Item';

  let list = document.getElementById('item-list');
  list.appendChild(newitem);
}

/**
 * Selects the paragraph with the class 'content-para' and adds the class 'highlight' to it.
 */
function highlightParagraph() {
  // TODO: Implement this function
let newclass = document.querySelector('.content-para');
newclass.classList.add('highlight');
}

/**
 * Selects the element with the id 'to-be-removed' and removes it from the DOM.
 */
function removeElement() {
  // TODO: Implement this function 
 let item = document.querySelector('#to-be-removed');
 item.remove();
}


// Do not edit the lines below.
// These lines are for testing purposes.
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        changeHeadingText,
        changeBoxColor,
        addNewItem,
        highlightParagraph,
        removeElement
    };
}

