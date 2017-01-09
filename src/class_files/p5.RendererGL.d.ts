declare namespace p5 {
	export class RendererGL extends p5.Renderer {
		public drawingContext: WebGLRenderingContext;
		public isP3D: boolean;
		public GL: WebGLRenderingContext;

		public ambientLightCount: number;
		public directionalLightCount: number;
		public pointLightCount: number;

		public _curCamera: string;

		public uMVMatrix: p5.Matrix;
		public uPMatrix: p5.Matrix;
		public uNMatrix: p5.Matrix;

		public gHash = {};
		public mHash: WebGLProgram[];

		public isImmediateDrawing: boolean;
		public immediateMode = {};
		public curFillColor: number[];
		public curStrokeColor: number[];
		public pointSize: number;

		public drawMode: string;
		public curShaderId: string;

		/**
		 * Creates an instance of RendererGL.
		 * 
		 * @param {HTMLCanvasElement} elt DOM node that is wrapped
		 * @param {p5} pInst pointer to p5 instance
		 * @param {boolean} isMainCanvas we're using it as main canvas
		 */
		public constructor(elt: HTMLCanvasElement, pInst: p5, isMainCanvas?: boolean);

		public background(r: number, g: number, b: number, a: number): void;
		public fill(v1: number, v2: number, v3: number, a: number): this;
		public stroke(r: number, g: number, b: number, a: number): this;
		public strokeWeight(pointSize: number): this;
		public geometryInHash(gId: string): boolean;
		public materialInHash(mId: string): boolean;
		public resize(w: number, h: number): void;
		public clear(r: number, g: number, b: number, a: number): void;
		public translate(x: number, y: number, z: number): this;
		public scale(x: number, y: number, z: number): this;
		public rotate(rad: number, axis: number[] | p5.Vector): this;
		public rotateX(rad: number): this;
		public rotateY(rad: number): this;
		public rotateZ(rad: number): this;
		public push(): void;
		public pop(): void;
		public resetMatrix(): this;
		public beginShape(mode: number): this;
		public vertex(x: number, y: number, z: number): this;
		public endShape(mode: number, ...unusedArgs: boolean[]): this;
		public createBuffers(gId: string, obj: p5.Geometry): void;
		public drawBuffer(gId: string): this;

		public _initContext(): void;
		public _setDefaultCamera(): void;
		public _update(): void;
		public _initShaders(vertId: string, fragId: string, isImmediateMode?: boolean): WebGLProgram;
		public _getLocation(shaderProgram: WebGLProgram, isImmediateMode?: boolean): void;
		public _setUniform1f(shaderKey: string, uniform: string, data: number): this;
		public _setMatrixUniforms(shaderKey: string): void;
		public _getShader(vertId: string, fragId: string, isImmediateMode?: boolean): WebGLProgram;
		public _getCurShaderId(): string;
		public _strokeCheck(): void;
		public _applyTextProperties(): void;
		public _bindImmediateBuffers(vertices: number[], colors: number[]): this;
		public _getColorVertexShader(): WebGLProgram;
		public _initBufferDefault(gID: string): void;
	}
}