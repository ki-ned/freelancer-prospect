const puppeteer = require('puppeteer-core');
const path = require('path');
const fs = require('fs');

function findChrome() {
  if (process.env.CHROME_PATH && fs.existsSync(process.env.CHROME_PATH)) {
    return process.env.CHROME_PATH;
  }
  const candidates = [
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
    '/usr/bin/google-chrome',
    '/usr/bin/chromium-browser',
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  ];
  const found = candidates.find((p) => fs.existsSync(p));
  if (!found) {
    throw new Error(
      'No Chrome/Chromium executable found. Set CHROME_PATH to its full path.'
    );
  }
  return found;
}

(async () => {
  const inputPath = process.argv[2];
  const outputPath = process.argv[3];
  if (!inputPath || !outputPath) {
    console.error('Usage: node render-pdf.js <input.html> <output.pdf>');
    process.exit(1);
  }

  const browser = await puppeteer.launch({
    executablePath: findChrome(),
    headless: 'new',
  });
  const page = await browser.newPage();
  const fileUrl = 'file:///' + path.resolve(inputPath).replace(/\\/g, '/');
  await page.goto(fileUrl, { waitUntil: 'networkidle0' });

  // Let web fonts finish loading before printing.
  await page.evaluateHandle('document.fonts.ready');

  await page.pdf({
    path: outputPath,
    printBackground: true,
    preferCSSPageSize: true,
    margin: { top: '0', bottom: '0', left: '0', right: '0' },
  });

  await browser.close();
  console.log('PDF written to', outputPath);
})();
