# P5ts

## About

P5ts is an attempt to add TypeScript support for p5.js. The main advantages of adding TypeScript support is static type checking and simple declarations of class files. JavaScript was not developed as an object-oriented language, however, the original Processing was written in Java.

As per each version, there will always be an instance file and a global mode file. The global mode requires the instance file to run, but the instance file can run independently.

## Editions

Currently, there is only one edition since the beginning declaration file is still in development.

Since there are multiple ways to implement declaration files, multiple versions are planned and maintained to give users a choice over their preferred coding style.

- p5.legacy maintains p5.js's separate identity from Java Processing. It gives the user the most control over their function calls and reveals hidden but accessible functions and variables. Compatibility with p5js is the highest priority, but may be the most prone to errors from the end user's faulty code.

Coming Eventually:
- p5.xp is more defensive and strict than p5js.legacy in terms of accessor modifiers, argument lengths, and argument types. Some of the variables and functions that were previously available in p5.js may need to be accessed differently. This is most likely what P5ts would resemble had it been written like such from the start.

## Documentation

All variables and methods are documented using JSDoc. The p5.js reference can be found [here](http://p5js.org/reference/).