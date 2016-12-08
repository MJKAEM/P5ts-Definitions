declare namespace p5 {
	/**
	 * A class to describe a 4x4 matrix for model and view matrix manipulation
	 * in the p5js webgl renderer.
	 * 
	 * Also, it's highy unfinished. Use at your own peril!
	 */
	export class Matrix {
		public p5: p5;
		public mat3: Float32Array;
		public mat4: Float32Array;

		/**
		 * Creates an instance of Matrix.
		 */
		public constructor();

		/**
		 * Creates an instance of Matrix.
		 * 
		 * @param {Float32Array} mat4 array literal of our 4x4 matrix
		 */
		public constructor(mat4: Float32Array);

		/**
		 * Creates an instance of Matrix.
		 * 
		 * @param {p5} p5Inst instance of p5
		 * @param {Float32Array} mat4 array literal of our 4x4 matrix
		 */
		public constructor(p5Inst: p5, mat4: Float32Array);

		/**
		 * Creates an instance of Matrix.
		 * 
		 * @param {string} matrixType the dimensions of the matrix
		 * @param {Float32Array} mat4 array literal of our 3x3 or 4x4 matrix
		 */
		public constructor(matrixType: string, mat: Float32Array);

		/**
		 * Creates an instance of Matrix.
		 * 
		 * @param {p5} p5Inst instance of p5
		 * @param {string} matrixType the dimensions of the matrix
		 * @param {Float32Array} mat4 array literal of our 3x3 or 4x4 matrix
		 */
		public constructor(p5Inst: p5, matrixType: string, mat: Float32Array);

		/**
		 * Sets the x, y, and z component of the vector using two or three
		 * separate variables, the data from a p5.Matrix, or the values from a
		 * float array.
		 * 
		 * @param {(p5.Matrix | Float32Array)} inMatrix the input p5.Matrix or
		 * 		an Array of length 16
		 */
		public set(inMatrix: p5.Matrix | Float32Array): p5.Matrix;

		/**
		 * Gets a copy of the vector, returns a p5.Matrix object.
		 */
		public get(): p5.Matrix;

		/**
		 * Return a copy of a matrix.
		 */
		public copy(): p5.Matrix;

		/**
		 * Transpose according to a given matrix.
		 * 
		 * @param {(p5.Matrix | Float32Array)} a the matrix to be based on to
		 * 		transpose
		 */
		public transpose(a: p5.Matrix | Float32Array): p5.Matrix;

		/**
		 * Invert matrix according to a given matrix.
		 * 
		 * @param {(p5.Matrix | Float32Array)} a the matrix to be based on to
		 * 		invert
		 */
		public invert(a: p5.Matrix | Float32Array): p5.Matrix;

		/**
		 * Inverts a 3x3 matrix.
		 */
		public invert3x3(): p5.Matrix;

		/**
		 * Transposes a 3x3 p5.Matrix by a mat3
		 * 
		 * @param {Float32Array} mat3 mat3 1-dimensional array
		 */
		public transpose3x3(mat3: Float32Array): p5.Matrix;

		/**
		 * Converts a 4x4 matrix to its 3x3 inverse tranform. Commonly used in
		 * MVMatrix to NMatrix conversions.
		 * 
		 * @param {p5.Matrix} mat4 the matrix to be based on to invert
		 */
		public inverseTranspose(mat4: p5.Matrix): p5.Matrix;

		/**
		 * Returns the determinant of our 4x4 matrix
		 */
		public determinant(): number;

		/**
		 * Multiply two mat4.
		 * 
		 * @param {(p5.Matrix | Float32Array)} multMatrix The matrix we want to
		 * 		multiply by
		 */
		public mult(multMatrix: p5.Matrix | Float32Array): p5.Matrix;

		/**
		 * Scales a p5.Matrix by scalars or a vector.
		 * 
		 * @param {(number[] | p5.Vector)} s vector to scale by
		 */
		public scale(s: number[] | p5.Vector): p5.Matrix;

		/**
		 * Rotate our Matrix around an axis by the given angle.
		 * 
		 * @param {number} a The angle of rotation in radians
		 * @param {(number[] | p5.Vector)} axis the axis(es) to rotate around
		 */
		public rotate(a: number, axis: number[] | p5.Vector): p5.Matrix;

		/**
		 * Unfinished.
		 * 
		 * @param {number[]} v vector to translate by
		 * 
		 * @memberOf Matrix
		 */
		public translate(v: number[]): void;

		/**
		 * Rotate our Matrix around the x-axis by the given angle.
		 * 
		 * @param {number} a The angle of rotation in radians
		 */
		public rotateX(a: number): void;

		/**
		 * Rotate our Matrix around the y-axis by the given angle.
		 * 
		 * @param {number} a The angle of rotation in radians
		 */
		public rotateY(a: number): void;

		/**
		 * Rotate our Matrix around the z-axis by the given angle.
		 * 
		 * @param {number} a The angle of rotation in radians
		 */
		public rotateZ(a: number): void;

		/**
		 * Sets the perspective matrix.
		 * 
		 * @param {number} fovy
		 * @param {number} aspect
		 * @param {number} near near clipping plane
		 * @param {number} far far clipping plane
		 */
		public perspective(fovy: number, aspect: number, near: number,
			far: number): p5.Matrix;

		/**
		 * Sets the ortho matrix.
		 * 
		 * @param {number} left
		 * @param {number} right
		 * @param {number} bottom
		 * @param {number} top
		 * @param {number} near near clipping plane
		 * @param {number} far far clipping plane
		 */
		public ortho(left: number, right: number, bottom: number, top: number,
			near: number, far: number): p5.Matrix;

		/**
		 * Return an identity matrix.
		 */
		public static identity(): p5.Matrix;
	}
}