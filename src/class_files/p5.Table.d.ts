declare namespace p5 {
	/**
	 * Table objects store data with multiple rows and columns, much like in a
	 * traditional spreadsheet. Tables can be generated from scratch,
	 * dynamically, or using data from an existing file.
	 */
	export class Table {
		public columns: any[];
		public rows: p5.TableRow[];

		/**
		 * Creates an instance of Table.
		 * 
		 * @param {p5.TableRow[]} rows An array of p5.TableRow objects
		 */
		public constructor(rows?: p5.TableRow[]);

		/**
		 * Use addRow() to add a new row of data to a p5.Table object. By
		 * default, an empty row is created. Typically, you would store a
		 * reference to the new row in a TableRow object (see newRow in the
		 * example above), and then set individual values using set().
		 * 
		 * If a p5.TableRow object is included as a parameter, then that row is
		 * duplicated and added to the table.
		 * 
		 * @param {p5.TableRow} row row to be added to the table
		 */
		public addRow(row?: p5.TableRow): p5.TableRow;

		/**
		 * Removes a row from the table object
		 * 
		 * @param {number} id ID number of the row to remove
		 */
		public removeRow(id: number): void;

		/**
		 * Returns a reference to the specified p5.TableRow. The reference can
		 * then be used to get and set values of the selected row.
		 * 
		 * @param {number} rowID ID number of the row to get
		 */
		public getRow(rowID: number): p5.TableRow;

		/**
		 * Gets all rows from the table. Returns an array of p5.TableRows.
		 */
		public getRows(): p5.TableRow[];

		/**
		 * Finds the first row in the Table that contains the value provided,
		 * and returns a reference to that row. Even if multiple rows are
		 * possible matches, only the first matching row is returned. The
		 * column to search may be specified by either its ID or title.
		 * 
		 * @param {string} value The value to match
		 * @param {(number | string)} column ID number or title of the column
		 * 		to search
		 */
		public findRow(value: string, column: number | string): p5.TableRow;

		/**
		 * Finds the rows in the Table that contain the value provided, and
		 * returns references to those rows. Returns an Array, so for must be
		 * used to iterate through all the rows, as shown in the example above.
		 * The column to search may be specified by either its ID or title.
		 * 
		 * @param {string} value The value to match
		 * @param {(number | string)} column ID number or title of the column
		 * 		to search
		 */
		public findRows(value: string, column: number | string): p5.TableRow[];

		/**
		 * Finds the first row in the Table that matches the regular expression
		 * provided, and returns a reference to that row. Even if multiple rows
		 * are possible matches, only the first matching row is returned. The
		 * column to search may be specified by either its ID or title.
		 * 
		 * @param {string} regexp The regular expression to match
		 * @param {(string | number)} column ID number or title of the column
		 * 		to search
		 */
		public matchRow(regexp: string, column: string | number): p5.TableRow;

		/**
		 * Finds the rows in the Table that match the regular expression
		 * provided, and returns references to those rows. Returns an array, so
		 * for must be used to iterate through all the rows, as shown in the
		 * example. The column to search may be specified by either its ID or
		 * title.
		 * 
		 * @param {string} regexp The regular expression to match
		 * @param {(string | number)} column ID number or title of the column
		 * 		to search
		 */
		public matchRows(regexp: string,
			column: string | number): p5.TableRow[];

		/**
		 * Retrieves all values in the specified column, and returns them as an
		 * array. The column may be specified by either its ID or title.
		 * 
		 * @param {(string | number)} column String or Number of the column to
		 * 		return
		 */
		public getColumn(column: string | number): (string | number)[];

		/**
		 * Removes all rows from a Table. While all rows are removed, columns
		 * and column titles are maintained.
		 */
		public clearRows(): void;

		/**
		 * Use addColumn() to add a new column to a Table object. Typically,
		 * you will want to specify a title, so the column may be easily
		 * referenced later by name. (If no title is specified, the new
		 * column's title will be null.)
		 * 
		 * @param {string} title title of the given column
		 */
		public addColumn(title?: string): void;

		/**
		 * Returns the total number of rows in a Table.
		 */
		public getRowCount(): number;

		/**
		 * Removes any of the specified characters (or "tokens").
		 * 
		 * If no column is specified, then the values in all columns and rows
		 * are processed. A specific column may be referenced by either its ID
		 * or title.
		 * 
		 * @param {string} chars String listing characters to be removed
		 * @param {(string | number)} column Column ID (number) or name
		 * 		(string)
		 */
		public removeTokens(chars: string, column?: string | number): void;

		/**
		 * Trims leading and trailing whitespace, such as spaces and tabs, from
		 * String table values. If no column is specified, then the values in
		 * all columns and rows are trimmed. A specific column may be
		 * referenced by either its ID or title.
		 * 
		 * @param {(string | number)} column Column ID (number) or name
		 * 		(string)
		 */
		public trim(column: string | number): void;

		/**
		 * Use removeColumn() to remove an existing column from a Table object.
		 * The column to be removed may be identified by either its title (a
		 * String) or its index value (an int). removeColumn(0) would remove
		 * the first column, removeColumn(1) would remove the second column,
		 * and so on.
		 * 
		 * @param {(string | number)} column columnName (string) or ID (number)
		 */
		public removeColumn(column: string | number): void;

		/**
		 * Stores a value in the Table's specified row and column. The row is
		 * specified by its ID, while the column may be specified by either its
		 * ID or title.
		 * 
		 * @param {(string | number)} column column ID (Number) or title
		 * 		(String)
		 * @param {(string | number)} value value to assign
		 */
		public set(column: string | number, value: string | number): void;

		/**
		 * Stores a Float value in the Table's specified row and column. The
		 * row is specified by its ID, while the column may be specified by
		 * either its ID or title.
		 * 
		 * @param {number} row row ID
		 * @param {(string | number)} column column ID (Number) or title
		 * 		(String)
		 * @param {number} value value to assign
		 */
		public setNum(row: number, column: string | number,
			value: number): void;

		/**
		 * Stores a String value in the Table's specified row and column. The
		 * row is specified by its ID, while the column may be specified by
		 * either its ID or title.
		 * 
		 * @param {number} row  row ID
		 * @param {(string | number)} column column ID (Number) or title
		 * 		(String)
		 * @param {string} value value to assign
		 */
		public setString(row: number, column: string | number,
			value: string): void;

		/**
		 * Retrieves a value from the Table's specified row and column. The row
		 * is specified by its ID, while the column may be specified by either
		 * its ID or title.
		 * 
		 * @param {number} row row ID
		 * @param {(string | number)} column columnName (string) or ID (number)
		 */
		public get(row: number, column: string | number): string | number;

		/**
		 * Retrieves a Float value from the Table's specified row and column.
		 * The row is specified by its ID, while the column may be specified by
		 * either its ID or title.
		 * 
		 * @param {number} row row ID
		 * @param {(string | number)} column columnName (string) or ID (number)
		 */
		public getNum(row: number, column: string | number): number;

		/**
		 * Retrieves a String value from the Table's specified row and column.
		 * The row is specified by its ID, while the column may be specified by
		 * either its ID or title.
		 * 
		 * @param {number} row row ID
		 * @param {(string | number)} column columnName (string) or ID (number)
		 */
		public getString(row: number, column: string | number): string;

		/**
		 * Retrieves all table data and returns as an object. If a column name
		 * is passed in, each row object will be stored with that attribute as
		 * its title.
		 * 
		 * @param {string} headerColumn Name of the column which should be used
		 * 		to title each row object (optional)
		 */
		public getObject(headerColumn: string): any;

		/**
		 * Retrieves all table data and returns it as a multidimensional array.
		 */
		public getArray(): (string | number)[][];
	}
}