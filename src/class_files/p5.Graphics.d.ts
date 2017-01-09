declare namespace p5 {
	/**
	 * Thin wrapper around a renderer, to be used for creating a graphics
	 * buffer object. Use this class if you need to draw into an off-screen
	 * graphics buffer. The two parameters define the width and height in
	 * pixels. The fields and methods for this class are extensive, but mirror
	 * the normal drawing API for p5.
	 */
	export class Graphics extends p5.Element {
		public _styles: any[];
		public _pixelDensity: number;
		public _renderer: p5.Renderer;

		/**
		 * Creates an instance of Graphics.
		 * 
		 * @param {number} w
		 * @param {number} h
		 * @param {p5.Renderer} renderer
		 * @param {p5} pInst
		 */
		public constructor(w: number, h: number, renderer?: p5.Renderer,
			pInst?: p5);
	}
}