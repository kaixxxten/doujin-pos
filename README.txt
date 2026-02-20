# doujin-pos（打包版）

## 內容
- index.html：主程式（已內建載入 auto_fix.js）
- auto_fix.js：自動修復「商品有資料但前台空白」的分類欄位（不會刪資料）
- images.json（如果有）：圖片清單

## 使用（GitHub Pages）
1. 把整包解壓後的檔案，上傳到 GitHub repo 的根目錄（或你要的資料夾）
2. 確認 GitHub Pages 指向正確分支/資料夾
3. 開啟網站後，第一次載入會自動修復缺分類的商品（只補 category）

## 注意
- 這是「補救」：建議後續把「匯入 / 新增商品」流程也改成永遠寫入 category，避免再次發生。
