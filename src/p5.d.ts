//
// Color -> Setting Functions
//

/**
 * The background() function sets the color used for the background of the
 * p5.js canvas. The default background is light gray. This function is
 * typically used within draw() to clear the display window at the beginning of
 * each frame, but it can be used inside setup() to set the background on the
 * first frame of animation or if the background need only be set once.
 *
 * @param { number } gray - Specifies a value between white and black
 */
declare function background(gray : number) : void;

/**
 * The background() function sets the color used for the background of the
 * p5.js canvas. The default background is light gray. This function is
 * typically used within draw() to clear the display window at the beginning of
 * each frame, but it can be used inside setup() to set the background on the
 * first frame of animation or if the background need only be set once.
 *
 * @param { number } v1 - Red or hue value (depending on the current color mode)
 */
declare function background(v1 : number, v2 : number, v3 : number, a? : number) : void;

//
// Structure Functions
//

/**
 * The setup() function is called once when the program starts. It's used to
 * define initial environment properties such as screen size and background
 * color and to load media such as images and fonts as the program starts. There
 * can only be one setup() function for each program and it shouldn't be called
 * again after its initial execution. 
 */
declare function setup() : void;

/**
 * Called directly after setup(), the draw() function continuously executes the
 * lines of code contained inside its block until the program is stopped or
 * noLoop() is called. Note if noLoop() is called in setup(), draw() will still
 * be executed once before stopping. draw() is called automatically and should
 * never be called explicitly.<br>
 * <br>
 * It should always be controlled with noLoop(), redraw() and loop(). After
 * noLoop() stops the code in draw() from executing, redraw() causes the code
 * inside draw() to execute once, and loop() will cause the code inside draw()
 * to resume executing continuously.<br>
 * <br>
 * The number of times draw() executes in each second may be controlled with
 * the frameRate() function.<br>
 * <br>
 * There can only be one draw() function for each sketch, and draw() must exist
 * if you want the code to run continuously, or to process events such as
 * mousePressed(). Sometimes, you might have an empty call to draw() in your
 * program, as shown in the above example.<br>
 * <br>
 * It is important to note that the drawing coordinate system will be reset at
 * the beginning of each draw() call. If any transformations are performed
 * within draw() (ex: scale, rotate, translate, their effects will be undone at
 * the beginning of draw(), so transformations will not accumulate over time.
 * On the other hand, styling applied (ex: fill, stroke, etc) will remain in
 * effect.
 */
declare function draw() : void;