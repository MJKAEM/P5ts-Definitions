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
		public elt: Node;
		public width: number;
		public height: number;
		public _pInst : p5;
		public _events: any;

		/**
		 * Creates an instance of Element.
		 * 
		 * @param {Node} elt DOM node that is wrapped
		 * @param {p5} pInst Pointer to p5 instance
		 */
		public constructor(elt: Node, pInst?: p5);

		public parent(): Node;
	}
}