/// <reference path="p5.d.ts" />

///////////////////////////////////////////////////////////////////////////////
// Variables
///////////////////////////////////////////////////////////////////////////////

//
// Environment
//

/**
 * The system variable frameCount contains the number of frames that have been
 * displayed since the program started. Inside setup() the value is 0, after
 * the first iteration of draw it is 1, etc.
 */
declare var frameCount: number;

/**
 * Confirms if the window a p5.js program is in is "focused," meaning that the
 * sketch will accept mouse or keyboard input. This variable is "true" if the
 * window is focused and "false" if not.
 */
declare var focused: boolean;
/**
 * System variable that stores the width of the entire screen display. This is
 * used to run a full-screen program on any display size.
 */
declare var displayWidth: number;

/**
 * System variable that stores the height of the entire screen display. This is
 * used to run a full-screen program on any display size.
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
 * System variable that stores the width of the drawing canvas. This value is
 * set by the first parameter of the createCanvas() function. For example, the
 * function call createCanvas(320, 240) sets the width variable to the value
 * 320. The value of width defaults to 100 if createCanvas() is not used in a
 * program.
 */
declare var width: number;

/**
 * System variable that stores the height of the drawing canvas. This value is
 * set by the second parameter of the createCanvas() function. For example, the
 * function call createCanvas(320, 240) sets the height variable to the value
 * 240. The value of height defaults to 100 if createCanvas() is not used in a
 * program.
 */
declare var height: number;

//
// Events -> Acceleration
//

/**
 * The system variable deviceOrientation always contains the orientation of the
 * device. The value of this variable will either be set 'landscape' or
 * 'portrait'. If no data is available it will be set to 'undefined'.
 */
declare var deviceOrientation: string;

/**
 * The system variable accelerationX always contains the acceleration of the
 * device along the x axis. Value is represented as meters per second squared.
 */
declare var accelerationX: number;

/**
 * The system variable accelerationY always contains the acceleration of the
 * device along the y axis. Value is represented as meters per second squared.
 */
declare var accelerationY: number;

/**
 * The system variable accelerationZ always contains the acceleration of the
 * device along the z axis. Value is represented as meters per second squared.
 */
declare var accelerationZ: number;

/**
 * The system variable pAccelerationX always contains the acceleration of the
 * device along the x axis in the frame previous to the current frame. Value is
 * represented as meters per second squared.
 */
declare var pAccelerationX: number;

/**
 * The system variable pAccelerationY always contains the acceleration of the
 * device along the y axis in the frame previous to the current frame. Value is
 * represented as meters per second squared.
 */
declare var pAccelerationY: number;

/**
 * The system variable pAccelerationZ always contains the acceleration of the
 * device along the z axis in the frame previous to the current frame. Value is
 * represented as meters per second squared.
 */
declare var pAccelerationZ: number;

/**
 * The system variable rotationX always contains the rotation of the device
 * along the x axis. Value is represented as 0 to +/-180 degrees.
 * 
 * Note: The order the rotations are called is important, ie. if used together,
 * it must be called in the order Z-X-Y or there might be unexpected behaviour.
 */
declare var rotationX: number;

/**
 * The system variable rotationY always contains the rotation of the device
 * along the y axis. Value is represented as 0 to +/-90 degrees.
 * 
 * Note: The order the rotations are called is important, ie. if used together,
 * it must be called in the order Z-X-Y or there might be unexpected behaviour.
 */
declare var rotationY: number;

/**
 * The system variable rotationZ always contains the rotation of the device
 * along the z axis. Value is represented as 0 to 359 degrees.
 * 
 * Unlike rotationX and rotationY, this variable is available for devices with
 * a built-in compass only.
 * 
 * Note: The order the rotations are called is important, ie. if used together,
 * it must be called in the order Z-X-Y or there might be unexpected behaviour.
 */
declare var rotationZ: number;

/**
 * The system variable pRotationX always contains the rotation of the device
 * along the x axis in the frame previous to the current frame. Value is
 * represented as 0 to +/-180 degrees.
 * 
 * pRotationX can also be used with rotationX to determine the rotate direction
 * of the device along the X-axis.
 */
declare var pRotationX: number;

/**
 * The system variable pRotationY always contains the rotation of the device
 * along the y axis in the frame previous to the current frame. Value is
 * represented as 0 to +/-90 degrees.
 * 
 * pRotationY can also be used with rotationY to determine the rotate direction
 * of the device along the Y-axis.
 */
declare var pRotationY: number;

/**
 * The system variable pRotationZ always contains the rotation of the device
 * along the z axis in the frame previous to the current frame. Value is
 * represented as 0 to 359 degrees.
 * 
 * pRotationZ can also be used with rotationZ to determine the rotate direction
 * of the device along the Z-axis.
 */
declare var pRotationZ: number;

declare var turnAxis: string;

//
// Events -> Keyboard
//

/**
 * The boolean system variable isKeyPressed is true if any key is pressed and
 * false if no keys are pressed. Synonymous to keyIsPressed.
 */
declare var isKeyPressed: boolean;

/**
 * The boolean system variable keyIsPressed is true if any key is pressed and
 * false if no keys are pressed.
 */
declare var keyIsPressed: boolean;

/**
 * The system variable key always contains the value of the most recent key on
 * the keyboard that was typed. To get the proper capitalization, it is best to
 * use it within keyTyped(). For non-ASCII keys, use the keyCode variable.
 */
declare var key: string;

/**
 * The variable keyCode is used to detect special keys such as BACKSPACE,
 * DELETE, ENTER, RETURN, TAB, ESCAPE, SHIFT, CONTROL, OPTION, ALT, UP_ARROW,
 * DOWN_ARROW, LEFT_ARROW, RIGHT_ARROW.
 */
declare var keyCode: number;

//
// Events -> Mouse
//

/**
 * The system variable mouseX always contains the current horizontal position
 * of the mouse, relative to (0, 0) of the canvas.
 */
declare var mouseX: number;

/**
 * The system variable mouseY always contains the current vertical position of
 * the mouse, relative to (0, 0) of the canvas.
 */
declare var mouseY: number;

/**
 * The system variable pmouseX always contains the horizontal position of the
 * mouse in the frame previous to the current frame, relative to (0, 0) of the
 * canvas.
 */
declare var pmouseX: number;

/**
 * The system variable pmouseY always contains the vertical position of the
 * mouse in the frame previous to the current frame, relative to (0, 0) of the
 * canvas.
 */
declare var pmouseY: number;

/**
 * The system variable winMouseX always contains the current horizontal
 * position of the mouse, relative to (0, 0) of the window.
 */
declare var winMouseX: number;

/**
 * The system variable winMouseY always contains the current vertical position
 * of the mouse, relative to (0, 0) of the window.
 */
declare var winMouseY: number;

/**
 * The system variable pwinMouseX always contains the horizontal position of
 * the mouse in the frame previous to the current frame, relative to (0, 0) of
 * the window.
 */
declare var pwinMouseX: number;

/**
 * The system variable pwinMouseY always contains the vertical position of the
 * mouse in the frame previous to the current frame, relative to (0, 0) of the
 * window.
 */
declare var pwinMouseY: number;

/**
 * Processing automatically tracks if the mouse button is pressed and which
 * button is pressed. The value of the system variable mouseButton is either
 * LEFT, RIGHT, or CENTER depending on which button was pressed last. Warning:
 * different browsers may track mouseButton differently.
 */
declare var mouseButton: number;

/**
 * The boolean system variable mouseIsPressed is true if the mouse is pressed
 * and false if not.
 */
declare var mouseIsPressed: boolean;

/**
 * The boolean system variable mouseIsPressed is true if the mouse is pressed
 * and false if not. Synonymous to isMousePressed.
 */
declare var isMousePressed: boolean;

/**
 * This is a flag which is false until the first time we receive a mouse event.
 * The pmouseX and pmouseY values will match the mouseX and mouseY values until
 * this interaction takes place.
 */
declare var _hasMouseInteracted: boolean;

//
// Events -> Touch
//

/**
 * The system variable ptouchX always contains the horizontal position of one
 * finger, relative to (0, 0) of the canvas, in the frame previous to the
 * current frame.
 */
declare var ptouchX: number;

/**
 * The system variable ptouchY always contains the vertical position of one
 * finger, relative to (0, 0) of the canvas, in the frame previous to the
 * current frame.
 */
declare var ptouchY: number;

/**
 * The system variable winTouchX always contains the horizontal position of one
 * finger, relative to (0, 0) of the window.
 */
declare var winTouchX: number;

/**
 * The system variable winTouchY always contains the vertical position of one
 * finger, relative to (0, 0) of the window.
 */
declare var winTouchY: number;

/**
 * The system variable pwinTouchX always contains the horizontal position of
 * one finger, relative to (0, 0) of the window, in the frame previous to the
 * current frame.
 */
declare var pwinTouchX: number;

/**
 * The system variable pwinTouchY always contains the vertical position of one
 * finger, relative to (0, 0) of the window, in the frame previous to the
 * current frame.
 */
declare var pwinTouchY: number;

/**
 * The system variable touches[] contains an array of the positions of all
 * current touch points, relative to (0, 0) of the canvas, and IDs identifying
 * a unique touch as it moves. Each element in the array is an object with
 * x, y, and id properties.
 */
declare var touches: {
	clientX: number,
	clientY: number,
	identifier: any
}[];

/**
 * The boolean system variable touchIsDown is true if the screen is touched and
 * false if not.
 */
declare var touchIsDown: boolean;

/**
 * This is a flag which is false until the first time we receive a touch event.
 * The ptouchX and ptouchY values will match the touchX and touchY values until
 * this interaction takes place.
 */
declare var _hasTouchInteracted: boolean;

//
// IO -> Output
//

declare var _pWriters: p5.PrintWriter[];

//
// Image -> Pixels
//

/**
 * Uint8ClampedArray containing the values for all the pixels in the display
 * window. These values are numbers. This array is the size (include an
 * appropriate factor for pixelDensity) of the display window x4, representing
 * the R, G, B, A values in order for each pixel, moving from left to right
 * across each row, then down each column. Retina and other high denisty
 * displays will have more pixels[] (by a factor of pixelDensity^2). For
 * example, if the image is 100x100 pixels, there will be 40,000. On a retina
 * display, there will be 160,000.
 * 
 * The first four values (indices 0-3) in the array will be the R, G, B, A
 * values of the pixel at (0, 0). The second four values (indices 4-7) will
 * contain the R, G, B, A values of the pixel at (1, 0).
 * 
 * Before accessing this array, the data must loaded with the loadPixels()
 * function. After the array data has been modified, the updatePixels()
 * function must be run to update the changes.
 * 
 * Note that this is not a standard javascript array. This means that standard
 * javascript functions such as slice() or arrayCopy() do not work.
 */
declare var pixels: Uint8ClampedArray;

//
// Math -> Trigonometry
//

declare var _angleMode: string;

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
 * HALF_PI is a mathematical constant with the value 1.57079632679489661923. It
 * is half the ratio of the circumference of a circle to its diameter. It is
 * useful in combination with the trigonometric functions sin() and cos().
 */
declare const HALF_PI: number;

/**
 * PI is a mathematical constant with the value 3.14159265358979323846. It is
 * the ratio of the circumference of a circle to its diameter. It is useful in
 * combination with the trigonometric functions sin() and cos().
 */
declare const PI: number;

/**
 * QUARTER_PI is a mathematical constant with the value 0.7853982. It is one
 * quarter the ratio of the circumference of a circle to its diameter. It is
 * useful in combination with the trigonometric functions sin() and cos().
 */
declare const QUARTER_PI: number;

/**
 * TAU is an alias for TWO_PI, a mathematical constant with the value
 * 6.28318530717958647693. It is twice the ratio of the circumference of a
 * circle to its diameter. It is useful in combination with the trigonometric
 * functions sin() and cos().
 */
declare const TAU: number;

/**
 * TWO_PI is a mathematical constant with the value 6.28318530717958647693. It
 * is twice the ratio of the circumference of a circle to its diameter. It is
 * useful in combination with the trigonometric functions sin() and cos().
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
// Vertices
//

declare const LINEAR: string;
declare const QUADRATIC: string;
declare const BEZIER: string;
declare const CURVE: string;

//
// Typography-Internal
//

declare const _DEFAULT_TEXT_FILL: string;
declare const _DEFAULT_LEADMULT: number;
declare const _CTX_MIDDLE: string;

//
// Defaults
//

declare const _DEFAULT_STROKE: string;
declare const _DEFAULT_FILL: string;

///////////////////////////////////////////////////////////////////////////////
// Functions
///////////////////////////////////////////////////////////////////////////////

//
// Color -> Creating & Reading
//

/**
 * Extracts the alpha value from a color or pixel array.
 * 
 * @param {(p5.Color | number[])} obj p5.Color object or pixel array
 */
declare function alpha(obj: p5.Color | number[]): number;

/**
 * Extracts the blue value from a color or pixel array.
 * 
 * @param {(p5.Color | number[])} obj p5.Color object or pixel array
 */
declare function blue(obj: p5.Color | number[]): number;

/**
 * Extracts the HSB brightness value from a color or pixel array.
 * 
 * @param {(p5.Color | number[])} obj p5.Color object or pixel array
 */
declare function brightness(obj: p5.Color | number[]): number;

/**
 * Creates colors for storing in variables of the color datatype. The
 * parameters are interpreted as RGB or HSB values depending on the current
 * colorMode(). The default mode is RGB values from 0 to 255 and, therefore,
 * the function call color(255, 204, 0) will return a bright yellow color.
 * 
 * Note that if only one value is provided to color(), it will be interpreted
 * as a grayscale value. Add a second value, and it will be used for alpha
 * transparency. When three values are specified, they are interpreted as
 * either RGB or HSB values. Adding a fourth value applies alpha transparency.
 * If a single string parameter is provided it will be interpreted as a
 * CSS-compatible color string.
 * 
 * Colors are stored as Numbers or Arrays.
 * 
 * @param {(string | number | p5.Color | number[])} v1 number specifying value
 * 		between white and black, a color string, or a color
 * @param {number} alpha alpha value relative to current color range (default
 * 		is 0-100)
 */
