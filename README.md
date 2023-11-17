# mind-ar-compiler

Here is the README.md documentation for the provided code:

Image Target Compiler
This module provides functions for compiling image targets and exporting the compiled data.

compiler Package
The compiler package provides functions for compiling image files into target data that can be downloaded.

Installation
npm install @maherboughdiri/mind-ar-compiler

Import
import compiler from "@maherboughdiri/mind-ar-compiler";

Usage
<template>

  <div>
    <div>
      <input type="file" name="test" multiple id="test" /> 
    </div>
    
    <button id="downloadButton">Download</button>
    
    <span id="progress"></span>
  </div>
</template>

<script>
import compiler from "@maherboughdiri/mind-ar-compiler";

export default {
  // ...
  
  mounted() {
    document.getElementById("test")
      .addEventListener("change", (e) => {
        let target = compiler.compileFiles(e.target.files);
        
        document.getElementById("downloadButton")
          .addEventListener("click", () => {
            compiler.download(target);  
          });
      });
  }
}
</script>

Use the compiler.compileFiles() method to compile the selected image files. This will update the #progress element with the compilation progress percentage.

Call compiler.download() in the download button click handler to trigger the file download of the compiled data.

See the compiler documentation for more details on the available methods.
