declare namespace p5 {
	/**
	 * Base class for all elements added to a sketch, including canvas,
	 * graphics buffers, and other HTML elements. Methods in blue are included
	 * in the core functionality, methods in brown are added with the p5.dom
	 * library. It is not called directly, but p5.Element objects are created
	 * by calling createCanvas, createGraphics, or in the p5.dom library,
	 * createDiv, createImg, createInput, etc.
	 */
	class Element {

		/**
		 * Underlying HTML element. All normal HTML methods can be called on
		 * this.
		 */
		public elt: HTMLElement;
		public width: number;
		public height: number;
		public _pInst: p5;
		public _events: any;

		/**
		 * Creates an instance of Element.
		 * 
		 * @param {HTMLElement} elt DOM node that is wrapped
		 * @param {p5} pInst Pointer to p5 instance
		 */
		public constructor(elt: HTMLElement, pInst: p5);

		/**
		 * Returns the parent node.
		 */
		public parent(): Node;

		/**
		 * Attaches the element to the parent specified. A way of setting the
		 * container for the element. Accepts either a string ID, DOM node, or
		 * p5.Element.
		 * 
		 * @param {(string | Node | this)} p the ID, DOM node, or
		 * 		p5.Element of desired parent element
		 */
		public parent(p: string  | Node | this): this;

		/**
		 * Returns the current ID of the element.
		 */
		public id(): string;

		/**
		 * Sets the ID of the element.
		 * 
		 * @param {string} id ID of the element
		 */
		public id(id: string): this;

		/**
		 * Returns a string containing the current class(es) of the element.
		 */
		public class(): string;

		/**
		 * Adds given class to the element.
		 * 
		 * @param {string} c class to add
		 */
		public class(c: string): this;

		/**
		 * The .mousePressed() function is called once after every time a mouse
		 * button is pressed over the element. This can be used to attach
		 * element specific event listeners.
		 * 
		 * @param {Function} fxn function to be fired when mouse is pressed
		 * 		over the element.
		 */
		public mousePressed(fxn: Function): this;

		/**
		 * The .mouseWheel() function is called once after every time a mouse
		 * wheel is scrolled over the element. This can be used to attach
		 * element specific event listeners.
		 * 
		 * The function accepts a callback function as argument which will be
		 * executed when the `wheel` event is triggered on the element, the
		 * callback function is passed one argument `event`. The `event.deltaY`
		 * property returns negative values if the mouse wheel is rotated up or
		 * away from the user and positive in the other direction. The
		 * `event.deltaX` does the same as `event.deltaY` except it reads the
		 * horizontal wheel scroll of the mouse wheel.
		 * 
		 * On OS X with "natural" scrolling enabled, the `event.deltaY` values
		 * are reversed.
		 * 
		 * @param {Function} fxn function to be fired when mouse wheel is
		 * 		scrolled over the element.
		 */
		public mouseWheel(fxn: Function): this;

		/**
		 * The .mouseReleased() function is called once after every time a
		 * mouse button is released over the element. This can be used to
		 * attach element specific event listeners.
		 * 
		 * @param {Function} fxn function to be fired when mouse is released
		 * 		over the element.
		 */
		public mouseReleased(fxn: Function): this;

		/**
		 * The .mouseClicked() function is called once after a mouse button is
		 * pressed and released over the element. This can be used to attach
		 * element specific event listeners.
		 * 
		 * @param {Function} fxn function to be fired when mouse is clicked
		 * 		over the element.
		 */
		public mouseClicked(fxn: Function): this;

		/**
		 * The .mouseMoved() function is called once every time a mouse moves
		 * over the element. This can be used to attach an element specific
		 * event listener.
		 * 
		 * @param {Function} fxn function to be fired when mouse is moved over
		 * 		the element.
		 */
		public mouseMoved(fxn: Function): this;

		/**
		 * The .mouseOver() function is called once after every time a mouse
		 * moves onto the element. This can be used to attach an element
		 * specific event listener.
		 * 
		 * @param {Function} fxn function to be fired when mouse is moved over
		 * 		the element.
		 */
		public mouseOver(fxn: Function): this;

		/**
		 * The .changed() function is called when the value of an element is
		 * changed. This can be used to attach an element specific event
		 * listener.
		 * 
		 * @param {Function} fxn function to be fired when the value of an
		 * 		element changes.
		 */
		public changed(fxn: Function): this;

		/**
		 * The .input() function is called when any user input is detected with
		 * an element. The input event is often used to detect keystrokes in a
		 * input element, or changes on a slider element. This can be used to
		 * attach an element specific event listener.
		 * 
		 * @param {Function} fxn function to be fired on user input.
		 */
		public input(fxn: Function): this;

		/**
		 * The .mouseOut() function is called once after every time a mouse
		 * moves off the element. This can be used to attach an element
		 * specific event listener.
		 * 
		 * @param {Function} fxn function to be fired when mouse is moved off
		 * 		the element.
		 */
		public mouseOut(fxn: Function): this;

		/**
		 * The .touchStarted() function is called once after every time a touch
		 * is registered. This can be used to attach element specific event
		 * listeners.
		 * 
		 * @param {Function} fxn function to be fired when touch is started
		 * 		over the element.
		 */
		public touchStarted(fxn: Function): this;

		/**
		 * The .touchMoved() function is called once after every time a touch
		 * move is registered. This can be used to attach element specific
		 * event listeners.
		 * 
		 * @param {Function} fxn function to be fired when touch is moved over
		 * 		the element.
		 */
		public touchMoved(fxn: Function): this;

		/**
		 * The .touchEnded() function is called once after every time a touch
		 * is registered. This can be used to attach element specific event
		 * listeners.
		 * 
		 * @param {Function} fxn  function to be fired when touch is ended over
		 * 		the element.
		 */
		public touchEnded(fxn: Function): this;

		/**
		 * The .dragOver() function is called once after every time a file is
		 * dragged over the element. This can be used to attach an element
		 * specific event listener.
		 * 
		 * @param {Function} fxn function to be fired when mouse is dragged
		 * 		over the element.
		 */
		public dragOver(fxn: Function): this;

		/**
		 * The .dragLeave() function is called once after every time a dragged
		 * file leaves the element area. This can be used to attach an element
		 * specific event listener.
		 * 
		 * @param {Function} fxn function to be fired when mouse is dragged
		 * 		over the element.
		 */
		public dragLeave(fxn: Function): this;

		/**
		 * The .drop() function is called for each file dropped on the element.
		 * It requires a callback that is passed a p5.File object.  You can
		 * optionally pass two callbacks, the first one (required) is triggered
		 * for each file dropped when the file is loaded.  The second
		 * (optional) is triggered just once when a file (or files) are
		 * dropped.
		 * 
		 * @param {Function} callback triggered when files are dropped.
		 * @param {Function} fxn function to receive loaded file.
		 */
		public drop(callback: Function, fxn: Function): this;

		public _setProperty(prop: string, value: any): void;

		private attachListener(ev: string, fxn: Function, ctx: this): void;
	}
}