declare function color(v1: string | number | p5.Color | number[],
	alpha?: number): p5.Color;

/**
 * Creates colors for storing in variables of the color datatype. The
 * parameters are interpreted as RGB or HSB values depending on the current
 * colorMode(). The default mode is RGB values from 0 to 255 and, therefore,
 * the function call color(255, 204, 0) will return a bright yellow color.
 * 
 * Note that if only one value is provided to color(), it will be interpreted
 * as a grayscale value. Add a second value, and it will be used for alpha
 * transparency. When three values are specified, they are interpreted as
 * either RGB or HSB values. Adding a fourth value applies alpha transparency.
 * If a single string parameter is provided it will be interpreted as a
 * CSS-compatible color string.
 * 
 * Colors are stored as Numbers or Arrays.
 * 
 * @param {number} v1 red or hue value relative to the current color
 * 		range
 * @param {number} v2 green or saturation value relative to the current color
 * 		range
 * @param {number} v3 blue or brightness value relative to the current color
 * 		range
 * @param {number} alpha alpha value relative to current color range (default
 * 		is 0-100)
 */
declare function color(v1: number, v2: number, v3: number,
	alpha?: number): p5.Color;

/**
 * Extracts the green value from a color or pixel array.
 * 
 * @param {(p5.Color | number[])} color p5.Color object or pixel array
 */
declare function green(color: p5.Color | number[]): number;

/**
 * Extracts the hue value from a color or pixel array.
 * 
 * Hue exists in both HSB and HSL. This function will return the HSB-normalized
 * hue when supplied with an HSB color object (or when supplied with a pixel
 * array while the color mode is HSB), but will default to the HSL-normalized
 * hue otherwise. (The values will only be different if the maximum hue setting
 * for each system is different.)
 * 
 * @param {(p5.Color | number[])} color p5.Color object or pixel array
 */
declare function hue(color: p5.Color | number[]): number;

/**
 * Blends two colors to find a third color somewhere between them. The amt
 * parameter is the amount to interpolate between the two values where 0.0
 * equal to the first color, 0.1 is very near the first color, 0.5 is halfway
 * in between, etc. An amount below 0 will be treated as 0. Likewise, amounts
 * above 1 will be capped at 1. This is different from the behavior of lerp(),
 * but necessary because otherwise numbers outside the range will produce
 * strange and unexpected colors.
 * 
 * The way that colours are interpolated depends on the current color mode.
 * 
 * @param {p5.Color} c1 interpolate from this color
 * @param {p5.Color} c2 interpolate to this color
 * @param {number} amt number between 0 and 1
 */
declare function lerpColor(c1: p5.Color, c2: p5.Color, amt: number): p5.Color;

/**
 * Extracts the HSL lightness value from a color or pixel array.
 * 
 * @param {(p5.Color | number[])} color p5.Color object or pixel array
 */
declare function lightness(color: p5.Color | number[]): number;

/**
 * Extracts the red value from a color or pixel array.
 * 
 * @param {(p5.Color | number[])} obj p5.Color object or pixel array
 */
declare function red(obj: p5.Color | number[]): number;

/**
 * Extracts the saturation value from a color or pixel array.
 * 
 * Saturation is scaled differently in HSB and HSL. This function will return
 * the HSB saturation when supplied with an HSB color object (or when supplied
 * with a pixel array while the color mode is HSB), but will default to the HSL
 * saturation otherwise.
 * 
 * @param {(p5.Color | number[])} color p5.Color object or pixel array
 */
declare function saturation(color: p5.Color | number[]): number;

//
// Color -> Setting
//

/**
 * The background() function sets the color used for the background of the
 * p5.js canvas. The default background is light gray. This function is
 * typically used within draw() to clear the display window at the beginning of
 * each frame, but it can be used inside setup() to set the background on the
 * first frame of animation or if the background need only be set once.
 *
 * @param {(p5.Color | string | number | p5.Image)} v1 gray value, red or hue
 * 		value (depending on the current color mode), or color Array, or CSS
 * 		color string
 * @param {number} v2 green or saturation value (depending on the current color
 * 		mode)
 * @param {number} v3 blue or brightness value (depending on the current color
 * 		mode)
 * @param {number} a opacity of the background relative to current color range
 * 		(default is 0-100)
 */
declare function background(v1: (number | string | p5.Color | p5.Image),
	v2?: number, v3?: number, a?: number): p5;

/**
 * Clears the pixels within a buffer. This function only works on p5.Canvas
 * objects created with the createCanvas() function; it won't work with the
 * main display window. Unlike the main graphics context, pixels in additional
 * graphics areas created with createGraphics() can be entirely or partially
 * transparent. This function clears everything to make all of the pixels 100%
 * transparent.
 */
declare function clear(): p5;

/**
 * colorMode() changes the way p5.js interprets color data. By default, the
 * parameters for fill(), stroke(), background(), and color() are defined by
 * values between 0 and 255 using the RGB color model. This is equivalent to
 * setting colorMode(RGB, 255). Setting colorMode(HSB) lets you use the HSB
 * system instead. By default, this is colorMode(HSB, 360, 100, 100, 1). You
 * can also use HSL.
 * 
 * Note: existing color objects remember the mode that they were created in, so
 * you can change modes as you like without affecting their appearance.
 * 
 * @param {string} mode either RGB or HSB, corresponding to Red/Green/Blue and
 * 		Hue/Saturation/Brightness (or Lightness)
 * @param {number} max1 range for the red or hue depending on the current color
 * 		mode, or range for all values
 * @param {number} max2 range for the green or saturation depending on the
 * 		current color mode
 * @param {number} max3 range for the blue or brightness/lighntess depending on
 * 		the current color mode
 * @param {number} maxA range for the alpha
 */
declare function colorMode(mode: string, max1?: number, max2?: number,
	max3?: number, maxA?: number): p5;

/**
 * Sets the color used to fill shapes. For example, if you run
 * fill(204, 102, 0), all subsequent shapes will be filled with orange. This
 * color is either specified in terms of the RGB or HSB color depending on the
 * current colorMode(). (The default color space is RGB, with each value in the
 * range from 0 to 255).
 * 
 * If a single string argument is provided, RGB, RGBA and Hex CSS color strings
 * and all named color strings are supported. A p5 Color object can also be
 * provided to set the fill color.
 * 
 * @param {(string | number | number[] | p5.Color)} v1
 * @param {number} v2 green or saturation value (depending on the current color
 * 		mode)
 * @param {number} v3 blue or brightness value (depending on the current color
 * 		mode)
 * @param {number} a opacity of the background
 */
declare function fill(v1: string | number | number[] | p5.Color, v2?: number,
	v3?: number, a?: number): p5;

/**
 * Disables filling geometry. If both noStroke() and noFill() are called,
 * nothing will be drawn to the screen.
 */
declare function noFill(): p5;

/**
 * Disables drawing the stroke (outline). If both noStroke() and noFill() are
 * called, nothing will be drawn to the screen.
 */
declare function noStroke(): p5;

/**
 * Sets the color used to draw lines and borders around shapes. This color is
 * either specified in terms of the RGB or HSB color depending on the current
 * colorMode() (the default color space is RGB, with each value in the range
 * from 0 to 255).
 * 
 * If a single string argument is provided, RGB, RGBA and Hex CSS color strings
 * and all named color strings are supported. A p5 Color object can also be
 * provided to set the stroke color.
 * 
 * @param {(string | number | number[] | p5.Color)} v1 gray value, red or hue
 * 		value (depending on the current color mode), or color Array, or CSS
 * 		color string
 * @param {number} v2 green or saturation value (depending on the current color
 * 		mode)
 * @param {number} v3 blue or brightness value (depending on the current color
 * 		mode)
 * @param {number} a opacity of the background
 */
declare function stroke(v1: string | number | number[] | p5.Color, v2?: number,
	v3?: number, a?: number): p5;

//
// Shape -> 2D Primitives
//

/**
 * Draw an arc to the screen. If called with only a, b, c, d, start, and stop,
 * the arc will be drawn as an open pie. If mode is provided, the arc will be
 * drawn either open, as a chord, or as a pie as specified. The origin may be
 * changed with the ellipseMode() function.
 * 
 * Note that drawing a full circle (ex: 0 to TWO_PI) will appear blank because
 * 0 and TWO_PI are the same position on the unit circle. The best way to
 * handle this is by using the ellipse() function instead to create a closed
 * ellipse, and to use the arc() function only to draw parts of an ellipse.
 * 
 * @param {number} a x-coordinate of the arc's ellipse
 * @param {number} b y-coordinate of the arc's ellipse
 * @param {number} c width of the arc's ellipse by default
 * @param {number} d height of the arc's ellipse by default
 * @param {number} start angle to start the arc, specified in radians
 * @param {number} stop angle to stop the arc, specified in radians
 * @param {string} mode optional parameter to determine the way of drawing the
 * 		arc
 */
declare function arc(a: number, b: number, c: number, d: number, start: number,
	stop: number, mode?: string): p5;

/**
 * Draws an ellipse (oval) to the screen. An ellipse with equal width and
 * height is a circle. By default, the first two parameters set the location,
 * and the third and fourth parameters set the shape's width and height. If no
 * height is specified, the value of width is used for both the width and
 * height. The origin may be changed with the ellipseMode() function.
 * 
 * @param {number} x x-coordinate of the ellipse.
 * @param {number} y y-coordinate of the ellipse.
 * @param {number} w width of the ellipse.
 * @param {number} h height of the ellipse.
 */
declare function ellipse(x: number, y: number, w: number, h?: number): p5;

/**
 * Draws a line (a direct path between two points) to the screen. The version
 * of line() with four parameters draws the line in 2D. To color a line, use
 * the stroke() function. A line cannot be filled, therefore the fill()
 * function will not affect the color of a line. 2D lines are drawn with a
 * width of one pixel by default, but this can be changed with the
 * strokeWeight() function.
 * 
 * @param {number} x1 the x-coordinate of the first point
 * @param {number} y1 the y-coordinate of the first point
 * @param {number} x2 the x-coordinate of the second point
 * @param {number} y2 the y-coordinate of the second point
 */
declare function line(x1: number, y1: number, x2: number, y2: number): p5;

/**
 * Draws a point, a coordinate in space at the dimension of one pixel. The
 * first parameter is the horizontal value for the point, the second value is
 * the vertical value for the point. The color of the point is determined by
 * the current stroke.
 * 
 * @param {number} x the x-coordinate
 * @param {number} y the y-coordinate
 */
declare function point(x: number, y: number): p5;

/**
 * Draw a quad. A quad is a quadrilateral, a four sided polygon. It is similar
 * to a rectangle, but the angles between its edges are not constrained to
 * ninety degrees. The first pair of parameters (x1,y1) sets the first vertex
 * and the subsequent pairs should proceed clockwise or counter-clockwise
 * around the defined shape.
 * 
 * @param {number} x1 the x-coordinate of the first point
 * @param {number} y1 the y-coordinate of the first point
 * @param {number} x2 the x-coordinate of the second point
 * @param {number} y2 the y-coordinate of the second point
 * @param {number} x3 the x-coordinate of the third point
 * @param {number} y3 the y-coordinate of the third point
 * @param {number} x4 the x-coordinate of the fourth point
 * @param {number} y4 the y-coordinate of the fourth point
 */
declare function quad(x1: number, y1: number, x2: number, y2: number,
	x3: number, y3: number, x4: number, y4: number): p5;

/**
 * Draws a rectangle to the screen. A rectangle is a four-sided shape with
 * every angle at ninety degrees. By default, the first two parameters set the
 * location of the upper-left corner, the third sets the width, and the fourth
 * sets the height. The way these parameters are interpreted, however, may be
 * changed with the rectMode() function.
 * 
 * The fifth, sixth, seventh and eighth parameters, determine the corner radius
 * for the top-right, top-left, lower-right and lower-left corners,
 * respectively. An omitted corner radius parameter is set to the value of the
 * previously specified radius value in the parameter list.
 * 
 * @param {number} x x-coordinate of the rectangle.
 * @param {number} y y-coordinate of the rectangle.
 * @param {number} w width of the rectangle.
 * @param {number} h height of the rectangle.
 * @param {number} tl optional radius of top-left corner.
 * @param {number} tr optional radius of top-right corner.
 * @param {number} br optional radius of bottom-right corner.
 * @param {number} bl optional radius of bottom-left corner.
 */
declare function rect(x: number, y: number, w: number, h: number, tl?: number,
	tr?: number, br?: number, bl?: number): p5;

/**
 * A triangle is a plane created by connecting three points. The first two
 * arguments specify the first point, the middle two arguments specify the
 * second point, and the last two arguments specify the third point.
 * 
 * @param {number} x1 x-coordinate of the first point
 * @param {number} y1 y-coordinate of the first point
 * @param {number} x2 x-coordinate of the second point
 * @param {number} y2 y-coordinate of the second point
 * @param {number} x3 x-coordinate of the third point
 * @param {number} y3 y-coordinate of the third point
 */
declare function triangle(x1: number, y1: number, x2: number, y2: number,
	x3: number, y3: number): p5;

//
// Shape -> Attributes
//

