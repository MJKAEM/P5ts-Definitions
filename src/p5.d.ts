//
// Classes
//

declare class p5 {

	/**
	 * This is the p5 instance constructor.
	 *
	 * A p5 instance holds all the properties and methods related to
	 * a p5 sketch.  It expects an incoming sketch closure and it can also
	 * take an optional node parameter for attaching the generated p5 canvas
	 * to a node.  The sketch closure takes the newly created p5 instance as
	 * its sole argument and may optionally set preload(), setup(), and/or
	 * draw() properties on it for running a sketch.
	 *
	 * A p5 sketch can run in "global" or "instance" mode:
	 * "global"   - all properties and methods are attached to the window
	 * "instance" - all properties and methods are bound to this p5 object
	 *
	 * @param {Function} sketch A closure that can set optional preload(), setup(), and/or draw() properties on the given p5 instance
	 * @param {HTMLElement|boolean} node Element to attach canvas to, if a boolean is passed in use it as sync
	 * @param {boolean} sync Start synchronously (optional)
	 */
	constructor(sketch: p5, node?: (HTMLElement | boolean), sync?: boolean);
}

declare namespace p5 {
	class Color {
		constructor();
	}

	class Graphics {
	}

	class Image {
	}

	/**
	 * Base class for all elements added to a sketch, including canvas, graphics buffers, and
	 * other HTML elements. Methods in blue are included in the core functionality,
	 * methods in brown are added with the p5.dom library. It is not called directly, but
	 * p5.Element objects are created by calling createCanvas, createGraphics, or in the
	 * p5.dom library, createDiv, createImg, createInput, etc.
	 */
	class Element {
		

		/**
		 * Creates an instance of Element.
		 * 
		 * @param {string} elt DOM node that is wrapped
		 * @param {p5} pInst Pointer to p5 instance
		 */
		constructor(elt: string, pInst?: p5);
	}
}

