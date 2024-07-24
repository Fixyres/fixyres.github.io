// Google Pay integration
function onGooglePayLoaded() {
    const paymentsClient = new google.payments.api.PaymentsClient({environment: 'TEST'});
    
    const button = document.getElementById('google-pay-button');
    const buttonOptions = {
        onClick: () => {
            // Add Google Pay payment request here
        }
    };

    paymentsClient.createButton(buttonOptions).then(button => {
        document.getElementById('google-pay-button').appendChild(button);
    }).catch(err => console.error(err));
}

// Apple Pay integration
function onApplePayLoaded() {
    const button = document.getElementById('apple-pay-button');
    button.addEventListener('click', () => {
        // Add Apple Pay payment request here
    });
}

// Crypto Payment Button
document.getElementById('crypto-pay-button').addEventListener('click', () => {
    // Add crypto payment request here
});

// Load Google Pay API
const googlePayScript = document.createElement('script');
googlePayScript.src = 'https://pay.google.com/gp/p/js/pay.js';
googlePayScript.onload = onGooglePayLoaded;
document.body.appendChild(googlePayScript);

onApplePayLoaded(); // Apple Pay is usually integrated with a web service
