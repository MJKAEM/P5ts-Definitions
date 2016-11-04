declare namespace p5 {
	/**
	 * A class to describe a two or three dimensional vector, specifically a
	 * Euclidean (also known as geometric) vector. A vector is an entity that
	 * has both magnitude and direction. The datatype, however, stores the
	 * components of the vector (x, y for 2D, and x, y, z for 3D). The
	 * magnitude and direction can be accessed via the methods mag() and
	 * heading().
	 * 
	 * In many of the p5.js examples, you will see p5.Vector used to describe a
	 * position, velocity, or acceleration. For example, if you consider a
	 * rectangle moving across the screen, at any given instant it has a
	 * position (a vector that points from the origin to its location), a
	 * velocity (the rate at which the object's position changes per time unit,
	 * expressed as a vector), and acceleration (the rate at which the object's
	 * velocity changes per time unit, expressed as a vector).
	 * 
	 * Since vectors represent groupings of values, we cannot simply use
	 * traditional addition/multiplication/etc. Instead, we'll need to do some
	 * "vector" math, which is made easy by the methods inside the p5.Vector
	 * class.
	 */
	class Vector {

		public p5: p5;

		/**
		 * The x component of the vector
		 */
		public x: number;

		/**
		 * The y component of the vector
		 */
		public y: number;

		/**
		 * The z component of the vector
		 */
		public z: number;

		/**
		 * Creates an instance of Vector.
		 * 
		 * @param {number} x x component of the vector
		 * @param {number} y y component of the vector
		 * @param {number} z z component of the vector
		 */
		public constructor(x?: number, y?: number, z?: number);

		/**
		 * Creates an instance of Vector.
		 * 
		 * @param {p5} p p5 instance
		 * @param {number[]} vector an array of numbers representing the vector
		 */
		public constructor(p: p5, vector: number[]);

		/**
		 * Returns a string representation of a vector v by calling String(v)
		 * or v.toString(). This method is useful for logging vectors in the
		 * console.
		 */
		public toString(): string;

		/**
		 * Sets the x, y, and z component of the vector using two or three
		 * separate variables, the data from a p5.Vector, or the values from a
		 * float array.
		 * 
		 * @param {(number[] | p5.Vector)} vector a p5.Vector or an Array
		 */
		public set(vector: number[] | p5.Vector): p5.Vector;

		/**
		 * Sets the x, y, and z component of the vector using two or three
		 * separate variables, the data from a p5.Vector, or the values from a
		 * float array.
		 * 
		 * @param {number} x the x component of the vector
		 * @param {number} y the y component of the vector
		 * @param {number} z the z component of the vector
		 */
		public set(x?: number, y?: number, z?: number): p5.Vector;

		/**
		 * Gets a copy of the vector, returns a p5.Vector object.
		 */
		public copy(): p5.Vector;

		/**
		 * Adds x, y, and z components to a vector, adds one vector to another,
		 * or adds two independent vectors together. The version of the method
		 * that adds two vectors together is a static method and returns a
		 * p5.Vector, the others acts directly on the vector.
		 * 
		 * @param {(number[] | p5.Vector)} vector a p5.Vector or an Array
		 * @returns {p5.Vector}
		 */
		public add(vector?: number[] | p5.Vector): p5.Vector;

		/**
		 * Adds x, y, and z components to a vector, adds one vector to another,
		 * or adds two independent vectors together. The version of the method
		 * that adds two vectors together is a static method and returns a
		 * p5.Vector, the others acts directly on the vector.
		 * 
		 * @param {number} x the x component of the vector to be added
		 * @param {number} y the y component of the vector to be added
		 * @param {number} z the z component of the vector to be added
		 */
		public add(x?: number, y?: number, z?: number): p5.Vector;

		/**
		 * Subtracts x, y, and z components from a vector, subtracts one vector
		 * from another, or subtracts two independent vectors. The version of
		 * the method that subtracts two vectors is a static method and returns
		 * a p5.Vector, the other acts directly on the vector.
		 * 
		 * @param {(number[] | p5.Vector)} vector a p5.Vector or an Array
		 * @returns {p5.Vector}
		 */
		public sub(vector?: number[] | p5.Vector): p5.Vector;

		/**
		 * Subtracts x, y, and z components from a vector, subtracts one vector
		 * from another, or subtracts two independent vectors. The version of
		 * the method that subtracts two vectors is a static method and returns
		 * a p5.Vector, the other acts directly on the vector.
		 * 
		 * @param {number} x the x component of the vector to be added
		 * @param {number} y the y component of the vector to be added
		 * @param {number} z the z component of the vector to be added
		 */
		public sub(x?: number, y?: number, z?: number): p5.Vector;

		/**
		 * Multiply the vector by a scalar. The static version of this method
		 * creates a new p5.Vector while the non static version acts on the
		 * vector directly.
		 * 
		 * @param {number} n the number to multiply with the vector
		 */
		public mult(n?: number): p5.Vector;

		/**
		 * Divide the vector by a scalar. The static version of this method
		 * creates a new p5.Vector while the non static version acts on the
		 * vector directly.
		 * 
		 * @param {number} n the number to divide the vector by
		 */
		public div(n: number): p5.Vector;

		/**
		 * Calculates the magnitude (length) of the vector and returns the
		 * result as a float (this is simply the equation sqrt(xx + yy + z*z).)
		 */
		public mag(): number;

		/**
		 * Calculates the squared magnitude of the vector and returns the
		 * result as a float (this is simply the equation (xx + yy + z*z).)
		 * Faster if the real length is not required in the case of comparing
		 * vectors, etc.
		 */
		public magSq(): number;

		/**
		 * Calculates the dot product of two vectors. The version of the method
		 * that computes the dot product of two independent vectors is a static
		 * method. See the examples for more context.
		 * 
		 * @param {number} x x component of the vector
		 * @param {number} y y component of the vector
		 * @param {number} z z component of the vector
		 */
		public dot(x?: number, y?: number, z?: number): number;

		/**
		 * Calculates the dot product of two vectors. The version of the method
		 * that computes the dot product of two independent vectors is a static
		 * method. See the examples for more context.
		 * 
		 * @param {p5.Vector} vector a p5.Vector
		 */
		public dot(vector: p5.Vector): number;

		/**
		 * Calculates and returns a vector composed of the cross product
		 * between two vectors. Both the static and non static methods return a
		 * new p5.Vector.
		 * 
		 * @param {p5.Vector} v p5.Vector to be crossed
		 */
		public cross(v: p5.Vector): p5.Vector;

		/**
		 * Calculates the Euclidean distance between two points (considering a
		 * point as a vector object).
		 * 
		 * @param {p5.Vector} v the x, y, and z coordinates of a p5.Vector
		 */
		public dist(v: p5.Vector): number;

		/**
		 * Normalize the vector to length 1 (make it a unit vector).
		 */
		public normalize(): p5.Vector;

		/**
		 * Limit the magnitude of this vector to the value used for the max
		 * parameter.
		 * 
		 * @param {number} max the maximum magnitude for the vector
		 */
		public limit(max: number): p5.Vector;

		/**
		 * Set the magnitude of this vector to the value used for the len
		 * parameter.
		 * 
		 * @param {number} len the new length for this vector
		 */
		public setMag(len: number): p5.Vector;

		/**
		 * Calculate the angle of rotation for this vector (only 2D vectors)
		 */
		public heading(): number;

		/**
		 * Rotate the vector by an angle (only 2D vectors), magnitude remains
		 * the same
		 * 
		 * @param {number} angle the angle of rotation
		 */
		public rotate(angle: number): p5.Vector;

		/**
		 * Linear interpolate the vector to another vector
		 * 
		 * @param {p5.Vector} vector the p5.Vector to lerp to
		 * @param {number} amt the amount of interpolation; some value between
		 * 		0.0 (old vector) and 1.0 (new vector). 0.1 is very near the new
		 * 		vector. 0.5 is halfway in between.
		 */
		public lerp(vector: p5.Vector, amt: number): p5.Vector;

		/**
		 * Linear interpolate the vector to another vector
		 * 
		 * @param {number} x the x component
		 * @param {number} y the y component
		 * @param {number} z the z component
		 * @param {number} amt the amount of interpolation; some value between
		 * 		0.0 (old vector) and 1.0 (new vector). 0.1 is very near the new
		 * 		vector. 0.5 is halfway in between.
		 */
		public lerp(x: number, y: number, z: number, amt: number): p5.Vector;

		/**
		 * Return a representation of this vector as a float array. This is
		 * only for temporary use. If used in any other fashion, the contents
		 * should be copied by using the p5.Vector.copy() method to copy into
		 * your own array.
		 */
		public array(): number[];

		/**
		 * Equality check against a p5.Vector
		 * 
		 * @param {(number[] | p5.Vector)} vector a p5.Vector or an Array
		 */
		public equals(vector: number[] | p5.Vector): boolean;

		/**
		 * Equality check against a p5.Vector
		 * 
		 * @param {number} x the x component of the vector
		 * @param {number} y the y component of the vector
		 * @param {number} z the z component of the vector
		 */
		public equals(x: number, y: number, z?: number): boolean;

		/**
		 * Adds two vectors together and returns a new one.
		 * 
		 * @param {p5.Vector} v1 a p5.Vector to add
		 * @param {p5.Vector} v2 a p5.Vector to add
		 * @param {p5.Vector} target the p5.Vector to put the results into
		 */
		public static add(v1: p5.Vector, v2: p5.Vector,
			target?: p5.Vector): p5.Vector;

		/**
		 * Subtracts one p5.Vector from another and returns a new one.  The
		 * second vector (v2) is subtracted from the first (v1), resulting in
		 * v1-v2.
		 * 
		 * @param {p5.Vector} v1 a p5.Vector to subtract from
		 * @param {p5.Vector} v2 a p5.Vector to subtract
		 * @param {p5.Vector} target the p5.Vector to put the results into
		 */
		public static sub(v1: p5.Vector, v2: p5.Vector,
			target?: p5.Vector): p5.Vector;

		/**
		 * Multiplies a vector by a scalar and returns a new vector.
		 * 
		 * @param {p5.Vector} v the p5.Vector to multiply
		 * @param {number} n the scalar
		 * @param {p5.Vector} target the p5.Vector to put the results into
		 */
		public static mult(v: p5.Vector, n: number,
			target?: p5.Vector): p5.Vector;

		/**
		 * Divides a vector by a scalar and returns a new vector.
		 * 
		 * @param {p5.Vector} v the p5.Vector to divide
		 * @param {number} n the scalar
		 * @param {p5.Vector} target the p5.Vector to put the results into
		 * 
		 * @memberOf Vector
		 */
		public static div(v: p5.Vector, n: number,
			target?: p5.Vector): p5.Vector;

		/**
		 * Calculates the dot product of two vectors.
		 * 
		 * @param {p5.Vector} v1 the first p5.Vector
		 * @param {p5.Vector} v2 the second p5.Vector
		 */
		public static dot(v1: p5.Vector, v2: p5.Vector): number;

		/**
		 * Calculates the cross product of two vectors.
		 * 
		 * @param {p5.Vector} v1 the first p5.Vector
		 * @param {p5.Vector} v2 the second p5.Vector
		 */
		public static cross(v1: p5.Vector, v2: p5.Vector): p5.Vector;

		/**
		 * Calculates the Euclidean distance between two points (considering a
		 * point as a vector object).
		 * 
		 * @param {p5.Vector} v1 the first p5.Vector
		 * @param {p5.Vector} v2 the second p5.Vector
		 */
		public static dist(v1: p5.Vector, v2: p5.Vector): number;

		/**
		 * Linear interpolate a vector to another vector and return the result
		 * as a new vector.
		 * 
		 * @param {p5.Vector} v1 a starting p5.Vector
		 * @param {p5.Vector} v2 the p5.Vector to lerp to
		 * @param {number} amt the amount of interpolation; some value between
		 * 		0.0 (old vector) and 1.0 (new vector). 0.1 is very near the new
		 * 		vector. 0.5 is halfway in between.
		 * @param {p5.Vector} target the p5.Vector to put the results into
		 */
		public static lerp(v1: p5.Vector, v2: p5.Vector, amt: number,
			target?: p5.Vector): p5.Vector;

		/**
		 * Calculates and returns the angle (in radians) between two vectors.
		 * 
		 * @param {p5.Vector} v1 the x, y, and z components of a p5.Vector
		 * @param {p5.Vector} v2 the x, y, and z components of a p5.Vector
		 */
		public static angleBetween(v1: p5.Vector, v2: p5.Vector): number;

		/**
		 * Calculates the magnitude (length) of the vector and returns the
		 * result as a float (this is simply the equation sqrt(xx + yy + z*z).)
		 * 
		 * @param {p5.Vector} vector the x, y, and z components of a p5.Vector
		 */
		public static mag(vector: p5.Vector): number;

		/**
		 * Make a new 2D unit vector from an angle
		 * 
		 * @param {number} angle the desired angle
		 */
		public static fromAngle(angle: number): p5.Vector;

		/**
		 * Make a new 2D unit vector from a random angle
		 */
		public static random2D(): p5.Vector;

		/**
		 * Make a new random 3D unit vector.
		 */
		public static random3D(): p5.Vector;
	}
}
