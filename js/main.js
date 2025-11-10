// Hiệu ứng nhỏ cho phần tiêu đề
document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header h1");
  header.style.transition = "transform 0.8s ease";
  header.addEventListener("mouseenter", () => {
    header.style.transform = "scale(1.05)";
  });
  header.addEventListener("mouseleave", () => {
    header.style.transform = "scale(1)";
  });

  console.log("FFT Learning Page loaded successfully ✅");
});
