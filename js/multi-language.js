/*
    Languages array
    index 0 = English
    index 1 = Chinese-Traditional zh-TW zh-HK
    index 2 = Chinese-Simplified zh-CN zh-SG zh-MO

    index 3 = japanese ja
 */

const languageMap = {
    en: {
        title: "Welcome to MamaMia Bar",
        subtitle: "Experience the best drinks and a vibrant atmosphere..",
        "unwind-and-enjoy": "Unwind and Enjoy",
        "discover-your-favorite": "Discover Your Favorite",
        "discover-new-drinks": "Discover new drinks",
        "drink-selection": "Crafting Exquisite Cocktails",
        "drink-selection-1": "Indulge in our handcrafted cocktails.",
        "drink-selection-2":
            "Our expert mixologists use the finest ingredients to create unique flavors.",
        "drink-selection-3":
            "Whether you prefer classic or innovative cocktails, we have something for everyone.",
        "drink-selection-4":
            "Join us and experience the art of mixology at MamaMia Bar.",
        "join-us": "Join Us at MamaMia Bar",
        "enjoy-the-nightlife":
            "Experience the vibrant nightlife and unforgettable moments.",
        "visit-our-menu":
            "Visit our menu to explore our drink selection and find your perfect sip.",
        "footer-link": "Mama Mia",
        "rights-reserved": "All Rights Reserved.",
        "language-select": "Language",
        "language-select-en": "English",
        "language-select-zh-hant": "Chinese Traditional",
        "language-select-zh-hans": "Chinese Simplified",
        "language-select-ja": "Japanese",
        home: "Home",
        menu: "Menu",
        about: "About",
        contact: "Contact Us",
        address: "New York, NY",
        phone: "Phone:",
        email: "Email:",
        website: "Website:",
        "useful-links": "Useful Links",
        copyright: "Copyright © 2024 Mama Mia All Rights Reserved.",
        "newsletter-subscribe": "Subscribe",
        "newsletter-subscribe-form": "Newsletter Subscribe Form",
        "newsletter-subscribe-success":
            "Thank you for subscribing to our newsletter!",
        "newsletter-subscribe-error":
            "There was an error subscribing to our newsletter. Please try again later.",
        "navbar-menu": "Menu",
        "navbar-about": "About",
        "navbar-contact": "Contact Us",
        "navbar-home": "Home",
        "drink-1-title": "Premium Coffee Blend",
        "drink-1-description":
            "Experience the rich flavor and aroma of our premium coffee blend. Made from carefully selected coffee beans, this blend offers a smooth and satisfying taste.",
        "drink-1-price": "Price: $12.99",
        "drink-1-add-to-cart": "Add to Cart",
        "drink-2-title": "Handcrafted Cocktail Set",
        "drink-2-description":
            "Elevate your home bar with our handcrafted cocktail set. It includes a variety of premium spirits, mixers, and garnishes, allowing you to create delicious cocktails at home.",
        "drink-2-price": "Price: $49.99",
        "drink-2-add-to-cart": "Add to Cart",
        "drink-3-title": "Artisanal Cheese Selection",
        "drink-3-description":
            "Indulge in our artisanal cheese selection, featuring a variety of handcrafted cheeses from local farms. Each cheese is carefully aged to perfection, offering a unique and flavorful experience.",
        "drink-3-price": "Price: $19.99",
        "drink-3-add-to-cart": "Add to Cart",
        "drink-4-title": "Mojito",
        "drink-4-description":
            "A classic cocktail made with rum, fresh mint, lime juice, sugar, and soda water.",
        "drink-4-price": "Price: $8.50",
        "drink-4-add-to-cart": "Add to Cart",
        "drink-5-title": "Old Fashioned",
        "drink-5-description":
            "A timeless blend of bourbon, sugar, bitters, and a twist of orange zest.",
        "drink-5-price": "Price: $10.00",
        "drink-5-add-to-cart": "Add to Cart",
        "drink-6-title": "Cosmopolitan",
        "drink-6-description":
            "A vibrant mix of vodka, cranberry juice, orange liqueur, and lime juice.",
        "drink-6-price": "Price: $9.50",
        "drink-6-add-to-cart": "Add to Cart",
        "drink-7-title": "Manhattan",
        "drink-7-description":
            "A sophisticated mix of whiskey, sweet vermouth, and a dash of bitters.",
        "drink-7-price": "Price: $11.50",
        "drink-7-add-to-cart": "Add to Cart",
        "drink-8-title": "Sazerac",
        "drink-8-description":
            "A New Orleans classic made with rye whiskey, absinthe, sugar, and Peychaud's bitters.",
        "drink-8-price": "Price: $12.00",
        "drink-8-add-to-cart": "Add to Cart",
        "drink-9-title": "Gin and Tonic",
        "drink-9-description":
            "A refreshing combination of gin, tonic water, and a squeeze of fresh lime.",
        "drink-9-price": "Price: $7.50",
        "drink-9-add-to-cart": "Add to Cart",
        "drink-10-title": "Daiquiri",
        "drink-10-description":
            "A simple yet delicious blend of rum, lime juice, and sugar.",
        "drink-10-price": "Price: $8.00",
        "drink-10-add-to-cart": "Add to Cart",
        "drink-11-title": "Whiskey Sour",
        "drink-11-description":
            "A tangy mix of whiskey, lemon juice, and a touch of sweetness.",
        "drink-11-price": "Price: $9.00",
        "drink-11-add-to-cart": "Add to Cart",
        "drink-12-title": "Martini",
        "drink-12-description":
            "A classic cocktail made with gin (or vodka) and a hint of dry vermouth, garnished with an olive or lemon twist.",
        "drink-12-price": "Price: $10.50",
        "drink-12-add-to-cart": "Add to Cart",
        "Menu-title":"Featured Drink",

    },
    "zh-hant": {
        title: "歡迎來到 MamaMia 酒吧",
        subtitle: "品味最棒的飲品和充滿活力的氛圍...",
        "unwind-and-enjoy": "放鬆並享受",
        "discover-new-drinks": "發現新飲品",
        "discover-your-favorite": "發現您最喜愛的",
        "drink-selection": "精心調製的美酒",
        "drink-selection-1": "盡情享受我們手工調製的美酒。",
        "drink-selection-2": "我們的專業調酒師運用最優質的原料創造獨特的口味。",
        "drink-selection-3":
            "無論您偏愛經典還是創新的雞尾酒，我們都能滿足每個人的口味。",
        "drink-selection-4": "加入我們，體驗 MamaMia 酒吧的調酒藝術。",
        "join-us": "加入我們的 MamaMia 酒吧",
        "enjoy-the-nightlife": "體驗充滿活力的夜生活和難忘的時刻。",
        "visit-our-menu":
            "請查看我們的菜單，探索我們的飲品選擇，找到您完美的一口。",
        "footer-link": "Mama Mia",
        "rights-reserved": "版權所有。",
        "language-select": "語言",
        "language-select-en": "英文",
        "language-select-zh-hant": "繁體中文",
        "language-select-zh-hans": "簡體中文",
        "language-select-ja": "日文",
        home: "首頁",
        menu: "菜單",
        about: "關於我們",
        contact: "聯繫我們",
        address: "紐約，紐約州",
        phone: "電話：",
        email: "電子郵件：",
        website: "網站：",
        "useful-links": "有用連結",
        copyright: "版權所有 © 2024 Mama Mia。",
        "newsletter-subscribe": "訂閱",
        "newsletter-subscribe-form": "電子報訂閱表格",
        "newsletter-subscribe-success": "感謝您訂閱我們的電子報！",
        "newsletter-subscribe-error": "訂閱我們的電子報時出錯。請稍後再試。",
        "navbar-menu": "菜單",
        "navbar-about": "關於我們",
        "navbar-contact": "聯繫我們",
        "navbar-home": "首頁",
        "drink-1-title": "咖啡",
        "drink-1-description":
            "品味優質的咖啡，豐富的風味和香氣。由精心挑選的咖啡豆製成，這款咖啡口感順滑，令人滿足。",
        "drink-1-price": "價格：$12.99",
        "drink-1-add-to-cart": "加入購物車",
        "drink-2-title": "手工雞尾酒套裝",
        "drink-2-description":
            "通過我們手工調製的雞尾酒，提昇您的家庭酒吧水平。它包括各種優質烈酒、調和酒和裝飾品，讓您可以在家製作美味的雞尾酒。",
        "drink-2-price": "價格：$49.99",
        "drink-2-add-to-cart": "加入購物車",
        "drink-3-title": "手工起司",
        "drink-3-description":
            "沉醉於我們的手工起司中，這些起司由當地農場手工製作，品種多樣。每種起司都經過精心陳年，口感獨特，風味豐富。",
        "drink-3-price": "價格：$19.99",
        "drink-3-add-to-cart": "加入購物車",
        "drink-4-title": "莫吉托",
        "drink-4-description":
            "一款由朗姆酒、新鮮薄荷、青檸汁、糖和蘇打水製成的經典雞尾酒。",
        "drink-4-price": "價格：$8.50",
        "drink-4-add-to-cart": "加入購物車",
        "drink-5-title": "Old Fashioned",
        "drink-5-description": "波旁威士忌、糖、苦艾酒和橙皮絞碎的經典混合。",
        "drink-5-price": "價格：$10.00",
        "drink-5-add-to-cart": "加入購物車",
        "drink-6-title": "Cosmopolitan",
        "drink-6-description": "伏特加、蔓越莓汁、橙酒和青檸汁的鮮艷混合。",
        "drink-6-price": "價格：$9.50",
        "drink-6-add-to-cart": "加入購物車",
        "drink-7-title": "曼哈頓",
        "drink-7-description": "威士忌、甜味苦艾酒和少許苦味的精緻混合。",
        "drink-7-price": "價格：$11.50",
        "drink-7-add-to-cart": "加入購物車",
        "drink-8-title": "塞撒克",
        "drink-8-description":
            "一款新奧爾良經典調酒，由黑麥威士忌、苦艾酒、糖和Peychaud苦艾酒製成。",
        "drink-8-price": "價格：$12.00",
        "drink-8-add-to-cart": "加入購物車",
        "drink-9-title": "Gin and Tonic",
        "drink-9-description": "金酒、杜鬆子水和一些新鮮青檸汁的清爽組合。",
        "drink-9-price": "價格：$7.50",
        "drink-9-add-to-cart": "加入購物車",
        "drink-10-title": "戴奎裡",
        "drink-10-description": "朗姆酒、檸汁和糖的簡單卻美味的混合。",
        "drink-10-price": "價格：$8.00",
        "drink-10-add-to-cart": "加入購物車",
        "drink-11-title": "威士忌酸",
        "drink-11-description": "威士忌、檸汁和一點甜味的酸爽混合。",
        "drink-11-price": "價格：$9.00",
        "drink-11-add-to-cart": "加入購物車",
        "drink-12-title": "馬提尼",
        "drink-12-description":
            "一款經典的雞尾酒，由金酒（或伏特加）和一點幹味美酒製成，配以橄欖或檸檬皮裝飾。",
        "drink-12-price": "價格：$10.50",
        "drink-12-add-to-cart": "加入購物車",
        "Menu-title":"特色飲品",
    },
    "zh-hans": {
        "title": "欢迎来到MamaMia酒吧",
        "subtitle": "体验最佳饮品和充满活力的氛围...",
        "unwind-and-enjoy": "放松并享受",
        "discover-your-favorite": "发现您喜爱的饮品",
        "discover-new-drinks": "探索新的饮品",
        "drink-selection": "精心调制的美酒选择",
        "drink-selection-1": "尽情享受我们精心调制的美酒。",
        "drink-selection-2": "我们的专业调酒师使用最优质的原料制作独特的口感。",
        "drink-selection-3": "无论您喜欢经典还是创新的鸡尾酒，我们都有适合每个人的选择。",
        "drink-selection-4": "加入我们，在MamaMia酒吧体验调酒的艺术。",
        "join-us": "加入MamaMia酒吧",
        "enjoy-the-nightlife": "体验充满活力的夜生活和难忘时刻。",
        "visit-our-menu": "访问我们的菜单，探索我们的饮品选择，找到您完美的一杯。",
        "footer-link": "Mama Mia",
        "rights-reserved": "版权所有。",
        "language-select": "语言选择",
        "language-select-en": "英语",
        "language-select-zh-hant": "繁体中文",
        "language-select-zh-hans": "简体中文",
        "language-select-ja": "日语",
        "home": "首页",
        "menu": "菜单",
        "about": "关于我们",
        "contact": "联系我们",
        "address": "纽约，纽约州",
        "phone": "电话：",
        "email": "电子邮件：",
        "website": "网站：",
        "useful-links": "有用链接",
        "copyright": "版权 © 2024 Mama Mia。",
        "newsletter-subscribe": "订阅",
        "newsletter-subscribe-form": "订阅通讯",
        "newsletter-subscribe-success": "感谢您订阅我们的通讯！",
        "newsletter-subscribe-error": "订阅通讯时出错，请稍后再试。",
        "navbar-menu": "菜单",
        "navbar-about": "关于我们",
        "navbar-contact": "联系我们",
        "navbar-home": "首页",
        "drink-1-title": "优质咖啡",
        "drink-1-description": "品尝我们精心挑选的咖啡豆制成的优质咖啡，感受浓郁的风味和香气。这款咖啡口感顺滑，令人满足。",
        "drink-1-price": "价格：$12.99",
        "drink-1-add-to-cart": "加入购物车",
        "drink-2-title": "手工鸡尾酒套装",
        "drink-2-description": "用我们的手工鸡尾酒套装提升您的家庭酒吧水平。套装包括各种优质烈酒、混合饮料和装饰品，让您在家中制作美味的鸡尾酒。",
        "drink-2-price": "价格：$49.99",
        "drink-2-add-to-cart": "加入购物车",
        "drink-3-title": "工艺奶酪",
        "drink-3-description": "品尝我们的工艺奶酪，包括来自当地农场的各种手工制作奶酪。每种奶酪都经过精心陈化，提供独特而丰富的口感。",
        "drink-3-price": "价格：$19.99",
        "drink-3-add-to-cart": "加入购物车",
        "drink-4-title": "Mojito",
        "drink-4-description": "一款经典鸡尾酒，由朗姆酒、新鲜薄荷、青柠汁、糖和苏打水制成。",
        "drink-4-price": "价格：$8.50",
        "drink-4-add-to-cart": "加入购物车",
        "drink-5-title": "Old Fashioned",
        "drink-5-description": "一款经典混合饮料，由波旁威士忌、糖、苦艾酒和一片橙皮制成。",
        "drink-5-price": "价格：$10.00",
        "drink-5-add-to-cart": "加入购物车",
        "drink-6-title": "Cosmopolitan",
        "drink-6-description": "一款鲜艳的混合饮料，由伏特加、蔓越莓汁、橙利口酒和青柠汁制成。",
        "drink-6-price": "价格：$9.50",
        "drink-6-add-to-cart": "加入购物车",
        "drink-7-title": "Manhattan",
        "drink-7-description": "一款精致混合饮料，由威士忌、甜味苦艾酒和少许苦味制成。",
        "drink-7-price": "价格：$11.50",
        "drink-7-add-to-cart": "加入购物车",
        "drink-8-title": "Sazerac",
        "drink-8-description": "一款新奥尔良经典鸡尾酒，由黑麦威士忌、苦艾酒、糖和Peychaud苦艾酒制成。",
        "drink-8-price": "价格：$12.00",
        "drink-8-add-to-cart": "加入购物车",
        "drink-9-title": "Gin and Tonic",
        "drink-9-description": "一款清爽的混合饮料，由金酒、汤尼水和一挤新鲜青柠汁制成。",
        "drink-9-price": "价格：$7.50",
        "drink-9-add-to-cart": "加入购物车",
        "drink-10-title": "Daiquiri",
        "drink-10-description": "一款由朗姆酒、青柠汁和糖制成的简单而美味的混合饮料。",
        "drink-10-price": "价格：$8.00",
        "drink-10-add-to-cart": "加入购物车",
        "drink-11-title": "Whiskey Sour",
        "drink-11-description": "一款由威士忌、柠檬汁和少许甜味制成的酸爽混合饮料。",
        "drink-11-price": "价格：$9.00",
        "drink-11-add-to-cart": "加入购物车",
        "drink-12-title": "Martini",
        "drink-12-description": "一款经典鸡尾酒，由金酒（或伏特加）和少量干味美酒制成，搭配橄榄或柠檬皮装饰。",
        "drink-12-price": "价格：$10.50",
        "drink-12-add-to-cart": "加入购物车",
        "Menu-title":"特色饮品",
    },
    ja: {
        title: "ママミアバーへようこそ",
        subtitle: "最高のドリンクと活気ある雰囲気を體験してください。",
        "unwind-and-enjoy": "リラックスしてお楽しみください",
        "discover-new-drinks": "新しいドリンクを見つける",
        "discover-your-favorite": "お気に入りを見つける",
        "drink-selection": "洗練されたカクテルのクラフト",
        "drink-selection-1": "手作りのカクテルを堪能してください。",
        "drink-selection-2":
            "當店のエキスパートなミキショロジストが最高の材料を使用してユニークな味わいを生み出します。",
        "drink-selection-3":
            "クラシックなカクテルから革新的なカクテルまで、お好みのカクテルがきっと見つかります。",
        "drink-selection-4": "ママミアバーでミキソロジーの芸術を體験しましょう。",
        "join-us": "ママミアバーへのご參加をお待ちしています",
        "enjoy-the-nightlife":
            "活気あるナイトライフと忘れられ���い瞬間を體験してください。",
        "visit-our-menu":
            "當店のメニューをご覧いただき、お好みのドリンクを見つけてください。",
        "footer-link": "ママミア",
        "rights-reserved": "著作権所有。",
        "language-select": "言語",
        "language-select-en": "英語",
        "language-select-zh-hant": "繁體中文",
        "language-select-zh-hans": "簡體中文",
        "language-select-ja": "日本語",
        home: "ホーム",
        menu: "メニュー",
        about: "お店について",
        contact: "お問い合わせ",
        address: "ニューヨーク、NY",
        phone: "電話番號：",
        email: "メール：",
        website: "ウェブサイト：",
        "useful-links": "便利なリンク",
        copyright: "© 2024 ママミア。全著作権所有。",
        "newsletter-subscribe": "購読する",
        "newsletter-subscribe-form": "ニュースレター購読フォーム",
        "newsletter-subscribe-success":
            "ニュースレターの購読ありがとうございます！",
        "newsletter-subscribe-error":
            "ニュースレターの購読中にエラーが発生しました。後でもう一度お試しください。",
        "navbar-menu": "メニュー",
        "navbar-about": "お店について",
        "navbar-contact": "お問い合わせ",
        "navbar-home": "ホーム",
        "drink-1-title": "プレミアムコーヒーブレンド",
        "drink-1-description":
            "厳選されたコーヒー豆から作られた、豊かな風味と香りをお楽しみください��このブレンドは、滑らかで満足感のある味わいを提供します。",
        "drink-1-price": "価格: $12.99",
        "drink-1-add-to-cart": "カートに追加",
        "drink-2-title": "ハンドクラフトカクテルセット",
        "drink-2-description":
            "ハンドクラフトカクテルセットで自宅のバーを格上げしましょう。プレミアムなスピリッツ、ミキサー、ガーニッシュが含まれており、自宅で美味しいカクテルを作ることができます。",
        "drink-2-price": "価格: $49.99",
        "drink-2-add-to-cart": "カートに追加",
        "drink-3-title": "アルティザナルチーズセレクション",
        "drink-3-description":
            "地元の農場で手作りされたさまざまなアルティザナルチーズを楽しんでください。各チーズは丁寧に熟成され、ユニークで風味豊かな體験を提供します。",
        "drink-3-price": "価格: $19.99",
        "drink-3-add-to-cart": "カートに追加",
        "drink-4-title": "モヒート",
        "drink-4-description":
            "ラム酒、新鮮なミント、ライムジュース、砂糖、ソーダ水で作られるクラシックカクテル。",
        "drink-4-price": "価格: $8.50",
        "drink-4-add-to-cart": "カートに追加",
        "drink-5-title": "オールドファッションド",
        "drink-5-description":
            "バーボン、砂糖、ビターズ、オレンジの皮の一片で作られるタイムレスなブレンド。",
        "drink-5-price": "価格: $10.00",
        "drink-5-add-to-cart": "カートに追加",
        "drink-6-title": "コスモポリタン",
        "drink-6-description":
            "ウォッカ、クランベリージュース、���レンジリキュール、ライムジュースの鮮やかなミックス。",
        "drink-6-price": "価格: $9.50",
        "drink-6-add-to-cart": "カートに追加",
        "drink-7-title": "マンハッタン",
        "drink-7-description":
            "ウイスキー、スイートベルモット、ビターズのダッシュで作られる洗練されたミックス。",
        "drink-7-price": "価格: $11.50",
        "drink-7-add-to-cart": "カートに追加",
        "drink-8-title": "サザラック",
        "drink-8-description":
            "ライ麥ウイスキー、アブサン、砂糖、ペイショーズビターズで作られるニューオーリンズのクラシック。",
        "drink-8-price": "価格: $12.00",
        "drink-8-add-to-cart": "カートに追加",
        "drink-9-title": "ジンアンドトニック",
        "drink-9-description":
            "ジン、トニックウォーター、新鮮な���イムの絞り汁のさわやかな組み合わせ。",
        "drink-9-price": "価格: $7.50",
        "drink-9-add-to-cart": "カートに追加",
        "drink-10-title": "ダイキリ",
        "drink-10-description":
            "ラ���酒、ライムジュース、砂糖のシンプルで美味しいブレンド。",
        "drink-10-price": "価格: $8.00",
        "drink-10-add-to-cart": "カートに追加",
        "drink-11-title": "ウイスキーサワー",
        "drink-11-description":
            "ウイスキー、レモンジュース、少しの甘さのあるタンジーなミックス。",
        "drink-11-price": "価格: $9.00",
        "drink-11-add-to-cart": "カートに追加",
        "drink-12-title": "マティーニ",
        "drink-12-description":
            "ジン（またはウォッカ）と少量のドライベルモットで作られ、オリーブまたはレモンの皮で飾られるクラシックカクテル。",
        "drink-12-price": "価格: $10.50",
        "drink-12-add-to-cart": "カートに追加",
        "Menu-title":"特選ドリンク",
    },
};

