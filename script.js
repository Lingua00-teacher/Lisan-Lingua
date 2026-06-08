// انتظار تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {

  // 1. تمرير ناعم للروابط الداخلية
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // 2. ظهور الكروت والمميزات لما تسوي scroll
  const animatedElements = document.querySelectorAll('.card, .feature');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  animatedElements.forEach(el => {
    observer.observe(el);
  });

  // 3. زر ارجع للأعلى
  const scrollBtn = document.createElement('button');
  scrollBtn.innerHTML = '↑';
  scrollBtn.setAttribute('aria-label', 'ارجع للأعلى');
  scrollBtn.style.cssText = 'position:fixed;bottom:25px;left:25px;background:#2563EB;color:white;border:none;width:50px;height:50px;border-radius:50%;font-size:24px;cursor:pointer;display:none;z-index:999;transition:0.3s;box-shadow:0 4px 12px rgba(37,99,235,0.3)';
  document.body.appendChild(scrollBtn);

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      scrollBtn.style.display = 'block';
    } else {
      scrollBtn.style.display = 'none';
    }
  });

  scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  scrollBtn.addEventListener('mouseenter', () => {
    scrollBtn.style.transform = 'scale(1.1)';
  });
  
  scrollBtn.addEventListener('mouseleave', () => {
    scrollBtn.style.transform = 'scale(1)';
  });

});
