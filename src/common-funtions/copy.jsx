export const copyTextToClipboard = async (text) => {
  try {
    if ("clipboard" in navigator) {
      await navigator.clipboard.writeText(text);
    } else {
      document.execCommand("copy", true, text);
    }
  } catch {
    console.log("Failed to Copy");
  }
};
