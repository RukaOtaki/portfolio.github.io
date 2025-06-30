/* スキルバー */
document.addEventListener('DOMContentLoaded', () => {
  const options = {
    root: null, // ビューポート
    rootMargin: '0px',
    threshold: 0.25, // 画面の25%が見えたら発火
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');  // .visibleクラスを追加
        observer.unobserve(entry.target);  // 1回だけ監視を解除
      }
    });
  }, options);

  const sections = document.querySelectorAll('.skill');
  sections.forEach(section => {
    observer.observe(section);
  });
});

/* 水滴 */
document.addEventListener('DOMContentLoaded', () => {
  const topBox = document.querySelector('.top-box');
  const numberOfDrops = 20;  // 水滴の数

  // 指定した数の水滴を生成
  for (let i = 0; i < numberOfDrops; i++) {
    const drop = document.createElement('div');
    drop.classList.add('water-drop');
    
    // ランダムなアニメーションの遅延時間を設定（0〜5秒の間）
    const delay = Math.random() * 5;  
    drop.style.animationDelay = `${delay}s`;

    // ランダムな横位置を設定（0%〜100%）
    const leftPosition = Math.random() * 100;
    drop.style.left = `${leftPosition}%`;

    // 水滴をtop-boxに追加
    topBox.appendChild(drop);
  }
});

document.addEventListener('DOMContentLoaded', function () {
  // ページリンクにイベントリスナーを追加
  document.querySelectorAll('.page-link').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();  // 通常のリンク遷移を停止

      // ページ全体を透明にする（フェードアウト）
      document.body.style.transition = "opacity 0.6s ease-in-out";
      document.body.style.opacity = "0";

      const nextPageUrl = link.href;  // 次のページURLを取得

      // ページ遷移後の待機
      setTimeout(() => {
        window.location.href = nextPageUrl;  // 遷移
      }, 600);  // 600msの遅延で遷移
    });
  });

  // 新しいページが読み込まれた後にふわっと表示
  window.addEventListener('load', () => {
    document.body.style.transition = "opacity 1s ease-in-out";
    document.body.style.opacity = "1";  // フェードイン
  });
});
