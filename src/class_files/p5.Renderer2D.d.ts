declare namespace p5 {
	/**
	 * The 2D graphics canvas renderer class.
	 */
	class Renderer2D extends Renderer {
		public drawingContext: CanvasRenderingContext2D;

		public constructor(elt: HTMLCanvasElement, pInst: p5, isMainCanvas?: boolean);
		public background(v1: p5.Image): void;
		public background(v1: string | number | number[] | p5.Color, a?: number): void;
		public background(v1: number, v2: number, v3: number, a?: number): void;
		public clear(): void;
		public fill(v1: string | number | number[] | p5.Color, a?: number): void;
		public fill(v1: number, v2: number, v3: number, a?: number): void;
		public stroke(v1: string | number | number[] | p5.Color, a?: number): void;
		public stroke(v1: number, v2: number, v3: number, a?: number): void;
		public image(img: p5.Image, sx: number, sy: number, sWidth: number,
			sHeight: number, dx: number, dy: number, dWidth: number,
			dHeight: number): void;
		public blendMode(mode: string): void;
		public blend(sx: number, sy: number, sw: number, sh: number,
			dx: number, dy: number, dw: number, dh: number,
			mode: string): void;
		public blend(srcImage: p5.Image, sx: number, sy: number, sw: number,
			sh: number, dx: number, dy: number, dw: number, dh: number,
			mode: string): void;
		public get(): p5.Image;
		public get(x: number, y: number): Uint8ClampedArray;
		public get(x: number, y: number, w: number, h: number): p5.Image;
		public loadPixels(): void;
		public set(x: number, y: number, imgOrCol: number | number[] | p5.Image | p5.Color): void;
		public updatePixels(): void;
		public updatePixels(x: number, y: number, w: number, h: number): void;
		public arc(x: number, y: number, w: number, h: number, start: number, stop: number, mode: string): this;
		public line(x1: number, y1: number, x2: number, y2: number): this;
		public point(x: number, y: number): void | this;
		public quad(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, x4: number, y4: number): this;
		public rect(args: number[]): this;
		public triangle(args: number[]): void | this;
		public endShape(mode: string, vertices: any[], isCurve: boolean, isBezier: boolean, isQuadratic: boolean, isContour: boolean, shapeKind: number): this;
		public noSmooth(): this;
		public smooth(): this;
		public strokeCap(cap: string): this;
		public strokeJoin(join: string): this;
		public strokeWeight(w: number): this;
		public bezier(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, x4: number, y4: number): this;
		public curve(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, x4: number, y4: number): this;
		public applyMatrix(n00: number, n01: number, n02: number, n10: number, n11: number, n12: number): void;
		public resetMatrix(): this;
		public rotate(r: number): void;
		public scale(x: number, y: number): this;
		public shearX(angle: number): this;
		public shearY(angle: number): this;
		public translate(x: number, y: number): this;
		public text(str: any, x: number, y: number): void | p5;
		public text(str: any, x: number, y: number, maxWidth: number, maxHeight: number): void | p5;
		public textWidth(s: number): number;
		public textAlign(): {
			horizontal: string,
			vertical: string
		};
		public textAlign(h: string,v?: string): p5;
		public push(): void;
		public pop(): void;

		public _getTintedImageCanvas(img: p5.Image): void;
		public _copyHelper(srcImage: p5.Image, sx: number, sy: number, sw: number, sh: number, dx: number, dy: number, dw: number, dh: number, mode: string): void;
		public _acuteArcToBezier(start: number, size: number): {
			ax: number, ay: number, bx: number, by: number,
			cx: number, cy: number, dx: number, dy: number
		};
		public _getFill(): string;
		public _getStroke(): string;
		public _doFillStrokeClose(): void;
		public _renderText(p: p5, line: string, x: number, y: number, maxY: number);
		public _applyTextProperties(): p5;
	}
}