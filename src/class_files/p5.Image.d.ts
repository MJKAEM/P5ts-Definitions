declare namespace p5 {
	/**
	 * A p5.Image is a canvas backed representation of an image.
	 * 
	 * p5 can display .gif, .jpg and .png images. Images may be displayed in 2D
	 * and 3Dspace. Before an image is used, it must be loaded with the
	 * loadImage() function. The p5.Image class contains fields for the width
	 * and height of the image, as well as an array called pixels[] that
	 * contains the values for every pixel in the image.
	 * 
	 * The methods described below allow easy access to the image's pixels and
	 * alpha channel and simplify the process of compositing.
	 * 
	 * Before using the pixels[] array, be sure to use the loadPixels() method
	 * on the image to make sure that the pixel data is properly loaded.
	 */
	class Image {

		/**
		 * Image width.
		 */
		public width: number;

		/**
		 * Image height.
		 */
		public height: number;

		public canvas: HTMLCanvasElement;
		public drawingContext: CanvasRenderingContext2D;
		public isTexture: boolean;

		/**
		 * Array containing the values for all the pixels in the display
		 * window. These values are numbers. This array is the size (include an
		 * appropriate factor for pixelDensity) of the display window x4,
		 * representing the R, G, B, A values in order for each pixel, moving
		 * from left to right across each row, then down each column. Retina
		 * and other high denisty displays may have more pixels[] (by a factor
		 * of pixelDensity^2).
		 * 
		 * Before accessing this array, the data must loaded with the
		 * loadPixels() function. After the array data has been modified, the
		 * updatePixels() function must be run to update the changes.
		 */
		public pixels: number[];

		public _pixelDensity: number;

		/**
		 * Creates an instance of Image.
		 * 
		 * @param {number} width Image width
		 * @param {number} height Image height
		 * @param {p5} pInst An instance of a p5 sketch.
		 */
		public constructor(width: number, height: number, pInst: p5);

		/**
		 * Loads the pixels data for this image into the [pixels] attribute.
		 */
		public loadPixels(): void;

		/**
		 * Updates the backing canvas for this image with the contents of the
		 * [pixels] array.
		 * 
		 * @param {number} x x-offset of the target update area for the 
		 * 		underlying canvas
		 * @param {number} y y-offset of the target update area for the 
		 * 		underlying canvas
		 * @param {number} w width of the target update area for the underlying
		 * 		canvas
		 * @param {number} h height of the target update area for the underlying
		 * 		canvas
		 */
		public updatePixels(x: number, y: number, w: number, h: number): void;

		/**
		 * Get a region of pixels from an image.
		 * 
		 * If no params are passed, those whole image is returned, if x and y
		 * are the only params passed a single pixel is extracted if all params
		 * are passed a rectangle region is extracted and a p5.Image is
		 * returned.
		 * 
		 * Returns undefined if the region is outside the bounds of the image
		 */
		public get(): p5.Image;

		/**
		 * Get a region of pixels from an image.
		 * 
		 * If no params are passed, those whole image is returned, if x and y
		 * are the only params passed a single pixel is extracted if all params
		 * are passed a rectangle region is extracted and a p5.Image is
		 * returned.
		 * 
		 * Returns undefined if the region is outside the bounds of the image
		 * 
		 * @param {number} x x-coordinate of the pixel
		 * @param {number} y y-coordinate of the pixel
		 */
		public get(x: number, y: number): number[];

		/**
		 * Get a region of pixels from an image.
		 * 
		 * If no params are passed, those whole image is returned, if x and y
		 * are the only params passed a single pixel is extracted if all params
		 * are passed a rectangle region is extracted and a p5.Image is
		 * returned.
		 * 
		 * Returns undefined if the region is outside the bounds of the image
		 * 
		 * @param {number} x x-coordinate of the pixel
		 * @param {number} y y-coordinate of the pixel
		 * @param {number} w width
		 * @param {number} h height
		 */
		public get(x: number, y: number, w: number, h: number): p5.Image;


		/**
		 * Set the color of a single pixel or write an image into this
		 * p5.Image.
		 * 
		 * Note that for a large number of pixels this will be slower than
		 * directly manipulating the pixels array and then calling
		 * updatePixels().
		 * 
		 * @param {number} x x-coordinate of the pixel
		 * @param {number} y y-coordinate of the pixel
		 * @param {(number | number[] | p5.Color | p5.Image)} a grayscale
		 * 		value, or pixel array, or a p5.Color, or image to copy
		 */
		public set(x: number, y: number,
			a: number | number[] | p5.Color | p5.Image): void;

		/**
		 * Resize the image to a new width and height. To make the image scale
		 * proportionally, use 0 as the value for the wide or high parameter.
		 * For instance, to make the width of an image 150 pixels, and change
		 * the height using the same proportion, use resize(150, 0).
		 * 
		 * @param {number} width the resized image width
		 * @param {number} height the resized image height
		 */
		public resize(width: number, height: number): void;

		/**
		 * Copies a region of the canvas to another region of the canvas and
		 * copies a region of pixels from an image used as the srcImg parameter
		 * into the canvas srcImage is specified this is used as the source. If
		 * the source and destination regions aren't the same size, it will
		 * automatically resize source pixels to fit the specified target
		 * region.
		 * 
		 * @param {number} sx X coordinate of the source's upper left corner
		 * @param {number} sy Y coordinate of the source's upper left corner
		 * @param {number} sw source image width
		 * @param {number} sh source image height
		 * @param {number} dx X coordinate of the destination's upper left
		 * 		corner
		 * @param {number} dy Y coordinate of the destination's upper left
		 * 		corner
		 * @param {number} dw destination image width
		 * @param {number} dh destination image height
		 */
		public copy(sx: number, sy: number, sw: number, sh: number, dx: number,
		dy: number, dw: number, dh: number): void;

		/**
		 * Copies a region of the canvas to another region of the canvas and
		 * copies a region of pixels from an image used as the srcImg parameter
		 * into the canvas srcImage is specified this is used as the source. If
		 * the source and destination regions aren't the same size, it will
		 * automatically resize source pixels to fit the specified target
		 * region.
		 * 
		 * @param {p5.Image} srcImage source image
		 * @param {number} sx X coordinate of the source's upper left corner
		 * @param {number} sy Y coordinate of the source's upper left corner
		 * @param {number} sw source image width
		 * @param {number} sh source image height
		 * @param {number} dx X coordinate of the destination's upper left
		 * 		corner
		 * @param {number} dy Y coordinate of the destination's upper left
		 * 		corner
		 * @param {number} dw destination image width
		 * @param {number} dh destination image height
		 */
		public copy(srcImage: p5.Image, sx: number, sy: number, sw: number,
			sh: number, dx: number, dy: number, dw: number, dh: number): void;

		/**
		 * Masks part of an image from displaying by loading another image and
		 * using it's blue channel as an alpha channel for this image.
		 * 
		 * @param {p5.Image} srcImage source image
		 */
		public mask(srcImage: p5.Image): void;

		/**
		 * Applies an image filter to a p5.Image
		 * 
		 * @param {string} operation one of threshold, gray, invert, posterize
		 * 		and opaque see Filters.js for docs on each available filter
		 * @param {number} value
		 */
		public filter(operation: string, value?: number): void;

		/**
		 * Copies a region of pixels from one image to another, using a
		 * specified blend mode to do the operation.
		 * 
		 * @param {number} sx X coordinate of the source's upper left corner
		 * @param {number} sy Y coordinate of the source's upper left corner
		 * @param {number} sw source image width
		 * @param {number} sh source image height
		 * @param {number} dx X coordinate of the destination's upper left
		 * 		corner
		 * @param {number} dy Y coordinate of the destination's upper left
		 * 		corner
		 * @param {number} dw destination image width
		 * @param {number} dh destination image height
		 * @param {string} blendMode the blend mode. Available blend modes are:
		 * 		normal | multiply | screen | overlay | darken | lighten |
		 * 		color-dodge | color-burn | hard-light | soft-light |
		 * 		difference | exclusion | hue | saturation | color | luminosity
		 */
		public blend(sx: number, sy: number, sw: number, sh: number,
			dx: number, dy: number, dw: number, dh: number,
			blendMode: string): void;

		/**
		 * Copies a region of pixels from one image to another, using a
		 * specified blend mode to do the operation.
		 * 
		 * @param {p5.Image} srcImage source image
		 * @param {number} sx X coordinate of the source's upper left corner
		 * @param {number} sy Y coordinate of the source's upper left corner
		 * @param {number} sw source image width
		 * @param {number} sh source image height
		 * @param {number} dx X coordinate of the destination's upper left
		 * 		corner
		 * @param {number} dy Y coordinate of the destination's upper left
		 * 		corner
		 * @param {number} dw destination image width
		 * @param {number} dh destination image height
		 * @param {string} blendMode the blend mode. Available blend modes are:
		 * 		normal | multiply | screen | overlay | darken | lighten |
		 * 		color-dodge | color-burn | hard-light | soft-light |
		 * 		difference | exclusion | hue | saturation | color | luminosity
		 */
		public blend(srcImage: p5.Image, sx: number, sy: number, sw: number,
			sh: number, dx: number, dy: number, dw: number, dh: number,
			blendMode: string): void;

		/**
		 * Saves the image to a file and force the browser to download it.
		 * Accepts two strings for filename and file extension Supports png
		 * (default) and jpg.
		 * 
		 * @param {string} filename give your file a name
		 * @param {string} extension 'png' or 'jpg'
		 */
		public save(filename?: string, extension?: string): void;

		/**
		 * Helper fxn for sharing pixel methods
		 * 
		 * @param {*} prop
		 * @param {*} value
		 */
		public _setProperty(prop: any, value: any): void;
	}
}