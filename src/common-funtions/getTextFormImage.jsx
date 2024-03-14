import { createWorker } from "tesseract.js";

export const getTextFromImage = async (image) => {
  try {
    const worker = await createWorker("eng");
    const ret = await worker.recognize(image);
    await worker.terminate();
    return ret.data.text;
  } catch (err) {
    return err.message;
  }
};
