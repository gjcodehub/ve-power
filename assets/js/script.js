document.addEventListener('DOMContentLoaded', function () {

    // 1. Data Structure for All Products
    const allProductsData = {
        // 1. Exide Gqp 1125
        'product-1': {
            title: "Exide GQP 1125 VA Inverter",
            description: "The Exide GQP 1125 VA is a dependable sine wave home UPS, engineered to handle essential loads like fans, lights, and small appliances with high efficiency and robust protection features.",
            image: "assets/images/i1.png",
            features: [
                "Output: Pure Sine Wave",
                "Capacity: 1125 VA",
                "Battery Support: Single Battery System (12V)",
                "Compatibility: Supports tubular, flat plate, and SMF batteries",
                "Key Feature: High over-load handling capacity",
                "Protections: Short Circuit, Overload, Battery Low"
            ]
        },
        // 2. Exide star 1125
        'product-2': {
            title: "Exide Inverterz Star 1125 VA Inverter",
            description: "Part of Exide's popular Star series, this 1125 VA sine wave inverter features advanced ASIC technology for smart battery management, ensuring longer battery life and reduced water topping frequency.",
            image: "assets/images/i2.png",
            features: [
                "Output: Pure Sine Wave",
                "Capacity: 1125 VA",
                "Technology: ASIC (Auto Smart Charge) for optimized charging",
                "Display: LCD/LED status indicators",
                "Application: Suitable for up to 6-8 lights, 5-6 fans, and 1 TV",
                "Charging: Fast charging capabilities"
            ]
        },
        // 3. Exide Imtt 1500
        'product-3': {
            title: "Exide IMTT 1500 150Ah Tall Tubular Battery",
            description: "The Invamaster Tall Tubular (IMTT) 1500 is a premium deep cycle battery, offering long backup times and excellent durability, ideal for prolonged power outages.",
            image: "assets/images/i3.png",
            features: [
                "Capacity: 150 Ah",
                "Type: Tall Tubular (Deep Cycle)",
                "Warranty: High-end warranty period (check local offer)",
                "Durability: Robust plate design for long life",
                "Maintenance: Low water loss, requires less maintenance",
                "Performance: High backup for high-demand areas"
            ]
        },
        // 4. Exide imst 1500
        'product-4': {
            title: "Exide IMST 1500 150Ah Standard Tubular Battery",
            description: "The Invamaster Standard Tubular (IMST) 1500 provides a balance of performance and cost-effectiveness. It is built with special alloy to provide high tolerance to voltage fluctuations.",
            image: "assets/images/i4.png",
            features: [
                "Capacity: 150 Ah",
                "Type: Standard Tubular Plate",
                "Design: Designed for long cycle life in deep discharge applications",
                "Recharge: Excellent charge acceptance",
                "Best for: Moderate power cut frequency and duration",
                "Sealed Casing: Leak-resistant construction"
            ]
        },
        // 5. Exide Z4A Battery
        'product-5': {
            title: "Exide XLTZ4A 12V Bike Battery",
            description: "A compact, maintenance-free VRLA battery engineered for reliable starting power in bikes and scooters. Its spill-proof design ensures safety and zero maintenance.",
            image: "assets/images/i5.png",
            features: [
                "Voltage: 12V",
                "Type: VRLA / SMF (Sealed Maintenance Free)",
                "Application: Most 100-125cc motorcycles and scooters",
                "Key Feature: Spill-proof and leak-proof design",
                "Technology: AGM (Absorbed Glass Mat) separators"
            ]
        },
        // 6. Exide Z5A Battery
        'product-6': {
            title: "Exide XLTZ5A 12V Bike Battery",
            description: "The XLTZ5A offers enhanced cranking power and endurance compared to the Z4A, making it suitable for higher-performance bikes and those with increased electrical accessories.",
            image: "assets/images/i6.png",
            features: [
                "Voltage: 12V",
                "Type: VRLA / SMF",
                "Application: Wide range of motorcycles (150cc+)",
                "Performance: Higher CCA (Cold Cranking Amps) for quick starts",
                "Mounting: Can be mounted in any orientation (non-inverted)"
            ]
        },
        // 7. Exide car battery
        'product-7': {
            title: "Exide Car Battery (Exide Mileage Series)",
            description: "The trusted choice for passenger vehicles, providing long life and high reliability. Designed to withstand high under-the-hood temperatures and city driving conditions.",
            image: "assets/images/i7.png",
            features: [
                "Series: Available in Mileage, Gold, and Epiq ranges",
                "Type: Maintenance-free (no water topping required)",
                "Technology: Radial Grid technology for high electrical conductivity",
                "Warranty: Comprehensive pro-rata warranty",
                "Suitability: Wide range of hatchbacks, sedans, and SUVs"
            ]
        },
        // 8. Exide truck battery
        'product-8': {
            title: "Exide Truck/Commercial Vehicle Battery",
            description: "Heavy-duty batteries built for the rigorous demands of commercial transport. Engineered with thicker plates to resist vibration and provide sustained, high power output.",
            image: "assets/images/i8.png",
            features: [
                "Type: Heavy-Duty, High CCA",
                "Application: Trucks, Buses, Commercial/Agricultural vehicles",
                "Durability: Superior vibration and shock resistance",
                "Life: Built for long service life in harsh environments",
                "Capacity: Wide range of Ah capacities available"
            ]
        },
        // 9. Luminous volt Neo
        'product-9': {
            title: "Luminous Eco Volt Neo 1050 VA Sine Wave Inverter",
            description: "An energy-efficient inverter from Luminous, featuring adaptive battery charging for maximum battery life and minimum maintenance. Perfect for homes.",
            image: "assets/images/i9.png",
            features: [
                "Rating: 1050 VA (Pure Sine Wave)",
                "Efficiency: High efficiency with minimum power loss",
                "Charging: Fast, powerful, and safe charging (Adaptive Charging)",
                "Protections: Complete safety against all electrical hazards"
            ]
        },
        // 10. Luminous RC 18000
        'product-10': {
            title: "Luminous RC 18000 150Ah Tall Tubular Battery",
            description: "A premium tall tubular battery with high acid volume per ampere-hour, ensuring long backup and minimal water topping frequency. It is known for its reliability and low self-discharge rate.",
            image: "assets/images/i10.png",
            features: [
                "Capacity: 150 Ah",
                "Type: Tall Tubular Battery (RC series)",
                "Backup: Excellent backup time for heavy loads",
                "Life: Longer operational life with uniform spine construction",
                "Design: Puncture-resistant polyethylene separator"
            ]
        },
        // 11. Microtek 1400
        'product-11': {
            title: "Microtek HB 1400 VA Pure Sine Wave Inverter",
            description: "A heavy-duty pure sine wave inverter suitable for larger home or office setups. Ensures quiet operation and is safe for sensitive electronic equipment like computers and routers.",
            image: "assets/images/i11.png",
            features: [
                "Rating: 1400 VA (Pure Sine Wave)",
                "Features: Digital display for battery and load status",
                "Technology: Latest Micro-controller based Intelligent Control Design",
                "Compatibility: Runs high-end devices like refrigerators (small), mixers",
                "Application: Medium to large loads"
            ]
        },
        // 12. Microtek 150 ah battery
        'product-12': {
            title: "Microtek 150 Ah Tall Tubular Battery",
            description: "A dependable deep-cycle tubular battery manufactured by Microtek, offering consistent power delivery and a reliable backup solution. Designed for excellent heat dissipation.",
            image: "assets/images/i12.png",
            features: [
                "Capacity: 150 Ah",
                "Type: Tall Tubular Plate Battery",
                "Compatibility: Ideal match for Microtek inverters and home UPS systems",
                "Durability: High corrosive resistance and long service life",
                "Maintenance: Low maintenance, easy water level indicators"
            ]
        },
        // 13. Apc 1500 va online ups
        'product-13': {
            title: "APC Smart-UPS 1500 VA Online UPS (SRC1500I)",
            description: "High-performance double-conversion online UPS, providing the highest level of power protection for critical IT equipment, servers, and data centers. Zero transfer time to battery.",
            image: "assets/images/i13.png",
            features: [
                "Rating: 1500 VA / 1350 W",
                "Type: Online Double Conversion (Zero Transfer Time)",
                "Application: Servers, Networking Gear, Critical Equipment",
                "Control: LCD graphic display for easy monitoring",
                "Runtime: Scalable runtime via external battery packs"
            ]
        },
        // 14. Eastman
        'product-14': {
            title: "Eastman Inverter & Battery Solutions (General)",
            description: "Eastman offers a wide array of reliable inverters, batteries, and solar solutions known for their robust build quality and energy efficiency across the home and commercial segments.",
            image: "assets/images/i14.png",
            features: [
                "Product Range: Inverters (Sine Wave), Tubular Batteries, Solar Products",
                "Technology: DSP-based intelligent control inverters",
                "Quality: Known for robust build and consistent performance",
                "Service: Strong commitment to after-sales support"
            ]
        },
        // 15. Eastman inverter kit
        'product-15': {
            title: "Eastman 650 VA Inverter Kit (Inverter + Battery)",
            description: "A complete, pre-matched inverter and battery kit (e.g., 650VA with 100Ah battery) for light-to-moderate home use. A reliable, affordable solution for essential power backup.",
            image: "assets/images/i15.png",
            features: [
                "Kit Includes: Eastman Inverter (~650 VA) + Eastman Battery (~100 Ah)",
                "Setup: Ideal for simple, fast home installation",
                "Backup Time: Suitable for 2-4 hours of backup (varies by load)",
                "Safety: Multiple protection features built into the inverter"
            ]
        },
        // 16. Eastman inverter kit 2
        'product-16': {
            title: "Eastman 1100 VA Inverter Kit (Inverter + Battery)",
            description: "A higher-capacity inverter kit (e.g., 1100VA with 150Ah battery) designed for medium-sized homes requiring more backup power to run lights, fans, and a TV/computer simultaneously.",
            image: "assets/images/i16.png",
            features: [
                "Kit Includes: Eastman Inverter (~1100 VA) + Eastman Battery (~150 Ah)",
                "Technology: Pure Sine Wave output for device safety",
                "Load Capacity: Higher load handling capacity than the 650 VA model",
                "Recommendation: Medium-sized homes/offices with critical loads"
            ]
        }
    };

    // 2. Get the modal instance (requires Bootstrap's JS)
    const productDetailModal = new bootstrap.Modal(document.getElementById('productDetailModal'));

    // 3. Select all clickable images
    const clickableImages = document.querySelectorAll('.clickable-img');

    clickableImages.forEach(img => {
        img.addEventListener('click', (event) => {
            // Get the product-id from the parent card
            const productId = event.currentTarget.closest('.product-card').getAttribute('data-product-id');
            const product = allProductsData[productId];

            if (product) {
                // Populate the Modal with product data
                document.getElementById('modal-product-image').src = product.image;
                document.getElementById('modal-product-title').textContent = product.title;
                document.getElementById('modal-product-description').textContent = product.description;

                // Clear existing features
                const featuresList = document.getElementById('modal-product-features');
                featuresList.innerHTML = '';

                // Add new features
                product.features.forEach(feature => {
                    const li = document.createElement('li');
                    li.innerHTML = `<i class="bi bi-check-circle-fill text-primary me-2"></i> ${feature}`;
                    featuresList.appendChild(li);
                });

                // Show the modal
                productDetailModal.show();
            }
        });
    });

    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        const currentYear = new Date().getFullYear();
        yearSpan.textContent = currentYear;
    }

    const productRows = document.querySelectorAll('.product-row');
    const showMoreBtn = document.getElementById('show-more-btn');
    let currentRowIndex = 0; // Starts at index 0 (product-row-1)
    const totalRows = productRows.length;

    // --- 1. Show More Button Logic ---
    showMoreBtn.addEventListener('click', function () {
        currentRowIndex++; // Move to the next row

        if (currentRowIndex < totalRows) {
            // Show the next row and mark it as active
            productRows[currentRowIndex].classList.add('active-row');
            productRows[currentRowIndex].style.display = 'flex'; // Use flex to match Bootstrap's row display
        }

        // Check if we reached the end
        if (currentRowIndex >= totalRows - 1) {
            showMoreBtn.style.display = 'none'; // Hide the 'Show More' button
            initializePagination(); // Show pagination instead
        }
    });

    // --- 2. Pagination Initialization ---
    const paginationContainer = document.getElementById('product-pagination');
    const paginationList = paginationContainer.querySelector('.pagination');

    function initializePagination() {
        // Remove 'active-row' from all rows to switch to pure pagination mode
        productRows.forEach(row => {
            row.classList.remove('active-row');
            row.style.display = 'none';
        });

        // Show the first row initially
        productRows[0].style.display = 'flex';

        // Show the pagination container
        paginationContainer.classList.remove('d-none');

        // Build the pagination links
        paginationList.innerHTML = ''; // Clear existing links
        for (let i = 0; i < totalRows; i++) {
            const pageNumber = i + 1;
            const li = document.createElement('li');
            li.className = `page-item ${i === 0 ? 'active' : ''}`;
            li.innerHTML = `<a class="page-link" href="#">${pageNumber}</a>`;
            li.addEventListener('click', function (e) {
                e.preventDefault();
                goToPage(i);
            });
            paginationList.appendChild(li);
        }
    }

    // --- 3. Pagination Click Handler ---
    function goToPage(index) {
        // Hide all rows
        productRows.forEach(row => {
            row.style.display = 'none';
        });

        // Show the selected row
        productRows[index].style.display = 'flex';

        // Update active state in pagination
        document.querySelectorAll('.page-item').forEach((item, i) => {
            item.classList.remove('active');
            if (i === index) {
                item.classList.add('active');
            }
        });

        // Scroll to the products section to show the newly loaded page
        document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
    }

    // If you want to start with full pagination instead of 'Show More', 
    // you can call initializePagination() here and hide the showMoreBtn initially.

    // --- Contact Form Status Message Logic ---
    const contactSection = document.getElementById('contact');
    const form = document.getElementById('contactForm');
    const urlParams = new URLSearchParams(window.location.search);
    const status = urlParams.get('status');

    if (status && contactSection) {
        let alertHTML = '';

        if (status === 'success') {
            alertHTML = `
                        <div class="alert alert-success alert-dismissible fade show mt-4" role="alert">
                            Thank you! Your message has been sent successfully. We will respond soon.
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>`;
            // Clear the form fields on successful submission
            if (form) {
                form.reset();
            }
        } else if (status === 'error' || status === 'mail_error') {
            alertHTML = `
                        <div class="alert alert-danger alert-dismissible fade show mt-4" role="alert">
                            There was an issue submitting the form. Please check your inputs and try again.
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>`;
        }

        // Insert the alert message right before the form
        if (alertHTML) {
            form.insertAdjacentHTML('beforebegin', alertHTML);
            // Scroll to the contact section to show the message
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    }


    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const navbarCollapse = document.getElementById('navbarNav');

    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            // Check if the menu is currently expanded
            if (navbarCollapse.classList.contains('show')) {
                // Use Bootstrap's native JS method to hide the collapse element
                setTimeout(() => {
                    // Use Bootstrap's native JS method to hide the collapse element
                    const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                        toggle: false
                    });
                    bsCollapse.hide();
                }, 300);
            }
        });
    });
});