// prep a full scan for OCR

const Jimp = require('jimp')

/**
 * Crops the scanned petition page to only retain the table of signatures.
 * @param image { Image }
 */
async function isolateSignatureTable(image) {
  const Y_CROP_COOR = 2525

  const cropSettings = {
      x: 0,
      y: Y_CROP_COOR,
      width: image.bitmap.width,
      height: image.bitmap.height - Y_CROP_COOR,
    }

  const signatureTableImage = image.crop(...(Object.values(cropSettings))) 

  return signatureTableImage
} 

const ScanPrepper = {
  isolateSignatureTable
}

module.exports = { ScanPrepper }
