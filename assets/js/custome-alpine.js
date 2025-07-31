function loadAnalytics() {
    const script = document.createElement('script');
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-ZGEFQK3DGY';
    script.async = true;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag(){ dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', 'G-ZGEFQK3DGY');
}

if (document.cookie.includes('cookieAccepted=true')) {
    loadAnalytics();
}


document.getElementById('contactForm').addEventListener('submit', function (e) {
  const recaptcha = document.querySelector('.g-recaptcha-response');
  const error = document.getElementById('recaptchaError');

  if (!recaptcha || !recaptcha.value.trim()) {
    e.preventDefault();
    error.style.display = 'block';
  } else {
    error.style.display = 'none';
  }
});





