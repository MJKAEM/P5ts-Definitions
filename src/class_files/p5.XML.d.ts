declare namespace p5 {

	/**
	 * XML is a representation of an XML object, able to parse XML code. Use
	 * loadXML() to load external XML files and create XML objects.
	 */
	class XML {
		public name: string;
		public attributes: any;
		public children: p5.XML[];
		public parent: p5.XML;
		public content: string;

		/**
		 * Creates an instance of XML.
		 */
		public constructor();

		/**
		 * Gets a copy of the element's parent. Returns the parent as another
		 * p5.XML object.
		 */
		public getParent(): p5.XML;

		/**
		 * Gets the element's full name, which is returned as a String.
		 */
		public getName(): string;

		/**
		 * Sets the element's name, which is specified as a String.
		 * 
		 * @param {string} name the new name of the node
		 */
		public setName(name: string): void;

		/**
		 * Checks whether or not the element has any children, and returns the
		 * result as a boolean.
		 */
		public hasChildren(): boolean;

		/**
		 * Get the names of all of the element's children, and returns the
		 * names as an array of Strings. This is the same as looping through
		 * and calling getName() on each child element individually.
		 */
		public listChildren(): string;

		/**
		 * Returns all of the element's children as an array of p5.XML objects.
		 * When the name parameter is specified, then it will return all
		 * children that match that name.
		 * 
		 * @param {string} name element name
		 */
		public getChildren(name?: string): p5.XML[];

		/**
		 * Returns the first of the element's children that matches the name
		 * parameter or the child of the given index.It returns undefined if no
		 * matching child is found.
		 * 
		 * @param {(string | number)} name element name or index
		 */
		public getChild(name: string | number): p5.XML;

		/**
		 * Appends a new child to the element. The child can be specified with
		 * either a String, which will be used as the new tag's name, or as a
		 * reference to an existing p5.XML object. A reference to the newly
		 * created child is returned as an p5.XML object.
		 * 
		 * @param {p5.XML} node a p5.XML Object which will be the child to be
		 * 		added
		 */
		public addChild(node: p5.XML): void;

		/**
		 * Removes the element specified by name or index.
		 * 
		 * @param {(string | number)} name element name or index
		 */
		public removeChild(name: string | number): void;

		/**
		 * Counts the specified element's number of attributes, returned as an
		 * Number.
		 */
		public getAttributeCount(): number;

		/**
		 * Gets all of the specified element's attributes, and returns them as
		 * an array of Strings.
		 */
		public listAttributes(): string[];

		/**
		 * Checks whether or not an element has the specified attribute.
		 * 
		 * @param {string} name the attribute to be checked
		 */
		public hasAttribute(name: string): boolean;

		/**
		 * Returns an attribute value of the element as an Number. If the
		 * defaultValue parameter is specified and the attribute doesn't exist,
		 * then defaultValue is returned. If no defaultValue is specified and
		 * the attribute doesn't exist, the value 0 is returned.
		 * 
		 * @param {String} name the non-null full name of the attribute
		 * @param {Number} defaultValue the default value of the attribute
		 */
		public getNumber(name: string, defaultValue?: number): number;

		/**
		 * Returns an attribute value of the element as an String. If the
		 * defaultValue parameter is specified and the attribute doesn't exist,
		 * then defaultValue is returned. If no defaultValue is specified and
		 * the attribute doesn't exist, null is returned.
		 * 
		 * @param {String} name the non-null full name of the attribute
		 * @param {Number} defaultValue the default value of the attribute
		 */
		public getString(name: string, defaultValue?: number): string;

		/**
		 * Sets the content of an element's attribute. The first parameter
		 * specifies the attribute name, while the second specifies the new
		 * content.
		 * 
		 * @param {string} name the full name of the attribute
		 * @param {number} value the value of the attribute
		 */
		public setAttribute(name: string, value: number): void;

		/**
		 * Returns the content of an element. If there is no such content,
		 * defaultValue is returned if specified, otherwise null is returned.
		 * 
		 * @param {string} defaultValue value returned if no content is found
		 * 
		 * @memberOf XML
		 */
		public getContent(defaultValue?: string): string;

		/**
		 * Sets the element's content.
		 * 
		 * @param {string} text the new content
		 */
		public setContent(text: string): void;
	}
}