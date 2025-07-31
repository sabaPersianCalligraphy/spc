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


document.getElementById('contactForm').addEventListener('submit', async function (e) {
  e.preventDefault();

  const token = grecaptcha.getResponse();
  if (!token) {
    document.getElementById('recaptchaError').textContent = 'Please verify the reCAPTCHA.';
    return;
  }

  const response = await fetch('/.netlify/functions/verify-recaptcha', {
    method: 'POST',
    body: JSON.stringify({ token }),
  });

  const data = await response.json();

  if (!data.success) {
    document.getElementById('recaptchaError').textContent = data.message;
    return;
  }

  // submit the form after recaptcha passed
  e.target.submit();
});



