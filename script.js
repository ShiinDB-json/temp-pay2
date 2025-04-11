// Payment data - easily modifiable
const paymentData = {
    eWallet: {
        dana: "081246493375",
		gopay: "081248845231",
        ovo: "081248845231",
        qris: "https://files.catbox.moe/miaizn.png"
    },
    bank: {
        bri: "---",
        bni: "---"
    },
    donate: {
        trakteer: "https://trakteer.id",
        saweria: "https://saweria.co",
        buyMeCoffee: "https://buymeacoffee.com"
    },
    contact: {
        whatsapp: "https://wa.me/6281248845231",
        email: "mailto:kzy.help@gmail.com"
    }
};

// DOM elements
const loadingScreen = document.getElementById('loadingScreen');
const mainContent = document.getElementById('mainContent');
const startButton = document.getElementById('startButton');

// Toggle buttons
const eWalletBtn = document.getElementById('eWalletBtn');
const bankBtn = document.getElementById('bankBtn');
const donateBtn = document.getElementById('donateBtn');

// Sub buttons
const eWalletOptions = document.getElementById('eWalletOptions');
const bankOptions = document.getElementById('bankOptions');
const donateOptions = document.getElementById('donateOptions');

// Payment buttons
const danaBtn = document.getElementById('danaBtn');
const gopayBtn = document.getElementById('gopayBtn');
const ovoBtn = document.getElementById('ovoBtn');
const qrisBtn = document.getElementById('qrisBtn');
const briBtn = document.getElementById('briBtn');
const bniBtn = document.getElementById('bniBtn');
const trakteerBtn = document.getElementById('trakteerBtn');
const saweriaBtn = document.getElementById('saweriaBtn');
const buyMeCoffeeBtn = document.getElementById('buyMeCoffeeBtn');

// Contact buttons
const whatsappBtn = document.getElementById('whatsappBtn');
const emailBtn = document.getElementById('emailBtn');

// Start the web
startButton.addEventListener('click', () => {
    loadingScreen.style.opacity = '0';
    setTimeout(() => {
        loadingScreen.style.display = 'none';
        mainContent.style.display = 'flex';
    }, 500);
});

// Toggle functions
function toggleOptions(button, options, otherButtons) {
    button.addEventListener('click', () => {
        // Hide all other options first
        otherButtons.forEach(btn => {
            btn.style.display = 'none';
        });

        // Toggle current options
        if (options.style.display === 'flex') {
            options.style.display = 'none';
        } else {
            options.style.display = 'flex';
        }
    });
}

// Set up toggle functionality
toggleOptions(eWalletBtn, eWalletOptions, [bankOptions, donateOptions]);
toggleOptions(bankBtn, bankOptions, [eWalletOptions, donateOptions]);
toggleOptions(donateBtn, donateOptions, [eWalletOptions, bankOptions]);

// Copy to clipboard function
function copyToClipboard(text, button) {
    navigator.clipboard.writeText(text).then(() => {
        const originalText = button.textContent;
        button.innerHTML = `<i class="fas fa-check"></i> ${originalText.replace(/<[^>]*>/g, '').trim()}`;
        setTimeout(() => {
            button.innerHTML = originalText;
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}

// Set up payment buttons
danaBtn.addEventListener('click', () => copyToClipboard(paymentData.eWallet.dana, danaBtn));
gopayBtn.addEventListener('click', () => copyToClipboard(paymentData.eWallet.gopay, gopayBtn));
ovoBtn.addEventListener('click', () => copyToClipboard(paymentData.eWallet.ovo, ovoBtn));
qrisBtn.addEventListener('click', () => window.open(paymentData.eWallet.qris, '_blank'));
briBtn.addEventListener('click', () => copyToClipboard(paymentData.bank.bri, briBtn));
bniBtn.addEventListener('click', () => copyToClipboard(paymentData.bank.bni, bniBtn));
trakteerBtn.addEventListener('click', () => window.open(paymentData.donate.trakteer, '_blank'));
saweriaBtn.addEventListener('click', () => window.open(paymentData.donate.saweria, '_blank'));
buyMeCoffeeBtn.addEventListener('click', () => window.open(paymentData.donate.buyMeCoffee, '_blank'));

// Set up contact buttons
whatsappBtn.addEventListener('click', () => window.open(paymentData.contact.whatsapp, '_blank'));
emailBtn.addEventListener('click', () => window.open(paymentData.contact.email, '_blank'));

// Add error 404 decoration elements
function addErrorDecorations() {
    const decor1 = document.createElement('div');
    decor1.className = 'error-decoration top-left';
    decor1.textContent = '404';
    document.body.appendChild(decor1);

    const decor2 = document.createElement('div');
    decor2.className = 'error-decoration bottom-right';
    decor2.textContent = '404';
    document.body.appendChild(decor2);
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    addErrorDecorations();
    
    // Simulate loading (remove in production)
    setTimeout(() => {
        startButton.style.display = 'inline-block';
    }, 1500);
});