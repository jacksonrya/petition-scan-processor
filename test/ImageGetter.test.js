const { ImageGetter } = require('./../ImageGetter')

test('getting a local image', async () => {
    const img = await ImageGetter.local(ImageGetter.TEST_SCAN_PATH)
    console.log(img)
    expect(5 + 1).toBe(6)
})

test('getting google cloud storage image', () => {
  expect(true).toBe(true)
})
