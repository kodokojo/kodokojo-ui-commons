/* eslint-disable no-return-assign */

import { jsdom } from 'jsdom'

/**
 * Mocking browser-like DOM
 */
global.document = jsdom('<!doctype html><html><body></body></html>', {
  url: 'http://localhost',
  headers: {
    'User-Agent':
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_6_7)' +
      ' AppleWebKit/534.24 (KHTML, like Gecko) Chrome/11.0.696.71 Safari/534.24'
  }
})
global.window = document.defaultView
global.navigator = global.window.navigator

/**
 * Mocking location url
 * @type {{host: string}}
 */
// global.window.location.host = 'localhost'

/**
 * Mocking local and session Storage
 */
function storageMock() {
  const storage = {}

  return {
    setItem: (key, value) => storage[key] = value || '',
    getItem: (key) => storage[key] || null,
    removeItem: (key) => delete storage[key],
    length: () => Object.keys(storage).length,
    key: (i) => {
      const keys = Object.keys(storage)
      return keys[i] || null
    }
  }
}
// mock the localStorage
global.window.localStorage = storageMock()
// mock the sessionStorage
global.window.sessionStorage = storageMock()
