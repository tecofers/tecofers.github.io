const pricingData = {
    website: {
        hasChart: true,
        chartType: 'bar',
        packages: [
            { name: 'Starter Site / Portfolio', price: '₹15,000 ($183)', value: 15000, description: 'Up to 5 pages, based on a premium theme, responsive design, contact form, and 1-hour training.' },
            { name: 'Business Website', price: '₹40,000 ($470)', value: 25000, description: 'Everything in Starter, up to 10 pages, newsletter integration, and basic on-page SEO setup.' },
            { name: 'Custom Project', price: 'Starts at ₹45,000+ ($520+)', value: 45000, description: 'For specific features or design, custom-coded sections, advanced integrations. Quoted after discovery call.' }
        ]
    },
    social: {
        hasChart: true,
        chartType: 'bar',
        packages: [
            { name: 'Foundation', price: '₹8,000 ($100) /mo', value: 12000, description: '1 Social Platform, 12 static posts/month, content calendar, and basic community engagement.' },
            { name: 'Growth', price: '₹25,000 ($300) /mo', value: 25000, description: '2 Social Platforms, 20 total posts/month, 2 short-form videos/month, and a performance report.' },
            { name: 'Professional', price: 'Starts at ₹30,000+ ($ 350+) /mo', value: 30000, description: 'Up to 3 Platforms, 4-6 short-form videos/month, proactive engagement, and detailed analytics call.' }
        ]
    },
    blog: {
        hasChart: false,
        packages: [
            { name: 'Per-Post: 500-800 words', price: '₹2,500 ($30)', description: 'Ideal for shorter, focused articles. Price varies based on research depth and topic complexity.' },
            { name: 'Per-Post: 800-1200 words', price: '₹3,500 ($45)', description: 'Perfect for more in-depth pieces that establish authority. Price varies based on research.' },
            { name: 'Blog Starter Retainer', price: '₹9,000 ($110) /mo', description: '2 blog posts/month (up to 1000 words each), basic SEO, formatted and uploaded to your site.' },
            { name: 'Content Leader Retainer', price: '₹16,000 ($200) /mo', description: '4 blog posts/month (up to 1200 words each), in-depth keyword research, and includes stock images.' }
        ]
    },
    copywriting: {
        hasChart: false,
        packages: [
            { name: 'Website Page Copy', price: '₹3,500 ($45) /page', description: 'Compelling copy for your Home, About, or Service pages that focuses on brand voice and calls-to-action.' },
            { name: 'Landing Page Copy', price: '₹10,000 ($120)', description: 'A single, highly focused page designed for maximum conversions from an ad campaign or specific promotion.' },
            { name: 'Email Sequence (5 emails)', price: '₹13,000 ($155)', description: 'A complete welcome series, nurture sequence, or promotional campaign to engage your subscribers.' },
            { name: 'Product Descriptions', price: '₹5,000 ($63)/set', description: 'A set of 5-10 compelling, SEO-friendly product descriptions designed to drive sales.' }
        ]
    },
    setup: {
        hasChart: true,
        chartType: 'bar',
        packages: [
            { name: 'Simple Product Listing', price: '₹7,000 ($90)', value: 7000, description: 'Integrate a "buy button" solution (e.g., Razorpay) for up to 10 products on your site.' },
            { name: 'Booking/Appointment Setup', price: '₹8,000 ($100)', value: 8000, description: 'Integrate and configure a scheduling tool like Calendly into your website for easy appointment booking.' },
            { name: 'Headless Commerce Setup', price: '₹30,000 ($370)', value: 30000, description: 'Integrate a more complete cart system like Snipcart with your site for up to 20 products.' }
        ]
    }
};

const cardsContainer = document.getElementById('pricing-cards-container');
const chartWrapper = document.getElementById('chart-wrapper');
const serviceButtons = document.querySelectorAll('.service-button');
const ctx = document.getElementById('pricingChart').getContext('2d');
let pricingChart;

function createChart(data) {
    if (pricingChart) {
        pricingChart.destroy();
    }
    pricingChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: data.packages.map(p => p.name),
            datasets: [{
                label: 'Starting Price (₹)',
                data: data.packages.map(p => p.value),
                backgroundColor: 'rgba(0, 123, 255, 0.7)',
                borderColor: 'rgba(0, 123, 255, 1)',
                borderWidth: 1
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            let label = context.dataset.label || '';
                            if (label) { label += ': '; }
                            if (context.parsed.x !== null) {
                                label += new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0 }).format(context.parsed.x);
                            }
                            return label;
                        }
                    }
                }
            },
            scales: {
                x: {
                    beginAtZero: true,
                    ticks: {
                        callback: (value) => '₹' + (value / 1000) + 'k'
                    }
                },
                y: {
                   ticks: {
                        autoSkip: false,
                        callback: function(value) {
                            const label = this.getLabelForValue(value);
                            return label.length > 25 ? label.substring(0, 25) + '...' : label;
                        }
                   }
                }
            }
        }
    });
}

function updateView(serviceKey) {
    const data = pricingData[serviceKey];
    cardsContainer.innerHTML = '';

    chartWrapper.style.display = data.hasChart ? 'block' : 'none';
    if (data.hasChart) {
        createChart(data);
    }

    data.packages.forEach(pkg => {
        const cardHtml = `
            <div class="col">
                <div class="card price-card shadow-sm h-100">
                    <div class="card-body d-flex flex-column">
                        <h3 class="h5 card-title fw-bold">${pkg.name}</h3>
                        <p class="h4 fw-bold text-primary my-3">${pkg.price}</p>
                        <p class="card-text text-muted flex-grow-1">${pkg.description}</p>
                    </div>
                </div>
            </div>
        `;
        cardsContainer.innerHTML += cardHtml;
    });
    
    serviceButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.service === serviceKey) {
            btn.classList.add('active');
        }
    });
}

serviceButtons.forEach(button => {
    button.addEventListener('click', () => {
        updateView(button.dataset.service);
    });
});

// Initial view
updateView('website');
