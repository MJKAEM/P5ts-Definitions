/// <reference path="p5.d.ts" />

///////////////////////////////////////////////////////////////////////////////
// Variables
///////////////////////////////////////////////////////////////////////////////

//
// Environment
//

/**
 * The system variable frameCount contains the number of frames that have been
 * displayed since the program started. Inside setup() the value is 0, after the first
 * iteration of draw it is 1, etc.
 */
declare var frameCount: number;

/**
 * Confirms if the window a p5.js program is in is "focused," meaning that the sketch
 * will accept mouse or keyboard input. This variable is "true" if the window is focused
 * and "false" if not.
 */
declare var focused: boolean;
/**
 * System variable that stores the width of the entire screen display. This is used to run
 * a full-screen program on any display size.
 */
declare var displayWidth: number;

/**
 * System variable that stores the height of the entire screen display. This is used to run
 * a full-screen program on any display size.
 */
declare var displayHeight: number;

/**
 * System variable that stores the width of the inner window, it maps to
 * window.innerWidth.
 */
declare var windowWidth: number;

/**
 * System variable that stores the height of the inner window, it maps to
 * window.innerHeight.
 */
declare var windowHeight: number;

/**
 * System variable that stores the width of the drawing canvas. This value is set by the
 * first parameter of the createCanvas() function. For example, the function call
 * createCanvas(320, 240) sets the width variable to the value 320. The value of width
 * defaults to 100 if createCanvas() is not used in a program.
 */
declare var width: number;

/**
 * System variable that stores the height of the drawing canvas. This value is set by the
 * second parameter of the createCanvas() function. For example, the function call
 * createCanvas(320, 240) sets the height variable to the value 240. The value of height
 * defaults to 100 if createCanvas() is not used in a program.
 */
declare var height: number;

///////////////////////////////////////////////////////////////////////////////
// Constants
///////////////////////////////////////////////////////////////////////////////

//
// Graphics Renderer
//

declare const P2D: string;
declare const WEBGL: string;

//
// Environment
//

declare const ARROW: string;
declare const CROSS: string;
declare const HAND: string;
declare const MOVE: string;
declare const TEXT: string;
declare const WAIT: string;

//
// Trigonometry
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
// Shape
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
// Color
//

declare const RGB: string;
declare const HSB: string;
declare const HSL: string;

//
// DOM Extension
//

declare const AUTO: string;

//
// Input
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
// Rendering
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
// Filters
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
// Typography
//

declare const NORMAL: string;
declare const ITALIC: string;
declare const BOLD: string;

//
// Typography-Internal
//

declare const _DEFAULT_TEXT_FILL: string;
declare const _DEFAULT_LEADMULT: number;
declare const _CTX_MIDDLE: string;

//
// Vertices
//

declare const LINEAR: string;
declare const QUADRATIC: string;
declare const BEZIER: string;
declare const CURVE: string;

//
// Defaults
//

declare const _DEFAULT_STROKE: string;
declare const _DEFAULT_FILL: string;

///////////////////////////////////////////////////////////////////////////////
// Functions
///////////////////////////////////////////////////////////////////////////////

//
// Color -> Setting
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
// Environment
//

/**
 * The print() function writes to the console area of your browser. This function is often
 * helpful for looking at the data a program is producing. This function creates a new
 * line of text for each call to the function. Individual elements can be separated with
 * quotes ("") and joined with the addition operator (+).
 * 
 * While print() is similar to console.log(), it does not directly map to it in order to
 * simulate easier to understand behavior than console.log(). Due to this, it is slower. For
 * fastest results, use console.log().
 * 
 * @param {*} content Any combination of Number, String, Object, Boolean, Array to print
 */
declare function print(content: any): void;

/**
 * Sets the cursor to a predefined symbol or an image, or makes it visible if already
 * hidden. If you are trying to set an image as the cursor, the recommended size is
 * 16x16 or 32x32 pixels. It is not possible to load an image as the cursor if you are
 * exporting your program for the Web, and not all MODES work with all browsers. The
 * values for parameters x and y must be less than the dimensions of the image.
 * 
 * @param {number} type Either ARROW, CROSS, HAND, MOVE, TEXT, or WAIT, or path for image
 * @param {number} x The horizontal active spot of the cursor
 * @param {number} y The vertical active spot of the cursor
 */
declare function cursor(type: number, x?: number, y?: number): void;

/**
 * Specifies the number of frames to be displayed every second. For example, the
 * function call frameRate(30) will attempt to refresh 30 times a second. If the processor
 * is not fast enough to maintain the specified rate, the frame rate will not be achieved.
 * Setting the frame rate within setup() is recommended. The default rate is 60 frames
 * per second. This is the same as setFrameRate(val).
 * 
 * Calling frameRate() with no arguments returns the current framerate. This is the same
 * as getFrameRate(). 
 * 
 * Calling frameRate() with arguments that are not of the type numbers or are non positive also returns current framerate.
 * 
 * @param {number} fps Number of frames to be displayed every second
 */