/**
 * Modifies the location from which ellipses are drawn by changing the way in
 * which parameters given to ellipse() are interpreted.
 * 
 * The default mode is ellipseMode(CENTER), which interprets the first two
 * parameters of ellipse() as the shape's center point, while the third and
 * fourth parameters are its width and height.
 * 
 * ellipseMode(RADIUS) also uses the first two parameters of ellipse() as the
 * shape's center point, but uses the third and fourth parameters to specify
 * half of the shapes's width and height.
 * 
 * ellipseMode(CORNER) interprets the first two parameters of ellipse() as the
 * upper-left corner of the shape, while the third and fourth parameters are
 * its width and height.
 * 
 * ellipseMode(CORNERS) interprets the first two parameters of ellipse() as the
 * location of one corner of the ellipse's bounding box, and the third and
 * fourth parameters as the location of the opposite corner.
 * 
 * The parameter must be written in ALL CAPS because Javascript is a
 * case-sensitive language.
 * 
 * @param {string} mode either CENTER, RADIUS, CORNER, or CORNERS
 */
declare function ellipseMode(mode: string): p5;

/**
 * Draws all geometry with jagged (aliased) edges. Note that smooth() is active
 * by default, so it is necessary to call noSmooth() to disable smoothing of
 * geometry, images, and fonts.
 */
declare function noSmooth(): p5;

/**
 * Modifies the location from which rectangles are drawn by changing the way in
 * which parameters given to rect() are interpreted.
 * 
 * The default mode is rectMode(CORNER), which interprets the first two
 * parameters of rect() as the upper-left corner of the shape, while the third
 * and fourth parameters are its width and height.
 * 
 * rectMode(CORNERS) interprets the first two parameters of rect() as the
 * location of one corner, and the third and fourth parameters as the location
 * of the opposite corner.
 * 
 * rectMode(CENTER) interprets the first two parameters of rect() as the
 * shape's center point, while the third and fourth parameters are its width
 * and height.
 * 
 * rectMode(RADIUS) also uses the first two parameters of rect() as the shape's
 * center point, but uses the third and fourth parameters to specify half of
 * the shapes's width and height.
 * 
 * The parameter must be written in ALL CAPS because Javascript is a
 * case-sensitive language.
 * 
 * @param {string} mode either CORNER, CORNERS, CENTER, or RADIUS
 */
declare function rectMode(mode: string): p5;

/**
 * Draws all geometry with smooth (anti-aliased) edges. smooth() will also
 * improve image quality of resized images. Note that smooth() is active by
 * default; noSmooth() can be used to disable smoothing of geometry, images,
 * and fonts.
 */
declare function smooth(): p5;

/**
 * Sets the style for rendering line endings. These ends are either squared,
 * extended, or rounded, each of which specified with the corresponding
 * parameters: SQUARE, PROJECT, and ROUND. The default cap is ROUND.
 * 
 * @param {string} cap either SQUARE, PROJECT, or ROUND
 */
declare function strokeCap(cap: string): p5;

/**
 * Sets the style of the joints which connect line segments. These joints are
 * either mitered, beveled, or rounded and specified with the corresponding
 * parameters MITER, BEVEL, and ROUND. The default joint is MITER.
 * 
 * @param {string} join either MITER, BEVEL, ROUND
 */
declare function strokeJoin(join: string): p5;

/**
 * Sets the width of the stroke used for lines, points, and the border around
 * shapes. All widths are set in units of pixels.
 * 
 * @param {number} weight the weight (in pixels) of the stroke
 */
declare function strokeWeight(weight: number): p5;

//
// Shape -> Curves
//

//
// Shape -> Vertex
//

/**
 * Use the beginContour() and endContour() functions to create negative shapes
 * within shapes such as the center of the letter 'O'. beginContour() begins
 * recording vertices for the shape and endContour() stops recording. The
 * vertices that define a negative shape must "wind" in the opposite direction
 * from the exterior shape. First draw vertices for the exterior clockwise
 * order, then for internal shapes, draw vertices shape in counter-clockwise.
 * 
 * These functions can only be used within a beginShape()/endShape() pair and
 * transformations such as translate(), rotate(), and scale() do not work
 * within a beginContour()/endContour() pair. It is also not possible to use
 * other shapes, such as ellipse() or rect() within.
 */
declare function beginContour(): p5;

/**
 * Using the beginShape() and endShape() functions allow creating more complex
 * forms. beginShape() begins recording vertices for a shape and endShape()
 * stops recording. The value of the kind parameter tells it which types of
 * shapes to create from the provided vertices. With no mode specified, the
 * shape can be any irregular polygon.
 * 
 * The parameters available for beginShape() are POINTS, LINES, TRIANGLES,
 * TRIANGLE_FAN, TRIANGLE_STRIP, QUADS, and QUAD_STRIP. After calling the
 * beginShape() function, a series of vertex() commands must follow. To stop
 * drawing the shape, call endShape(). Each shape will be outlined with the
 * current stroke color and filled with the fill color.
 * 
 * Transformations such as translate(), rotate(), and scale() do not work
 * within beginShape(). It is also not possible to use other shapes, such as
 * ellipse() or rect() within beginShape().
 * 
 * @param {(number | string)} kind either POINTS, LINES, TRIANGLES,
 * 		TRIANGLE_FAN, TRIANGLE_STRIP, QUADS, or QUAD_STRIP
 */
declare function beginShape(kind?: number | string);

/**
 * Specifies vertex coordinates for Bezier curves. Each call to bezierVertex()
 * defines the position of two control points and one anchor point of a Bezier
 * curve, adding a new segment to a line or shape.
 * 
 * The first time bezierVertex() is used within a beginShape() call, it must be
 * prefaced with a call to vertex() to set the first anchor point. This
 * function must be used between beginShape() and endShape() and only when
 * there is no MODE parameter specified to beginShape().
 * 
 * @param {number} x2 x-coordinate for the first control point
 * @param {number} y2 y-coordinate for the first control point
 * @param {number} x3 x-coordinate for the second control point
 * @param {number} y3 y-coordinate for the second control point
 * @param {number} x4 x-coordinate for the anchor point
 * @param {number} y4 y-coordinate for the anchor point
 */
declare function bezierVertex(x2: number, y2: number, x3: number, y3: number,
	x4: number, y4: number): p5;

/**
 * Specifies vertex coordinates for curves. This function may only be used
 * between beginShape() and endShape() and only when there is no MODE parameter
 * specified to beginShape().
 * 
 * The first and last points in a series of curveVertex() lines will be used to
 * guide the beginning and end of a the curve. A minimum of four points is
 * required to draw a tiny curve between the second and third points. Adding a
 * fifth point with curveVertex() will draw the curve between the second,
 * third, and fourth points. The curveVertex() function is an implementation of
 * Catmull-Rom splines.
 * 
 * @param {number} x x-coordinate of the vertex
 * @param {number} y y-coordinate of the vertex
 */
declare function curveVertex(x: number, y: number): p5;

/**
 * Use the beginContour() and endContour() functions to create negative shapes
 * within shapes such as the center of the letter 'O'. beginContour() begins
 * recording vertices for the shape and endContour() stops recording. The
 * vertices that define a negative shape must "wind" in the opposite direction
 * from the exterior shape. First draw vertices for the exterior clockwise
 * order, then for internal shapes, draw vertices shape in counter-clockwise.
 * 
 * These functions can only be used within a beginShape()/endShape() pair and
 * transformations such as translate(), rotate(), and scale() do not work
 * within a beginContour()/endContour() pair. It is also not possible to use
 * other shapes, such as ellipse() or rect() within.
 */
declare function endContour(): p5;

/**
 * The endShape() function is the companion to beginShape() and may only be
 * called after beginShape(). When endshape() is called, all of image data
 * defined since the previous call to beginShape() is written into the image
 * buffer. The constant CLOSE as the value for the MODE parameter to close the
 * shape (to connect the beginning and the end).
 * 
 * @param {*} mode use CLOSE to close the shape
 */
declare function endShape(mode?: any): p5;

/**
 * Specifies vertex coordinates for quadratic Bezier curves. Each call to
 * quadraticVertex() defines the position of one control points and one anchor
 * point of a Bezier curve, adding a new segment to a line or shape. The first
 * time quadraticVertex() is used within a beginShape() call, it must be
 * prefaced with a call to vertex() to set the first anchor point. This
 * function must be used between beginShape() and endShape() and only when
 * there is no MODE parameter specified to beginShape().
 * 
 * @param {number} cx x-coordinate for the control point
 * @param {number} cy y-coordinate for the control point
 * @param {number} x3 x-coordinate for the anchor point
 * @param {number} y3 y-coordinate for the anchor point
 */
declare function quadraticVertex(cx: number, cy: number, x3: number,
	y3: number): p5;

/**
 * All shapes are constructed by connecting a series of vertices. vertex() is
 * used to specify the vertex coordinates for points, lines, triangles, quads,
 * and polygons. It is used exclusively within the beginShape() and endShape()
 * functions.
 * 
 * @param {number} x x-coordinate of the vertex
 * @param {number} y y-coordinate of the vertex
 * @param {number} moveTo
 */
declare function vertex(x: number, y: number, moveTo?: number): p5;

//
// Shape -> 3D Models
//

//
// Shape -> 3D Primitives
//

//
// Structure
//

/**
 * Called directly before setup(), the preload() function is used to handle
 * asynchronous loading of external files. If a preload function is defined,
 * setup() will wait until any load calls within have finished. Nothing besides
 * load calls should be inside preload (loadImage, loadJSON, loadFont,
 * loadStrings, etc).
 */
declare function preload(): void;

/**
 * The setup() function is called once when the program starts. It's used to
 * define initial environment properties such as screen size and background
 * color and to load media such as images and fonts as the program starts.
 * There can only be one setup() function for each program and it shouldn't be
 * called again after its initial execution. 
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
 * Removes the entire p5 sketch. This will remove the canvas and any elements
 * created by p5.js. It will also stop the draw loop and unbind any properties
 * or methods from the window global scope. It will leave a variable p5 in case
 * you wanted to create a new p5 sketch. If you like, you can set p5 = null to
 * erase it.
 */
declare function remove(): void;

/**
 * Stops p5.js from continuously executing the code within draw(). If loop() is
 * called, the code in draw() begins to run continuously again. If using
 * noLoop() in setup(), it should be the last line inside the block.
 *
 * When noLoop() is used, it's not possible to manipulate or access the screen
 * inside event handling functions such as mousePressed() or keyPressed().
 * Instead, use those functions to call redraw() or loop(), which will run
 * draw(), which can update the screen properly. This means that when noLoop()
 * has been called, no drawing can happen, and functions like saveFrame() or
 * loadPixels() may not be used. 
 *
 * Note that if the sketch is resized, redraw() will be called to update the
 * sketch, even after noLoop() has been specified. Otherwise, the sketch would
 * enter an odd state until loop() was called.
 */
declare function noLoop(): void;

/**
 * By default, p5.js loops through draw() continuously, executing the code
 * within it. However, the draw() loop may be stopped by calling noLoop(). In
 * that case, the draw() loop can be resumed with loop().
 */
declare function loop(): void;

/**
 * The push() function saves the current drawing style settings and
 * transformations, while pop() restores these settings. Note that these
 * functions are always used together. They allow you to change the style and
 * transformation settings and later return to what you had. When a new state
 * is started with push(), it builds on the current style and transform
 * information. The push() and pop() functions can be embedded to provide more
 * control. (See the second example for a demonstration.)
 * 
 * push() stores information related to the current transformation state and
 * style settings controlled by the following functions: fill(), stroke(),
 * tint(), strokeWeight(), strokeCap(), strokeJoin(), imageMode(), rectMode(),
 * ellipseMode(), colorMode(), textAlign(), textFont(), textMode(), textSize(),
 * textLeading().
 */
declare function push(): void;

/**
 * The push() function saves the current drawing style settings and
 * transformations, while pop() restores these settings. Note that these
 * functions are always used together. They allow you to change the style and
 * transformation settings and later return to what you had. When a new state
 * is started with push(), it builds on the current style and transform
 * information. The push() and pop() functions can be embedded to provide more
 * control. (See the second example for a demonstration.)
 * 
 * push() stores information related to the current transformation state and
 * style settings controlled by the following functions: fill(), stroke(),
 * tint(), strokeWeight(), strokeCap(), strokeJoin(), imageMode(), rectMode(),
 * ellipseMode(), colorMode(), textAlign(), textFont(), textMode(), textSize(),
 * textLeading().
 */
declare function pop(): void;

/**
 * Executes the code within draw() one time. This functions allows the program
 * to update the display window only when necessary, for example when an event
 * registered by mousePressed() or keyPressed() occurs.
 * 
 * In structuring a program, it only makes sense to call redraw() within events
 * such as mousePressed(). This is because redraw() does not run draw()
 * immediately (it only sets a flag that indicates an update is needed).
 * 
 * The redraw() function does not work properly when called inside draw(). To
 * enable/disable animations, use loop() and noLoop().
 * 
 * In addition you can set the number of redraws per method call. Just add an
 * integer as single parameter for the number of redraws.
 * 
 * @param {number} n Redraw for n-times. The default value is 1.
 */
declare function redraw(n?: number): void;

//
// Environment
//

/**
 * The print() function writes to the console area of your browser. This
 * function is often helpful for looking at the data a program is producing.
 * This function creates a new line of text for each call to the function.
 * Individual elements can be separated with quotes ("") and joined with the
 * addition operator (+).
 * 
 * While print() is similar to console.log(), it does not directly map to it in
 * order to simulate easier to understand behavior than console.log(). Due to
 * this, it is slower. For fastest results, use console.log().
 * 
 * @param {*} content Any combination of Number, String, Object, Boolean, Array
 * 		to print
 */
declare function print(content: any): void;

