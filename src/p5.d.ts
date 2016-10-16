//
// Classes
//

declare class p5 {

	/**
	 * This is the p5 instance constructor.
	 *
	 * A p5 instance holds all the properties and methods related to
	 * a p5 sketch.  It expects an incoming sketch closure and it can also
	 * take an optional node parameter for attaching the generated p5 canvas
	 * to a node.  The sketch closure takes the newly created p5 instance as
	 * its sole argument and may optionally set preload(), setup(), and/or
	 * draw() properties on it for running a sketch.
	 *
	 * A p5 sketch can run in "global" or "instance" mode:
	 * "global"   - all properties and methods are attached to the window
	 * "instance" - all properties and methods are bound to this p5 object
	 *
	 * @param {Function} sketch A closure that can set optional preload(), setup(), and/or draw() properties on the given p5 instance
	 * @param {HTMLElement|boolean} node Element to attach canvas to, if a boolean is passed in use it as sync
	 * @param {boolean} sync Start synchronously (optional)
	 */
	constructor(sketch: p5, node?: (HTMLElement | boolean), sync?: boolean);
}

declare namespace p5 {
	class Color {
		constructor();
	}

	class Image {
	}
}

//
// Color -> Setting Functions
//

/**
 * The background() function sets the color used for the background of the p5.js canvas. The
 * default background is light gray. This function is typically used within draw() to clear the
 * display window at the beginning of each frame, but it can be used inside setup() to set the
 * background on the first frame of animation or if the background need only be set once.
 * 
 * @param {(p5.Color | string | number | p5.Image)} v1
 * @param {number} a Opacity of the background relative to current color range (default is 0-100)
 */
declare function background(v1: (number | string | p5.Color | p5.Image), a?: number): void;

/**
 * The background() function sets the color used for the background of the p5.js canvas. The
 * default background is light gray. This function is typically used within draw() to clear the
 * display window at the beginning of each frame, but it can be used inside setup() to set the
 * background on the first frame of animation or if the background need only be set once.
 *
 * @param {number} v1 Red or hue value (depending on the current color mode)
 * @param {number} v2 Green or saturation value (depending on the current color mode)
 * @param {number} v3 Blue or brightness value (depending on the current color mode)
 * @param {number} a Opacity of the background relative to current color range (default is 0-100)
 */
declare function background(v1: number, v2: number, v3: number, a?: number): void;

//
// Constants -> Graphics Renderer
//

declare const P2D: string;

declare const WEBGL: string;

//
// Constants -> Environment
//

declare const ARROW: string;

declare const CROSS: string;

declare const HAND: string;

declare const MOVE: string;

declare const TEXT: string;

declare const WAIT: string;

//
// Constants -> Trigonometry
//

/**
 * HALF_PI is a mathematical constant with the value 1.57079632679489661923. It is
 * half the ratio of the circumference of a circle to its diameter. It is useful in
 * combination with the trigonometric functions sin() and cos().
 */
declare const HALF_PI: number;

/**
 * PI is a mathematical constant with the value 3.14159265358979323846. It is the ratio
 * of the circumference of a circle to its diameter. It is useful in combination with the
 * trigonometric functions sin() and cos().
 */
declare const PI: number;

/**
 * QUARTER_PI is a mathematical constant with the value 0.7853982. It is one quarter
 * the ratio of the circumference of a circle to its diameter. It is useful in combination
 * with the trigonometric functions sin() and cos().
 */
declare const QUARTER_PI: number;

/**
 * TAU is an alias for TWO_PI, a mathematical constant with the value
 * 6.28318530717958647693. It is twice the ratio of the circumference of a circle to its
 * diameter. It is useful in combination with the trigonometric functions sin() and cos().
 */
declare const TAU: number;

/**
 * TWO_PI is a mathematical constant with the value 6.28318530717958647693. It is
 * twice the ratio of the circumference of a circle to its diameter. It is useful
 * in combination with the trigonometric functions sin() and cos().
 */
declare const TWO_PI: number;

declare const DEGREES: string;

declare const RADIANS: string;

//
// Constants -> Shape
//

