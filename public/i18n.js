const TRANSLATIONS = {
    fr: {
        promoBanner: "Livraison GRATUITE à partir de 5000 DA d'achat sur tout le territoire national",
        brandTagline: "L'excellence cosmétique en Algérie",
        searchPlaceholder: "Rechercher un produit...",
        heroTitle: "Révélez votre beauté naturelle",
        heroText: "Découvrez notre gamme exclusive de produits cosmétiques haut de gamme, conçus pour sublimer votre peau avec des ingrédients naturels.",
        heroBtn: "Découvrir la collection",
        routinesTitle: "Routines Complètes",
        routinesSubtitle: "Des combinaisons pensées pour des résultats optimaux",
        shopTitle: "Nos Produits",
        noResults: "Aucun produit ne correspond à votre recherche.",
        noFavorites: "Vous n'avez pas encore de favoris. Appuyez sur ❤️ sur un produit pour l'ajouter.",
        orderTitle: "Passer une Commande",
        summaryTitle: "Récapitulatif du panier",
        totalLabel: "Total",
        nameLabel: "Nom Complet",
        namePlaceholder: "Ex: Ahmed Benali",
        phoneLabel: "Numéro de Téléphone",
        phonePlaceholder: "Ex: 0550 00 00 00",
        instagramLabel: "Compte Instagram (optionnel)",
        instagramPlaceholder: "Ex: @nom_utilisateur",
        wilayaLabel: "Wilaya",
        wilayaPlaceholder: "Choisissez votre wilaya",
        communeLabel: "Commune",
        communePlaceholderDefault: "Choisissez d'abord une wilaya",
        communePlaceholder: "Choisissez votre commune",
        deliveryLabel: "Mode de Livraison",
        deliveryDomicile: "À domicile",
        deliveryBureau: "Au bureau (Stop Desk)",
        addressLabel: "Adresse Précise (rue, quartier...)",
        addressPlaceholder: "Ex: Cité 500 logements, Bloc B, N°12",
        bureauNote: "Vous récupérerez votre colis au bureau de livraison de votre commune. Nous vous communiquerons l'adresse exacte lors de la confirmation.",
        paymentTitle: "Paiement à la Livraison",
        paymentText: "Le paiement s'effectue en espèces lors de la réception de votre colis.",
        paymentWilayasText: "Livraison disponible sur 58 Wilayas.",
        confirmBtn: "Confirmer ma Commande",
        whatsappLabel: "Besoin d'aide ?",
        cartTitle: "Mon Panier",
        checkoutBtn: "Passer la commande",
        footerRights: "© 2024 Houssem Cosmetics. Tous droits réservés.",
        footerDelivery: "Livraison disponible sur tout le territoire national (58 Wilayas).",
        cartEmpty: "Votre panier est vide.",
        addToCart: "Ajouter au panier",
        outOfStock: "Rupture de stock",
        quickOrder: "Commander en 1 clic",
        stockWarning: "Il ne reste que {n} en stock !",
        reviewsSuffix: "avis",
        similarProducts: "Produits similaires",
        addRoutine: "Ajouter toute la routine",
        chooseWilayaCommune: "Merci de choisir votre wilaya et votre commune.",
        emptyCartError: "Votre panier est vide. Ajoutez au moins un produit avant de commander.",
        orderSuccess: "Merci {name} ! Votre commande de {total} a été enregistrée. Nous vous contacterons bientôt au {phone}.",
        orderError: "Une erreur est survenue. Veuillez réessayer.",
        categories: { "Tous": "Tous", "Visage": "Visage", "Corps": "Corps", "Maquillage": "Maquillage", "Parfum": "Parfum", "Coffret": "Coffret" },
        skinTypes: { "Tous": "Toutes peaux", "Grasse": "Grasse", "Sèche": "Sèche", "Sensible": "Sensible", "Mixte": "Mixte" },
        badges: { "Meilleure vente": "Meilleure vente", "Nouveau": "Nouveau", "Rupture de stock": "Rupture de stock" }
    },
    ar: {
        promoBanner: "توصيل مجاني بداية من 5000 دج على كامل التراب الوطني",
        brandTagline: "التميز في مستحضرات التجميل بالجزائر",
        searchPlaceholder: "ابحث عن منتج...",
        heroTitle: "أظهري جمالك الطبيعي",
        heroText: "اكتشفي مجموعتنا الحصرية من مستحضرات التجميل الراقية، المصممة لتألق بشرتك بمكونات طبيعية.",
        heroBtn: "اكتشف المجموعة",
        routinesTitle: "روتينات متكاملة",
        routinesSubtitle: "تركيبات مدروسة للحصول على أفضل النتائج",
        shopTitle: "منتجاتنا",
        noResults: "لا يوجد منتج يطابق بحثك.",
        noFavorites: "ليس لديك مفضلة بعد. اضغط على ❤️ على أي منتج لإضافته.",
        orderTitle: "إتمام الطلب",
        summaryTitle: "ملخص السلة",
        totalLabel: "المجموع",
        nameLabel: "الاسم الكامل",
        namePlaceholder: "مثال: أحمد بن علي",
        phoneLabel: "رقم الهاتف",
        phonePlaceholder: "مثال: 0550 00 00 00",
        instagramLabel: "حساب إنستغرام (اختياري)",
        instagramPlaceholder: "مثال: @اسم_المستخدم",
        wilayaLabel: "الولاية",
        wilayaPlaceholder: "اختر ولايتك",
        communeLabel: "البلدية",
        communePlaceholderDefault: "اختر الولاية أولاً",
        communePlaceholder: "اختر بلديتك",
        deliveryLabel: "طريقة التوصيل",
        deliveryDomicile: "إلى المنزل",
        deliveryBureau: "إلى المكتب (Stop Desk)",
        addressLabel: "العنوان الدقيق (الشارع، الحي...)",
        addressPlaceholder: "مثال: حي 500 مسكن، عمارة B، رقم 12",
        bureauNote: "ستستلم طردك من مكتب التوصيل في بلديتك. سنُعلمك بالعنوان الدقيق عند التأكيد.",
        paymentTitle: "الدفع عند الاستلام",
        paymentText: "يتم الدفع نقداً عند استلام طردك.",
        paymentWilayasText: "التوصيل متوفر في 58 ولاية.",
        confirmBtn: "تأكيد طلبي",
        whatsappLabel: "تحتاج مساعدة؟",
        cartTitle: "سلتي",
        checkoutBtn: "إتمام الطلب",
        footerRights: "© 2024 Houssem Cosmetics. جميع الحقوق محفوظة.",
        footerDelivery: "التوصيل متوفر في كامل التراب الوطني (58 ولاية).",
        cartEmpty: "سلتك فارغة.",
        addToCart: "أضف إلى السلة",
        outOfStock: "نفدت الكمية",
        quickOrder: "اطلب بنقرة واحدة",
        stockWarning: "لم يتبق سوى {n} في المخزون!",
        reviewsSuffix: "تقييم",
        similarProducts: "منتجات مشابهة",
        addRoutine: "أضف الروتين كاملاً",
        chooseWilayaCommune: "يرجى اختيار الولاية والبلدية.",
        emptyCartError: "سلتك فارغة. أضف منتجاً واحداً على الأقل قبل الطلب.",
        orderSuccess: "شكراً {name}! تم تسجيل طلبك بقيمة {total}. سنتصل بك قريباً على الرقم {phone}.",
        orderError: "حدث خطأ. حاول مرة أخرى.",
        categories: { "Tous": "الكل", "Visage": "الوجه", "Corps": "الجسم", "Maquillage": "مكياج", "Parfum": "عطور", "Coffret": "طقم" },
        skinTypes: { "Tous": "جميع أنواع البشرة", "Grasse": "دهنية", "Sèche": "جافة", "Sensible": "حساسة", "Mixte": "مختلطة" },
        badges: { "Meilleure vente": "الأكثر مبيعاً", "Nouveau": "جديد", "Rupture de stock": "نفدت الكمية" }
    }
};

let currentLang = localStorage.getItem('hc_lang') || 'fr';

function t(key, vars) {
    let str = (TRANSLATIONS[currentLang] && TRANSLATIONS[currentLang][key]) || TRANSLATIONS.fr[key] || key;
    if (vars) {
        Object.keys(vars).forEach(k => {
            str = str.replace(`{${k}}`, vars[k]);
        });
    }
    return str;
}

function applyStaticTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.textContent = t(key);
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        el.setAttribute('placeholder', t(key));
    });

    const html = document.getElementById('html-root');
    html.setAttribute('lang', currentLang);
    html.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr');

    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) langToggle.textContent = currentLang === 'ar' ? 'FR' : 'AR';
}

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('hc_lang', lang);
    applyStaticTranslations();
    if (typeof onLanguageChange === 'function') onLanguageChange();
}