/**
 * Sets the cursor to a predefined symbol or an image, or makes it visible if
 * already hidden. If you are trying to set an image as the cursor, the
 * recommended size is 16x16 or 32x32 pixels. It is not possible to load an
 * image as the cursor if you are exporting your program for the Web, and not
 * all MODES work with all browsers. The values for parameters x and y must be
 * less than the dimensions of the image.
 * 
 * @param {number} type Either ARROW, CROSS, HAND, MOVE, TEXT, or WAIT, or path
 * 		for image
 * @param {number} x The horizontal active spot of the cursor
 * @param {number} y The vertical active spot of the cursor
 */
declare function cursor(type: number, x?: number, y?: number): void;

/**
 * Specifies the number of frames to be displayed every second. For example,
 * the function call frameRate(30) will attempt to refresh 30 times a second.
 * If the processor is not fast enough to maintain the specified rate, the
 * frame rate will not be achieved. Setting the frame rate within setup() is
 * recommended. The default rate is 60 frames per second. This is the same as
 * setFrameRate(val).
 * 
 * Calling frameRate() with no arguments returns the current framerate. This is
 * the same as getFrameRate(). 
 * 
 * Calling frameRate() with arguments that are not of the type numbers or are
 * non positive also returns current framerate.
 * 
 * @param {number} fps Number of frames to be displayed every second
 */
declare function frameRate(fps: number): number | p5;

/**
 * Returns the current framerate.
 */
declare function getFrameRate(): number;

/**
 * Specifies the number of frames to be displayed every second. For example,
 * the function call frameRate(30) will attempt to refresh 30 times a second.
 * If the processor is not fast enough to maintain the specified rate, the
 * frame rate will not be achieved. Setting the frame rate within setup() is
 * recommended. The default rate is 60 frames per second.
 * 
 * @param {number} fps Number of frames to be displayed every second
 */
declare function setFrameRate(fps: number): p5;

/**
 * Hides the cursor from view.
 */
declare function noCursor(): void;

/**
 * The windowResized() function is called once every time the browser window is
 * resized. This is a good place to resize the canvas or do any other
 * adjustements to accomodate the new window size.
 */
declare function windowResized(): void;

/**
 * Returns the current fullscreen state.
 */
declare function fullscreen(): boolean;

/**
 * Sets the sketch to fullscreen or not based on the value of the argument. If
 * no argument is given, returns the current fullscreen state. Note that due to
 * browser restrictions this can only be called on user input, for example, on
 * mouse press like the example below.
 * 
 * @param {boolean} val Whether the sketch should be in fullscreen mode or not
 */
declare function fullscreen(val: boolean): void;

/**
 * Returns the current pixel density of the sketch.
 * 
 * @param {number} val whether or how much the sketch should scale
 */
declare function pixelDensity(): number;

/**
 * Sets the pixel scaling for high pixel density displays. By default pixel
 * density is set to match display density, call pixelDensity(1) to turn this
 * off.
 * 
 * @param {number} val whether or how much the sketch should scale
 */
declare function pixelDensity(val: number): void;

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
 * @param {number} w width of the canvas
 * @param {number} h height of the canvas
 * @param {string} renderer P2D or WEBGL
 */
declare function createCanvas(w: number, h: number, renderer?: string): any;

/**
 * Resizes the canvas to given width and height. The canvas will be cleared and
 * draw will be called immediately, allowing the sketch to re-render itself in
 * the resized canvas.
 * 
 * @param {number} w hidth of the canvas
 * @param {number} h height of the canvas
 * @param {boolean} noRedraw if the canvas should not call the draw function
 * 		(does nothing if noLoop() is never called) 
 */
declare function resizeCanvas(w: number, h: number, noRedraw?: boolean): void;

/**
 * Removes the default canvas for a p5 sketch that doesn't require a canvas.
 */
declare function noCanvas(): void;

/**
 * Creates and returns a new p5.Renderer object. Use this class if you need to
 * draw into an off-screen graphics buffer. The two parameters define the width
 * and height in pixels.
 * 
 * @param {number} w width of the offscreen graphics buffer
 * @param {number} h height of the offscreen graphics buffer
 * @param {string} renderer P2D or WEBGL undefined defaults to P2D
 */
declare function createGraphics(w: number, h: number, renderer?: string):
	p5.Graphics;

/**
 * Blends the pixels in the display window according to the defined mode. There
 * is a choice of the following modes to blend the source pixels (A) with the
 * ones of pixels already in the display window (B):
 * 
 * BLEND - linear interpolation of colours: C = Afactor + B. This is the
 * default blending mode.
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
 * REPLACE - the pixels entirely replace the others and don't utilize alpha
 * (transparency) values.
 * 
 * OVERLAY - mix of MULTIPLY and SCREEN . Multiplies dark values, and screens
 * light values.
 * 
 * HARD_LIGHT - SCREEN when greater than 50% gray, MULTIPLY when lower.
 * 
 * SOFT_LIGHT - mix of DARKEST and LIGHTEST. Works like OVERLAY, but not as
 * harsh.
 * 
 * DODGE - lightens light tones and increases contrast, ignores darks.
 * 
 * BURN - darker areas are applied, increasing contrast, ignores lights.
 * 
 * @param {string} mode blend mode to set for canvas
 */
declare function blendMode(mode: string): void;

//
// Transform
//

/**
 * Multiplies the current matrix by the one specified through the parameters.
 * This is very slow because it will try to calculate the inverse of the
 * transform, so avoid it whenever possible.
 * 
 * @param {number} n00 numbers which define the 3x2 matrix to be multiplied
 * @param {number} n01 numbers which define the 3x2 matrix to be multiplied
 * @param {number} n02 numbers which define the 3x2 matrix to be multiplied
 * @param {number} n10 numbers which define the 3x2 matrix to be multiplied
 * @param {number} n11 numbers which define the 3x2 matrix to be multiplied
 * @param {number} n12 numbers which define the 3x2 matrix to be multiplied
 */
declare function applyMatrix(n00: number, n01: number, n02: number,
	n10: number, n11: number, n12: number): p5;

/**
 * Throws an error with the message: 'popMatrix() not used, see pop()'
 */
declare function popMatrix(): never;

/**
 * Not implemented. Currently throws an error.
 */
declare function printMatrix();

/**
 * Throws an error with the message: 'pushMatrix() not used, see push()'
 */
declare function pushMatrix(): never;

/**
 * Replaces the current matrix with the identity matrix.
 */
declare function resetMatrix(): p5;

/**
 * Rotates a shape the amount specified by the angle parameter. This function
 * accounts for angleMode, so angles can be entered in either RADIANS or
 * DEGREES.
 * 
 * Objects are always rotated around their relative position to the origin and
 * positive numbers rotate objects in a clockwise direction. Transformations
 * apply to everything that happens after and subsequent calls to the function
 * accumulates the effect. For example, calling rotate(HALF_PI) and then
 * rotate(HALF_PI) is the same as rotate(PI). All tranformations are reset when
 * draw() begins again.
 * 
 * Technically, rotate() multiplies the current transformation matrix by a
 * rotation matrix. This function can be further controlled by the push() and
 * pop().
 * 
 * @param {number} angle the angle of rotation, specified in radians or
 * 		degrees, depending on current angleMode
 * @param {(p5.Vector | number[])} axis axis to rotate around
 */
declare function rotate(angle: number, axis?: p5.Vector | number[]): p5;

/**
 * Rotates around X axis.
 * 
 * @param {number} rad angles in radians
 */
declare function rotateX(rad: number): p5;

/**
 * Rotates around Y axis.
 * 
 * @param {number} rad angles in radians
 */
declare function rotateY(rad: number): p5;

/**
 * Rotates around Z axis. Webgl mode only.
 * 
 * @param {number} rad angles in radians
 */
declare function rotateZ(rad: number): p5;

/**
 * Increases or decreases the size of a shape by expanding and contracting
 * vertices. Objects always scale from their relative origin to the coordinate
 * system. Scale values are specified as decimal percentages. For example, the
 * function call scale(2.0) increases the dimension of a shape by 200%.
 * 
 * Transformations apply to everything that happens after and subsequent calls
 * to the function multiply the effect. For example, calling scale(2.0) and
 * then scale(1.5) is the same as scale(3.0). If scale() is called within
 * draw(), the transformation is reset when the loop begins again.
 * 
 * Using this function with the z parameter is only available in WEBGL mode.
 * This function can be further controlled with push() and pop().
 * 
 * @param {(number | p5.Vector | number[])} s percent to scale the object
 */
declare function scale(s: number | p5.Vector | number[]): p5;

/**
 * Increases or decreases the size of a shape by expanding and contracting
 * vertices. Objects always scale from their relative origin to the coordinate
 * system. Scale values are specified as decimal percentages. For example, the
 * function call scale(2.0) increases the dimension of a shape by 200%.
 * 
 * Transformations apply to everything that happens after and subsequent calls
 * to the function multiply the effect. For example, calling scale(2.0) and
 * then scale(1.5) is the same as scale(3.0). If scale() is called within
 * draw(), the transformation is reset when the loop begins again.
 * 
 * Using this function with the z parameter is only available in WEBGL mode.
 * This function can be further controlled with push() and pop().
 * 
 * @param {number} x percent to scale the object in the x-axis
 * @param {number} y percent to scale the object in the y-axis
 * @param {number} z percent to scale the object in the z-axis (webgl only)
 */
declare function scale(x: number, y: number, z: number): p5;

/**
 * Shears a shape around the x-axis the amount specified by the angle
 * parameter. Angles should be specified in the current angleMode. Objects are
 * always sheared around their relative position to the origin and positive
 * numbers shear objects in a clockwise direction.
 * 
 * Transformations apply to everything that happens after and subsequent calls
 * to the function accumulates the effect. For example, calling shearX(PI/2)
 * and then shearX(PI/2) is the same as shearX(PI). If shearX() is called
 * within the draw(), the transformation is reset when the loop begins again.
 * 
 * Technically, shearX() multiplies the current transformation matrix by a
 * rotation matrix. This function can be further controlled by the push() and
 * pop() functions.
 * 
 * @param {number} angle angle of shear specified in radians or degrees,
 * 		depending on current angleMode
 */
declare function shearX(angle: number): p5;

/**
 * Shears a shape around the y-axis the amount specified by the angle
 * parameter. Angles should be specified in the current angleMode. Objects are
 * always sheared around their relative position to the origin and positive
 * numbers shear objects in a clockwise direction.
 * 
 * Transformations apply to everything that happens after and subsequent calls
 * to the function accumulates the effect. For example, calling shearY(PI/2)
 * and then shearY(PI/2) is the same as shearY(PI). If shearY() is called
 * within the draw(), the transformation is reset when the loop begins again.
 * 
 * Technically, shearY() multiplies the current transformation matrix by a
 * rotation matrix. This function can be further controlled by the push() and
 * pop() functions.
 * 
 * @param {number} angle angle of shear specified in radians or degrees,
 * 		depending on current angleMode
 */
declare function shearY(angle: number): p5;

/**
 * Specifies an amount to displace objects within the display window. The x
 * parameter specifies left/right translation, the y parameter specifies
 * up/down translation. 
 * 
 * Transformations are cumulative and apply to everything that happens after
 * and subsequent calls to the function accumulates the effect. For example,
 * calling translate(50, 0) and then translate(20, 0) is the same as
 * translate(70, 0). If translate() is called within draw(), the transformation
 * is reset when the loop begins again. This function can be further controlled
 * by using push() and pop().
 * 
 * @param {number} x left/right translation
 * @param {number} y up/down translation
 * @param {number} z forward/backward translation (webgl only)
 */
declare function translate(x: number, y: number, z?: number);

//
// Events -> Acceleration
//

/**
 * The setMoveThreshold() function is used to set the movement threshold for
 * the deviceMoved() function. The default threshold is set to 0.5.
 * 
 * @param {number} value The threshold value
 */
declare function setMoveThreshold(value: number): void;

/**
 * The setShakeThreshold() function is used to set the movement threshold for
 * the deviceShaken() function. The default threshold is set to 30.
 * 
 * @param {number} value The threshold value
 */
declare function setShakeThreshold(value: number): void;

/**
 * The deviceMoved() function is called when the device is moved by more than
 * the threshold value along X, Y or Z axis. The default threshold is set to
 * 0.5.
 */
declare function deviceMoved(): void;

/**
 * The deviceTurned() function is called when the device rotates by more than
 * 90 degrees continuously.
 * 
 * The axis that triggers the deviceTurned() method is stored in the turnAxis
 * variable. The deviceTurned() method can be locked to trigger on any axis: X,
 * Y or Z by comparing the turnAxis variable to 'X', 'Y' or 'Z'.
 */
declare function deviceTurned(): void;

/**
 * The deviceShaken() function is called when the device total acceleration
 * changes of accelerationX and accelerationY values is more than the threshold
 * value. The default threshold is set to 30.
 */
declare function deviceShaken(): void;

/**
 * Updates the pAcceleration values. Intended to be private; do not invoke.
 */
declare function _updatePAccelerations(): void;

/**
 * Updates the pRotation values. Intended to be private; do not invoke.
 */
declare function _updatePRotations(): void;

/**
 * Event handler when the device is rotated.  Intended to be private; do not
 * invoke.
 */
declare function _ondeviceorientation(e);

/**
 * Event handler when the device is moved. Intended to be private; do not
 * invoke.
 */
declare function _ondevicemotion(e);

/**
 * Intended to be private; do not invoke.
 */
declare function _handleMotion(): void;

//
// Events -> Keyboard
//

