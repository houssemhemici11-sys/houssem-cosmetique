document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { id: 15, name: "Dr.Althea 147 Barrier Cream", price: 2800, category: "Visage", description: "Crème réparatrice qui renforce la barrière cutanée.", image: "images/products/Dr_Althea_147_Barrier_Cream.jpg", stock: 6, rating: 4.6, reviews: 23, badge: null },
        { id: 16, name: "Dr.Althea 345 Cream", price: 2800, category: "Visage", description: "Soin apaisant à base de centella asiatica.", image: "images/products/Dr_Althea_345_Relief_Cream.jpg", stock: 9, rating: 4.5, reviews: 31, badge: null },
        { id: 17, name: "Dr.Althea Vitamin C Serum", price: 3000, category: "Visage", description: "Sérum éclaircissant à la vitamine C pour un teint uniforme.", image: "images/products/Dr_Althea_Vitamin_C_Serum_Green.jpg", stock: 5, rating: 4.8, reviews: 47, badge: "Meilleure vente" },
        { id: 18, name: "Anua Ceramide Hydrating Barrier", price: 3200, category: "Visage", description: "Sérum aux céramides pour renforcer et hydrater la peau.", image: "images/products/Anua_Rice_7_Ceramide_Serum.jpg", stock: 5, rating: 4.4, reviews: 19, badge: null },
        { id: 19, name: "Anua Azelaic Acid Blue", price: 3200, category: "Visage", description: "Sérum apaisant à l'acide azélaïque, formule douce.", image: "images/products/Anua_PDRN_Hyaluron_Serum_Blue.jpg", stock: 0, rating: 4.3, reviews: 12, badge: "Rupture de stock" },
        { id: 20, name: "Anua Azelaic Acid Green", price: 3200, category: "Visage", description: "Sérum régulateur pour peaux à imperfections.", image: "images/products/Anua_Azelaic_Acid_10_Serum_Green.jpg", stock: 7, rating: 4.5, reviews: 28, badge: null },
        { id: 21, name: "Anua Azelaic Acid Red", price: 3200, category: "Visage", description: "Sérum intensif pour peaux à rougeurs et imperfections.", image: "images/products/Anua_Niacinamide_10_TXA_4_Serum_Red.jpg", stock: 5, rating: 4.6, reviews: 34, badge: null },
        { id: 22, name: "Retinal Shot Tightening Booster", price: 2800, category: "Visage", description: "Booster raffermissant au rétinal pour une peau plus ferme.", image: "images/products/Celimax_Retinal_Shot_Booster.jpg", stock: 13, rating: 4.7, reviews: 52, badge: "Meilleure vente" },
        { id: 23, name: "Centella Travel Kit", price: 2500, category: "Coffret", description: "Kit voyage complet à la centella asiatica apaisante.", image: "images/products/SKIN1004_Centella_Travel_Kit.jpg", stock: 10, rating: 4.9, reviews: 89, badge: "Meilleure vente", oldPrice: 3200 },
        { id: 24, name: "Kojic Savon", price: 1900, category: "Visage", description: "Savon éclaircissant à l'acide kojique, format value pack.", image: "images/products/Kojie_San_Soap.jpg", stock: 8, rating: 4.4, reviews: 15, badge: "Nouveau" },
        { id: 25, name: "Seoul 1988 Eye Cream", price: 2500, category: "Visage", description: "Contour des yeux anti-âge, texture fondante.", image: "images/products/K_Secret_Seoul_1988_Eye_Cream.jpg", stock: 10, rating: 4.6, reviews: 26, badge: "Nouveau" },
        { id: 26, name: "Centella Serum Marron 100ml", price: 2800, category: "Visage", description: "Sérum apaisant à la centella asiatica, format 100ml.", image: "images/products/SKIN1004_Centella_Ampoule_Marron.jpg", stock: 9, rating: 4.5, reviews: 21, badge: null },
        { id: 27, name: "Centella Serum Marron 200ml", price: 3300, category: "Visage", description: "Sérum apaisant à la centella asiatica, format 200ml.", image: "images/products/SKIN1004_Centella_Ampoule_Marron.jpg", stock: 9, rating: 4.5, reviews: 18, badge: null },
        { id: 28, name: "Centella Gel Rose", price: 2600, category: "Visage", description: "Gel apaisant et rafraîchissant à la centella asiatica.", image: "images/products/SKIN1004_Poremizing_Ampoule_Rose.jpg", stock: 9, rating: 4.4, reviews: 24, badge: null },
        { id: 29, name: "Embryolisse", price: 3300, category: "Visage", description: "Lait hydratant multi-usage, le soin culte des makeup artists.", image: "images/products/Embryolisse_Lait_Creme_Concentre.jpg", stock: 1, rating: 4.8, reviews: 63, badge: null, oldPrice: 3800 },
        { id: 30, name: "345 Cream Mist", price: 2700, category: "Visage", description: "Brume hydratante pour un teint frais toute la journée.", image: "images/products/Dr_Althea_345_Cream_Mist.jpg", stock: 1, rating: 4.3, reviews: 9, badge: null },
        { id: 31, name: "Centella Ampoule Rose", price: 3100, category: "Visage", description: "Ampoule concentrée à la centella asiatica pour peaux sensibles.", image: "images/products/SKIN1004_Poremizing_Ampoule_Rose.jpg", stock: 16, rating: 4.7, reviews: 41, badge: "Meilleure vente", oldPrice: 3600 }
    ];

    // ---------- STATE ----------
    let cart = JSON.parse(localStorage.getItem('hc_cart') || '[]');
    let activeCategory = 'Tous';
    let searchTerm = '';

    // ---------- DOM ----------
    const productList = document.getElementById('product-list');
    const orderForm = document.getElementById('order-form');
    const orderMessage = document.getElementById('order-message');
    const searchInput = document.getElementById('search-input');
    const categoryBar = document.getElementById('category-bar');
    const cartBtn = document.getElementById('cart-btn');
    const cartCount = document.getElementById('cart-count');
    const cartDrawer = document.getElementById('cart-drawer');
    const cartOverlay = document.getElementById('cart-overlay');
    const cartItemsEl = document.getElementById('cart-items');
    const cartTotalEl = document.getElementById('cart-total');
    const closeCartBtn = document.getElementById('close-cart');
    const goCheckoutBtn = document.getElementById('go-checkout');
    const checkoutSummary = document.getElementById('checkout-summary');
    const checkoutTotal = document.getElementById('checkout-total');
    const noResults = document.getElementById('no-results');
    const wilayaSelect = document.getElementById('wilaya');
    const communeSelect = document.getElementById('commune');
    const addressGroup = document.getElementById('address-group');
    const addressInput = document.getElementById('address');
    const bureauNote = document.getElementById('bureau-note');
    const deliveryRadios = document.querySelectorAll('input[name="delivery-type"]');

    const formatPrice = (n) => n.toLocaleString('fr-FR') + ' DA';

    // ---------- CATEGORY BAR ----------
    const categories = ['Tous', ...new Set(products.map(p => p.category))];
    categories.forEach(cat => {
        const btn = document.createElement('button');
        btn.className = 'category-chip' + (cat === 'Tous' ? ' active' : '');
        btn.textContent = cat;
        btn.dataset.cat = cat;
        btn.addEventListener('click', () => {
            activeCategory = cat;
            document.querySelectorAll('.category-chip').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderProducts();
        });
        categoryBar.appendChild(btn);
    });

    // ---------- SEARCH ----------
    searchInput.addEventListener('input', (e) => {
        searchTerm = e.target.value.trim().toLowerCase();
        renderProducts();
    });

    // ---------- RENDER PRODUCTS ----------
    function renderProducts() {
        const filtered = products.filter(p => {
            const matchCat = activeCategory === 'Tous' || p.category === activeCategory;
            const matchSearch = p.name.toLowerCase().includes(searchTerm) || p.description.toLowerCase().includes(searchTerm);
            return matchCat && matchSearch;
        });

        productList.innerHTML = '';
        noResults.style.display = filtered.length === 0 ? 'block' : 'none';

        filtered.forEach(product => {
            const card = document.createElement('div');
            card.className = 'product-card';

            const stars = renderStars(product.rating);
            const badgeHtml = product.badge
                ? `<span class="product-badge badge-${product.badge === 'Rupture de stock' ? 'out' : product.badge === 'Nouveau' ? 'new' : 'best'}">${product.badge}</span>`
                : '';
            const priceHtml = product.oldPrice
                ? `<span class="old-price">${formatPrice(product.oldPrice)}</span> <span class="price promo">${formatPrice(product.price)}</span>`
                : `<div class="price">${formatPrice(product.price)}</div>`;
            const outOfStock = product.stock === 0;
            const stockHtml = (!outOfStock && product.stock <= 5)
                ? `<p class="stock-warning"><i class="fas fa-triangle-exclamation"></i> Il ne reste que ${product.stock} en stock !</p>`
                : '';

            card.innerHTML = `
                <span class="category-tag">${product.category}</span>
                ${badgeHtml}
                <img src="${product.image}" alt="${product.name}" loading="lazy" class="${outOfStock ? 'img-out-of-stock' : ''}">
                <h3>${product.name}</h3>
                <div class="rating-row">${stars} <span class="review-count">(${product.reviews})</span></div>
                <p class="product-desc">${product.description}</p>
                ${priceHtml}
                ${stockHtml}
                <button class="btn btn-add" data-id="${product.id}" ${outOfStock ? 'disabled' : ''}>${outOfStock ? 'Rupture de stock' : 'Ajouter au panier'}</button>
            `;
            productList.appendChild(card);
        });

        document.querySelectorAll('.btn-add:not([disabled])').forEach(btn => {
            btn.addEventListener('click', () => addToCart(parseInt(btn.dataset.id)));
        });
    }

    function renderStars(rating) {
        const full = Math.round(rating);
        let html = '';
        for (let i = 1; i <= 5; i++) {
            html += `<i class="fa-star ${i <= full ? 'fas' : 'far'}"></i>`;
        }
        return `<span class="stars">${html}</span>`;
    }

    // ---------- CART LOGIC ----------
    function saveCart() {
        localStorage.setItem('hc_cart', JSON.stringify(cart));
    }

    function addToCart(id) {
        const existing = cart.find(item => item.id === id);
        if (existing) {
            existing.qty += 1;
        } else {
            const product = products.find(p => p.id === id);
            cart.push({ id: product.id, name: product.name, price: product.price, image: product.image, qty: 1 });
        }
        saveCart();
        updateCartUI();
        openCart();
    }

    function changeQty(id, delta) {
        const item = cart.find(i => i.id === id);
        if (!item) return;
        item.qty += delta;
        if (item.qty <= 0) cart = cart.filter(i => i.id !== id);
        saveCart();
        updateCartUI();
    }

    function removeFromCart(id) {
        cart = cart.filter(i => i.id !== id);
        saveCart();
        updateCartUI();
    }

    function cartTotal() {
        return cart.reduce((sum, i) => sum + i.price * i.qty, 0);
    }

    function updateCartUI() {
        const totalItems = cart.reduce((sum, i) => sum + i.qty, 0);
        cartCount.textContent = totalItems;
        cartCount.style.display = totalItems > 0 ? 'flex' : 'none';

        if (cart.length === 0) {
            cartItemsEl.innerHTML = '<p class="cart-empty">Votre panier est vide.</p>';
        } else {
            cartItemsEl.innerHTML = cart.map(item => `
                <div class="cart-item">
                    <img src="${item.image}" alt="${item.name}">
                    <div class="cart-item-info">
                        <h4>${item.name}</h4>
                        <div class="cart-item-price">${formatPrice(item.price)}</div>
                        <div class="qty-controls">
                            <button class="qty-btn" data-action="minus" data-id="${item.id}">−</button>
                            <span>${item.qty}</span>
                            <button class="qty-btn" data-action="plus" data-id="${item.id}">+</button>
                        </div>
                    </div>
                    <button class="remove-item" data-id="${item.id}"><i class="fas fa-trash"></i></button>
                </div>
            `).join('');

            cartItemsEl.querySelectorAll('.qty-btn').forEach(btn => {
                btn.addEventListener('click', () => changeQty(parseInt(btn.dataset.id), btn.dataset.action === 'plus' ? 1 : -1));
            });
            cartItemsEl.querySelectorAll('.remove-item').forEach(btn => {
                btn.addEventListener('click', () => removeFromCart(parseInt(btn.dataset.id)));
            });
        }

        cartTotalEl.textContent = formatPrice(cartTotal());
        updateCheckoutSummary();
    }

    function updateCheckoutSummary() {
        if (!checkoutSummary) return;
        if (cart.length === 0) {
            checkoutSummary.innerHTML = '<p class="cart-empty">Ajoutez des produits à votre panier pour commander.</p>';
            checkoutTotal.textContent = formatPrice(0);
            return;
        }
        checkoutSummary.innerHTML = cart.map(item => `
            <div class="summary-line">
                <span>${item.name} × ${item.qty}</span>
                <span>${formatPrice(item.price * item.qty)}</span>
            </div>
        `).join('');
        checkoutTotal.textContent = formatPrice(cartTotal());
    }

    // ---------- CART DRAWER ----------
    function openCart() {
        cartDrawer.classList.add('open');
        cartOverlay.classList.add('open');
    }
    function closeCart() {
        cartDrawer.classList.remove('open');
        cartOverlay.classList.remove('open');
    }
    cartBtn.addEventListener('click', openCart);
    closeCartBtn.addEventListener('click', closeCart);
    cartOverlay.addEventListener('click', closeCart);
    goCheckoutBtn.addEventListener('click', () => {
        closeCart();
        document.getElementById('order').scrollIntoView({ behavior: 'smooth' });
    });

    // ---------- DELIVERY TYPE TOGGLE ----------
    deliveryRadios.forEach(radio => {
        radio.addEventListener('change', () => {
            if (radio.value === 'bureau' && radio.checked) {
                addressGroup.style.display = 'none';
                addressInput.required = false;
                bureauNote.style.display = 'block';
            } else if (radio.value === 'domicile' && radio.checked) {
                addressGroup.style.display = 'block';
                addressInput.required = true;
                bureauNote.style.display = 'none';
            }
        });
    });

    // ---------- WILAYA / COMMUNE DROPDOWNS ----------
    if (typeof ALGERIA_WILAYAS !== 'undefined') {
        ALGERIA_WILAYAS.forEach(w => {
            const opt = document.createElement('option');
            opt.value = w.code;
            opt.textContent = `${w.code} - ${w.name}`;
            wilayaSelect.appendChild(opt);
        });

        wilayaSelect.addEventListener('change', () => {
            const wilaya = ALGERIA_WILAYAS.find(w => w.code === wilayaSelect.value);
            communeSelect.innerHTML = '';
            if (wilaya) {
                communeSelect.disabled = false;
                const defaultOpt = document.createElement('option');
                defaultOpt.value = '';
                defaultOpt.disabled = true;
                defaultOpt.selected = true;
                defaultOpt.textContent = 'Choisissez votre commune';
                communeSelect.appendChild(defaultOpt);
                wilaya.communes.forEach(c => {
                    const opt = document.createElement('option');
                    opt.value = c;
                    opt.textContent = c;
                    communeSelect.appendChild(opt);
                });
            } else {
                communeSelect.disabled = true;
            }
        });
    }

    // ---------- ORDER FORM ----------
    orderForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        if (cart.length === 0) {
            orderMessage.style.display = 'block';
            orderMessage.style.color = 'red';
            orderMessage.textContent = "Votre panier est vide. Ajoutez au moins un produit avant de commander.";
            return;
        }

        if (!wilayaSelect.value || !communeSelect.value) {
            orderMessage.style.display = 'block';
            orderMessage.style.color = 'red';
            orderMessage.textContent = "Merci de choisir votre wilaya et votre commune.";
            return;
        }

        const deliveryType = document.querySelector('input[name="delivery-type"]:checked').value;

        const formData = {
            name: document.getElementById('name').value,
            phone: document.getElementById('phone').value,
            instagram: document.getElementById('instagram').value,
            wilaya: wilayaSelect.options[wilayaSelect.selectedIndex].text,
            commune: communeSelect.value,
            deliveryType: deliveryType === 'bureau' ? 'Au bureau (Stop Desk)' : 'À domicile',
            address: deliveryType === 'bureau' ? '' : document.getElementById('address').value,
            items: cart,
            total: cartTotal()
        };

        try {
            const response = await fetch('/api/orders', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                orderMessage.style.display = 'block';
                orderMessage.style.color = 'green';
                orderMessage.innerHTML = `<i class="fas fa-check-circle"></i> Merci ${formData.name} ! Votre commande de <strong>${formatPrice(formData.total)}</strong> a été enregistrée. Nous vous contacterons bientôt au ${formData.phone}.`;
                orderForm.reset();
                communeSelect.innerHTML = '<option value="" disabled selected>Choisissez d\'abord une wilaya</option>';
                communeSelect.disabled = true;
                addressGroup.style.display = 'block';
                addressInput.required = true;
                bureauNote.style.display = 'none';
                cart = [];
                saveCart();
                updateCartUI();
            } else {
                throw new Error('Erreur lors de la commande');
            }
        } catch (error) {
            orderMessage.style.display = 'block';
            orderMessage.style.color = 'red';
            orderMessage.textContent = "Une erreur est survenue. Veuillez réessayer.";
        }
    });

    // ---------- INIT ----------
    renderProducts();
    updateCartUI();
});
