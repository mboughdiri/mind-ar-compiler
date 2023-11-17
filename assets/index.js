import { Compiler } from "./compiler";

const compiler = new Compiler();

const download = (buffer, fileName = "target") => {
  let blob = new Blob([buffer]);
  let aLink = window.document.createElement("a");
  aLink.download = fileName + ".mind";
  aLink.href = window.URL.createObjectURL(blob);
  aLink.click();
  window.URL.revokeObjectURL(aLink.href);
};

const loadImage = async (file) => {
  const img = new Image();

  return new Promise((resolve, reject) => {
    let img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = URL.createObjectURL(file);
    //img.src = src
  });
};

const compileFiles = async (files, labelId = "progress") => {
  const images = [];
  for (let i = 0; i < files.length; i++) {
    images.push(await loadImage(files[i]));
  }
  let _start = new Date().getTime();
  const dataList = await compiler.compileImageTargets(images, (progress) => {
    document.getElementById(labelId).innerHTML =
      "progress: " + progress.toFixed(2) + "%";
  });

  console.log("exec time compile: ", new Date().getTime() - _start);

  return await compiler.exportData();
};

export default { compileFiles, download };
