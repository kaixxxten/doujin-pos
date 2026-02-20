
// Auto Fix Script for POS Data (分類修復)
(function(){
  try {
    let data = JSON.parse(localStorage.getItem('posData') || '{}');

    if (data.products && data.categories && data.categories.length > 0) {
      let firstCat = data.categories[0].name || '未分類';

      let fixed = false;

      data.products = data.products.map(p => {
        if (!p.category) {
          fixed = true;
          return { ...p, category: firstCat };
        }
        return p;
      });

      if (fixed) {
        localStorage.setItem('posData', JSON.stringify(data));
        console.log('已自動修復商品分類');
      }
    }
  } catch (e) {
    console.log('修復失敗', e);
  }
})();
