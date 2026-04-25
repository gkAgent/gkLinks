// gkLinks スクリーンショット v3 - シンプル安定版
const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const HTML_PATH = path.resolve(__dirname, 'gkLinks.html');
const OUT_DIR = path.resolve(__dirname, 'screenshots');

(async () => {
  if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });
  const browser = await chromium.launch();
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();

  await page.goto('file:///' + HTML_PATH.replace(/\\/g, '/'));
  await page.waitForTimeout(2000);

  // 「スターターセットを追加」ボタンを探してクリック
  const starterBtn = await page.$('#emptyImportHbaBtn');
  if (starterBtn) {
    page.on('dialog', d => d.accept());
    await starterBtn.click();
    await page.waitForTimeout(1500);
  }

  // 1. メインタブ
  await page.screenshot({ path: path.join(OUT_DIR, '01_main.png') });
  console.log('✅ 01_main.png');

  // 2. ダッシュボード
  await page.click('[data-tab="dashboard"]').catch(()=>{});
  await page.waitForTimeout(1500);
  await page.screenshot({ path: path.join(OUT_DIR, '02_dashboard.png') });
  console.log('✅ 02_dashboard.png');

  // 3. AIツール
  await page.click('[data-tab="aitools"]').catch(()=>{});
  await page.waitForTimeout(1500);
  // 最初のテンプレート選択
  await page.evaluate(() => {
    const items = document.querySelectorAll('.ai-tpl-item');
    if (items.length > 0) items[0].click();
  });
  await page.waitForTimeout(800);
  await page.screenshot({ path: path.join(OUT_DIR, '03_ai_tools.png') });
  console.log('✅ 03_ai_tools.png');

  // 4. スニペット
  await page.click('[data-tab="snippets"]').catch(()=>{});
  await page.waitForTimeout(1500);
  await page.evaluate(() => {
    const items = document.querySelectorAll('.snip-item');
    if (items.length > 0) items[0].click();
  });
  await page.waitForTimeout(800);
  await page.screenshot({ path: path.join(OUT_DIR, '04_snippets.png') });
  console.log('✅ 04_snippets.png');

  // 5. ノートブック
  await page.click('[data-tab="memo"]').catch(()=>{});
  await page.waitForTimeout(1500);
  await page.screenshot({ path: path.join(OUT_DIR, '05_notebook.png') });
  console.log('✅ 05_notebook.png');

  // 6. Cmd Palette
  await page.click('[data-tab="main"]').catch(()=>{});
  await page.waitForTimeout(800);
  await page.keyboard.press('Control+K');
  await page.waitForTimeout(800);
  await page.screenshot({ path: path.join(OUT_DIR, '06_cmd_palette.png') });
  console.log('✅ 06_cmd_palette.png');
  await page.keyboard.press('Escape');
  await page.waitForTimeout(500);

  await browser.close();
  console.log(`\n📁 Saved to: ${OUT_DIR}`);
})();
