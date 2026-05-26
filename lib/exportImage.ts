export const exportPreviewAsPng = async (node: HTMLElement, filename = 'hakobell-illustration.png') => {
  const htmlToImage = await import('html-to-image');
  const dataUrl = await htmlToImage.toPng(node, { cacheBust: true });
  downloadDataUrl(dataUrl, filename);
};

export const exportPreviewAsSvg = async (node: HTMLElement, filename = 'hakobell-illustration.svg') => {
  const htmlToImage = await import('html-to-image');
  const dataUrl = await htmlToImage.toSvg(node, { cacheBust: true });
  downloadDataUrl(dataUrl, filename);
};

const downloadDataUrl = (dataUrl: string, filename: string) => {
  const a = document.createElement('a');
  a.href = dataUrl;
  a.download = filename;
  a.click();
};
