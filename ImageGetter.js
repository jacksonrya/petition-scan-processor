// Gets files, whether from Google Storage or local
//

// MAKE SURE EVERYTHING IS UNIT-LEVEL, WORKFLOW SHOULD REDUCE THE TEMPORARY STORAGE OF IMAGES IN ARRAYS

const Jimp = require('jimp')
const {Storage} = require('@google-cloud/storage')

const TEST_SCANS_PATH = './scan-samples'
const TEST_SCAN_PATH = TEST_SCANS_PATH + '/petition_001.jpg'

async function getLocalImage(path) {
  return await Jimp.read(path)
}

async function getCloudStorageImage() {
  const BUCKET_NAME = 'petition-scans'

  // Creates a client
  const storage = new Storage();

  async function downloadScans() {
    const options = {
      destination: destFileName,
    };

    // Downloads the file
    const scans = await storage.bucket(BUCKET_NAME).getFiles()
    return scans
  }

  // return loaded images of each file
}

const ImageGetter = {
  local: getLocalImage,
  cloudStorage: getCloudStorageImage,
  getTestScan: async () => await getLocalImage(TEST_SCAN_PATH),
  TEST_SCAN_PATH,
}

module.exports = { ImageGetter }
