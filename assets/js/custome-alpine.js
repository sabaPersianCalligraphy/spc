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

  if (form) {
    form.addEventListener('submit', async function (e) {
      e.preventDefault();

      const token = grecaptcha.getResponse();

      if (!token) {
        alert("Please complete the reCAPTCHA.");
        return;
      }

      const verify = await fetch('/.netlify/functions/verify-recaptcha', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token }),
      });

      const result = await verify.json();

      if (result.success) {
        form.submit(); // re-submit form after passing reCAPTCHA
      } else {
        alert("reCAPTCHA failed. Please try again.");
      }
    });
  }
});
