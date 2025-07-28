
function contactForm() {
    const a = Math.floor(Math.random() * 10);
    const b = Math.floor(Math.random() * 10);

    return {
    name: '',
    email: '',
    subject: '',
    message: '',
    a,
    b,
    answer: '',
    errors: {},

    validate() {
        this.errors = {};

        if (!this.name.trim()) this.errors.name = 'Please enter your name.';
        if (!this.email.trim() || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(this.email)) this.errors.email = 'Please enter a valid email address.';
        if (!this.subject.trim()) this.errors.subject = 'Please enter a subject.';
        if (!this.message.trim()) this.errors.message = 'Please enter a message.';

        if (parseInt(this.answer) !== this.a + this.b) {
        this.errors.answer = 'Incorrect answer. Please try again.';
        }

        return Object.keys(this.errors).length === 0;
    },

    submit(e) {
        if (!this.validate()) {
        e.preventDefault();
        }
    }
    };
}

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

