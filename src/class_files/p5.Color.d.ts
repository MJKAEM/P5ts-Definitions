declare namespace p5 {
	/**
	 * We define colors to be immutable objects. Each color stores the color mode
	 * and level maxes that applied at the time of its construction. These are
	 * used to interpret the input arguments and to format the output e.g. when
	 * saturation() is requested.
	 *
	 * Internally we store an array representing the ideal RGBA values in floating
	 * point form, normalized from 0 to 1. From this we calculate the closest
	 * screen color (RGBA levels from 0 to 255) and expose this to the renderer.
	 *
	 * We also cache normalized, floating point components of the color in various
	 * representations as they are calculated. This is done to prevent repeating a
	 * conversion that has already been performed.
	 */
	export class Color {
		public mode: string;
		public maxes: {
			hsb: number[],
			hsl: number[],
			rgb: number[]
		};
		public _array: number[];
		public levels: number[];

		/**
		 * Creates an instance of Color.
		 * 
		 * @param {p5.Renderer} renderer
		 * @param {vals} vals
		 */
		public constructor(renderer: p5.Renderer,
			vals?: string | number | number[] | p5.Color);

		public toString(): string;

		public _getAlpha(): number;
		public _getBlue(): number;
		public _getBrightness(): number;
		public _getGreen(): number;

		/**
		 * Hue is the same in HSB and HSL, but the maximum value may be
		 * different. This function will return the HSB-normalized saturation
		 * when supplied with an HSB color object, but will default to the
		 * HSL-normalized saturation otherwise.
		 */
		public _getHue(): number;
		public _getGreen(): number;
		public _getLightness(): number;
		public _getRed(): number;
		public _getSaturation(): number;

		/**
		 * For a number of different inputs, returns a color formatted as
		 * [r, g, b, a] arrays, with each component normalized between 0 and 1.
		 * 
		 * @param {number} v1 red or hue value (depending on the current color
		 * 		mode)
		 * @param {number} v2 green or saturation value relative to the current
		 * 		color range
		 * @param {number} v3 blue or brightness value (depending on the
		 * 		current color mode)
		 * @param {number} a alpha value relative to current color range
		 */
		public static _parseInputs(v1: number, v2: number, v3: number,
			a?: number): number[];

		/**
		 * For a number of different inputs, returns a color formatted as
		 * [r, g, b, a] arrays, with each component normalized between 0 and 1.
		 * 
		 * @param {string} v1 CSS color string
		 */
		public static _parseInputs(v1: string): number[];

		/**
		 * For a number of different inputs, returns a color formatted as
		 * [r, g, b, a] arrays, with each component normalized between 0 and 1.
		 * 
		 * @param {number} v1 gray value, or color Array
		 * @param {number} a alpha value relative to current color range
		 */
		public static _parseInputs(v1: number | number[],
			a?: number): number[];
	}
}