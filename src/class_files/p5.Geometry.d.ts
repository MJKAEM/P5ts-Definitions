declare namespace p5 {
	export class Geometry {
		public vertices: p5.Vector[];
		public vertexNormals: p5.Vector[];
		public faces: number[][];
		public uvs: number[][];
		public detailX: number;
		public detailY: number;

		/**
		 * Creates an instance of Geometry.
		 * 
		 * @param {number} detailX number of vertices on horizontal surface
		 * @param {number} detailY number of vertices on horizontal surface
		 * @param {Function} callback function to call upon object instantiation.
		 */
		public constructor(detailX?: number, detailY?: number, callback?: Function);

		public computeFaces(): p5.Geometry;

		/**
		 * Computes smooth normals per vertex as an average of each face.
		 */
		public computeNormals(): p5.Geometry;

		/**
		 * Averages the vertex normals. Used in curved surfaces
		 */
		public averageNormals(): p5.Geometry;

		/**
		 * Averages pole normals. Used in spherical primitives
		 */
		public averagePoleNormals(): p5.Geometry;

		/**
		 * Modifies all vertices to be centered within the range -100 to 100.
		 */
		public normalize():p5.Geometry;


		public _getFaceNormal(faceId, vertId: number): p5.Vector;
	}
}
