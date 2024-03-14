import { getTextFromImage } from "./getTextFormImage";
let pdfjsLib = window["pdfjs-dist/build/pdf"];
pdfjsLib.GlobalWorkerOptions.workerSrc =
  "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.6.347/pdf.worker.min.js";
const getText = async (page) => {
  try {
    const viewport = page.getViewport({ scale: 1.1 });
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    canvas.height = viewport.height;
    canvas.width = viewport.width;
    const renderContext = {
      canvasContext: context,
      viewport: viewport,
      transform: [1, 0, 0, 1, 0, 0],
    };
    page.render(renderContext);
    const text = await getTextFromImage(canvas);
    return text;
  } catch (err) {
    return err.message;
  }
};

export const getTextFromPdf = async (url) => {
  try {
    return pdfjsLib.getDocument(url).promise.then(async (pdfDoc) => {
      let txts = [];
      for (let i = 1; i <= pdfDoc.numPages; i++) {
        const page = await pdfDoc.getPage(i);
        const text = await getText(page);
        txts.push(text);
      }
      return txts;
    });
  } catch (err) {
    return err.message;
  }
};