/**
 * The keyPressed() function is called once every time a key is pressed. The
 * keyCode for the key that was pressed is stored in the keyCode variable.
 * 
 * For non-ASCII keys, use the keyCode variable. You can check if the keyCode
 * equals BACKSPACE, DELETE, ENTER, RETURN, TAB, ESCAPE, SHIFT, CONTROL,
 * OPTION, ALT, UP_ARROW, DOWN_ARROW, LEFT_ARROW, RIGHT_ARROW.
 * 
 * For ASCII keys that was pressed is stored in the key variable. However, it
 * does not distinguish between uppercase and lowercase. For this reason, it is
 * recommended to use keyTyped() to read the key variable, in which the case of
 * the variable will be distinguished.
 * 
 * Because of how operating systems handle key repeats, holding down a key may
 * cause multiple calls to keyTyped() (and keyReleased() as well). The rate of
 * repeat is set by the operating system and how each computer is configured.
 * 
 * Browsers may have different default behaviors attached to various key
 * events. To prevent any default behavior for this event, add "return false"
 * to the end of the method.
 */
declare function keyPressed(): boolean | void;

/**
 * The keyReleased() function is called once every time a key is released. See
 * key and keyCode for more information.
 * 
 * Browsers may have different default behaviors attached to various key
 * events. To prevent any default behavior for this event, add "return false"
 * to the end of the method.
 */
declare function keyReleased(): boolean | void;

/**
 * The keyTyped() function is called once every time a key is pressed, but
 * action keys such as Ctrl, Shift, and Alt are ignored. The most recent key
 * pressed will be stored in the key variable.
 * 
 * Because of how operating systems handle key repeats, holding down a key will
 * cause multiple calls to keyTyped() (and keyReleased() as well). The rate of
 * repeat is set by the operating system and how each computer is configured.
 * 
 * Browsers may have different default behaviors attached to various key
 * events. To prevent any default behavior for this event, add "return false"
 * to the end of the method.
 */
declare function keyTyped(): boolean | void;

/**
 * The keyIsDown() function checks if the key is currently down, i.e. pressed.
 * It can be used if you have an object that moves, and you want several keys
 * to be able to affect its behaviour simultaneously, such as moving a sprite
 * diagonally. You can put in any number representing the keyCode of the key,
 * or use any of the variable keyCode constants.
 * 
 * @param {number} code The key to check for.
 */
declare function keyIsDown(code: number): boolean;


/**
 * Event handler called once every time a key is pressed. Intended to be
 * private; do not invoke.
 */
declare function _onkeydown(e): void;

/**
 * Event handler called once every time a key is released. Intended to be
 * private; do not invoke.
 */
declare function _onkeyup(e): void;

/**
 * Event handler called once every time a key is pressed, but action keys such
 * as Ctrl, Shift, and Alt are ignored. Intended to be private; do not invoke.
 */
declare function _onkeypress(e): void;

/**
 * The onblur function is called when the user is no longer focused
 * on the p5 element. Because the keyup events will not fire if the user is
 * not focused on the element we must assume all keys currently down have
 * been released. Intended to be private; do not invoke.
 */
declare function _onblur(e): void;

//
// Events -> Mouse
//

/**
 * The mouseMoved() function is called every time the mouse moves and a mouse
 * button is not pressed.
 * 
 * Browsers may have different default behaviors attached to various mouse
 * events. To prevent any default behavior for this event, add "return false"
 * to the end of the method.
 */
declare function mouseMoved(): boolean | void;

/**
 * The mouseDragged() function is called once every time the mouse moves and a
 * mouse button is pressed. If no mouseDragged() function is defined, the
 * touchMoved() function will be called instead if it is defined.
 * 
 * Browsers may have different default behaviors attached to various mouse
 * events. To prevent any default behavior for this event, add "return false"
 * to the end of the method.
 */
declare function mouseDragged(): boolean | void;

/**
 * The mousePressed() function is called once after every time a mouse button
 * is pressed. The mouseButton variable (see the related reference entry) can
 * be used to determine which button has been pressed. If no mousePressed()
 * function is defined, the touchStarted() function will be called instead if
 * it is defined.
 * 
 * Browsers may have different default behaviors attached to various mouse
 * events. To prevent any default behavior for this event, add "return false"
 * to the end of the method.
 */
declare function mousePressed(): boolean | void;

/**
 * The mouseReleased() function is called every time a mouse button is
 * released. If no mouseReleased() function is defined, the touchEnded()
 * function will be called instead if it is defined.
 * 
 * Browsers may have different default behaviors attached to various mouse
 * events. To prevent any default behavior for this event, add "return false"
 * to the end of the method.
 */
declare function mouseReleased(): boolean | void;

/**
 * The mouseClicked() function is called once after a mouse button has been
 * pressed and then released.
 * 
 * Browsers may have different default behaviors attached to various mouse
 * events. To prevent any default behavior for this event, add "return false"
 * to the end of the method.
 */
declare function mouseClicked(): boolean | void;

/**
 * The function mouseWheel() is executed every time a vertical mouse wheel
 * event is detected either triggered by an actual mouse wheel or by a
 * touchpad.
 * 
 * The event.delta property returns the amount the mouse wheel have scrolled.
 * The values can be positive or negative depending on the scroll direction (on
 * OS X with "natural" scrolling enabled, the signs are inverted).
 * 
 * Browsers may have different default behaviors attached to various mouse
 * events. To prevent any default behavior for this event, add "return false"
 * to the end of the method.
 * 
 * Due to the current support of the "wheel" event on Safari, the function may
 * only work as expected if "return false" is included while using Safari.
 */
declare function mouseWheel(): boolean | void;

/**
 * Updates the values of 'mouse' and 'winMouse'. Also initializes
 * '_hasMouseInteracted'. Intended to be private; do not invoke.
 */
declare function _updateNextMouseCoords(): void;

/**
 * Updates the values of 'pmouse' and 'pwinMouse'. Intended to be private; do
 * not invoke.
 */
declare function _updateMouseCoords(): void;

/**
 * Sets the active mouse button. Intended to be private; do not invoke.
 */
declare function _setMouseButton(e): void;

/**
 * Event handler called every time the mouse moves and a mouse button is not
 * pressed. Intended to be private; do not invoke.
 */
declare function _onmousemove(e): void;

/**
 * Event handler called once after every time a mouse button is pressed.
 * Intended to be private; do not invoke.
 */
declare function _onmousedown(e): void;

/**
 * Event handler called every time a mouse button is released. Intended to be
 * private; do not invoke.
 */
declare function _onmouseup(e): void;

/**
 * Event handler called every time a mouse button is released. Intended to be
 * private; do not invoke. Synonymous to _onmouseup.
 */
declare function _ondragend(e): void;

/**
 * Event handler called every time the mouse moves and a mouse button is not
 * pressed. Intended to be private; do not invoke. Synonymous to _onmousemove.
 */
declare function _ondragover(e): void;

/**
 * Event handler called once after a mouse button has been pressed and then
 * released. Intended to be private; do not invoke.
 */
declare function _onclick(e): void;

/**
 * Event handler every time a vertical mouse wheel event is detected. Intended
 * to be private; do not invoke.
 */
declare function _onwheel(e): void;

//
// Events -> Touch
//

/**
 * The touchStarted() function is called once after every time a touch is
 * registered. If no touchStarted() function is defined, the mousePressed()
 * function will be called instead if it is defined.
 * 
 * Browsers may have different default behaviors attached to various touch
 * events. To prevent any default behavior for this event, add "return false"
 * to the end of the method.
 */
declare function touchStarted(): boolean | void;

/**
 * The touchMoved() function is called every time a touch move is registered.
 * If no touchMoved() function is defined, the mouseDragged() function will be
 * called instead if it is defined.
 * 
 * Browsers may have different default behaviors attached to various touch
 * events. To prevent any default behavior for this event, add "return false"
 * to the end of the method.
 */
declare function touchMoved(): boolean | void;

/**
 * The touchEnded() function is called every time a touch ends. If no
 * touchEnded() function is defined, the mouseReleased() function will be
 * called instead if it is defined.
 * 
 * Browsers may have different default behaviors attached to various touch
 * events. To prevent any default behavior for this event, add "return false"
 * to the end of the method.
 */
declare function touchEnded(): boolean | void;

/**
 * Updates the values of 'touch' and 'winTouch'. Also initializes
 * '_hasTouchInteracted'. Intended to be private; do not invoke.
 */
declare function _updateNextTouchCoords(e);

/**
 * Updates the values of 'ptouch' and 'pwinTouch'. Intended to be private; do
 * not invoke.
 */
declare function _updateTouchCoords(e);

/**
 * Event handler after every time a touch is registered. Intended to be
 * private; do not invoke.
 */
declare function _ontouchstart(e);

/**
 * Event handler every time a touch move is registered. Intended to be private;
 * do not invoke.
 */
declare function _ontouchmove(e);

/**
 * Event handler every time a touch ends. Intended to be private; do not invoke.
 */
declare function _ontouchend(e);

//
// Image
//

/**
 * Creates a new p5.Image (the datatype for storing images). This provides a
 * fresh buffer of pixels to play with. Set the size of the buffer with the
 * width and height parameters.
 * 
 * .pixels gives access to an array containing the values for all the pixels in
 * the display window. These values are numbers. This array is the size
 * (including an appropriate factor for the pixelDensity) of the display window
 * x4, representing the R, G, B, A values in order for each pixel, moving from
 * left to right across each row, then down each column. See .pixels for more
 * info. It may also be simpler to use set() or get().
 * 
 * Before accessing the pixels of an image, the data must loaded with the
 * loadPixels() function. After the array data has been modified, the
 * updatePixels() function must be run to update the changes.
 * 
 * @param {number} width width in pixels
 * @param {number} height height in pixels
 */
declare function createImage(width: number, height: number): p5.Image;

/**
 * Save the current canvas as an image. In Safari, this will open the image in
 * the window and the user must provide their own filename on save-as. Other
 * browsers will either save the file immediately, or prompt the user with a
 * dialogue window.
 * 
 * @param {*} canvas a variable representing a specific html5 canvas
 * @param {string} filename the name of the output file
 * @param {string} extension 'jpg' or 'png'
 */
declare function saveCanvas(canvas: any, filename: string,
	extension: string): void;

/**
 * Capture a sequence of frames that can be used to create a movie. Accepts a
 * callback. For example, you may wish to send the frames to a server where
 * they can be stored or converted into a movie. If no callback is provided,
 * the browser will pop up save dialogues in an attempt to download all of the
 * images that have just been created. With the callback provided the image
 * data isn't saved by default but instead passed as an argument to the
 * callback function as an array of objects, with the size of array equal to
 * the total number of frames.
 * 
 * @param {string} filename the name of the output file
 * @param {string} extension 'jpg' or 'png'
 * @param {number} duration Duration in seconds to save the frames for.
 * @param {number} framerate Framerate to save the frames in.
 * @param {(array: {
 * 		imageData: any,
 * 		filename: string,
 * 		extension: string
 * 	}[]) => void} callback A callback function that will be executed to handle
 * 			the image data. This function should accept an array as argument.
 * 			The array will contain the specified number of frames of objects.
 */
declare function saveFrames(filename: string, extension: string,
	duration: number, framerate: number, callback?: (array: {
		/**
		 * An image/octet-stream
		 */
		imageData: any,
		/**
		 * The name of the output file
		 */
		filename: string,
		/**
		 * Extension 'jpg' or 'png'
		 */
		extension: string
	}[]) => void): void;

/**
 * 
 * 
 * @param {string} filename the name of the output file
 * @param {string} extension 'jpg' or 'png'
 * @param {HTMLCanvasElement} _cnv
 */
declare function _makeFrame(filename: string, extension: string,
	_cnv: HTMLCanvasElement): void;

//
// Image -> Loading & Displaying
//

/**
 * Loads an image from a path and creates a p5.Image from it.
 * 
 * The image may not be immediately available for rendering If you want to
 * ensure that the image is ready before doing anything with it, place the
 * loadImage() call in preload(). You may also supply a callback function to
 * handle the image when it's ready.
 * 
 * The path to the image should be relative to the HTML file that links in your
 * sketch. Loading an from a URL or other remote location may be blocked due to
 * your browser's built-in security.
 * 
 * @param {string} path Path of the image to be loaded
 * @param {(img: p5.Image) => any} successCallback Function to be called once
 * 		the image is loaded. Will be passed the p5.Image.
 * @param {(e: Event) => any} failureCallback called with event error if the
 * 		image fails to load.
 */
declare function loadImage(path: string,
	successCallback?: (img: p5.Image) => any,
	failureCallback?: (e: Event) => any): p5.Image;

/**
 * Draw an image to the main canvas of the p5js sketch
 * 
 * @param {p5.Image} img the image to display
 * @param {number} sx The X coordinate of the top left corner of the
 * 		sub-rectangle of the source image to draw into the destination canvas.
 * @param {number} sy The Y coordinate of the top left corner of the
 * 		sub-rectangle of the source image to draw into the destination canvas.
 * @param {number} sWidth The width of the sub-rectangle of the source image to
 * 		draw into the destination canvas.
 * @param {number} sHeight The height of the sub-rectangle of the source image
 * 		to draw into the destination context.
 * @param {number} dx The X coordinate in the destination canvas at which to
 * 		place the top-left corner of the source image.
 * @param {number} dy The Y coordinate in the destination canvas at which to
 * 		place the top-left corner of the source image.
 * @param {number} dWidth The width to draw the image in the destination
 * 		canvas. This allows scaling of the drawn image.
 * @param {number} dHeight The height to draw the image in the destination
 * 		canvas. This allows scaling of the drawn image.
 */
declare function image(img: p5.Image, sx?: number, sy?: number,
	sWidth?: number, sHeight?: number, dx?: number, dy?: number,
	dWidth?: number, dHeight?: number): void;

