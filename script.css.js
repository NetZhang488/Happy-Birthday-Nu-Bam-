// เอฟเฟคหัวใจลอยเมื่อกดปุ่ม
document.getElementById('loveBtn').addEventListener('click', () => {
  for (let i = 0; i < 15; i++) {
    createHeart();
  }
});

function createHeart() {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.innerHTML = '💖';
  heart.style.left = Math.random() * 90 + '%';
  heart.style.animationDuration = (2 + Math.random() * 2) + 's';
  document.getElementById('hearts').appendChild(heart);
  setTimeout(() => heart.remove(), 4000);
}

// สไตล์หัวใจลอย
const style = document.createElement('style');
style.innerHTML = `
#hearts {
  position: fixed;
  pointer-events: none;
  width: 100vw;
  height: 100vh;
  top: 0; left: 0;
  z-index: 9999;
}
.heart {
  position: absolute;
  font-size: 2rem;
  top: 80%;
  transform: translateY(-50%);
  animation: fly 3s linear forwards;
}
@keyframes fly {
  0% { opacity: 1; top: 80%; }
  100% { opacity: 0; top: 20%; }
}
`;
document.head.appendChild(style);