const languageMap_about = {
    en: {
        "about-title": "About MamaMia Bar",
        "about-h2-1": "What is MamaMia Bar?",
        "about-p1": "MamaMia Bar is a bar located in the city of New York. It is a place where people can enjoy a drink and have a good time. Our bar offers a wide selection of beverages, including cocktails, beers, and spirits. We also have a friendly and welcoming atmosphere, making it the perfect place to hang out with friends or meet new people.",
        "about-h2-2": "Our Staff",
        "about-p2": "At MamaMia Bar, we strive to provide excellent service and create memorable experiences for our customers. Our staff is knowledgeable and passionate about mixology, ensuring that every drink is crafted with care and precision. Whether you're looking for a classic cocktail or a unique creation, our talented bartenders will exceed your expectations.",
        "about-h2-3": "Our History",
        "about-p3": "Our bar is also known for its vibrant and lively events. From live music performances to themed parties, there's always something exciting happening at MamaMia Bar. We believe in creating a fun and energetic environment where people can dance, socialize, and have a great time.",
        "about-h2-4": "Our Mission",
        "about-p4": "Visit MamaMia Bar today and experience the vibrant nightlife of New York City. We look forward to serving you!",
    },
    "zh-hant": {
        "about-title": "關於 MamaMia 酒吧",
        "about-h2-1": "什麼是 MamaMia 酒吧？",
        "about-p1": "MamaMia 酒吧位於紐約，紐約州。它是一個讓人可以喝飲料和一起過去的地方。我們酒吧提供了一個很大的飲料選擇，包括飲料、糖果和酒精。我們也有一個歡迎和友善的環境，使得它是一個非常適合和聯繫朋友或新人的地方。",
        "about-h2-2": "我們的員工",
        "about-p2": "在 MamaMia 酒吧，我們努力提供令人驕傲的服務和創造興趣的熱情。我們的員工是一群知識和憧憬的混合飲料家，保證每一飲料都是創造精巧的。不管你是想要一個經典飲料或一個非常有趣的创作，我們的傾聽飲料師都會超越你的期待。",
        "about-h2-3": "我們的歷史",
        "about-p3": "我們酒吧也是一個非常活躍的地方。從聽音樂演出到主題性派對，我們都有一個極適合的環境。我們相信在我們的環境中，人們可以一起舞蹈、一起讀書、一起享受興趣。",
        "about-h2-4": "我們的任務",
        "about-p4": "今天，訪問 MamaMia 酒吧，可以了解紐約的興趣夜life。我們期待服務您！",
    },
    "zh-hans": {
        "about-title": "关于 MamaMia 酒吧",
        "about-h2-1": "什么是 MamaMia 酒吧？",
        "about-p1": "MamaMia 酒吧位于纽约，纽约州。它是一家让人可以喝饮料和一起过去的地方。我们酒吧提供了一个很大的饮料选择，包括饮料、糖果和酒精。我们也有一种愉快和友好的环境，使得它是一家非常适合和联系朋友或新人的地方。",
        "about-h2-2": "我们的员工",
        "about-p2": "在 MamaMia 酒吧，我们努力提供令人驕傲的服务和创造兴趣的热情。我们的员工是一群知识和憧憬的混合饮料家，保证每一饮料都是创造精巧的。不管你是想要一种经典饮料或一种非常有趣的创作，我们的厨师都会超越你的期待。",
        "about-h2-3": "我们的历史",
        "about-p3": "我们酒吧也是一家非常活跃的地方。从听音乐演出到主题性派对，我们都有一种极其适合的环境。我们相信在我们的环境中，人们可以一起舞蹈、一起读书、一起享受兴趣。",
        "about-h2-4": "我们的任务",
        "about-p4": "今天，访问 MamaMia 酒吧，可以了解纽约的舒适夜life。我们期待服务您！",
    },
    "ja": {
        "about-title": "ママミアバーへようこそ",
        "about-h2-1": "ママミアバーとは？",
        "about-p1": "ママミアバーは、ニューヨーク、ニューヨーク州にある一家の酒場です。人々が飲み飲みして、楽しい時間を過ごすことができます。ママミアバーは、飲料の大きな選択肢と、コックテル、ビール、スピリッツ、および酸爽な飲料を提供しています。また、友好した環境と、人々が一緒に飲み飲みして楽しんでいることを目指しています。",
        "about-h2-2": "ママミアバーの役員",
        "about-p2": "ママミアバーは、飲料の高品質な服務と、興味深い飲料を作り、人々に楽しい時間を過ごすことを目指しています。役員は、知識と憧れの混合飲料家として、飲料の作り方を詳細に理解し、精巧に作ります。飲料の種類によっては、特定の飲料を選択することができます。",
        "about-h2-3": "ママミアバーの歴史",
        "about-p3": "ママミアバーは、ニューヨークの興味深い夜lifeを楽しんでいる地方です。音楽の演奏、主題性の派对、および人々が一緒に飲み飲みして楽しんでいることを目指しています。ママミアバーは、興味深い夜lifeを楽しむための環境を提供しています。",
        "about-h2-4": "ママミアバーの任務",
        "about-p4": "今日、ママミアバーに行って、ニューヨークの興味深い夜lifeを楽しんでいます。私たちは、あなたにとって最高の服務を提供しています！",
    }
}
const languageMap_Context = {
    en: {
        "contact-title": "Contact Us",
        "contact-description": "We're always looking for ways to improve our services and create a better experience for our customers.",
        "contact-title-form": "Send us a message",
        "contact-form-name-error": "Please enter only letters and numbers.",
        "contact-form-email-error": "Please enter a valid email address.",
        "contact-form-message-error": "Please enter only letters and numbers.",
        "contact-form-checkbox-error": "Please select a checkbox.",
    },
    "zh-hant": {
        "contact-title": "聯繫我們",
        "contact-description": "我們儘量探索改善我們的服務並創造更好的客戶體驗。",
        "contact-title-form": "請給我們發送一則訊息。",
        "contact-form-name-error": "請輸入只包含字母和數字的字串。",
        "contact-form-email-error": "請輸入有效的電子郵件地址。",
        "contact-form-message-error": "請輸入只包含字母和數字的字串。",
        "contact-form-checkbox-error": "請選擇一個勾選框。",
    },
    "zh-hans": {
        "contact-title": "联系我们",
        "contact-description": "我们努力改进我们的服务并创造更好的客户体验。",
        "contact-title-form": "给我们发送消息",
        "contact-form-name-error": "请输入只包含字母和数字的字串。",
        "contact-form-email-error": "请输入有效的电子邮件地址。",
        "contact-form-message-error": "请输入只包含字母和数字的字串。",
        "contact-form-checkbox-error": "请选择一个复选框。",
    },
    ja: {
        "contact-title": "お問い合わせ",
        "contact-description": "私たちは、客観的な夜lifeを楽しむための環境を提供しています。",
        "contact-title-form": "メッセージを送信",
        "contact-form-name-error": "名前のみ英数字を入力してください。",
        "contact-form-email-error": "有効なメールアドレスを入力してください。",
        "contact-form-message-error": "メッセージのみ英数字を入力してください。",
        "contact-form-checkbox-error": "チェックボックスを選択してください。",
    },
}



