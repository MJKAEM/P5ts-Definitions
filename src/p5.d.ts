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
	/**
	 * We define colors to be immutable objects. Each color stores the color
	 * mode and level maxes that applied at the time of its construction. These
	 * are used to interpret the input arguments and to format the output e.g.
	 * when saturation() is requested.
	 *
	 * Internally we store an array representing the ideal RGBA values in
	 * floating point form, normalized from 0 to 1. From this we calculate the
	 * closest screen color (RGBA levels from 0 to 255) and expose this to the
	 * renderer.
	 *
	 * We also cache normalized, floating point components of the color in
	 * various representations as they are calculated. This is done to prevent
	 * repeating a conversion that has already been performed.
	 */
	class Color {

		/**
		 * Creates an instance of Color.
		 * 
		 * @param {any} renderer
		 * @param {any[]} vals
		 */
		constructor(renderer, vals: any[]);

		/**
		 * 
		 */
		public toString(): string;

		/**
		 * 
		 */
		public _getAlpha(): number;

		/**
		 * 
		 */
		public _getBlue(): number;

		/**
		 * 
		 */
		public _getBrightness(): number;

		/**
		 * 
		 */
		public _getGreen(): number;

		/**
		 * Hue is the same in HSB and HSL, but the maximum value may be
		 * different. This function will return the HSB-normalized saturation
		 * when supplied with an HSB color object, but will default to the
		 * HSL-normalized saturation otherwise.
		 */
		public _getHue(): number;

		/**
		 * 
		 */
		public _getGreen(): number;

		/**
		 * 
		 */
		public _getLightness(): number;

		/**
		 * 
		 */
		public _getRed(): number;

		/**
		 * 
		 */
		public _getSaturation(): number;

		/**
		 * For a number of different inputs, returns a color formatted as
		 * [r, g, b, a] arrays, with each component normalized between 0 and 1.
		 * 
		 * @param {any} args
		 */
		public static _parseInputs(args): number[];
	}

	class Geometry {
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

	class Graphics {
	}

	/**
	 * A p5.Image is a canvas backed representation of an image.
	 * 
	 * p5 can display .gif, .jpg and .png images. Images may be displayed in 2D
	 * and 3D space. Before an image is used, it must be loaded with the
	 * loadImage() function. The p5.Image class contains fields for the width
	 * and height of the image, as well as an array called pixels[] that
	 * contains the values for every pixel in the image.
	 * 
	 * The methods described below allow easy access to the image's pixels and
	 * alpha channel and simplify the process of compositing.
	 * 
	 * Before using the pixels[] array, be sure to use the loadPixels() method
	 * on the image to make sure that the pixel data is properly loaded.
	 */
	class Image {
		/**
		 * Creates an instance of Image.
		 * 
		 * @param {number} width Image width
		 * @param {number} height Image height
		 * @param {p5} pInst An instance of a p5 sketch.
		 */
		public constructor(width:number,height:number,pInst:p5);
	}

	class PrintWriter {
		
	}

	class Table {
	}

	class TableRow {
	}

	class XML {
	}

	class Vector {
	}

	class Font {
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

