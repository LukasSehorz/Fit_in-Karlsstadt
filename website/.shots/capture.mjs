import puppeteer from "puppeteer-core";
import { fileURLToPath } from "node:url";

const CHROME = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const BASE = "http://localhost:3000";
const OUT = fileURLToPath(new URL("./", import.meta.url));

const targets = [
  { path: "/", name: "home" },
  { path: "/leistungen", name: "leistungen" },
  { path: "/ueber-uns", name: "ueber-uns" },
];

const viewports = [
  { label: "desktop", width: 1440, height: 900 },
  { label: "mobile", width: 390, height: 844 },
];

async function autoScroll(page) {
  await page.evaluate(async () => {
    const delay = (ms) => new Promise((r) => setTimeout(r, ms));
    const step = window.innerHeight * 0.7;
    let pos = 0;
    const max = document.body.scrollHeight;
    while (pos < max) {
      pos += step;
      window.scrollTo({ top: pos, behavior: "instant" });
      await delay(260);
    }
    window.scrollTo({ top: 0, behavior: "instant" });
    await delay(400);
  });
}

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: "new",
  args: ["--hide-scrollbars"],
});

for (const vp of viewports) {
  const page = await browser.newPage();
  await page.setViewport({ width: vp.width, height: vp.height, deviceScaleFactor: 1 });
  for (const t of targets) {
    await page.goto(BASE + t.path, { waitUntil: "networkidle0", timeout: 60000 });
    await new Promise((r) => setTimeout(r, 2600));
    await page.screenshot({ path: `${OUT}${t.name}-${vp.label}-hero.png` });
    await autoScroll(page);
    await new Promise((r) => setTimeout(r, 800));
    await page.screenshot({ path: `${OUT}${t.name}-${vp.label}-full.png`, fullPage: true });
  }
  await page.close();
}

await browser.close();
console.log("done");
