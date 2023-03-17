export const convertImage = ({ src, width, height }) => `
  <Image src="${src}" width="${width}" height="${height}" quality="1"/>
`
export const toBase64 = (str) =>
    typeof window === 'undefined' ? Buffer.from(str).toString('base64') : window.btoa(unescape(encodeURIComponent(str)))