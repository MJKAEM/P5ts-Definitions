declare namespace p5 {
	/**
	 * A TableRow object represents a single row of data values, stored in
	 * columns, from a table.
	 * 
	 * A Table Row contains both an ordered array, and an unordered JSON
	 * object.
	 */
	export class TableRow {

		public arr: string[];
		public obj: any;
		public table: p5.Table;

		/**
		 * Creates an instance of TableRow.
		 * 
		 * @param {string} str optional: populate the row with a string of
		 * 		values, separated by the separator
		 * @param {string} separator comma separated values (csv) by default
		 */
		public constructor(str?: string, separator?: string);

		/**
		 * Stores a value in the TableRow's specified column. The column may be
		 * specified by either its ID or title.
		 * 
		 * @param {(string | number)} column Column ID (Number) or Title
		 * 		(String)
		 * @param {(string | number)} value The value to be stored
		 */
		public set(column: string | number, value: string | number): void;

		/**
		 * Stores a Float value in the TableRow's specified column. The column
		 * may be specified by either its ID or title.
		 * 
		 * @param {(string | number)} column Column ID (Number) or Title
		 * 		(String)
		 * @param {number} value The value to be stored as a Float
		 */
		public setNum(column: string | number, value: number): void;

		/**
		 * Stores a String value in the TableRow's specified column. The column
		 * may be specified by either its ID or title.
		 * 
		 * @param {(string | number)} column Column ID (Number) or Title
		 * 		(String)
		 * @param {string} value The value to be stored as a String
		 */
		public setString(column: string | number, value: string): void;

		/**
		 * Retrieves a value from the TableRow's specified column. The column
		 * may be specified by either its ID or title.
		 * 
		 * @param {(string | number)} column columnName (string) or ID (number)
		 */
		public get(column: string | number): string | number;

		/**
		 * Retrieves a Float value from the TableRow's specified column. The
		 * column may be specified by either its ID or title.
		 * 
		 * @param {(string | number)} column columnName (string) or ID (number)
		 */
		public getNum(column: string | number): number;

		/**
		 * Retrieves an String value from the TableRow's specified column. The
		 * column may be specified by either its ID or title.
		 * 
		 * @param {(string | number)} column columnName (string) or ID (number)
		 */
		public getString(column: string | number): string;
	}
}
