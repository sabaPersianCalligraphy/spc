(function () {
  function loadAnalytics() {
    const script = document.createElement('script');
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-ZGEFQK3DGY';
    script.async = true;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag(){ dataLayer.push(arguments); }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', 'G-ZGEFQK3DGY');
  }

  document.addEventListener('DOMContentLoaded', function () {

    if (document.cookie.includes('cookieAccepted=true')) {
      loadAnalytics();
    }


    const form = document.getElementById('contactForm');
    if (form) {
      form.addEventListener('submit', function (e) {
        const recaptcha = document.querySelector('[name="g-recaptcha-response"]');
        const error = document.getElementById('recaptchaError');

        if (!recaptcha || !recaptcha.value.trim()) {
          e.preventDefault();
          if (error) error.style.display = 'block';
        } else {
          if (error) error.style.display = 'none';
        }
      });
    }
  });
})();
