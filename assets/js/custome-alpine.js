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


document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');
  const recaptchaError = document.getElementById('recaptchaError');

  if (form) {
    form.addEventListener('submit', async function handleSubmit(e) {
      e.preventDefault();

      const token = grecaptcha.getResponse();

      if (recaptchaError) recaptchaError.textContent = '';

      if (!token) {
        if (recaptchaError) {
          recaptchaError.textContent = "Please complete the reCAPTCHA.";
        }
        return;
      }

      const verify = await fetch('/.netlify/functions/verify-recaptcha', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token }),
      });

      const result = await verify.json();

      if (result.success) {
        form.removeEventListener('submit', handleSubmit);
        form.submit();
      } else {
        if (recaptchaError) {
          recaptchaError.textContent = "reCAPTCHA failed. Please try again.";
        }
      }
    });
  }
});