declare const CORNER: string;
declare const CORNERS: string;
declare const RADIUS: string;
declare const RIGHT: string;
declare const LEFT: string;
declare const CENTER: string;
declare const TOP: string;
declare const BOTTOM: string;
declare const BASELINE: string;
declare const POINTS: number;
declare const LINES: number;
declare const LINE_STRIP: number;
declare const LINE_LOOP: number;
declare const TRIANGLES: number;
declare const TRIANGLE_FAN: number;
declare const TRIANGLE_STRIP: number;
declare const QUADS: string;
declare const QUAD_STRIP: string;
declare const CLOSE: string;
declare const OPEN: string;
declare const CHORD: string;
declare const PIE: string;
declare const PROJECT: string; // PEND: careful this is counterintuitive
declare const SQUARE: string;
declare const ROUND: string;
declare const BEVEL: string;
declare const MITER: string;

//
// Constants -> Color
//

declare const RGB: string;
declare const HSB: string;
declare const HSL: string;

//
// Constants -> DOM Extension
//

declare const AUTO: string;

//
// Constants -> Input
//

declare const ALT: number;
declare const BACKSPACE: number;
declare const CONTROL: number;
declare const DELETE: number;
declare const DOWN_ARROW: number;
declare const ENTER: number;
declare const ESCAPE: number;
declare const LEFT_ARROW: number;
declare const OPTION: number;
declare const RETURN: number;
declare const RIGHT_ARROW: number;
declare const SHIFT: number;
declare const TAB: number;
declare const UP_ARROW: number;

//
// Constants -> Rendering
//

declare const BLEND: string;
declare const ADD: string;
declare const DARKEST: string;
declare const LIGHTEST: string;
declare const DIFFERENCE: string;
declare const EXCLUSION: string;
declare const MULTIPLY: string;
declare const SCREEN: string;
declare const REPLACE: string;
declare const OVERLAY: string;
declare const HARD_LIGHT: string;
declare const SOFT_LIGHT: string;
declare const DODGE: string;
declare const BURN: string;

//
// Constants -> Filters
//

declare const THRESHOLD: string;
declare const GRAY: string;
declare const OPAQUE: string;
declare const INVERT: string;
declare const POSTERIZE: string;
declare const DILATE: string;
declare const ERODE: string;
declare const BLUR: string;

//
// Constants -> Typography
//

declare const NORMAL: string;
declare const ITALIC: string;
declare const BOLD: string;

//
// Constants -> Typography-Internal
//

declare const _DEFAULT_TEXT_FILL: string;
declare const _DEFAULT_LEADMULT: number;
declare const _CTX_MIDDLE: string;

//
// Constants -> Vertices
//

declare const LINEAR: string;
declare const QUADRATIC: string;
declare const BEZIER: string;
declare const CURVE: string;

//
// Constants ->  Defaults
//

declare const _DEFAULT_STROKE: string;
declare const _DEFAULT_FILL: string;

//
// Structure Functions
//

/**
 * Called directly before setup(), the preload() function is used to handle asynchronous
 * loading of external files. If a preload function is defined, setup() will wait until any
 * load calls within have finished. Nothing besides load calls should be inside preload
 * (loadImage, loadJSON, loadFont, loadStrings, etc).
 */
declare function preload(): void

/**
 * The setup() function is called once when the program starts. It's used to
 * define initial environment properties such as screen size and background
 * color and to load media such as images and fonts as the program starts. There
 * can only be one setup() function for each program and it shouldn't be called
 * again after its initial execution. 
 */
declare function setup(): void;

/**
 * Called directly after setup(), the draw() function continuously executes the
 * lines of code contained inside its block until the program is stopped or
 * noLoop() is called. Note if noLoop() is called in setup(), draw() will still
 * be executed once before stopping. draw() is called automatically and should
 * never be called explicitly.
 * 
 * It should always be controlled with noLoop(), redraw() and loop(). After
 * noLoop() stops the code in draw() from executing, redraw() causes the code
 * inside draw() to execute once, and loop() will cause the code inside draw()
 * to resume executing continuously.
 * 
 * The number of times draw() executes in each second may be controlled with
 * the frameRate() function.
 * 
 * There can only be one draw() function for each sketch, and draw() must exist
 * if you want the code to run continuously, or to process events such as
 * mousePressed(). Sometimes, you might have an empty call to draw() in your
 * program, as shown in the above example.
 * 
 * It is important to note that the drawing coordinate system will be reset at
 * the beginning of each draw() call. If any transformations are performed
 * within draw() (ex: scale, rotate, translate, their effects will be undone at
 * the beginning of draw(), so transformations will not accumulate over time.
 * On the other hand, styling applied (ex: fill, stroke, etc) will remain in
 * effect.
 */
