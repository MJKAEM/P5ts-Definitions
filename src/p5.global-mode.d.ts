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
 * Event handler when a key goes down. Intended to be private; do not invoke.
 */
declare function _onkeydown(e): void;

/**
 * Event handler when a key goes up. Intended to be private; do not invoke.
 */
declare function _onkeyup(e): void;

/**
 * Event handler when a key is pressed. Intended to be private; do not invoke.
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
 * Event handler when the mouse is moved. Intended to be private; do not invoke.
 */
declare function _onmousemove(e): void;

/**
 * Event handler when one of the mouse buttons are pressed down. Intended to be
 * private; do not invoke.
 */
declare function _onmousedown(e): void;

/**
 * Event handler when one of the mouse buttons are released. Intended to be
 * private; do not invoke.
 */
declare function _onmouseup(e): void;

/**
 * Event handler when the touch screen no longer detects movement. Intended to
 * be private; do not invoke.
 */
declare function _ondragend(e): void;

/**
 * Event handler when the touch screen detects movement. Intended to be
 * private; do not invoke.
 */
declare function _ondragover(e): void;

/**
 * Event handler when one of the mouse buttons are clicked. Intended to be
 * private; do not invoke.
 */
declare function _onclick(e): void;

/**
 * Event handler when the mouse wheel is scrolled. Intended to be private; do
 * not invoke.
 */
declare function _onwheel(e): void;

//
// Events -> Touch
//

//
// Image
//

//
// Image -> Loading & Displaying
//

//
// Image -> Pixels
//

//
// IO -> Input
//

//
// IO -> Output
//

//
// IO -> Time & Date
//

//
// Math
//

//
// Math -> Calculation
//

//
// Math -> Noise
//

//
// Math -> Random
//

//
// Math -> Trigonometry
//

//
// Typography -> Attributes
//

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
