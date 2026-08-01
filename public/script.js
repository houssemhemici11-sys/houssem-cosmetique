document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { id: 15, name: "Dr.Althea 147 Barrier Cream", price: 2800, category: "Visage", description: "Crème réparatrice qui renforce la barrière cutanée.", image: "images/products/Dr_Althea_147_Barrier_Cream.jpg", stock: 6, rating: 4.6, reviews: 23, badge: null, skinTypes: ["Sèche", "Sensible"], nameAr: "دراثيا 147 كريم حاجز", descAr: "كريم مرمم يعزز حاجز البشرة." },
        { id: 16, name: "Dr.Althea 345 Cream", price: 2800, category: "Visage", description: "Soin apaisant à base de centella asiatica.", image: "images/products/Dr_Althea_345_Relief_Cream.jpg", stock: 9, rating: 4.5, reviews: 31, badge: null, skinTypes: ["Sensible", "Sèche"], nameAr: "دراثيا 345 كريم", descAr: "عناية مهدئة بخلاصة السنتيلا الآسيوية." },
        { id: 17, name: "Dr.Althea Vitamin C Serum", price: 3000, category: "Visage", description: "Sérum éclaircissant à la vitamine C pour un teint uniforme.", image: "images/products/Dr_Althea_Vitamin_C_Serum_Green.jpg", stock: 5, rating: 4.8, reviews: 47, badge: "Meilleure vente", skinTypes: ["Grasse", "Sèche", "Sensible", "Mixte"], nameAr: "دراثيا سيروم فيتامين C", descAr: "سيروم مفتّح بفيتامين C لتوحيد لون البشرة." },
        { id: 18, name: "Anua Ceramide Hydrating Barrier", price: 3200, category: "Visage", description: "Sérum aux céramides pour renforcer et hydrater la peau.", image: "images/products/Anua_Rice_7_Ceramide_Serum.jpg", stock: 5, rating: 4.4, reviews: 19, badge: null, skinTypes: ["Sèche", "Sensible"], nameAr: "أنوا سيروم السيراميد المرطب", descAr: "سيروم بالسيراميد لتقوية وترطيب البشرة." },
        { id: 19, name: "Anua Azelaic Acid Blue", price: 3200, category: "Visage", description: "Sérum apaisant à l'acide azélaïque, formule douce.", image: "images/products/Anua_PDRN_Hyaluron_Serum_Blue.jpg", stock: 0, rating: 4.3, reviews: 12, badge: "Rupture de stock", skinTypes: ["Sensible"], nameAr: "أنوا سيروم حمض الأزيليك أزرق", descAr: "سيروم مهدئ بحمض الأزيليك بتركيبة لطيفة." },
        { id: 20, name: "Anua Azelaic Acid Green", price: 3200, category: "Visage", description: "Sérum régulateur pour peaux à imperfections.", image: "images/products/Anua_Azelaic_Acid_10_Serum_Green.jpg", stock: 7, rating: 4.5, reviews: 28, badge: null, skinTypes: ["Grasse", "Mixte"], nameAr: "أنوا سيروم حمض الأزيليك أخضر", descAr: "سيروم منظم للبشرة ذات الشوائب." },
        { id: 21, name: "Anua Azelaic Acid Red", price: 3200, category: "Visage", description: "Sérum intensif pour peaux à rougeurs et imperfections.", image: "images/products/Anua_Niacinamide_10_TXA_4_Serum_Red.jpg", stock: 5, rating: 4.6, reviews: 34, badge: null, skinTypes: ["Sensible", "Grasse"], nameAr: "أنوا سيروم حمض الأزيليك أحمر", descAr: "سيروم مكثف للاحمرار والشوائب." },
        { id: 22, name: "Retinal Shot Tightening Booster", price: 2800, category: "Visage", description: "Booster raffermissant au rétinal pour une peau plus ferme.", image: "images/products/Celimax_Retinal_Shot_Booster.jpg", stock: 13, rating: 4.7, reviews: 52, badge: "Meilleure vente", skinTypes: ["Mixte", "Sèche"], nameAr: "بوستر ريتينال شادّ للبشرة", descAr: "بوستر شادّ بالريتينال لبشرة أكثر تماسكاً." },
        { id: 23, name: "Centella Travel Kit", price: 2500, category: "Coffret", description: "Kit voyage complet à la centella asiatica apaisante.", image: "images/products/SKIN1004_Centella_Travel_Kit.jpg", stock: 10, rating: 4.9, reviews: 89, badge: "Meilleure vente", oldPrice: 3200, skinTypes: ["Grasse", "Sèche", "Sensible", "Mixte"], nameAr: "طقم سفر سنتيلا", descAr: "طقم سفر كامل بخلاصة السنتيلا المهدئة." },
        { id: 24, name: "Kojic Savon", price: 1900, category: "Visage", description: "Savon éclaircissant à l'acide kojique, format value pack.", image: "images/products/Kojie_San_Soap.jpg", stock: 8, rating: 4.4, reviews: 15, badge: "Nouveau", skinTypes: ["Grasse", "Sèche", "Sensible", "Mixte"], nameAr: "صابون كوجيك", descAr: "صابون مفتّح بحمض الكوجيك، عبوة اقتصادية." },
        { id: 25, name: "Seoul 1988 Eye Cream", price: 2500, category: "Visage", description: "Contour des yeux anti-âge, texture fondante.", image: "images/products/K_Secret_Seoul_1988_Eye_Cream.jpg", stock: 10, rating: 4.6, reviews: 26, badge: "Nouveau", skinTypes: ["Grasse", "Sèche", "Sensible", "Mixte"], nameAr: "كريم العين سيول 1988", descAr: "كريم مضاد للشيخوخة لمحيط العين، ملمس ذائب." },
        { id: 26, name: "Centella Serum Marron 100ml", price: 2800, category: "Visage", description: "Sérum apaisant à la centella asiatica, format 100ml.", image: "images/products/SKIN1004_Centella_Ampoule_Marron.jpg", stock: 9, rating: 4.5, reviews: 21, badge: null, skinTypes: ["Sensible", "Sèche"], nameAr: "سيروم سنتيلا بني 100 مل", descAr: "سيروم مهدئ بالسنتيلا الآسيوية، حجم 100 مل." },
        { id: 27, name: "Centella Serum Marron 200ml", price: 3300, category: "Visage", description: "Sérum apaisant à la centella asiatica, format 200ml.", image: "images/products/SKIN1004_Centella_Ampoule_Marron.jpg", stock: 9, rating: 4.5, reviews: 18, badge: null, skinTypes: ["Sensible", "Sèche"], nameAr: "سيروم سنتيلا بني 200 مل", descAr: "سيروم مهدئ بالسنتيلا الآسيوية، حجم 200 مل." },
        { id: 28, name: "Centella Gel Rose", price: 2600, category: "Visage", description: "Gel apaisant et rafraîchissant à la centella asiatica.", image: "images/products/SKIN1004_Poremizing_Ampoule_Rose.jpg", stock: 9, rating: 4.4, reviews: 24, badge: null, skinTypes: ["Grasse", "Mixte"], nameAr: "جل سنتيلا وردي", descAr: "جل مهدئ ومنعش بالسنتيلا الآسيوية." },
        { id: 29, name: "Embryolisse", price: 3300, category: "Visage", description: "Lait hydratant multi-usage, le soin culte des makeup artists.", image: "images/products/Embryolisse_Lait_Creme_Concentre.jpg", stock: 1, rating: 4.8, reviews: 63, badge: null, oldPrice: 3800, skinTypes: ["Sèche", "Grasse", "Sensible", "Mixte"], nameAr: "إمبريوليس", descAr: "حليب مرطب متعدد الاستخدامات، المنتج المفضل لدى خبراء المكياج." },
        { id: 30, name: "345 Cream Mist", price: 2700, category: "Visage", description: "Brume hydratante pour un teint frais toute la journée.", image: "images/products/Dr_Althea_345_Cream_Mist.jpg", stock: 1, rating: 4.3, reviews: 9, badge: null, skinTypes: ["Grasse", "Sèche", "Sensible", "Mixte"], nameAr: "345 رذاذ مرطب", descAr: "رذاذ مرطب لبشرة منتعشة طوال اليوم." },
        { id: 31, name: "Centella Ampoule Rose", price: 3100, category: "Visage", description: "Ampoule concentrée à la centella asiatica pour peaux sensibles.", image: "images/products/SKIN1004_Poremizing_Ampoule_Rose.jpg", stock: 16, rating: 4.7, reviews: 41, badge: "Meilleure vente", oldPrice: 3600, skinTypes: ["Sensible"], nameAr: "أمبولة سنتيلا وردي", descAr: "أمبولة مركزة بالسنتيلا للبشرة الحساسة." },

        { id: 32, name: "La Roche-Posay Cicaplast Baume B5+", price: 3200, category: "Visage", description: "Baume réparateur apaisant multi-usages pour peaux irritées.", nameAr: "La Roche-Posay Cicaplast Baume B5+", descAr: "بلسم مرمم ومهدئ متعدد الاستخدامات للبشرة المتهيجة.", image: "images/products/LRP_Cicaplast_Balm_B5.jpg", skinTypes: ["Sensible", "Sèche"], stock: 10, rating: 4.5, reviews: 20, badge: null },
        { id: 33, name: "La Roche-Posay Effaclar Mat+", price: 3000, category: "Visage", description: "Soin hydratant anti-brillance pour peaux grasses et pores dilatés.", nameAr: "La Roche-Posay Effaclar Mat+", descAr: "عناية مرطبة مضادة للمعان للبشرة الدهنية والمسام الواسعة.", image: "images/products/LRP_Effaclar_Mat.jpg", skinTypes: ["Grasse", "Mixte"], stock: 8, rating: 4.5, reviews: 21, badge: null },
        { id: 34, name: "La Roche-Posay Effaclar Duo(+) SPF30", price: 3400, category: "Visage", description: "Soin anti-imperfections et anti-marques avec protection UV.", nameAr: "La Roche-Posay Effaclar Duo(+) SPF30", descAr: "عناية مضادة للشوائب والبقع مع حماية من الأشعة فوق البنفسجية.", image: "images/products/LRP_Effaclar_Duo.jpg", skinTypes: ["Grasse", "Mixte"], stock: 9, rating: 4.5, reviews: 22, badge: null },
        { id: 35, name: "La Roche-Posay Hyalu B5", price: 3600, category: "Visage", description: "Sérum anti-rides à l'acide hyaluronique pur.", nameAr: "La Roche-Posay Hyalu B5", descAr: "سيروم مضاد للتجاعيد بحمض الهيالورونيك النقي.", image: "images/products/LRP_Hyalu_B5.jpg", skinTypes: ["Sèche", "Mixte", "Sensible"], stock: 7, rating: 4.5, reviews: 23, badge: null },
        { id: 36, name: "La Roche-Posay Pure Vitamin C10 Serum", price: 3800, category: "Visage", description: "Sérum rénovateur éclat anti-rides et anti-oxydant.", nameAr: "La Roche-Posay Pure Vitamin C10 Serum", descAr: "سيروم مجدد للإشراق، مضاد للتجاعيد ومضاد للأكسدة.", image: "images/products/LRP_Vitamin_C10.jpg", skinTypes: ["Grasse", "Sèche", "Mixte"], stock: 8, rating: 4.5, reviews: 24, badge: null },
        { id: 37, name: "La Roche-Posay Cicaplast B5+ Ultra Repair Serum", price: 3500, category: "Visage", description: "Concentré stabilisant et réparateur à haute teneur en vitamine B5.", nameAr: "La Roche-Posay Cicaplast B5+ Ultra Repair Serum", descAr: "مركّز مثبت ومرمم بتركيز عالٍ من فيتامين B5.", image: "images/products/LRP_Cicaplast_B5_Serum.jpg", skinTypes: ["Sensible", "Sèche"], stock: 8, rating: 4.5, reviews: 25, badge: null },
        { id: 38, name: "La Roche-Posay Retinol B3 Serum", price: 3700, category: "Visage", description: "Concentré anti-rides et resurfaçant au rétinol pur.", nameAr: "La Roche-Posay Retinol B3 Serum", descAr: "مركّز مضاد للتجاعيد ومجدد للبشرة بالريتينول النقي.", image: "images/products/LRP_Retinol_B3.jpg", skinTypes: ["Mixte", "Sèche"], stock: 6, rating: 4.5, reviews: 26, badge: null },
        { id: 39, name: "La Roche-Posay Pure Niacinamide 10 Serum", price: 3600, category: "Visage", description: "Sérum anti-taches et réparateur d'éclat à la niacinamide.", nameAr: "La Roche-Posay Pure Niacinamide 10 Serum", descAr: "سيروم مضاد للبقع ومجدد للإشراق بالنياسيناميد.", image: "images/products/LRP_Niacinamide10.jpg", skinTypes: ["Grasse", "Mixte", "Sensible"], stock: 8, rating: 4.5, reviews: 27, badge: null },
        { id: 40, name: "La Roche-Posay Anthelios UVmune 400 SPF50+", price: 3900, category: "Visage", description: "Fluide invisible haute protection solaire, résistant à l'eau et à la sueur.", nameAr: "La Roche-Posay Anthelios UVmune 400 SPF50+", descAr: "سائل شفاف بحماية عالية من الشمس، مقاوم للماء والعرق.", image: "images/products/LRP_Anthelios_UVmune400.jpg", skinTypes: ["Grasse", "Sèche", "Sensible", "Mixte"], stock: 10, rating: 4.5, reviews: 8, badge: null },
        { id: 41, name: "La Roche-Posay Anthelios Dermo-Pediatrics SPF50+", price: 3200, category: "Corps", description: "Spray solaire invisible haute protection, formule douce pour toute la famille.", nameAr: "La Roche-Posay Anthelios Dermo-Pediatrics SPF50+", descAr: "بخاخ شمسي شفاف بحماية عالية، تركيبة لطيفة لكل العائلة.", image: "images/products/LRP_Anthelios_Pediatrics.jpg", skinTypes: ["Sensible", "Sèche", "Grasse", "Mixte"], stock: 9, rating: 4.5, reviews: 9, badge: null },
        { id: 42, name: "Avène Crème Nutritive Revitalisante", price: 2200, category: "Visage", description: "Crème nourrissante aux extraits de fruits rouges pour peaux sèches et sensibles.", nameAr: "Avène Crème Nutritive Revitalisante", descAr: "كريم مغذٍ بخلاصة الفواكه الحمراء للبشرة الجافة والحساسة.", image: "images/products/Avene_Creme_Nutritive.jpg", skinTypes: ["Sèche", "Sensible"], stock: 9, rating: 4.5, reviews: 10, badge: null },
        { id: 43, name: "Avène Cicalfate+ 100ml", price: 2800, category: "Corps", description: "Crème réparatrice et protectrice pour peaux sensibles irritées.", nameAr: "Avène Cicalfate+ 100ml", descAr: "كريم مرمم وحامٍ للبشرة الحساسة المتهيجة.", image: "images/products/Avene_Cicalfate_100ml.jpg", skinTypes: ["Sensible"], stock: 9, rating: 4.5, reviews: 11, badge: null },
        { id: 44, name: "Avène Cicalfate+ 40ml", price: 2500, category: "Corps", description: "Crème réparatrice format nomade pour peaux irritées.", nameAr: "Avène Cicalfate+ 40ml", descAr: "كريم مرمم بحجم صغير للتنقل، للبشرة المتهيجة.", image: "images/products/Avene_Cicalfate_40ml.jpg", skinTypes: ["Sensible"], stock: 12, rating: 4.5, reviews: 12, badge: null },
        { id: 45, name: "Avène Cleanance Solaire SPF50+", price: 2900, category: "Visage", description: "Protection solaire matifiante pour peaux à tendance acnéique.", nameAr: "Avène Cleanance Solaire SPF50+", descAr: "حماية شمسية مطفية للبشرة ذات الميل لحب الشباب.", image: "images/products/Avene_Cleanance_Solaire.jpg", skinTypes: ["Grasse", "Mixte"], stock: 8, rating: 4.5, reviews: 13, badge: null },
        { id: 46, name: "Bioderma Sensibio Gel Moussant", price: 2600, category: "Visage", description: "Nettoyant micellaire apaisant visage et yeux, peaux sensibles.", nameAr: "Bioderma Sensibio Gel Moussant", descAr: "منظف ميسيلار مهدئ للوجه والعينين، للبشرة الحساسة.", image: "images/products/Bioderma_Sensibio_Gel.jpg", skinTypes: ["Sensible"], stock: 10, rating: 4.5, reviews: 14, badge: null },
        { id: 47, name: "Bioderma Atoderm Crème Ultra", price: 3000, category: "Corps", description: "Crème hydratante 24h qui renforce la barrière cutanée.", nameAr: "Bioderma Atoderm Crème Ultra", descAr: "كريم مرطب لمدة 24 ساعة يعزز حاجز البشرة.", image: "images/products/Bioderma_Atoderm_Ultra.jpg", skinTypes: ["Sèche", "Sensible"], stock: 9, rating: 4.5, reviews: 15, badge: null },
        { id: 48, name: "Bioderma Pigmentbio Foaming Cream", price: 2800, category: "Visage", description: "Nettoyant exfoliant éclaircissant, unifie le teint.", nameAr: "Bioderma Pigmentbio Foaming Cream", descAr: "منظف مقشر مفتّح، يوحد لون البشرة.", image: "images/products/Bioderma_Pigmentbio.jpg", skinTypes: ["Grasse", "Mixte"], stock: 8, rating: 4.5, reviews: 16, badge: null },
        { id: 49, name: "Bioderma Sébium Gel Moussant", price: 2600, category: "Visage", description: "Nettoyant purifiant pour peaux mixtes à grasses.", nameAr: "Bioderma Sébium Gel Moussant", descAr: "منظف منقٍ للبشرة المختلطة إلى الدهنية.", image: "images/products/Bioderma_Sebium_Gel.jpg", skinTypes: ["Grasse", "Mixte"], stock: 10, rating: 4.5, reviews: 17, badge: null },
        { id: 50, name: "Bioderma Atoderm Intensive Baume", price: 2900, category: "Corps", description: "Baume ultra-apaisant anti-démangeaisons, peaux très sèches.", nameAr: "Bioderma Atoderm Intensive Baume", descAr: "بلسم مهدئ للغاية مضاد للحكة، للبشرة الجافة جداً.", image: "images/products/Bioderma_Atoderm_Intensive_Baume.jpg", skinTypes: ["Sèche", "Sensible"], stock: 8, rating: 4.5, reviews: 18, badge: null },
        { id: 51, name: "Vichy Idéal Soleil SPF50", price: 2800, category: "Visage", description: "Émulsion solaire matifiante pour peaux mixtes à grasses.", nameAr: "Vichy Idéal Soleil SPF50", descAr: "مستحلب شمسي مطفٍ للبشرة المختلطة إلى الدهنية.", image: "images/products/Vichy_Ideal_Soleil.jpg", skinTypes: ["Grasse", "Mixte"], stock: 9, rating: 4.5, reviews: 19, badge: null },
        { id: 52, name: "Vichy Capital Soleil SPF50+", price: 2900, category: "Visage", description: "Crème onctueuse très haute protection, peaux sensibles normales à sèches.", nameAr: "Vichy Capital Soleil SPF50+", descAr: "كريم كثيف بحماية عالية جداً، للبشرة الحساسة العادية إلى الجافة.", image: "images/products/Vichy_Capital_Soleil.jpg", skinTypes: ["Sensible", "Sèche"], stock: 9, rating: 4.5, reviews: 20, badge: null },
        { id: 53, name: "Medicube PDRN Niacinamide Serum", price: 3500, category: "Visage", description: "Sérum concentré à la niacinamide pour un teint éclatant.", nameAr: "Medicube PDRN Niacinamide Serum", descAr: "سيروم مركّز بالنياسيناميد لبشرة مشرقة.", image: "images/products/Medicube_Niacinamide.jpg", skinTypes: ["Grasse", "Mixte", "Sensible"], stock: 7, rating: 4.5, reviews: 21, badge: null },
        { id: 54, name: "Medicube PDRN Pink Peptide Serum", price: 3600, category: "Visage", description: "Sérum aux peptides et PDRN pour une peau repulpée.", nameAr: "Medicube PDRN Pink Peptide Serum", descAr: "سيروم بالببتيدات و PDRN لبشرة ممتلئة.", image: "images/products/Medicube_PDRN_Pink.jpg", skinTypes: ["Sèche", "Mixte"], stock: 7, rating: 4.5, reviews: 22, badge: null },
        { id: 55, name: "Medicube Kojic Acid Turmeric Niacinamide Serum", price: 3500, category: "Visage", description: "Sérum éclaircissant au curcuma, acide kojique et niacinamide.", nameAr: "Medicube Kojic Acid Turmeric Niacinamide Serum", descAr: "سيروم مفتّح بالكركم وحمض الكوجيك والنياسيناميد.", image: "images/products/Medicube_Kojic_Turmeric.jpg", skinTypes: ["Grasse", "Mixte", "Sensible"], stock: 7, rating: 4.5, reviews: 23, badge: null },
        { id: 57, name: "Diadermine PH5 Hydratant Protecteur", price: 1400, category: "Visage", description: "Soin de jour hydratant à la pro-vitamine B5, peaux sèches et sensibles.", nameAr: "Diadermine PH5 Hydratant Protecteur", descAr: "عناية نهارية مرطبة بالبروفيتامين B5، للبشرة الجافة والحساسة.", image: "images/products/Diadermine_PH5.jpg", skinTypes: ["Sèche", "Sensible"], stock: 9, rating: 4.5, reviews: 25, badge: null },
        { id: 58, name: "Uriage Hyséac Fluide SPF90", price: 2200, category: "Visage", description: "Fluide haute protection solaire, hydrate et matifie, peaux mixtes à grasses.", nameAr: "Uriage Hyséac Fluide SPF90", descAr: "سائل بحماية شمسية عالية، يرطب ويطفي، للبشرة المختلطة إلى الدهنية.", image: "images/products/Uriage_Hyseac.jpg", skinTypes: ["Grasse", "Mixte"], stock: 8, rating: 4.5, reviews: 26, badge: null },
        { id: 59, name: "Noreva Sensidiane Contour des Yeux", price: 2200, category: "Visage", description: "Soin apaisant anti-poches et anti-cernes, texture fraîcheur.", nameAr: "Noreva Sensidiane Contour des Yeux", descAr: "عناية مهدئة مضادة للانتفاخ والهالات، ملمس منعش.", image: "images/products/Noreva_Sensidiane_Yeux.jpg", skinTypes: ["Sensible"], stock: 8, rating: 4.5, reviews: 27, badge: null },
        { id: 60, name: "Noreva Exfoliac Masque Purifiant", price: 2200, category: "Visage", description: "Masque non desséchant qui absorbe l'excès de sébum et resserre les pores.", nameAr: "Noreva Exfoliac Masque Purifiant", descAr: "قناع غير مجفف يمتص الزيوت الزائدة ويشد المسام.", image: "images/products/Noreva_Exfoliac_Masque.jpg", skinTypes: ["Grasse", "Mixte"], stock: 8, rating: 4.5, reviews: 8, badge: null },
        { id: 61, name: "Arencia Vitamin C Booster Shot", price: 1900, category: "Visage", description: "Sérum booster illuminateur et raffermissant à la vitamine C.", nameAr: "Arencia Vitamin C Booster Shot", descAr: "سيروم بوستر منير وشادّ بفيتامين C.", image: "images/products/Arencia_VitaminC_Booster.jpg", skinTypes: ["Grasse", "Sèche", "Mixte"], stock: 10, rating: 4.5, reviews: 9, badge: null },
        { id: 62, name: "EQQUAL Berry Bakuchiol Plumping Serum", price: 2400, category: "Visage", description: "Sérum repulpant au bakuchiol, alternative douce au rétinol.", nameAr: "EQQUAL Berry Bakuchiol Plumping Serum", descAr: "سيروم مكثف بالباكوشيول، بديل لطيف للريتينول.", image: "images/products/EQQUAL_Bakuchiol_Plumping.jpg", skinTypes: ["Sèche", "Mixte"], stock: 9, rating: 4.5, reviews: 10, badge: null },
        { id: 63, name: "EQQUAL Berry Hyaltoin Flooding Serum", price: 2400, category: "Visage", description: "Sérum ultra-hydratant à l'acide hyaluronique et à l'hyaltoin.", nameAr: "EQQUAL Berry Hyaltoin Flooding Serum", descAr: "سيروم مرطب للغاية بحمض الهيالورونيك والهيالتوين.", image: "images/products/EQQUAL_Hyaltoin_Flooding.jpg", skinTypes: ["Sèche", "Sensible"], stock: 9, rating: 4.5, reviews: 11, badge: null },
        { id: 64, name: "EQQUAL Berry Vitamin Illuminating Serum", price: 2400, category: "Visage", description: "Sérum illuminateur à la vitamine C pour un teint uniforme.", nameAr: "EQQUAL Berry Vitamin Illuminating Serum", descAr: "سيروم منير بفيتامين C لبشرة موحدة اللون.", image: "images/products/EQQUAL_Vitamin_Illuminating.jpg", skinTypes: ["Grasse", "Mixte"], stock: 9, rating: 4.5, reviews: 12, badge: null },
        { id: 65, name: "ORVA Expigment 4% Crème", price: 3400, category: "Visage", description: "Crème dépigmentante à l'hydroquinone, peaux sèches et sensibles.", nameAr: "ORVA Expigment 4% Crème", descAr: "كريم مفتّح بالهيدروكينون، للبشرة الجافة والحساسة.", image: "images/products/ORVA_Expigment.jpg", skinTypes: ["Sèche", "Sensible"], stock: 6, rating: 4.5, reviews: 13, badge: null },
        { id: 66, name: "Daylong extreme SPF50+", price: 2900, category: "Corps", description: "Lotion solaire liposomale extra résistante à l'eau, peaux extrêmement sensibles.", nameAr: "Daylong extreme SPF50+", descAr: "لوشن شمسي ليبوسومي مقاوم جداً للماء، للبشرة الحساسة جداً.", image: "images/products/Daylong_Extreme.jpg", skinTypes: ["Sensible"], stock: 8, rating: 4.5, reviews: 14, badge: null },
        { id: 67, name: "Dexeryl Crème", price: 1200, category: "Corps", description: "Traitement des sécheresses cutanées, hydrate durablement dès la naissance.", nameAr: "Dexeryl Crème", descAr: "علاج جفاف البشرة، يرطب لفترة طويلة منذ الولادة.", image: "images/products/Dexeryl_Creme.jpg", skinTypes: ["Sèche"], stock: 10, rating: 4.5, reviews: 15, badge: null },
        { id: 68, name: "The Ordinary Lactic Acid 5% + HA", price: 2200, category: "Visage", description: "Peeling doux à l'acide lactique et acide hyaluronique.", nameAr: "The Ordinary Lactic Acid 5% + HA", descAr: "تقشير لطيف بحمض اللاكتيك وحمض الهيالورونيك.", image: "images/products/Ordinary_Lactic_Acid.jpg", skinTypes: ["Grasse", "Mixte", "Sèche"], stock: 8, rating: 4.5, reviews: 16, badge: null },
        { id: 69, name: "PanOxyl Acne Creamy Wash", price: 2600, category: "Visage", description: "Nettoyant anti-acné au peroxyde de benzoyle 4%, visage et corps.", nameAr: "PanOxyl Acne Creamy Wash", descAr: "منظف مضاد لحب الشباب ببيروكسيد البنزويل 4%، للوجه والجسم.", image: "images/products/PanOxyl_Acne_Wash.jpg", skinTypes: ["Grasse", "Mixte"], stock: 9, rating: 4.5, reviews: 17, badge: null },
        { id: 70, name: "Bee Beauty Sirke & Saç Toniği", price: 900, category: "Cheveux", description: "Tonique cheveux au vinaigre de fruits des bois, renforce et fait briller.", nameAr: "Bee Beauty Sirke & Saç Toniği", descAr: "تونر شعر بخل فواكه الغابة، يقوي الشعر ويمنحه لمعاناً.", image: "images/products/Bee_Beauty_Tonic.jpg", skinTypes: ["Sèche", "Grasse", "Sensible", "Mixte"], stock: 12, rating: 4.5, reviews: 18, badge: null },
        { id: 71, name: "Gisou Honey Infused Lip Oil - Honey Gold", price: 3600, category: "Maquillage", description: "Huile à lèvres nourrissante au miel d'abeille Mirsalehi, fini brillant doré.", nameAr: "Gisou Honey Infused Lip Oil - Honey Gold", descAr: "زيت شفاه مغذٍ بعسل ميرصالحي، لمعان ذهبي.", image: "images/products/Gisou_Honey_Gold.jpg", skinTypes: ["Sèche", "Grasse", "Sensible", "Mixte"], stock: 6, rating: 4.7, reviews: 22, badge: "Nouveau" },
        { id: 72, name: "Gisou Honey Infused Lip Oil - Strawberry Sorbet", price: 3600, category: "Maquillage", description: "Huile à lèvres nourrissante au miel d'abeille Mirsalehi, teinte fraise rosée.", nameAr: "Gisou Honey Infused Lip Oil - Strawberry Sorbet", descAr: "زيت شفاه مغذٍ بعسل ميرصالحي، بلون فراولة وردي.", image: "images/products/Gisou_Strawberry_Sorbet.jpg", skinTypes: ["Sèche", "Grasse", "Sensible", "Mixte"], stock: 4, rating: 4.7, reviews: 19, badge: "Nouveau" },
    ];

    const routines = [
        {
            title: "Routine Éclat & Hydratation",
            titleAr: "روتين الإشراق والترطيب",
            description: "Vitamine C pour l'éclat, céramides pour hydrater, crème barrière pour protéger.",
            descriptionAr: "فيتامين C للإشراق، سيراميد للترطيب، كريم حاجز للحماية.",
            productIds: [17, 18, 15, 30]
        },
        {
            title: "Routine Apaisante Centella",
            titleAr: "روتين سنتيلا المهدئ",
            description: "Le trio centella asiatica pour calmer et réparer les peaux sensibles.",
            descriptionAr: "ثلاثية السنتيلا الآسيوية لتهدئة وإصلاح البشرة الحساسة.",
            productIds: [26, 28, 31]
        }
    ];

    const routinesGrid = document.getElementById('routines-grid');

    // ---------- STATE ----------
    let cart = JSON.parse(localStorage.getItem('hc_cart') || '[]');
    let wishlist = JSON.parse(localStorage.getItem('hc_wishlist') || '[]');
    let activeCategory = 'Tous';
    let activeSkinType = 'Tous';
    let searchTerm = '';
    let showFavoritesOnly = false;

    // ---------- DOM ----------
    const productList = document.getElementById('product-list');
    const orderForm = document.getElementById('order-form');
    const orderMessage = document.getElementById('order-message');
    const searchInput = document.getElementById('search-input');
    const categoryBar = document.getElementById('category-bar');
    const skinTypeBar = document.getElementById('skin-type-bar');
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
    const wishlistBtn = document.getElementById('wishlist-btn');
    const themeToggle = document.getElementById('theme-toggle');
    const langToggle = document.getElementById('lang-toggle');
    const wishlistCountEl = document.getElementById('wishlist-count');
    const productModalOverlay = document.getElementById('product-modal-overlay');
    const productModalBody = document.getElementById('product-modal-body');
    const closeProductModalBtn = document.getElementById('close-product-modal');

    const formatPrice = (n) => n.toLocaleString('fr-FR') + ' DA';

    // ---------- CATEGORY BAR ----------
    const categoryKeys = ['Tous', ...new Set(products.map(p => p.category))];
    function renderCategoryBar() {
        categoryBar.innerHTML = '';
        categoryKeys.forEach(cat => {
            const btn = document.createElement('button');
            btn.className = 'category-chip' + (cat === activeCategory ? ' active' : '');
            btn.textContent = (TRANSLATIONS[currentLang].categories && TRANSLATIONS[currentLang].categories[cat]) || cat;
            btn.dataset.cat = cat;
            btn.addEventListener('click', () => {
                activeCategory = cat;
                document.querySelectorAll('.category-chip').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                renderProducts();
            });
            categoryBar.appendChild(btn);
        });
    }
    renderCategoryBar();

    // ---------- SKIN TYPE BAR ----------
    const skinTypeKeys = ['Tous', 'Grasse', 'Sèche', 'Sensible', 'Mixte'];
    function renderSkinTypeBar() {
        skinTypeBar.innerHTML = '';
        skinTypeKeys.forEach(type => {
            const btn = document.createElement('button');
            btn.className = 'category-chip skin-chip' + (type === activeSkinType ? ' active' : '');
            btn.textContent = (TRANSLATIONS[currentLang].skinTypes && TRANSLATIONS[currentLang].skinTypes[type]) || type;
            btn.dataset.type = type;
            btn.addEventListener('click', () => {
                activeSkinType = type;
                document.querySelectorAll('.skin-chip').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                renderProducts();
            });
            skinTypeBar.appendChild(btn);
        });
    }
    renderSkinTypeBar();

    // ---------- SEARCH ----------
    searchInput.addEventListener('input', (e) => {
        searchTerm = e.target.value.trim().toLowerCase();
        renderProducts();
    });

    // ---------- ROUTINES ----------
    function renderRoutines() {
        routinesGrid.innerHTML = routines.map((routine, idx) => {
            const items = routine.productIds.map(id => products.find(p => p.id === id)).filter(Boolean);
            const total = items.reduce((sum, p) => sum + p.price, 0);
            const bundlePrice = Math.round(total * 0.92 / 50) * 50;
            const thumbsHtml = items.map(p => `<img src="${p.image}" alt="${pName(p)}" title="${pName(p)}">`).join('');
            const namesHtml = items.map(p => `<li>${pName(p)}</li>`).join('');
            return `
                <div class="routine-card">
                    <div class="routine-thumbs">${thumbsHtml}</div>
                    <h3>${currentLang === 'ar' ? routine.titleAr : routine.title}</h3>
                    <p class="routine-desc">${currentLang === 'ar' ? routine.descriptionAr : routine.description}</p>
                    <ul class="routine-list">${namesHtml}</ul>
                    <div class="routine-price">
                        <span class="old-price">${formatPrice(total)}</span>
                        <span class="price promo">${formatPrice(bundlePrice)}</span>
                    </div>
                    <button class="btn routine-add" data-idx="${idx}">${t('addRoutine')}</button>
                </div>
            `;
        }).join('');

        document.querySelectorAll('.routine-add').forEach(btn => {
            btn.addEventListener('click', () => addRoutineToCart(parseInt(btn.dataset.idx)));
        });
    }

    function addRoutineToCart(idx) {
        const routine = routines[idx];
        const items = routine.productIds.map(id => products.find(p => p.id === id)).filter(Boolean);
        items.forEach(product => {
            if (product.stock === 0) return;
            const existing = cart.find(item => item.id === product.id);
            if (existing) {
                existing.qty += 1;
            } else {
                cart.push({ id: product.id, name: product.name, nameAr: product.nameAr, price: product.price, image: product.image, qty: 1 });
            }
        });
        saveCart();
        updateCartUI();
        openCart();
    }

    // ---------- RENDER PRODUCTS ----------
    function pName(p) { return p.name; }
    function pDesc(p) { return currentLang === 'ar' && p.descAr ? p.descAr : p.description; }
    function pCat(cat) { return (TRANSLATIONS[currentLang].categories && TRANSLATIONS[currentLang].categories[cat]) || cat; }
    function pBadge(badge) { return (TRANSLATIONS[currentLang].badges && TRANSLATIONS[currentLang].badges[badge]) || badge; }

    function renderProducts() {
        const filtered = products.filter(p => {
            const matchCat = activeCategory === 'Tous' || p.category === activeCategory;
            const matchSkin = activeSkinType === 'Tous' || (p.skinTypes && p.skinTypes.includes(activeSkinType));
            const matchSearch = p.name.toLowerCase().includes(searchTerm) || p.description.toLowerCase().includes(searchTerm) || (p.nameAr && p.nameAr.includes(searchTerm)) || (p.descAr && p.descAr.includes(searchTerm));
            const matchFav = !showFavoritesOnly || wishlist.includes(p.id);
            return matchCat && matchSkin && matchSearch && matchFav;
        });

        productList.innerHTML = '';
        noResults.style.display = filtered.length === 0 ? 'block' : 'none';
        if (filtered.length === 0 && showFavoritesOnly) {
            noResults.textContent = t('noFavorites');
        } else {
            noResults.textContent = t('noResults');
        }

        filtered.forEach(product => {
            const card = document.createElement('div');
            card.className = 'product-card';

            const stars = renderStars(product.rating);
            const badgeHtml = product.badge
                ? `<span class="product-badge badge-${product.badge === 'Rupture de stock' ? 'out' : product.badge === 'Nouveau' ? 'new' : 'best'}">${pBadge(product.badge)}</span>`
                : '';
            const priceHtml = product.oldPrice
                ? `<span class="old-price">${formatPrice(product.oldPrice)}</span> <span class="price promo">${formatPrice(product.price)}</span>`
                : `<div class="price">${formatPrice(product.price)}</div>`;
            const outOfStock = product.stock === 0;
            const stockHtml = (!outOfStock && product.stock <= 5)
                ? `<p class="stock-warning"><i class="fas fa-triangle-exclamation"></i> ${t('stockWarning', { n: product.stock })}</p>`
                : '';
            const isFav = wishlist.includes(product.id);

            card.innerHTML = `
                <span class="category-tag">${pCat(product.category)}</span>
                ${badgeHtml}
                <button class="wishlist-heart ${isFav ? 'active' : ''}" data-id="${product.id}"><i class="${isFav ? 'fas' : 'far'} fa-heart"></i></button>
                <div class="product-clickable" data-id="${product.id}">
                    <img src="${product.image}" alt="${pName(product)}" loading="lazy" class="${outOfStock ? 'img-out-of-stock' : ''}">
                    <h3>${pName(product)}</h3>
                </div>
                <div class="rating-row">${stars} <span class="review-count">(${product.reviews})</span></div>
                <p class="product-desc">${pDesc(product)}</p>
                ${priceHtml}
                ${stockHtml}
                <button class="btn btn-add" data-id="${product.id}" ${outOfStock ? 'disabled' : ''}>${outOfStock ? t('outOfStock') : t('addToCart')}</button>
                <button class="btn-quick-order" data-id="${product.id}" ${outOfStock ? 'disabled' : ''}>${t('quickOrder')}</button>
            `;
            productList.appendChild(card);
        });

        document.querySelectorAll('.btn-add:not([disabled])').forEach(btn => {
            btn.addEventListener('click', () => addToCart(parseInt(btn.dataset.id)));
        });
        document.querySelectorAll('.btn-quick-order:not([disabled])').forEach(btn => {
            btn.addEventListener('click', () => quickOrder(parseInt(btn.dataset.id)));
        });
        document.querySelectorAll('.wishlist-heart').forEach(btn => {
            btn.addEventListener('click', () => toggleWishlist(parseInt(btn.dataset.id)));
        });
        document.querySelectorAll('.product-clickable').forEach(el => {
            el.addEventListener('click', () => openProductModal(parseInt(el.dataset.id)));
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

    // ---------- DARK MODE ----------
    function applyTheme(isDark) {
        document.body.classList.toggle('dark-mode', isDark);
        themeToggle.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
        localStorage.setItem('hc_theme', isDark ? 'dark' : 'light');
    }

    const savedTheme = localStorage.getItem('hc_theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(savedTheme ? savedTheme === 'dark' : prefersDark);

    themeToggle.addEventListener('click', () => {
        applyTheme(!document.body.classList.contains('dark-mode'));
    });

    // ---------- WISHLIST ----------
    function saveWishlist() {
        localStorage.setItem('hc_wishlist', JSON.stringify(wishlist));
    }

    function toggleWishlist(id) {
        if (wishlist.includes(id)) {
            wishlist = wishlist.filter(i => i !== id);
        } else {
            wishlist.push(id);
        }
        saveWishlist();
        updateWishlistUI();
        renderProducts();
    }

    function updateWishlistUI() {
        wishlistCountEl.textContent = wishlist.length;
        wishlistCountEl.style.display = wishlist.length > 0 ? 'flex' : 'none';
    }

    wishlistBtn.addEventListener('click', () => {
        showFavoritesOnly = !showFavoritesOnly;
        wishlistBtn.classList.toggle('active', showFavoritesOnly);
        renderProducts();
        if (showFavoritesOnly) {
            document.getElementById('shop').scrollIntoView({ behavior: 'smooth' });
        }
    });

    // ---------- PRODUCT DETAIL MODAL ----------
    function openProductModal(id) {
        const product = products.find(p => p.id === id);
        if (!product) return;
        const outOfStock = product.stock === 0;
        const stars = renderStars(product.rating);
        const priceHtml = product.oldPrice
            ? `<span class="old-price">${formatPrice(product.oldPrice)}</span><span class="price promo">${formatPrice(product.price)}</span>`
            : `<span class="price">${formatPrice(product.price)}</span>`;

        const similar = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 3);
        const similarHtml = similar.length > 0 ? `
            <div class="similar-products">
                <h4>${t('similarProducts')}</h4>
                <div class="similar-grid">
                    ${similar.map(p => `
                        <div class="similar-item" data-id="${p.id}">
                            <img src="${p.image}" alt="${pName(p)}">
                            <p>${pName(p)}</p>
                        </div>
                    `).join('')}
                </div>
            </div>
        ` : '';

        const images = product.images && product.images.length > 0 ? product.images : [product.image];
        const galleryHtml = images.length > 1 ? `
            <div class="modal-thumbs">
                ${images.map((img, i) => `<img src="${img}" class="modal-thumb ${i === 0 ? 'active' : ''}" data-src="${img}">`).join('')}
            </div>
        ` : '';

        productModalBody.innerHTML = `
            <img src="${images[0]}" alt="${pName(product)}" class="modal-img" id="modal-main-img">
            ${galleryHtml}
            <div class="modal-info">
                <span class="category-tag" style="position:static; display:inline-block; margin-bottom:10px;">${pCat(product.category)}</span>
                <h2>${pName(product)}</h2>
                <div class="rating-row">${stars} <span class="review-count">(${product.reviews} ${t('reviewsSuffix')})</span></div>
                <div class="modal-price-row">${priceHtml}</div>
                <p class="modal-desc">${pDesc(product)}</p>
                ${!outOfStock && product.stock <= 5 ? `<p class="stock-warning"><i class="fas fa-triangle-exclamation"></i> ${t('stockWarning', { n: product.stock })}</p>` : ''}
                <div class="modal-actions">
                    <button class="btn modal-add" data-id="${product.id}" ${outOfStock ? 'disabled' : ''}>${outOfStock ? t('outOfStock') : t('addToCart')}</button>
                    <button class="btn-quick-order modal-quick" data-id="${product.id}" ${outOfStock ? 'disabled' : ''}>${t('quickOrder')}</button>
                </div>
                ${similarHtml}
            </div>
        `;

        productModalBody.querySelector('.modal-add:not([disabled])')?.addEventListener('click', () => {
            addToCart(product.id);
        });
        productModalBody.querySelector('.modal-quick:not([disabled])')?.addEventListener('click', () => {
            closeProductModal();
            quickOrder(product.id);
        });
        productModalBody.querySelectorAll('.similar-item').forEach(el => {
            el.addEventListener('click', () => openProductModal(parseInt(el.dataset.id)));
        });

        productModalBody.querySelectorAll('.modal-thumb').forEach(thumb => {
            thumb.addEventListener('click', () => {
                document.getElementById('modal-main-img').src = thumb.dataset.src;
                productModalBody.querySelectorAll('.modal-thumb').forEach(t => t.classList.remove('active'));
                thumb.classList.add('active');
            });
        });

        productModalOverlay.classList.add('open');
    }

    function closeProductModal() {
        productModalOverlay.classList.remove('open');
    }

    closeProductModalBtn.addEventListener('click', closeProductModal);
    productModalOverlay.addEventListener('click', (e) => {
        if (e.target === productModalOverlay) closeProductModal();
    });

    // ---------- QUICK ORDER (1-click) ----------
    function quickOrder(id) {
        const product = products.find(p => p.id === id);
        if (!product || product.stock === 0) return;
        const existing = cart.find(item => item.id === id);
        if (existing) {
            existing.qty += 1;
        } else {
            cart.push({ id: product.id, name: product.name, nameAr: product.nameAr, price: product.price, image: product.image, qty: 1 });
        }
        saveCart();
        updateCartUI();
        closeCart();
        closeProductModal();
        document.getElementById('order').scrollIntoView({ behavior: 'smooth' });
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
            cart.push({ id: product.id, name: product.name, nameAr: product.nameAr, price: product.price, image: product.image, qty: 1 });
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
            cartItemsEl.innerHTML = `<p class="cart-empty">${t('cartEmpty')}</p>`;
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
            checkoutSummary.innerHTML = `<p class="cart-empty">${t('cartEmpty')}</p>`;
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
    function renderWilayaOptions() {
        const prevValue = wilayaSelect.value;
        wilayaSelect.innerHTML = `<option value="" disabled ${!prevValue ? 'selected' : ''}>${t('wilayaPlaceholder')}</option>`;
        if (typeof ALGERIA_WILAYAS !== 'undefined') {
            ALGERIA_WILAYAS.forEach(w => {
                const opt = document.createElement('option');
                opt.value = w.code;
                opt.textContent = `${w.code} - ${currentLang === 'ar' && w.nameAr ? w.nameAr : w.name}`;
                wilayaSelect.appendChild(opt);
            });
            if (prevValue) wilayaSelect.value = prevValue;
        }
    }

    if (typeof ALGERIA_WILAYAS !== 'undefined') {
        renderWilayaOptions();

        wilayaSelect.addEventListener('change', () => {
            const wilaya = ALGERIA_WILAYAS.find(w => w.code === wilayaSelect.value);
            communeSelect.innerHTML = '';
            if (wilaya) {
                communeSelect.disabled = false;
                const defaultOpt = document.createElement('option');
                defaultOpt.value = '';
                defaultOpt.disabled = true;
                defaultOpt.selected = true;
                defaultOpt.textContent = t('communePlaceholder');
                communeSelect.appendChild(defaultOpt);
                wilaya.communes.forEach(c => {
                    const opt = document.createElement('option');
                    opt.value = c;
                    opt.textContent = currentLang === 'ar' && wilaya.communesAr && wilaya.communesAr[c] ? wilaya.communesAr[c] : c;
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
            orderMessage.textContent = t('emptyCartError');
            return;
        }

        if (!wilayaSelect.value || !communeSelect.value) {
            orderMessage.style.display = 'block';
            orderMessage.style.color = 'red';
            orderMessage.textContent = t('chooseWilayaCommune');
            return;
        }

        const deliveryType = document.querySelector('input[name="delivery-type"]:checked').value;

        const formData = {
            name: document.getElementById('name').value,
            phone: document.getElementById('phone').value,
            instagram: document.getElementById('instagram').value,
            wilaya: wilayaSelect.options[wilayaSelect.selectedIndex].text,
            commune: communeSelect.value,
            deliveryType: deliveryType === 'bureau' ? t('deliveryBureau') : t('deliveryDomicile'),
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
                orderMessage.innerHTML = `<i class="fas fa-check-circle"></i> ${t('orderSuccess', { name: formData.name, total: `<strong>${formatPrice(formData.total)}</strong>`, phone: formData.phone })}`;
                orderForm.reset();
                communeSelect.innerHTML = `<option value="" disabled selected>${t('communePlaceholderDefault')}</option>`;
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
            orderMessage.textContent = t('orderError');
        }
    });

    // ---------- INIT ----------
    applyStaticTranslations();
    renderRoutines();
    renderProducts();
    updateCartUI();
    updateWishlistUI();

    langToggle.addEventListener('click', () => {
        setLanguage(currentLang === 'ar' ? 'fr' : 'ar');
    });

    window.onLanguageChange = function () {
        renderCategoryBar();
        renderSkinTypeBar();
        renderProducts();
        renderRoutines();
        updateCartUI();
        if (typeof ALGERIA_WILAYAS !== 'undefined') {
            renderWilayaOptions();
            communeSelect.innerHTML = `<option value="" disabled selected>${t('communePlaceholderDefault')}</option>`;
            communeSelect.disabled = true;
        }
    };
});
