export default class Section {
  constructor({ items = [], renderer, containerSelector }) {
    this._items = items;
    this._renderer = renderer; // function that knows how to create & add a single item
    this._container = document.querySelector(containerSelector);
  }

  // Render all initial items by calling the renderer (once on page load)
  renderItems() {
    this._items.forEach((item) => {
      // renderer is responsible for creating the element and adding it
      // We keep renderer simple: it should call section.addItem internally or return an element.
      this._renderer(item);
    });
  }

  // Add a DOM element to the container. position = 'append' or 'prepend'
  addItem(element, { position = "append" } = {}) {
    if (position === "prepend") {
      this._container.prepend(element);
    } else {
      this._container.append(element);
    }
  }
}