/**
 * Sets the fill value for displaying images. Images can be tinted to specified
 * colors or made transparent by including an alpha value.
 * 
 * To apply transparency to an image without affecting its color, use white as
 * the tint color and specify an alpha value. For instance, tint(255, 128) will
 * make an image 50% transparent (assuming the default alpha range of 0-255,
 * which can be changed with colorMode()).
 * 
 * The value for the gray parameter must be less than or equal to the current
 * maximum value as specified by colorMode(). The default maximum value is 255.
 * 
 * @param {(number | number[])} v1 gray value, red or hue value (depending on
 * 		the current color mode), or color Array
 * @param {number} v2 green or saturation value (depending on the current color
 * 		mode)
 * @param {number} v3 blue or brightness value (depending on the current color
 * 		mode)
 * @param {number} a opacity of the background
 */
declare function tint(v1: number | number[], v2?: number, v3?: number,
	a?: number): void;

/**
 * Removes the current fill value for displaying images and reverts to
 * displaying images with their original hues.
 */
declare function noTint(): void;

/**
 * Set image mode. Modifies the location from which images are drawn by changing
 * the way in which parameters given to image() are interpreted. The default
 * mode is imageMode(CORNER), which interprets the second and third parameters
 * of image() as the upper-left corner of the image. If two additional
 * parameters are specified, they are used to set the image's width and height.
 * 
 * imageMode(CORNERS) interprets the second and third parameters of image() as
 * the location of one corner, and the fourth and fifth parameters as the
 * opposite corner.
 * 
 * imageMode(CENTER) interprets the second and third parameters of image() as
 * the image's center point. If two additional parameters are specified, they
 * are used to set the image's width and height.
 * 
 * @param {string} mode either CORNER, CORNERS, or CENTER
 */
declare function imageMode(mode: string): void;

/**
 * Apply the current tint color to the input image, return the resulting
 * canvas. Intended to be private; do not invoke.
 * 
 * @param {p5.Image} img The image to be tinted
 */
declare function _getTintedImageCanvas(img: p5.Image): HTMLCanvasElement;

//
// Image -> Pixels
//

/**
 * Copies a region of pixels from one image to another, using a specified blend
 * mode to do the operation.
 * 
 * Available blend modes are: BLEND | DARKEST | LIGHTEST | DIFFERENCE |
 * MULTIPLY| EXCLUSION | SCREEN | REPLACE | OVERLAY | HARD_LIGHT | SOFT_LIGHT |
 * DODGE | BURN | ADD | NORMAL
 * 
 * @param {p5.Image} srcImage source image
 * @param {number} sx X coordinate of the source's upper left corner
 * @param {number} sy Y coordinate of the source's upper left corner
 * @param {number} sw source image width
 * @param {number} sh source image height
 * @param {number} dx X coordinate of the destination's upper left corner
 * @param {number} dy Y coordinate of the destination's upper left corner
 * @param {number} dw destination image width
 * @param {number} dh destination image height
 * @param {string} blendMode the blend mode
 */
declare function blend(srcImage: p5.Image, sx: number, sy: number, sw: number,
	sh: number, dx: number, dy: number, dw: number, dh: number,
	blendMode: string): void;

/**
 * Copies a region of the canvas to another region of the canvas and copies a
 * region of pixels from an image used as the srcImg parameter into the canvas
 * srcImage is specified this is used as the source. If the source and
 * destination regions aren't the same size, it will automatically resize
 * source pixels to fit the specified target region.
 * 
 * @param {p5.Image} srcImage source image
 * @param {number} sx X coordinate of the source's upper left corner
 * @param {number} sy Y coordinate of the source's upper left corner
 * @param {number} sw source image width
 * @param {number} sh source image height
 * @param {number} dx X coordinate of the destination's upper left corner
 * @param {number} dy Y coordinate of the destination's upper left corner
 * @param {number} dw destination image width
 * @param {number} dh destination image height
 */
declare function copy(srcImage: p5.Image, sx: number, sy: number, sw: number,
	sh: number, dx: number, dy: number, dw: number, dh: number): void;

/**
 * Applies a filter to the canvas.
 * 
 * The presets options are:
 * 
 * THRESHOLD Converts the image to black and white pixels depending if they are
 * above or below the threshold defined by the level parameter. The parameter
 * must be between 0.0 (black) and 1.0 (white). If no level is specified, 0.5
 * is used.
 * 
 * GRAY Converts any colors in the image to grayscale equivalents. No parameter
 * is used.
 * 
 * OPAQUE Sets the alpha channel to entirely opaque. No parameter is used.
 * 
 * INVERT Sets each pixel to its inverse value. No parameter is used.
 * 
 * POSTERIZE Limits each channel of the image to the number of colors specified
 * as the parameter. The parameter can be set to values between 2 and 255, but
 * results are most noticeable in the lower ranges.
 * 
 * BLUR Executes a Guassian blur with the level parameter specifying the extent
 * of the blurring. If no parameter is used, the blur is equivalent to Guassian
 * blur of radius 1. Larger values increase the blur.
 * 
 * ERODE Reduces the light areas. No parameter is used.
 * 
 * DILATE Increases the light areas. No parameter is used.
 * 
 * @param {string} filterType a preset option
 * @param {number} filterParam an optional parameter unique to each filter, see
 * 		above
 */
declare function filter(filterType: string, filterParam: number): void;

/**
 * Grabs an entire image.
 * 
 * To get the numbers scaled according to the current color ranges and taking
 * into account colorMode, use getColor instead of get.
 */
declare function get(): p5.Image;

/**
 * Returns an array of [R,G,B,A] values for any pixel. Use the x and y
 * parameters to get the value of one pixel.
 * 
 * If the pixel requested is outside of the image window, [0,0,0,255] is
 * returned. To get the numbers scaled according to the current color ranges
 * and taking into account colorMode, use getColor instead of get.
 * 
 * @param {number} x x-coordinate of the pixel
 * @param {number} y y-coordinate of the pixel
 */
declare function get(x: number, y: number): number[];

/**
 * Grabs a section of an image. When getting an image, the x and y parameters
 * define the coordinates for the upper-left corner of the image, regardless of
 * the current imageMode().
 * 
 * If the pixel requested is outside of the image window, [0,0,0,255] is
 * returned. To get the numbers scaled according to the current color ranges
 * and taking into account colorMode, use getColor instead of get.
 * 
 * @param {number} x x-coordinate of the pixel
 * @param {number} y y-coordinate of the pixel
 * @param {number} w width
 * @param {number} h height
 */
declare function get(x: number, y: number, w: number, h: number): p5.Image;

/**
 * Loads the pixel data for the display window into the pixels[] array. This
 * function must always be called before reading from or writing to pixels[].
 */
declare function loadPixels(): void;

/**
 * Changes the color of any pixel, or writes an image directly to the display
 * window.
 * 
 * The x and y parameters specify the pixel to change and the c parameter
 * specifies the color value. This can be a p5.Color object, or [R, G, B, A]
 * pixel array. It can also be a single grayscale value. When setting an image,
 * the x and y parameters define the coordinates for the upper-left corner of
 * the image, regardless of the current imageMode().
 * 
 * After using set(), you must call updatePixels() for your changes to appear.
 * This should be called once all pixels have been set.
 * 
 * @param {number} x x-coordinate of the pixel
 * @param {number} y y-coordinate of the pixel
 * @param {(number | number[] | p5.Color | p5.Image)} c insert a grayscale
 * 		value | a pixel array | a p5.Color object | a p5.Image to copy
 */
declare function set(x: number, y: number,
	c: number | number[] | p5.Color | p5.Image): void;

/**
 * Updates the display window with the data in the pixels[] array. Use in
 * conjunction with loadPixels(). If you're only reading pixels from the array,
 * there's no need to call updatePixels() — updating is only necessary to apply
 * changes. updatePixels() should be called anytime the pixels array is
 * manipulated or set() is called.
 */
declare function updatePixels(): void;

/**
 * Updates the display window with the data in the pixels[] array. Use in
 * conjunction with loadPixels(). If you're only reading pixels from the array,
 * there's no need to call updatePixels() — updating is only necessary to apply
 * changes. updatePixels() should be called anytime the pixels array is
 * manipulated or set() is called.
 * 
 * @param {number} x x-coordinate of the upper-left corner of region to update
 * @param {number} y y-coordinate of the upper-left corner of region to update
 * @param {number} w width of region to update
 * @param {number} h height of region to update
 */
declare function updatePixels(x: number, y: number, w?: number,
	h?: number): void;

//
// IO -> Input
//

/**
 * Loads an opentype font file (.otf, .ttf) from a file or a URL, and returns a
 * PFont Object. This method is asynchronous, meaning it may not finish before
 * the next line in your sketch is executed.
 * 
 * The path to the font should be relative to the HTML file that links in your
 * sketch. Loading an from a URL or other remote location may be blocked due to
 * your browser's built-in security.
 * 
 * @param {string} path name of the file or url to load
 * @param {(font: p5.Font) => void} callback function to be executed after
 * 		loadFont() completes
 * @param {(e: Error) => void} errorCallback function to be executed when
 * 		loadFont() fails
 */
declare function loadFont(path: string, callback?: (font: p5.Font) => void,
	errorCallback?: (e: Error) => void): p5.Font;

/**
 * Not implemented. Currently throws an error.
 */
declare function createInput(): never;

/**
 * Not implemented. Currently throws an error.
 */
declare function createReader(): never;

/**
 * Not implemented. Currently throws an error.
 */
declare function loadBytes(): never;

/**
 * Loads a JSON file from a file or a URL, and returns an Object or Array. This
 * method is asynchronous, meaning it may not finish before the next line in
 * your sketch is executed.
 * 
 * @param {string} path name of the file or url to load
 * @param {(data: any) => void} callback function to be executed after
 * 		loadJSON() completes, data is passed in as first argument
 * @param {(resp: any) => void} errorCallback function to be executed if there
 * 		is an error, response is passed in as first argument
 * @param {string} datatype "json" or "jsonp"
 */
declare function loadJSON(path: string, callback?: (data: any) => void,
	errorCallback?: (response: any) => void, datatype?: string): any;

/**
 * Reads the contents of a file and creates a String array of its individual
 * lines. If the name of the file is used as the parameter, as in the above
 * example, the file must be located in the sketch directory/folder.
 * 
 * Alternatively, the file maybe be loaded from anywhere on the local computer
 * using an absolute path (something that starts with / on Unix and Linux, or a
 * drive letter on Windows), or the filename parameter can be a URL for a file
 * found on a network.
 * 
 * This method is asynchronous, meaning it may not finish before the next line
 * in your sketch is executed.
 * 
 * @param {string} filename name of the file or url to load
 * @param {(data: string[]) => void} callback function to be executed after 
 * 		loadStrings() completes, Array is passed in as first argument
 * @param {(response: XMLHttpRequest) => void} errorCallback function to be
 * 		executed if there is an error, response is passed in as first argument
 */
declare function loadStrings(filename: string,
	callback?: (data: string[]) => void,
	errorCallback?: (response: XMLHttpRequest) => void): string[];

/**
 * Reads the contents of a file or URL and creates a p5.Table object with its
 * values. If a file is specified, it must be located in the sketch's "data"
 * folder. The filename parameter can also be a URL to a file found online. By
 * default, the file is assumed to be comma-separated (in CSV format). Table
 * only looks for a header row if the 'header' option is included.
 * 
 * Possible options include:
 * 
 * csv - parse the table as comma-separated values
 * 
 * tsv - parse the table as tab-separated values
 * 
 * header - this table has a header (title) row
 * 
 * When passing in multiple options, pass them in as separate parameters,
 * seperated by commas. For example:
 * 
 * loadTable("my_csv_file.csv", "csv", "header")
 * 
 * All files loaded and saved use UTF-8 encoding.
 * 
 * This method is asynchronous, meaning it may not finish before the next line
 * in your sketch is executed. Calling loadTable() inside preload() guarantees
 * to complete the operation before setup() and draw() are called.
 * 
 * Outside of preload(), you may supply a callback function to handle the
 * object:
 * 
 * @param {string} filename name of the file or URL to load
 * @param {...any[]} params "header" "csv" "tsv", or function to be executed
 * 		after loadTable() completes. On success, the Table object is passed in
 * 		as the first argument; otherwise, false is passed in.
 */
declare function loadTable(filename: string, ...params: any[]): p5.Table;

/**
 * Reads the contents of a file and creates an XML object with its values. If
 * the name of the file is used as the parameter, as in the above example, the
 * file must be located in the sketch directory/folder.
 * 
 * Alternatively, the file maybe be loaded from anywhere on the local computer
 * using an absolute path (something that starts with / on Unix and Linux, or a
 * drive letter on Windows), or the filename parameter can be a URL for a file
 * found on a network.
 * 
 * This method is asynchronous, meaning it may not finish before the next line
 * in your sketch is executed. Calling loadXML() inside preload() guarantees to
 * complete the operation before setup() and draw() are called.
 * 
 * Outside of preload(), you may supply a callback function to handle the
 * object.
 * 
 * @param {string} filename name of the file or URL to load
 * @param {(xml: p5.XML) => void} callback function to be executed after
 * 		loadXML() completes, XML object is passed in as first argument
 * @param {(response: any) => void} errorCallback function to be executed if
 * 		there is an error, response is passed in as first argument
 */
declare function loadXML(filename: string,
	callback?: (xml: p5.XML) => void,
	errorCallback?: (response: any) => void): p5.XML;

/**
 * Not implemented. Currently throws an error.
 */
declare function selectFolder(): never;

/**
 * Not implemented. Currently throws an error.
 */
declare function selectInput(): never;

/**
 * Method for executing an HTTP GET request. If data type is not specified, p5
 * will try to guess based on the URL, defaulting to text.
 * 
 * @param {string} path name of the file or url to load
 * @param {*} data param data passed sent with request
 * @param {string} datatype "json", "jsonp", "xml", or "text"
 * @param {(data: any) => void} callback function to be executed after
 * 		httpGet() completes, data is passed in as first argument
 * @param {(response: any) => void} errorCallback function to be executed if
 * 		there is an error, response is passed in as first argument
 */
