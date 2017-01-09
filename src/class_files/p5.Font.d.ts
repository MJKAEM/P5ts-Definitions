declare namespace p5 {
	/**
	 * Base class for font handling
	 */
	export class Font {
		public parent: p5;
		public cache: any;

		/**
		 * Underlying opentype font implementation
		 */
		public font: any;

		/**
		 * Creates an instance of p5.Font.
		 * 
		 * @param {p5} p pointer to p5 instance
		 */
		public constructor(p: p5);

		/**
		 * Not implemented.
		 */
		public list(): never;

		/**
		 * Returns a tight bounding box for the given text string using this
		 * font (currently only supports single lines)
		 * 
		 * @param {string} line a line of text
		 * @param {number} x x-position
		 * @param {number} y y-position
		 * @param {number} fontSize font size to use (optional)
		 * @param {*} options opentype options (optional)
		 */
		public textBounds(line: string, x: number, y: number,
			fontSize?: number, options?: any): {
				x: number,
				y: number,
				h: number,
				w: number,
				advance: number
			}

		/**
		 * Computes an array of points following the path for specified text
		 * 
		 * @param {string} line a line of text
		 * @param {number} x x-position
		 * @param {number} y y-position
		 * @param {number} fontSize font size to use (optional)
		 * @param {*} options opentype options (optional)
		 */
		public textToPoints(line: string, x: number, y: number,
			fontSize?: number, options?: any): any[];

		/**
		 * Returns the set of opentype glyphs for the supplied string.
		 * 
		 * Note that there is not a strict one-to-one mapping between
		 * characters and glyphs, so the list of returned glyphs can be larger
		 * or smaller than the length of the given string.
		 * 
		 * @param {string} str the string to be converted
		 */
		public _getGlypths(str: string): any[];

		/**
		 * Returns an opentype path for the supplied string and position.
		 * 
		 * @param {string} line a line of text
		 * @param {number} x x-position
		 * @param {number} y y-position
		 * @param {*} options opentype options (optional)
		 */
		public _getPath(line: string, x: number, y: number,
			options?: any): any;

		/**
		 * Creates an SVG-formatted path-data string
		 * (See http://www.w3.org/TR/SVG/paths.html#PathData)
		 * from the given opentype path or string/position
		 * 
		 * @param {string} line a line of text
		 * @param {number} x x-position
		 * @param {number} y y-position
		 * @param {*} options opentype options (optional), set options.decimals
		 * 		to set the decimal precision of the path-data
		 */
		public _getPathData(line: string, x: number, y: number,
			options?: any): string;

		/**
		 * Creates an SVG <path> element, as a string, from the given opentype
		 * path or string/position
		 * 
		 * @param {string} line a line of text
		 * @param {number} x x-position
		 * @param {number} y y-position
		 * @param {*} options opentype options (optional), set options.decimals
		 * 		to set the decimal precision of the path-data in the <path>
		 * 		element, options.fill to set the fill color for the <path>
		 * 		element, options.stroke to set the stroke color for the <path>
		 * 		element, options.strokeWidth to set the strokeWidth for the
		 * 		<path> element.
		 */
		public _getSVG(line: string, x: number, y: number,
			options?: any): any;

		/**
		 * Renders an opentype path or string/position to the current graphics
		 * context
		 * 
		 * @param {string} line a line of text
		 * @param {number} x x-position
		 * @param {number} y y-position
		 * @param {*} options opentype options (optional)
		 */
		public _renderPath(line: string, x: number, y: number,
			options?: any): p5.Font;

		public _textWidth(str: string, fontSize: number): number;
		public _textAscent(fontSize: number): number;
		public _textDescent(fontSize: number): number;
		public _scale(fontSize: number): number;
		public _handleAlignment(p: p5, ctx: string, line: string, x: number,
			y: number, textWidth: number): {
			x: number,
			y: number
		};
	}
}