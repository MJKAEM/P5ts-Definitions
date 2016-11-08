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

	class Graphics {
	}

	class PrintWriter {
		
	}

	class Table {
	}

	class TableRow {
	}
	
	class Renderer {
	}

	class Renderer2D {
	}

	class RendererGL {
	}

	class MediaElement {
	}
}