declare function httpGet(path: string, data?: any, datatype?: string,
	callback?: (data: any) => void,
	errorCallback?: (response: any) => void): void;

/**
 * Method for executing an HTTP POST request. If data type is not specified, p5
 * will try to guess based on the URL, defaulting to text.
 * 
 * @param {string} path name of the file or url to load
 * @param {*} data param data passed sent with request
 * @param {string} datatype "json", "jsonp", "xml", or "text"
 * @param {(data: any) => void} callback function to be executed after
 * 		httpGet() completes, data is passed in as first argument
 * @param {(response: any) => void} errorCallback function to be executed if
 * 		there is an error, response is passed in as first argument
 */
declare function httpPost(path: string, data?: any, datatype?: string,
	callback?: (data: any) => void,
	errorCallback?: (response: any) => void): void;

/**
 * Method for executing an HTTP request. If data type is not specified, p5 will
 * try to guess based on the URL, defaulting to text.
 * 
 * @param {*} reqwestObj
 */
declare function httpDo(reqwestObj: any): void;

/**
 * Method for executing an HTTP request. If data type is not specified, p5 will
 * try to guess based on the URL, defaulting to text.
 * 
 * You may also pass a single object specifying all parameters for the request
 * following the examples inside the reqwest() calls here:
 * 
 * https://github.com/ded/reqwest#api
 * 
 * @param {string} path name of the file or url to load
 * @param {string} method either "GET", "POST", or "PUT", defaults to "GET"
 * @param {*} data param data passed sent with request
 * @param {string} datatype "json", "jsonp", "xml", or "text"
 * @param {(data: any) => void} callback function to be executed after
 * 		httpGet() completes, data is passed in as first argument
 * @param {(response: any) => void} errorCallback function to be executed if
 * 		there is an error, response is passed in as first argument
 */
declare function httpDo(path: string, method?: string, data?: any,
	datatype?: string, callback?: (data: any) => void,
	errorCallback?: (response: any) => void): void;

/**
 * Checks if we are in preload and returns the last arg which will be the
 * _decrementPreload function if called from a loadX() function.  Should only
 * be used in loadX() functions. Intended to be private; do not invoke.
 * 
 * @param {...any[]} args
 */
declare function _getDecrementPreload(...args: any[]): any;

//
// IO -> Output
//

/**
 * Not implemented. Currently throws an error.
 */
declare function beginRaw(): never;

/**
 * Not implemented. Currently throws an error.
 */
declare function beginRecord(): never;

/**
 * Not implemented. Currently throws an error.
 */
declare function createOutput(): never;

declare function createWriter(name: string, extension: string): p5.PrintWriter;

/**
 * Not implemented. Currently throws an error.
 */
declare function endRaw(): never;

/**
 * Not implemented. Currently throws an error.
 */
declare function endRecord(): never;

/**
 * Not implemented. Currently throws an error.
 */
declare function saveBytes(): never;

/**
 * Save an image, text, json, csv, wav, or html. Prompts download to the
 * client's computer. Note that it is not recommended to call save() within
 * draw if it's looping, as the save() function will open a new save dialog
 * every frame.
 * 
 * The default behavior is to save the canvas as an image. You can optionally
 * specify a filename.
 * 
 * Alternately, the first parameter can be a pointer to a canvas p5.Element, an
 * Array of Strings, an Array of JSON, a JSON object, a p5.Table, a p5.Image,
 * or a p5.SoundFile (requires p5.sound). The second parameter is a filename
 * (including extension). The third parameter is for options specific to this
 * type of object. This method will save a file that fits the given paramaters.
 * 
 * @param {*} objectOrFilename If filename is provided, will save canvas as an
 * 		image with either png or jpg extension depending on the filename. If
 * 		object is provided, will save depending on the object and filename.
 * @param {string} filename If an object is provided as the first parameter,
 * 		then the second parameter indicates the filename, and should include an
 * 		appropriate file extension.
 * @param {(boolean | string)} options Additional options depend on filetype.
 * 		For example, when saving JSON, true indicates that the output will be
 * 		optimized for filesize, rather than readability.
 */
declare function save(objectOrFilename?: any, filename?: string,
	options?: boolean | string): void;

/**
 * Writes the contents of an Array or a JSON object to a .json file. The file
 * saving process and location of the saved file will vary between web browsers.
 * 
 * @param {*} json
 * @param {string} filename filename for output
 * @param {boolean} optimize If true, removes line breaks and spaces from the
 * 		output file to optimize filesize (but not readability).
 */
declare function saveJSON(json: any, filename: string,
	optimize?: boolean): void;

/**
 * Writes the contents of an Array or a JSON object to a .json file. The file
 * saving process and location of the saved file will vary between web
 * browsers. Synonymous to saveJSON.
 * 
 * @param {*} json
 * @param {string} filename filename for output
 * @param {boolean} optimize If true, removes line breaks and spaces from the
 * 		output file to optimize filesize (but not readability).
 */
declare function saveJSONObject(json: any, filename: string,
	optimize?: boolean): void;

/**
 * Writes the contents of an Array or a JSON object to a .json file. The file
 * saving process and location of the saved file will vary between web
 * browsers. Synonymous to saveJSON.
 * 
 * @param {*} json
 * @param {string} filename filename for output
 * @param {boolean} optimize If true, removes line breaks and spaces from the
 * 		output file to optimize filesize (but not readability).
 */
declare function saveJSONArray(json: any, filename: string,
	optimize?: boolean): void;

/**
 * Not implemented. Currently throws an error.
 */
declare function saveBytes(): never;

/**
 * Not implemented. Currently throws an error.
 */
declare function saveStream(): never;

/**
 * Writes an array of Strings to a text file, one line per String. The file
 * saving process and location of the saved file will vary between web browsers.
 * 
 * @param {string[]} list string array to be written
 * @param {string} filename filename for output
 * @param {string} extension file extension, defaults to 'txt'
 */
declare function saveStrings(list: string[], filename: string,
	extension?: string): void;

/**
 * Not implemented. Currently throws an error.
 */
declare function saveXML(): never;

/**
 * Not implemented. Currently throws an error.
 */
declare function selectOutput(): never;

/**
 * Writes the contents of a Table object to a file. Defaults to a text file
 * with comma-separated-values ('csv') but can also use tab separation ('tsv'),
 * or generate an HTML table ('html'). The file saving process and location of
 * the saved file will vary between web browsers.
 * 
 * @param {p5.Table} Table the Table object to save to a file
 * @param {string} filename the filename to which the Table should be saved
 * @param {string} options can be one of "tsv", "csv", or "html"
 */
declare function saveTable(Table: p5.Table, filename: string,
	options?: string): void;

/**
 * Generate a blob of file data as a url to prepare for download. Accepts an
 * array of data, a filename, and an extension (optional). This is a private
 * function because it does not do any formatting, but it is used by
 * saveStrings, saveJSON, saveTable etc.
 * 
 * @param {any[]} dataToDownload
 * @param {string} filename
 * @param {string} extension
 */
declare function writeFile(dataToDownload: any[], filename: string,
	extension?: string): void;

/**
 * Forces download. Accepts a url to filedata/blob, a filename, and an
 * extension (optional).
 * 
 * This is a private function because it does not do any formatting, but it is
 * used by saveStrings, saveJSON, saveTable etc.
 * 
 * @param {string} href i.e. an href generated by createObjectURL
 * @param {string} filename
 * @param {string} extension
 */
declare function downloadFile(href: string, filename: string,
	extension: string): void;

/**
 * Returns a file extension, or another string if the provided parameter has no
 * extension.
 * 
 * @param {string} filename
 * @param {string} extension
 */
declare function _checkFileExtension(filename: string,
	extension: string): string[];

/**
 * Returns true if the browser is Safari, false if not. Safari makes trouble
 * for downloading files.
 */
declare function _isSafari(): boolean;

//
// IO -> Time & Date
//

/**
 * p5.js communicates with the clock on your computer. The day() function
 * returns the current day as a value from 1 - 31.
 */
declare function day(): number;

/**
 * p5.js communicates with the clock on your computer. The hour() function
 * returns the current hour as a value from 0 - 23.
 */
declare function hour(): number;

/**
 * p5.js communicates with the clock on your computer. The minute() function
 * returns the current minute as a value from 0 - 59.
 */
declare function minute(): number;

/**
 * Returns the number of milliseconds (thousandths of a second) since starting
 * the program. This information is often used for timing events and animation
 * sequences.
 */
declare function millis(): number;

/**
 * p5.js communicates with the clock on your computer. The month() function
 * returns the current month as a value from 1 - 12.
 */
declare function month(): number;

/**
 * p5.js communicates with the clock on your computer. The second() function
 * returns the current second as a value from 0 - 59.
 */
declare function second(): number;

/**
 * p5.js communicates with the clock on your computer. The year() function
 * returns the current year as an integer (2014, 2015, 2016, etc).
 */
declare function year(): number;

//
// Math
//

/**
 * Creates a new p5.Vector (the datatype for storing vectors). This provides a
 * two or three dimensional vector, specifically a Euclidean (also known as
 * geometric) vector. A vector is an entity that has both magnitude and
 * direction.
 * 
 * @param {number} x x component of the vector
 * @param {number} y y component of the vector
 * @param {number} z z component of the vector
 */
declare function createVector(x: number, y: number, z: number): p5.Vector;

//
// Math -> Calculation
//

/**
 * Calculates the absolute value (magnitude) of a number. Maps to Math.abs(). The absolute value of a number is always positive.
 * 
 * @param {number} n number to compute
 */
declare function abs(n: number): number;

/**
 * Calculates the closest int value that is greater than or equal to the value
 * of the parameter. Maps to Math.ceil(). For example, ceil(9.03) returns the
 * value 10.
 * 
 * @param {number} n number to round up
 */
declare function ceil(n: number): number;

/**
 * Constrains a value between a minimum and maximum value.
 * 
 * @param {number} n number to constrain
 * @param {number} low minimum limit
 * @param {number} high maximum limit
 */
declare function constrain(n: number, low: number, high: number): number;

/**
 * Calculates the distance between two points.
 * 
 * @param {number} x1 x-coordinate of the first point
 * @param {number} y1 y-coordinate of the first point
 * @param {number} x2 x-coordinate of the second point
 * @param {number} y2 y-coordinate of the second point
 */
declare function dist(x1: number, y1: number, x2: number, y2: number): number;

/**
 * Calculates the distance between two points.
 * 
 * @param {number} x1 x-coordinate of the first point
 * @param {number} y1 y-coordinate of the first point
 * @param {number} z1 z-coordinate of the first point
 * @param {number} x2 x-coordinate of the second point
 * @param {number} y2 y-coordinate of the second point
 * @param {number} z2 z-coordinate of the second point
 */
declare function dist(x1: number, y1: number, z1: number, x2: number,
	y2: number, z2: number): number;

/**
 * Returns Euler's number e (2.71828...) raised to the power of the n
 * parameter. Maps to Math.exp().
 * 
 * @param {number} n exponent to raise
 */
declare function exp(n: number): number;

/**
 * Calculates the closest int value that is less than or equal to the value of
 * the parameter. Maps to Math.floor().
 * 
 * @param {number} n number to round down
 */
declare function floor(n: number): number;

/**
 * Calculates a number between two numbers at a specific increment. The amt
 * parameter is the amount to interpolate between the two values where 0.0
 * equal to the first point, 0.1 is very near the first point, 0.5 is half-way
 * in between, etc. The lerp function is convenient for creating motion along a
 * straight path and for drawing dotted lines.
 * 
 * @param {number} start first value
 * @param {number} stop second value
 * @param {number} amt number between 0.0 and 1.0
 */
declare function lerp(start: number, stop: number, amt: number): number;

/**
 * Calculates the natural logarithm (the base-e logarithm) of a number. This
 * function expects the n parameter to be a value greater than 0.0. Maps to
 * Math.log().
 * 
 * @param {number} n number greater than 0
 */
declare function log(n: number): number;

/**
 * Calculates the magnitude (or length) of a vector. A vector is a direction in
 * space commonly used in computer graphics and linear algebra. Because it has
 * no "start" position, the magnitude of a vector can be thought of as the
 * distance from the coordinate 0,0 to its x,y value. Therefore, mag() is a
 * shortcut for writing dist(0, 0, x, y).
 * 
 * @param {number} a first value
 * @param {number} b second value
 */
declare function mag(a: number, b: number): number;

/**
 * Re-maps a number from one range to another.
 * 
 * In the first example above, the number 25 is converted from a value in the
 * range of 0 to 100 into a value that ranges from the left edge of the
 * window (0) to the right edge (width).
 * 
 * @param {number} value the incoming value to be converted
 * @param {number} start1 lower bound of the value's current range
 * @param {number} stop1 upper bound of the value's current range
 * @param {number} start2 lower bound of the value's target range
 * @param {number} stop2 upper bound of the value's target range
 */
declare function map(value: number, start1: number, stop1: number,
	start2: number, stop2: number): number;

/**
 * Determines the largest value in a sequence of numbers, and then returns that
 * value. max() accepts any number of Number parameters, or an Array of any
 * length.
 * 
 * @param {...number[]} n0 Numbers to compare
 */
declare function max(...n0: number[]): number;

/**
 * Determines the largest value in a sequence of numbers, and then returns that
 * value. max() accepts any number of Number parameters, or an Array of any
 * length.
 * 
 * @param {number[]} n0 Numbers to compare
 */
declare function max(n0: number[]): number;

