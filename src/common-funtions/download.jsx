export const  downloadImage = async (
    imageSrc,
    nameOfDownload = 'my-image.jpg',
  ) => {
  
    try {
        const anchorElement = document.createElement('a');
    anchorElement.href = imageSrc;
    anchorElement.download = nameOfDownload;
  
    document.body.appendChild(anchorElement);
    anchorElement.click();
  
    document.body.removeChild(anchorElement);
    window.URL.revokeObjectURL(href);
    } catch {
        console.log('Failed to Download Image!')
    }
  }
  
  
 
  