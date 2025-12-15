document.addEventListener('DOMContentLoaded', () => {
    // --- Navigation ---
    const mobileMenu = document.getElementById('mobile-menu');
    const menuBtn = document.getElementById('menu-btn');
    const closeMenu = document.getElementById('close-menu');
    const navbar = document.querySelector('.navbar');

    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.add('active');
    });

    closeMenu.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    });

    // Close menu when clicking a link
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
        });
    });

    // Navbar Scroll Effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // --- Menu Filtering ---
    const filterBtns = document.querySelectorAll('.filter-btn');
    const products = document.querySelectorAll('.product-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active to clicked
            btn.classList.add('active');

            const filter = btn.dataset.filter;

            products.forEach(product => {
                if (filter === 'all') {
                    product.style.display = 'block';
                } else {
                    if (product.dataset.category === filter) {
                        product.style.display = 'block';
                    } else {
                        product.style.display = 'none';
                    }
                }
            });
        });
    });

    // --- Cart Functionality ---
    const cartBtn = document.getElementById('cart-btn');
    const closeCart = document.getElementById('close-cart');
    const cartOverlay = document.getElementById('cart-overlay');
    const cartSidebar = document.getElementById('cart-sidebar');
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');
    const cartCountElement = document.getElementById('cart-count');
    const addToCartBtns = document.querySelectorAll('.add-to-cart-btn');

    let cart = [];

    // Open/Close Cart
    function toggleCart() {
        cartSidebar.classList.toggle('active');
        cartOverlay.classList.toggle('active');
    }

    cartBtn.addEventListener('click', toggleCart);
    closeCart.addEventListener('click', toggleCart);
    cartOverlay.addEventListener('click', toggleCart);

    // Add to Cart Logic
    addToCartBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const name = btn.dataset.name;
            const card = btn.closest('.product-card') || btn.closest('.offer-info');
            
            // Extract price
            let priceText;
            if (card.classList.contains('offer-info')) {
                // Special handling for offer card structure
                priceText = card.querySelector('.price').childNodes[0].nodeValue.trim(); 
            } else {
                 priceText = card.querySelector('.price').innerText;
            }
            
            const price = parseFloat(priceText.replace('$', ''));

            addToCart(name, price);
            
            // Visual feedback
            const originalText = btn.innerHTML;
            btn.innerHTML = '<i class="fas fa-check"></i> Added';
            setTimeout(() => {
                btn.innerHTML = originalText;
            }, 1500);
        });
    });

    function addToCart(name, price) {
        const existingItem = cart.find(item => item.name === name);

        if (existingItem) {
            existingItem.qty++;
        } else {
            cart.push({ name, price, qty: 1 });
        }

        updateCartUI();
    }

    function removeFromCart(name) {
        cart = cart.filter(item => item.name !== name);
        updateCartUI();
    }

    function updateCartUI() {
        // Update Count
        const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
        cartCountElement.innerText = totalQty;

        // Update Total
        const total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
        cartTotalElement.innerText = total.toFixed(2);

        // Render Items
        cartItemsContainer.innerHTML = '';
        
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p class="empty-cart-msg">Your cart is empty.</p>';
            return;
        }

        cart.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('cart-item');
            itemElement.innerHTML = `
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <span>$${item.price.toFixed(2)} x ${item.qty}</span>
                </div>
                <div class="cart-item-actions">
                    <i class="fas fa-trash-alt" style="color: #e74c3c; cursor: pointer;" onclick="removeItem('${item.name}')"></i>
                </div>
            `;
            // Note: inline onclick needs global scope, but we are in module. 
            // Let's use event delegation instead.
            cartItemsContainer.appendChild(itemElement);
        });
    }
    
    // Event delegation for remove buttons
    cartItemsContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('fa-trash-alt')) {
            const name = e.target.closest('.cart-item').querySelector('h4').innerText;
            removeFromCart(name);
        }
    });

    // --- Animations on Scroll ---
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.product-card, .offer-card, .review-card, .section-title');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });

});