/**
 * Determines the smallest value in a sequence of numbers, and then returns
 * that value. min() accepts any number of Number parameters, or an Array of
 * any length.
 * 
 * @param {...number[]} n0 Numbers to compare
 */
declare function min(...n0: number[]): number;

/**
 * Determines the smallest value in a sequence of numbers, and then returns
 * that value. min() accepts any number of Number parameters, or an Array of
 * any length.
 * 
 * @param {number[]} n0 Numbers to compare
 */
declare function min(n0: number[]): number;

/**
 * Normalizes a number from another range into a value between 0 and 1.
 * Identical to map(value, low, high, 0, 1). Numbers outside of the range are
 * not clamped to 0 and 1, because out-of-range values are often intentional
 * and useful.
 * 
 * @param {number} value incoming value to be normalized
 * @param {number} start lower bound of the value's current range
 * @param {number} stop upper bound of the value's current range
 */
declare function norm(value: number, start: number, stop: number): number;

/**
 * Facilitates exponential expressions. The pow() function is an efficient way
 * of multiplying numbers by themselves (or their reciprocals) in large
 * quantities. For example, pow(3, 5) is equivalent to the expression 33333 and
 * pow(3, -5) is equivalent to 1 / 33333. Maps to Math.pow().
 * 
 * @param {number} n base of the exponential expression
 * @param {number} e power by which to raise the base
 */
declare function pow(n: number, e: number): number;

/**
 * Calculates the integer closest to the n parameter. For example, round(133.8)
 * returns the value 134. Maps to Math.round().
 * 
 * @param {number} n number to round
 */
declare function round(n: number): number;

/**
 * Squares a number (multiplies a number by itself). The result is always a
 * positive number, as multiplying two negative numbers always yields a
 * positive result. For example, -1 * -1 = 1.
 * 
 * @param {number} n number to square
 */
declare function sq(n: number): number;

/**
 * Calculates the square root of a number. The square root of a number is
 * always positive, even though there may be a valid negative root. The square
 * root s of number a is such that s*s = a. It is the opposite of squaring.
 * Maps to Math.sqrt().
 * 
 * @param {number} n non-negative number to square root
 */
declare function sqrt(n: number): number;

//
// Math -> Noise
//

/**
 * Returns the Perlin noise value at specified coordinates. Perlin noise is a
 * random sequence generator producing a more natural ordered, harmonic
 * succession of numbers compared to the standard random() function. It was
 * invented by Ken Perlin in the 1980s and been used since in graphical
 * applications to produce procedural textures, natural motion, shapes,
 * terrains etc.
 * 
 * The main difference to the random() function is that Perlin noise is defined
 * in an infinite n-dimensional space where each pair of coordinates
 * corresponds to a fixed semi-random value (fixed only for the lifespan of the
 * program; see the noiseSeed() function). p5.js can compute 1D, 2D and 3D
 * noise, depending on the number of coordinates given. The resulting value
 * will always be between 0.0 and 1.0. The noise value can be animated by
 * moving through the noise space as demonstrated in the example above. The 2nd
 * and 3rd dimension can also be interpreted as time.
 * 
 * The actual noise is structured similar to an audio signal, in respect to the
 * function's use of frequencies. Similar to the concept of harmonics in
 * physics, perlin noise is computed over several octaves which are added
 * together for the final result.
 * 
 * Another way to adjust the character of the resulting sequence is the scale
 * of the input coordinates. As the function works within an infinite space the
 * value of the coordinates doesn't matter as such, only the distance between
 * successive coordinates does (eg. when using noise() within a loop). As a
 * general rule the smaller the difference between coordinates, the smoother
 * the resulting noise sequence will be. Steps of 0.005-0.03 work best for most
 * applications, but this will differ depending on use.
 * 
 * @param {number} x x-coordinate in noise space
 * @param {number} y y-coordinate in noise space
 * @param {number} z z-coordinate in noise space
 */
declare function noise(x: number, y: number, z: number): number;

/**
 * Adjusts the character and level of detail produced by the Perlin noise
 * function. Similar to harmonics in physics, noise is computed over several
 * octaves. Lower octaves contribute more to the output signal and as such
 * define the overall intensity of the noise, whereas higher octaves create
 * finer grained details in the noise sequence.
 * 
 * By default, noise is computed over 4 octaves with each octave contributing
 * exactly half than its predecessor, starting at 50% strength for the 1st
 * octave. This falloff amount can be changed by adding an additional function
 * parameter. Eg. a falloff factor of 0.75 means each octave will now have 75%
 * impact (25% less) of the previous lower octave. Any value between 0.0 and
 * 1.0 is valid, however note that values greater than 0.5 might result in
 * greater than 1.0 values returned by noise().
 * 
 * By changing these parameters, the signal created by the noise() function can
 * be adapted to fit very specific needs and characteristics.
 * 
 * @param {number} lod number of octaves to be used by the noise
 * @param {number} falloff falloff factor for each octave
 */
declare function noiseDetail(lod: number, falloff: number): void;

/**
 * Sets the seed value for noise(). By default, noise() produces different
 * results each time the program is run. Set the value parameter to a constant
 * to return the same pseudo-random numbers each time the software is run.
 * 
 * @param {number} seed the seed value
 */
declare function noiseSeed(seed: number): void;

//
// Math -> Random
//

/**
 * Sets the seed value for random().
 * 
 * By default, random() produces different results each time the program is
 * run. Set the seed parameter to a constant to return the same pseudo-random
 * numbers each time the software is run.
 * 
 * @param {number} seed the seed value
 */
declare function randomSeed(seed: number): void;

/**
 * Return a random floating-point number.
 * 
 * Takes either 0, 1 or 2 arguments.
 * 
 * If no argument is given, returns a random number from 0 up to (but not
 * including) 1.
 * 
 * If one argument is given and it is a number, returns a random number from 0
 * up to (but not including) the number.
 * 
 * If one argument is given and it is an array, returns a random element from
 * that array.
 * 
 * If two arguments are given, returns a random number from the first argument
 * up to (but not including) the second argument.
 * 
 * @param {number} min the lower bound (inclusive)
 * @param {number} max the upper bound (exclusive)
 */
declare function random(min?: number, max?: number): number;

/**
 * Return a random floating-point number.
 * 
 * Takes either 0, 1 or 2 arguments.
 * 
 * If no argument is given, returns a random number from 0 up to (but not
 * including) 1.
 * 
 * If one argument is given and it is a number, returns a random number from 0
 * up to (but not including) the number.
 * 
 * If one argument is given and it is an array, returns a random element from
 * that array.
 * 
 * If two arguments are given, returns a random number from the first argument
 * up to (but not including) the second argument.
 * 
 * @param {any[]} choices the array to choose from
 */
declare function random(choices: any[]): any;

/**
 * Returns a random number fitting a Gaussian, or normal, distribution. There
 * is theoretically no minimum or maximum value that randomGaussian() might
 * return. Rather, there is just a very low probability that values far from
 * the mean will be returned; and a higher probability that numbers near the
 * mean will be returned.
 * 
 * Takes either 0, 1 or 2 arguments. If no args, returns a mean of 0 and
 * standard deviation of 1. If one arg, that arg is the mean (standard
 * deviation is 1). If two args, first is mean, second is standard deviation.
 * 
 * @param {number} mean the mean
 * @param {number} sd the standard deviation
 */
declare function randomGaussian(mean: number, sd: number): number;

//
// Math -> Trigonometry
//

/**
 * The inverse of cos(), returns the arc cosine of a value. This function
 * expects the values in the range of -1 to 1 and values are returned in the
 * range 0 to PI (3.1415927).
 * 
 * @param {number} value the value whose arc cosine is to be returned
 */
declare function acos(value: number): number;

/**
 * The inverse of sin(), returns the arc sine of a value. This function expects
 * the values in the range of -1 to 1 and values are returned in the range
 * -PI/2 to PI/2.
 * 
 * @param {number} value the value whose arc sine is to be returned
 */
declare function asin(value: number): number;

/**
 * The inverse of tan(), returns the arc tangent of a value. This function
 * expects the values in the range of -Infinity to Infinity (exclusive) and
 * values are returned in the range -PI/2 to PI/2.
 * 
 * @param {number} value the value whose arc tangent is to be returned
 */
declare function atan(value: number): number;

/**
 * Calculates the angle (in radians) from a specified point to the coordinate
 * origin as measured from the positive x-axis. Values are returned as a float
 * in the range from PI to -PI. The atan2() function is most often used for
 * orienting geometry to the position of the cursor.
 * 
 * Note: The y-coordinate of the point is the first parameter, and the
 * x-coordinate is the second parameter, due the the structure of calculating
 * the tangent.
 * 
 * @param {number} y y-coordinate of the point
 * @param {number} x x-coordinate of the point
 */
declare function atan2(y: number, x: number): number;

/**
 * Calculates the cosine of an angle. This function takes into account the
 * current angleMode. Values are returned in the range -1 to 1.
 * 
 * @param {number} angle the angle
 */
declare function cos(angle: number): number;

/**
 * Calculates the sine of an angle. This function takes into account the
 * current angleMode. Values are returned in the range -1 to 1.
 * 
 * @param {number} angle the angle
 */
declare function sin(angle: number): number;

/**
 * Calculates the tangent of an angle. This function takes into account the
 * current angleMode. Values are returned in the range -1 to 1.
 * 
 * @param {number} angle the angle
 */
declare function tan(angle: number): number;

/**
 * Converts a radian measurement to its corresponding value in degrees. Radians
 * and degrees are two ways of measuring the same thing. There are 360 degrees
 * in a circle and 2*PI radians in a circle.For example,
 * 90° = PI/2 = 1.5707964.
 * 
 * @param {number} radians the radians value to convert to degrees
 */
declare function degrees(radians: number): number;

/**
 * Converts a degree measurement to its corresponding value in radians. Radians
 * and degrees are two ways of measuring the same thing. There are 360 degrees
 * in a circle and 2*PI radians in a circle. For example,
 * 90° = PI/2 = 1.5707964.
 * 
 * @param {number} degrees the degree value to convert to radians
 */
declare function radians(degrees: number): number;

/**
 * Sets the current mode of p5 to given mode. Default mode is RADIANS.
 * 
 * @param {string} mode either RADIANS or DEGREES
 */
declare function angleMode(mode: string): void;

//
// Typography -> Attributes
//

/**
 * Gets the current alignment for drawing text.
 */
declare function textAlign(): {
	horizontal: number,
	vertical: number
};

/**
 * Sets the current alignment for drawing text. Accepts two arguments:
 * horizAlign (LEFT, CENTER, or RIGHT) and
 * vertAlign (TOP, BOTTOM, CENTER, or BASELINE).
 * 
 * The horizAlign parameter is in reference to the x value of the text()
 * function, while the vertAlign parameter is in reference to the y value.
 * 
 * So if you write textAlign(LEFT), you are aligning the left edge of your text
 * to the x value you give in text(). If you write textAlign(RIGHT, TOP), you
 * are aligning the right edge of your text to the x value and the top of edge
 * of the text to the y value.
 * 
 * @param {string} horizAlign horizontal alignment, either LEFT, CENTER, or
 * 		RIGHT
 * @param {string} vertAlign vertical alignment, either TOP, BOTTOM, CENTER, or
 * 		BASELINE
 */
declare function textAlign(horizAlign: string, vertAlign? : string): p5;

/**
 * Sets/gets the spacing, in pixels, between lines of text. This setting will
 * be used in all subsequent calls to the text() function.
 */
declare function textLeading(): number;

/**
 * Sets/gets the spacing, in pixels, between lines of text. This setting will
 * be used in all subsequent calls to the text() function.
 * 
 * @param {number} leading the size in pixels for spacing between lines
 */
declare function textLeading(leading: number): p5.Renderer;

/**
 * Sets/gets the current font size. This size will be used in all subsequent
 * calls to the text() function. Font size is measured in pixels.
 */
declare function textSize(): number;

/**
 * Sets/gets the current font size. This size will be used in all subsequent
 * calls to the text() function. Font size is measured in pixels.
 * 
 * @param {number} theSize the size of the letters in units of pixels
 */
declare function textSize(theSize: number): p5;

/**
 * Sets/gets the style of the text for system fonts to NORMAL, ITALIC, or BOLD.
 * Note: this may be is overridden by CSS styling. For non-system fonts
 * (opentype, truetype, etc.) please load styled fonts instead.
 */
declare function textStyle(): number;

/**
 * Sets/gets the style of the text for system fonts to NORMAL, ITALIC, or BOLD.
 * Note: this may be is overridden by CSS styling. For non-system fonts
 * (opentype, truetype, etc.) please load styled fonts instead.
 * 
 * @param {(string | number)} theStyle styling for text, either NORMAL, ITALIC,
 * 		or BOLD
 */
declare function textStyle(theStyle: string | number): p5;

/**
 * Calculates and returns the width of any character or text string.
 * 
 * @param {string} theText the String of characters to measure
 */
declare function textWidth(theText?: string): number;

/**
 * Returns the ascent of the current font at its current size. The ascent
 * represents the distance, in pixels, of the tallest character above the
 * baseline.
 */
declare function textAscent(): number;

/**
 * Returns the descent of the current font at its current size. The descent
 * represents the distance, in pixels, of the character with the longest
 * descender below the baseline.
 */
declare function textDescent(): number;

/**
 * Helper function to measure ascent and descent. Intended to be private; do
 * not invoke.
 */
declare function _updateTextMetrics(): p5.Renderer;

//
// Typography -> Loading & Displaying
//

//
// Data -> Array Functions
//

//
// Data -> Conversion
//

//
// Data -> String Functions
//

//
// Lights, Camera -> Camera
//

//
// Lights, Camera -> Lights
//

//
// Lights, Camera -> Material
//
