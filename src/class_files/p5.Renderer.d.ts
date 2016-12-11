declare namespace p5 {
	/**
	 * Main graphics and rendering context, as well as the base API
	 * implementation for p5.js "core". To be used as the superclass for
	 * Renderer2D and Renderer3D classes, respecitvely.
	 */
	class Renderer extends p5.Element {

		public canvas: Node;
		public _isMainCanvas: boolean;
		public _styles: any[];
		public _textSize: number;
		public _textLeading: number;
		public _textFont: any;
		public _textStyle: string
		public _textAscent: number;
		public _textDescent: number;

		public _rectMode: string;
		public _ellipseMode: string;
		public _curveTightness: number;
		public _imageMode: string;

		public _tint: number[];
		public _doStroke: boolean;
		public _doFill: boolean;
		public _strokeSet: boolean;
		public _fillSet: boolean;
		public _colorMode: string;
		public _colorMaxes: {
			rgb: number[],
			hsb: number[],
			hsl: number[]
		};

		/**
		 * Creates an instance of Renderer.
		 * 
		 * @param {Node} elt DOM node that is wrapped
		 * @param {p5} pInst pointer to p5 instance
		 * @param {boolean} isMainCanvas we're using it as main canvas
		 */
		public constructor(elt: Node, pInst: p5, isMainCanvas?: boolean);

		/**
		 * Resize our canvas element.
		 * 
		 * @param {number} w width
		 * @param {number} h height
		 */
		public resize(w: number, h: number): void;
		public textLeading(): number;
		public textLeading(l: number): this;
		public textSize(): number;
		public textSize(s: number): this;
		public textStyle(): string;
		public textStyle(s: string): this;
		public textAscent(): number;
		public textDescent(): number;
		public _applyDefaults(): void | this;
		/**
		 * Helper fxn to check font type (system or otf)
		 */
		public _isOpenType(f?: any): boolean;

		public _updateTextMetrics(): p5.Renderer;
		private calculateOffset(object: any): number[];
	}
}