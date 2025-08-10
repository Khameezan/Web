# Web

This project demonstrates a simple 3D real estate viewer built with plain Canvas APIs so it can run without network access. It includes a Jest + Puppeteer test that performs a sanity check on the viewer's initialization.

## Installation

Install the development dependencies:

```sh
npm install
```

## Testing

Run the test suite:

```sh
npm test
```

The tests launch a headless Chromium instance via Puppeteer to load `index.html` and verify that the viewer canvas and the house and ground meshes appear. Because Puppeteer requires a Chromium-compatible environment, ensure one is available. If Puppeteer cannot download Chromium during installation, set `PUPPETEER_SKIP_DOWNLOAD=true` and point `PUPPETEER_EXECUTABLE_PATH` or `CHROME_BIN` to an existing Chrome/Chromium binary. Tests run in headless mode by default; to disable headless mode for debugging, set `PUPPETEER_HEADLESS=false`.

