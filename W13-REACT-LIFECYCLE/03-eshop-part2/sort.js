const data = [
    {
        name: "Apple iPhone 11 (128GB) - Yellow",
        descr: "6.1-inch (15 cm) IPS LCD with a resolution is 1792 × 828 pixels (1.4 megapixels) at a pixel density of 326 PPI with a maximum brightness of 625 nits and a 1400:1 contrast ratio",
        ram: "128 GB",
        image: "https://m.media-amazon.com/images/I/714Mg+6MoFL._SX522_.jpg",
        price: 499,
        rating: 4.5,
        reviews: 259,
        sold: 123
    },
    {
        name: "Apple iPhone X (256GB) - Space Grey",
        descr: "With gorgeous all-glass design with a beautiful 5.8-inch Super Retina display, A11 Bionic chip, wireless charging and an improved rear camera with dual optical image stabilization",
        ram: "256 GB",
        image: "https://m.media-amazon.com/images/I/513dDPynP6L._SL1000_.jpg",
        price: 430,
        rating: 4.5,
        reviews: 7599,
        sold: 3800
    },
    {
        name: "Apple iPhone 13 (128GB) - Blue",
        descr: "Features a ceramic shield front, Super Retina XDR display with True Tone and an A15 Bionic chip",
        ram: "128 GB",
        image: "https://m.media-amazon.com/images/I/71xb2xkN5qL._SX522_.jpg",
        price: 689,
        rating: 4.6,
        reviews: 6824,
        sold: 3412
    },
    {
        name: "Apple iPhone 12 (128GB) - Purple",
        descr: "6.1-inch and 5.4-inch sizes with identical features, including support for 5G cellular networks, OLED displays, improved cameras",
        ram: "128 GB",
        image: "https://m.media-amazon.com/images/I/71hIfcIPyxS._SX522_.jpg",
        price: 609,
        rating: 4.6,
        reviews: 10032,
        sold: 5016
    },
    {
        name: "Apple iPhone 13 Pro Max (256GB) - Sierra Blue",
        descr: "Apple's biggest phone in the lineup with a massive, 6.7 screen that for the first time in an iPhone comes with 120Hz ProMotion display that ensures super smooth scrolling",
        ram: "256 GB",
        image: "https://m.media-amazon.com/images/I/61i8Vjb17SL._SX522_.jpg",
        price: 1259,
        rating: 4.7,
        reviews: 923,
        sold: 412
    },
    {
        name: "Apple iPhone 13 Pro (128GB) - Sierra Blue",
        descr: "Apple's smaller premium iPhone with a 6.1 screen size and for the first time in an iPhone, it comes with a 120Hz ProMotion display for super smooth scrolling",
        ram: "128 GB",
        image: "https://m.media-amazon.com/images/I/61jLiCovxVL._SX522_.jpg",
        price: 1049,
        rating: 4.7,
        reviews: 755,
        sold: 356
    },
    {
        name: "Apple iPhone 13 (128GB) - Red",
        descr: "Features a ceramic shield front, Super Retina XDR display with True Tone and an A15 Bionic chip",
        ram: "128 GB",
        image: "https://m.media-amazon.com/images/I/71gm8v4uPBL._SX522_.jpg",
        price: 1049,
        rating: 4.7,
        reviews: 755,
        sold: 356
    },
    {
        name: "Apple iPhone SE (128 GB) - Red",
        descr: "Affordable entry point to the iPhone lineup, with many important features such as a powerful A-series chip, a high-quality camera with 4K video recording, Haptic Touch, wireless charging, water and dust resistance",
        ram: "256 GB",
        image: "https://m.media-amazon.com/images/I/61A0Zu4K-TL._SX679_.jpg",
        price: 479,
        rating: 4.2,
        reviews: 163,
        sold: 85
    },
    {
        name: "Apple iPhone 12 Mini (128GB) - Black",
        descr: "The smallest all-screen iPhone 5% shorter, 4.5% narrower, and the same thickness and 8.8% lighter",
        ram: "128 GB",
        image: "https://m.media-amazon.com/images/I/71uuDYxn3XL._SX522_.jpg",
        price: 649,
        rating: 4.5,
        reviews: 5804,
        sold: 2900
    },
    {
        name: "Apple iPhone 13 Mini (128GB) - Pink",
        descr: "With A15 processor, ceramic shield, 5g support, wireless charging and super retina XDR display",
        ram: "128 GB",
        image: "https://m.media-amazon.com/images/I/61nPiOOv9BL._SX522_.jpg",
        price: 802,
        rating: 4.5,
        reviews: 2804,
        sold: 1402
    },
    {
        name: "iPhone 12 Pro Max",
        descr: "6.70-inch touchscreen display offering a resolution of 1284x2778 pixels at a pixel density of 458 pixels per inch (ppi)",
        ram: "128 GB",
        image: "https://static.wikia.nocookie.net/ipod/images/1/12/IPhone_12_Pro_Max_back_colors.jpg",
        price: 1099,
        rating: 4.5,
        reviews: 6832,
        sold: 3416
    },
    {
        name: "iPhone 12 Pro",
        descr: "Powered by the six-core Apple A14 processor and features Ceramic Shield, supports 5G networks and wireless charging",
        ram: "128 GB",
        image: "https://m.media-amazon.com/images/I/71xkMA+gvYL._SX679_.jpg",
        price: 999,
        rating: 4.5,
        reviews: 1655,
        sold: 860
    },
    {
        name: "iPhone 12",
        descr: "Powered by the six-core Apple A14 processor and features Ceramic Shield, supports 5G networks and wireless charging and super redina XDR display",
        ram: "64 GB",
        image: "https://static.wikia.nocookie.net/ipod/images/a/ae/IPhone_12_colors.png",
        price: 799,
        rating: 4.5,
        reviews: 14076,
        sold: 7035
    },
    {
        name: "iPhone 11 Pro Max",
        descr: "Powered by A13 Bionic processor and features triple-lens 12MP rear camera system and a 6.46 OLED screen",
        ram: "64 GB",
        image: "https://static.wikia.nocookie.net/ipod/images/f/f9/11prOmAx.jpg",
        price: 699,
        rating: 4.5,
        reviews: 12036,
        sold: 8132
    },
    {
        name: "iPhone 11 Pro",
        descr: "Powered by A13 Bionic processor and features triple-lens 12MP rear camera system and a 5.85 OLED screen",
        ram: "64 GB",
        image: "https://m.media-amazon.com/images/I/81A4mZpvWBL._SX522_.jpg",
        price: 599,
        rating: 4.5,
        reviews: 12212,
        sold: 9243
    },
]

const numbers = [1, 5, 3, 9, 80]

/**
 * the cb if it returns negative number then the 1st item goes first
 */



console.log(numbers.sort((a, b) => a - b)) // asc = a - z or 0 - 9
console.log(numbers.sort((a, b) => b - a)) // desc

// console.log(data.sort((a, b) => b.sold - a.sold)) // desc

console.log(['a', 'd', 'b', 'c'].sort())

console.log([{a: 'a'}, {a:'d'}, {a:'b'}, {a:'c'}].sort((a, b)=> a.a < b.a ? 1 : - 1))