declare function frameRate(fps?: number): number;

/**
 * Returns the current framerate.
 */
declare function getFrameRate(): number;

/**
 * Specifies the number of frames to be displayed every second. For example, the
 * function call frameRate(30) will attempt to refresh 30 times a second. If the processor
 * is not fast enough to maintain the specified rate, the frame rate will not be achieved.
 * Setting the frame rate within setup() is recommended. The default rate is 60 frames
 * per second.
 * 
 * @param {number} fps Number of frames to be displayed every second
 */
declare function setFrameRate(fps: number): number;

/**
 * Hides the cursor from view.
 */
declare function noCursor(): void;

/**
 * The windowResized() function is called once every time the browser window is
 * resized. This is a good place to resize the canvas or do any other adjustements to
 * accomodate the new window size.
 */
declare function windowResized(): void;

/**
 * If argument is given, sets the sketch to fullscreen or not based on the value of the
 * argument. If no argument is given, returns the current fullscreen state. Note that due
 * to browser restrictions this can only be called on user input, for example, on mouse
 * press like the example below.
 * 
 * @param {boolean} val Whether the sketch should be in fullscreen mode or not
 */
declare function fullscreen(val?: boolean): boolean;

/**
 * Sets the pixel scaling for high pixel density displays. By default pixel density is set to
 * match display density, call pixelDensity(1) to turn this off. Calling pixelDensity() with
 * no arguments returns the current pixel density of the sketch.
 * 
 * @param {number} val Whether or how much the sketch should scale
 */
declare function pixelDensity(val?: number): number;

/**
 * Returns the pixel density of the current display the sketch is running on.
 */
declare function displayDensity(): number;

/**
 * Gets the current URL.
 */
declare function getURL(): string;

/**
 * Gets the current URL path as an array.
 */
declare function getURLPath(): string[];

/**
 * Gets the current URL params as an Object.
 */
declare function getURLParams(): any;

//
// Rendering
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

/**
 * Resizes the canvas to given width and height. The canvas will be cleared and draw
 * will be called immediately, allowing the sketch to re-render itself in the resized
 * canvas.
 * 
 * @param {number} w Width of the canvas
 * @param {number} h Height of the canvas
 * @param {boolean} noRedraw If the canvas should not call the draw function (does nothing if noLoop() is never
 * called) 
 */
declare function resizeCanvas(w: number, h: number, noRedraw?: boolean): void;

/**
 * Removes the default canvas for a p5 sketch that doesn't require a canvas.
 */
declare function noCanvas(): void;

/**
 * Creates and returns a new p5.Renderer object. Use this class if you need to draw into
 * an off-screen graphics buffer. The two parameters define the width and height in
 * pixels.
 * 
 * @param {number} w Width of the offscreen graphics buffer
 * @param {number} h Height of the offscreen graphics buffer
 * @param {string} renderer P2D or WEBGL undefined defaults to P2D
 */
declare function createGraphics(w: number, h: number, renderer?: string): p5.Graphics;

/**
 * Blends the pixels in the display window according to the defined mode. There is a
 * choice of the following modes to blend the source pixels (A) with the ones of pixels
 * already in the display window (B):
 * 
 * BLEND - linear interpolation of colours: C = Afactor + B. This is the default blending mode.
 * 
 * ADD - sum of A and B
 * 
 * DARKEST - only the darkest colour succeeds: C = min(Afactor, B).
 * 
 * LIGHTEST - only the lightest colour succeeds: C = max(A*factor, B).
 * 
 * DIFFERENCE - subtract colors from underlying image.
 * 
 * EXCLUSION - similar to DIFFERENCE, but less extreme.
 * 
 * MULTIPLY - multiply the colors, result will always be darker.
 * 
 * SCREEN - opposite multiply, uses inverse values of the colors.
 * 
 * REPLACE - the pixels entirely replace the others and don't utilize alpha (transparency) values.
 * 
 * OVERLAY - mix of MULTIPLY and SCREEN . Multiplies dark values, and screens light values.
 * 
 * HARD_LIGHT - SCREEN when greater than 50% gray, MULTIPLY when lower.
 * 
 * SOFT_LIGHT - mix of DARKEST and LIGHTEST. Works like OVERLAY, but not as harsh.
 * 
 * DODGE - lightens light tones and increases contrast, ignores darks.
 * 
 * BURN - darker areas are applied, increasing contrast, ignores lights.
 * 
 * @param {string} mode Blend mode to set for canvas
 */
declare function blendMode(mode: string): void;
