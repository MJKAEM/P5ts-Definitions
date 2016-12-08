# P5ts

## About

P5ts is an attempt to add TypeScript support for p5.js. The main advantages of adding TypeScript support is static type checking and simple declarations of class files. JavaScript was not developed as an object-oriented language, however, the original Processing was written in Java.

There will always be an instance file and a global mode file. The global mode requires the instance file to run, but the instance file can run independently.


## Documentation

All variables and methods are documented using JSDoc. The p5.js reference can be found [here](http://p5js.org/reference/).

## How to use

Clone/download the repository and store the files somewhere in your project.

Reference the declaration files by using either triple-slash reference or making it part of your active project via a project JSON file.

Compile the TypeScript files into JavaScript, and include the output files in your HTML page.
