const { ImageGetter } = require('./ImageGetter')
const { ScanPrepper } = require('./ScanPrepper')
const { CellExtractor } = require('./CellExtractor')

async function processScans() {
  // get the scan
  // parse the scan name for scan data
  // create folder for scan's cropped cells
  // process scan for cells and output as images to that folder
  // get OCR data from OCR service (i.e. Google Vision, USPS AddressLocate)
  // associate data with petition and petition's entry cell files
  // data-formatting for the FE end should be done as a transform. consider how the raw data of this process should be organized
  const scan = await ImageGetter.getTestScan()
  const table = await ScanPrepper.isolateSignatureTable(scan)
  console.log(table)
  CellExtractor.table(table)
  // return await table.write('output-test/test.jpg')

  // signatureTables.forEach(table => table.save('/home/jbr/real-change/petition-automation/output'))
}

processScans().then((err, res) => console.log(res))
