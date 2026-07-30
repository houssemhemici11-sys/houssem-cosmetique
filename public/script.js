document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { id: 1, name: "Sérum Visage Éclat", price: 3500, category: "Visage", description: "Sérum à la vitamine C pour un teint lumineux.", image: "images/serum_visage.png" },
        { id: 2, name: "Crème Hydratante Intense", price: 2800, category: "Visage", description: "Hydratation 24h pour peaux sèches et sensibles.", image: "images/creme_hydratante.png" },
        { id: 3, name: "Huile d'Argan Bio", price: 1500, category: "Corps", description: "100% pure et naturelle, pressée à froid.", image: "images/huile_argan.png" },
        { id: 4, name: "Savon Noir Artisanal", price: 850, category: "Corps", description: "Traditionnel pour un gommage en profondeur.", image: "images/savon_noir.png" },
        { id: 5, name: "Gommage au Café", price: 1200, category: "Corps", description: "Exfoliant naturel pour une peau douce.", image: "images/gommage_cafe.png" },
        { id: 6, name: "Rouge à Lèvres Mat", price: 1800, category: "Maquillage", description: "Tenue longue durée et fini velours.", image: "images/rouge_levres.png" },
        { id: 7, name: "Gloss Kiko", price: 500, category: "Maquillage", description: "Brillance intense et fini cristallin.", image: "images/gloss_kiko.png" },
        { id: 8, name: "Huile de Figue de Barbarie", price: 4500, category: "Corps", description: "Élixir anti-âge 100% pur et précieux.", image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&q=80&w=400" },
        { id: 9, name: "Ghassoul aux 7 Herbes", price: 1200, category: "Corps", description: "Masque traditionnel pour peau et cheveux.", image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&q=80&w=400" },
        { id: 10, name: "Eau de Rose de Blida", price: 950, category: "Visage", description: "Tonique naturel rafraîchissant et apaisant.", image: "https://images.unsplash.com/photo-1558191053-8edcb01e1da3?auto=format&fit=crop&q=80&w=400" },
        { id: 11, name: "Musc Tahara Pur", price: 1500, category: "Parfum", description: "Parfum blanc crémeux, douceur extrême.", image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=400" },
        { id: 12, name: "Khol Artisanal Sahara", price: 800, category: "Maquillage", description: "Soin des yeux traditionnel et protecteur.", image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=400" },
        { id: 13, name: "Crème Bave d'Escargot", price: 3200, category: "Visage", description: "Réparation intense et régénération cutanée.", image: "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?auto=format&fit=crop&q=80&w=400" },
        { id: 14, name: "Savon Olive de Kabylie", price: 450, category: "Corps", description: "Savon naturel riche en vitamine E.", image: "https://images.unsplash.com/photo-1605264964528-06403738d6dc?auto=format&fit=crop&q=80&w=400" },
        { id: 15, name: "Dr.Althea 147 Barrier Cream", price: 3200, category: "Visage", description: "Crème réparatrice qui renforce la barrière cutanée.", image: "https://placehold.co/400x400/f5f0eb/333333?text=Dr.Althea+147" },
        { id: 16, name: "Dr.Althea 345 Cream", price: 3400, category: "Visage", description: "Soin apaisant à base de centella asiatica.", image: "https://placehold.co/400x400/f5f0eb/333333?text=Dr.Althea+345" },
        { id: 17, name: "Dr.Althea Vitamin C Serum", price: 3900, category: "Visage", description: "Sérum éclaircissant à la vitamine C pour un teint uniforme.", image: "https://placehold.co/400x400/f5f0eb/333333?text=Vitamin+C+Serum" },
        { id: 18, name: "Anua Ceramide Hydrating Barrier", price: 3600, category: "Visage", description: "Sérum aux céramides pour renforcer et hydrater la peau.", image: "https://placehold.co/400x400/f5f0eb/333333?text=Anua+Ceramide" },
        { id: 19, name: "Anua Azelaic Acid Blue", price: 3300, category: "Visage", description: "Sérum apaisant à l'acide azélaïque, formule douce.", image: "https://placehold.co/400x400/dbe9f4/333333?text=Azelaic+Blue" },
        { id: 20, name: "Anua Azelaic Acid Green", price: 3300, category: "Visage", description: "Sérum régulateur pour peaux à imperfections.", image: "https://placehold.co/400x400/e0f0e0/333333?text=Azelaic+Green" },
        { id: 21, name: "Anua Azelaic Acid Red", price: 3500, category: "Visage", description: "Sérum intensif pour peaux à rougeurs et imperfections.", image: "https://placehold.co/400x400/f4dbdb/333333?text=Azelaic+Red" },
        { id: 22, name: "Retinal Shot Tightening Booster", price: 3800, category: "Visage", description: "Booster raffermissant au rétinal pour une peau plus ferme.", image: "https://placehold.co/400x400/f5f0eb/333333?text=Retinal+Shot" },
        { id: 23, name: "Centella Travel Kit", price: 3900, category: "Coffret", description: "Kit voyage complet à la centella asiatica apaisante.", image: "https://placehold.co/400x400/e0f0e0/333333?text=Centella+Kit" },
        { id: 24, name: "Kojic Cream", price: 3100, category: "Visage", description: "Crème éclaircissante à l'acide kojique.", image: "https://placehold.co/400x400/f5f0eb/333333?text=Kojic+Cream" },
        { id: 25, name: "Seoul 1988 Eye Cream", price: 3700, category: "Visage", description: "Contour des yeux anti-âge, texture fondante.", image: "https://placehold.co/400x400/f5f0eb/333333?text=Eye+Cream" },
        { id: 26, name: "Centella Serum Marron 100ml", price: 3400, category: "Visage", description: "Sérum apaisant à la centella asiatica, format 100ml.", image: "https://placehold.co/400x400/e0f0e0/333333?text=Centella+100ml" },
        { id: 27, name: "Centella Serum Marron 200ml", price: 3800, category: "Visage", description: "Sérum apaisant à la centella asiatica, format 200ml.", image: "https://placehold.co/400x400/e0f0e0/333333?text=Centella+200ml" },
        { id: 28, name: "Centella Gel Rose", price: 3200, category: "Visage", description: "Gel apaisant et rafraîchissant à la centella asiatica.", image: "https://placehold.co/400x400/f4dbe8/333333?text=Centella+Gel" },
        { id: 29, name: "Embryolisse", price: 3600, category: "Visage", description: "Lait hydratant multi-usage, le soin culte des makeup artists.", image: "https://placehold.co/400x400/f5f0eb/333333?text=Embryolisse" },
        { id: 30, name: "345 Cream Mist", price: 3300, category: "Visage", description: "Brume hydratante pour un teint frais toute la journée.", image: "https://placehold.co/400x400/dbe9f4/333333?text=Cream+Mist" },
        { id: 31, name: "Centella Ampoule Rose", price: 3900, category: "Visage", description: "Ampoule concentrée à la centella asiatica pour peaux sensibles.", image: "https://placehold.co/400x400/f4dbe8/333333?text=Centella+Ampoule" }
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
            card.innerHTML = `
                <span class="category-tag">${product.category}</span>
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                <h3>${product.name}</h3>
                <p class="product-desc">${product.description}</p>
                <div class="price">${formatPrice(product.price)}</div>
                <button class="btn btn-add" data-id="${product.id}">Ajouter au panier</button>
            `;
            productList.appendChild(card);
        });

        document.querySelectorAll('.btn-add').forEach(btn => {
            btn.addEventListener('click', () => addToCart(parseInt(btn.dataset.id)));
        });
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

    // ---------- ORDER FORM ----------
    orderForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        if (cart.length === 0) {
            orderMessage.style.display = 'block';
            orderMessage.style.color = 'red';
            orderMessage.textContent = "Votre panier est vide. Ajoutez au moins un produit avant de commander.";
            return;
        }

        const formData = {
            name: document.getElementById('name').value,
            phone: document.getElementById('phone').value,
            address: document.getElementById('address').value,
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