window.onload = function () {
    const languageSelect = document.getElementById("language");
    const savedLanguage = localStorage.getItem("language") || "en";
    languageSelect.value = savedLanguage;
    updatePageLanguage(savedLanguage);

    languageSelect.addEventListener("change", function () {
        const selectedLanguage = this.value;
        localStorage.setItem("language", selectedLanguage);
        updatePageLanguage(selectedLanguage);
    });
};

function updatePageLanguage(language) {
    const translations = languageMap[language];
    for (const key in translations) {
        const element = document.getElementById(key);
        if (element) {
            element.textContent = translations[key];
        }
    }
    updateAboutPageLanguage(language);
    updateContactPageLanguage(language);
}

// detect language and use changeLanguage function
function detectLanguage() {
    const language = navigator.language.split("-")[0];
    if (language === "en") {
        changeLanguage("en");
    } else if (language === "zh") {
        changeLanguage("zh-hant");
    } else if (language === "ja") {
        changeLanguage("ja");
    }
}

// update language about page
function updateAboutPageLanguage(language) {
    const translations = languageMap_about[language];
    for (const key in translations) {
        const element = document.getElementById(key);
        if (element) {
            element.textContent = translations[key];
        }
    }
}

function updateContactPageLanguage(language) {
    const translations = languageMap_Context[language];
    for (const key in translations) {
        const element = document.getElementById(key);
        if (element) {
            element.textContent = translations[key];
        }
    }
}
