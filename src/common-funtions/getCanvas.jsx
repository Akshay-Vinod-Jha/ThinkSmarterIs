export const getCanvas = async (page) => {
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
    return canvas;
  } catch (err) {
    return err.message;
  }
};
