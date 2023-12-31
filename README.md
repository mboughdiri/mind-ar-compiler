# mind-ar-compiler

## Overview

The mind-ar-compiler package provides functions for compiling image targets and exporting the compiled data for use in augmented reality applications.

## Installation

```
npm install @maherboughdiri/mind-ar-compiler
```

## Usage

Import the compiler:

```js
import compiler from "@maherboughdiri/mind-ar-compiler";
```

Compile image files:

```js
const files = // array of image File objects
const target = await compiler.compileFiles(files);
```

The compileFiles() method compiles the image files into target data. It accepts an array of image File objects and returns a Promise resolving to the compiled data.

The method updates the progress element with the compilation percentage progress.

Download the compiled data:

```js
compiler.download(target);
```

Call the download() method to trigger downloading of the compiled .mind file.

## Documentation

See the [full documentation](https://github.com/maherboughdiri/mind-ar-compiler) for more details on the compiler methods and usage.