declare function draw(): void;

/**
 * Removes the entire p5 sketch. This will remove the canvas and any elements created
 * by p5.js. It will also stop the draw loop and unbind any properties or methods from
 * the window global scope. It will leave a variable p5 in case you wanted to create a
 * new p5 sketch. If you like, you can set p5 = null to erase it.
 */
declare function remove(): void;

/**
 * Stops p5.js from continuously executing the code within draw(). If loop() is called, the
 * code in draw() begins to run continuously again. If using noLoop() in setup(), it
 * should be the last line inside the block. 
 *
 * When noLoop() is used, it's not possible to manipulate or access the screen inside
 * event handling functions such as mousePressed() or keyPressed(). Instead, use those
 * functions to call redraw() or loop(), which will run draw(), which can update the screen
 * properly. This means that when noLoop() * has been called, no drawing can happen,
 * and functions like saveFrame() or loadPixels() may not be used. 
 *
 * Note that if the sketch is resized, redraw() will be called to update the sketch, even
 * after noLoop() has been specified. Otherwise, the sketch would enter an odd state
 * until loop() was called.
 */
declare function noLoop(): void;

/**
 * By default, p5.js loops through draw() continuously, executing the code within it.
 * However, the draw() loop may be stopped by calling noLoop(). In that case, the
 * draw() loop can be resumed with loop().
 */
declare function loop(): void;

/**
 * The push() function saves the current drawing style settings and transformations,
 * while pop() restores these settings. Note that these functions are always used
 * together. They allow you to change the style and transformation settings and later
 * return to what you had. When a new state is started with push(), it builds on the
 * current style and transform information. The push() and pop() functions can be
 * embedded to provide more control. (See the second example for a demonstration.)
 * 
 * push() stores information related to the current transformation state and style
 * settings controlled by the following functions: fill(), stroke(), tint(), strokeWeight(),
 * strokeCap(), strokeJoin(), imageMode(), rectMode(), ellipseMode(), colorMode(),
 * textAlign(), textFont(), textMode(), textSize(), textLeading().
 */
declare function push(): void;

/**
 * The push() function saves the current drawing style settings and transformations,
 * while pop() restores these settings. Note that these functions are always used
 * together. They allow you to change the style and transformation settings and later
 * return to what you had. When a new state is started with push(), it builds on the
 * current style and transform information. The push() and pop() functions can be
 * embedded to provide more control. (See the second example for a demonstration.)
 * 
 * push() stores information related to the current transformation state and style
 * settings controlled by the following functions: fill(), stroke(), tint(), strokeWeight(),
 * strokeCap(), strokeJoin(), imageMode(), rectMode(), ellipseMode(), colorMode(),
 * textAlign(), textFont(), textMode(), textSize(), textLeading().
 */
declare function pop(): void;

/**
 * Executes the code within draw() one time. This functions allows the program to
 * update the display window only when necessary, for example when an event
 * registered by mousePressed() or keyPressed() occurs.
 * 
 * In structuring a program, it only makes sense to call redraw() within events such as
 * mousePressed(). This is because redraw() does not run draw() immediately (it only
 * sets a flag that indicates an update is needed).
 * 
 * The redraw() function does not work properly when called inside draw(). To
 * enable/disable animations, use loop() and noLoop().
 * 
 * In addition you can set the number of redraws per method call. Just add an integer as
 * single parameter for the number of redraws.
 * 
 * @param {number} n Redraw for n-times. The default value is 1.
 */
declare function redraw(n?: number): void;

//
// Rendering Functions
//

/**
 * Creates a canvas element in the document, and sets the dimensions of it in
 * pixels. This method should be called only once at the start of setup.
 * Calling createCanvas more than once in a sketch will result in very
 * unpredicable behavior. If you want more than one drawing canvas you could
 * use createGraphics (hidden by default but it can be shown). 
 *
 * The system variables width and height are set by the parameters passed to
 * this function. If createCanvas() is not used, the window will be given a
 * default size of 100x100 pixels.
 *
 * @param {number} w Width of the canvas
 * @param {number} h Height of the canvas
 * @param {string} renderer P2D or WEBGL
 */
declare function createCanvas(w: number, h: number, renderer?: string): any;