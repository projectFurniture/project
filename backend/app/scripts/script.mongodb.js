// Select the database to use.
use("GroceryStore");

db.getCollection("users").insertMany([
  {
    username: "John Doe",
    user_email: "john.doe@example.com",
    user_password: "securePassword123",
    user_telephone: 1234567890,
    user_address: "123 Main Street, Toronto, ON",
  },
  {
    username: "Jane Smith",
    user_email: "jane.smith@example.com",
    user_password: "password456",
    user_telephone: 9876543210,
    user_address: "456 Oak Avenue, Vancouver, BC",
  },
  {
    username: "Michael Johnson",
    user_email: "michael.johnson@example.com",
    user_password: "pass123word",
    user_telephone: 2345678901,
    user_address: "789 Elm Road, Montreal, QC",
  },
  {
    username: "Emily Brown",
    user_email: "emily.brown@example.com",
    user_password: "secretpass",
    user_telephone: 3456789012,
    user_address: "567 Pine Court, Ottawa, ON",
  },
  {
    username: "David Lee",
    user_email: "david.lee@example.com",
    user_password: "password789",
    user_telephone: 4567890123,
    user_address: "890 Maple Lane, Calgary, AB",
  },
  {
    username: "Sophia Wang",
    user_email: "sophia.wang@example.com",
    user_password: "mysecurepassword",
    user_telephone: 5678901234,
    user_address: "123 Birch Street, Edmonton, AB",
  },
  {
    username: "James Chen",
    user_email: "james.chen@example.com",
    user_password: "testpass123",
    user_telephone: 6789012345,
    user_address: "456 Cedar Avenue, Winnipeg, MB",
  },
  {
    username: "Olivia Li",
    user_email: "olivia.li@example.com",
    user_password: "mypassword",
    user_telephone: 7890123456,
    user_address: "789 Oak Street, Quebec City, QC",
  },
  {
    username: "Liam Martin",
    user_email: "liam.martin@example.com",
    user_password: "secure123",
    user_telephone: 8901234567,
    user_address: "234 Elm Lane, Hamilton, ON",
  },
  {
    username: "Ava Garcia",
    user_email: "ava.garcia@example.com",
    user_password: "mypassword123",
    user_telephone: 9012345678,
    user_address: "567 Pine Road, Mississauga, ON",
  },
]);

db.getCollection("products").insertMany([
  {
    name: "Organic Bananas",
    description: "Fresh organic bananas from Ecuador.",
    price: 1.99,
    image:
      "https://www.deliver-grocery.ca/5639-large_default/organic-banana-1-bunch-11-kg.jpg",
    published: true,
    qty: 100,
    category: "Fruits",
  },
  {
    name: "Free-Range Eggs",
    description: "Farm-fresh free-range eggs from local farms.",
    price: 3.49,
    image:
      "https://images.costcobusinessdelivery.com/ImageDelivery/imageService?profileId=12028466&itemId=1068080&recipeName=680",
    published: true,
    qty: 50,
    category: "Dairy & Eggs",
  },
  {
    name: "Atlantic Salmon Fillet",
    description: "Premium Atlantic salmon fillet, boneless and skinless.",
    price: 12.99,
    image:
      "https://assets.shop.loblaws.ca/products/20852143/b1/en/top/20852143_top_a01_@2.png",
    published: true,
    qty: 30,
    category: "Seafood",
  },
  {
    name: "Organic Baby Spinach",
    description: "Fresh organic baby spinach leaves.",
    price: 2.99,
    image:
      "https://simcoeproduce.com/wp-content/uploads/2021/02/Baby-Spinach-550px.png",
    published: true,
    qty: 20,
    category: "Vegetables",
  },
  {
    name: "Whole Grain Bread",
    description: "Healthy whole grain bread, freshly baked daily.",
    price: 4.29,
    image:
      "https://pointedkitchen.com/wp-content/uploads/2019/12/Alvarado-st-Bakery-Sprouted-Wholewheat-sml-1.jpg",
    published: true,
    qty: 40,
    category: "Bakery",
  },
  {
    name: "Greek Yogurt",
    description: "Creamy Greek yogurt with live active cultures.",
    price: 2.99,
    image:
      "https://www.compliments.ca/wp-content/uploads/2020/08/0-greek-yogurt-plain-650-g.jpg",
    published: true,
    qty: 25,
    category: "Dairy & Eggs",
  },
  {
    name: "Organic Apples",
    description: "Crisp and sweet organic apples from local orchards.",
    price: 3.49,
    image:
      "https://www.stbarthswine.com/cdn/shop/products/ApplesPinkLadyA_grande.jpg?v=1590587463",
    published: true,
    qty: 60,
    category: "Fruits",
  },
  {
    name: "Lean Ground Beef",
    description: "Lean ground beef, perfect for burgers and meatballs.",
    price: 9.99,
    image:
      "https://i5.walmartimages.ca/images/Enlarge/024/652/6000200024652.jpg",
    published: true,
    qty: 15,
    category: "Meat & Poultry",
  },
  {
    name: "Organic Carrots",
    description: "Fresh organic carrots, great for snacking and cooking.",
    price: 2.49,
    image:
      "https://assets.shop.loblaws.ca/products/20185409/b2/en/front/20185409_front_a06_@2.png",
    published: true,
    qty: 30,
    category: "Vegetables",
  },
  {
    name: "Almond Milk",
    description: "Creamy almond milk, lactose-free and rich in nutrients.",
    price: 3.19,
    image:
      "https://assets.shop.loblaws.ca/products/20794060004/b2/en/front/20794060004_front_a06_@2.png",
    published: true,
    qty: 40,
    category: "Beverages",
  },
  {
    name: "Wild Blueberries",
    description: "Sweet and flavorful wild blueberries.",
    price: 4.99,
    image:
      "https://assets.shop.loblaws.ca/products/20306054/b3/en/front/20306054_front_a06_@2.png",
    published: true,
    qty: 50,
    category: "Fruits",
  },
  {
    name: "Organic Cucumbers",
    description: "Fresh organic cucumbers, perfect for salads.",
    price: 1.79,
    image:
      "https://assets.shop.loblaws.ca/products/20935931001/b2/en/front/20935931001_front_a06_@2.png",
    published: true,
    qty: 25,
    category: "Vegetables",
  },
  {
    name: "Organic Quinoa",
    description: "Nutritious organic quinoa, a versatile grain.",
    price: 5.99,
    image:
      "https://richmedia.ca-richimage.com/ImageDelivery/imageService?profileId=12026539&id=1742333&recipeId=500",
    published: true,
    qty: 20,
    category: "Grains & Pasta",
  },
  {
    name: "Fresh Strawberries",
    description: "Juicy and sweet fresh strawberries.",
    price: 3.99,
    image:
      "https://assets.shop.loblaws.ca/products/20049778001/b1/en/front/20049778001_front_a01_@2.png",
    published: true,
    qty: 35,
    category: "Fruits",
  },
  {
    name: "Organic Tomatoes",
    description: "Vine-ripened organic tomatoes, great for cooking.",
    price: 2.99,
    image:
      "https://assets.shop.loblaws.ca/products/20651932001/b2/en/front/20651932001_front_a06_@2.png",
    published: true,
    qty: 45,
    category: "Vegetables",
  },
  {
    name: "Salad Mix",
    description: "Fresh salad mix with a variety of greens.",
    price: 3.49,
    image:
      "https://assets.shop.loblaws.ca/products/20323751/b1/en/front/20323751_front_a01_@2.png",
    published: true,
    qty: 30,
    category: "Vegetables",
  },
  {
    name: "Organic Orange Juice",
    description: "100% pure organic orange juice, no additives.",
    price: 4.99,
    image:
      "https://assets.shop.loblaws.ca/products/20323751/b1/en/front/20323751_front_a01_@2.png",
    published: true,
    qty: 15,
    category: "Beverages",
  },
  {
    name: "Whole Chicken",
    description: "Whole chicken, hormone-free and raised ethically.",
    price: 11.99,
    image:
      "https://www.perdue.com/product-images/830_640_PK_830_WCCU_RD_ITD0718_FV_clean_640.jpg",
    published: true,
    qty: 20,
    category: "Meat & Poultry",
  },
  {
    name: "Organic Avocado",
    description: "Creamy organic avocados, rich in healthy fats.",
    price: 2.99,
    image:
      "https://theproduceguyz.com/cdn/shop/products/image_c5a80940-73d2-400f-8546-f35ee6d2148e.jpg?v=1603080608",
    published: true,
    qty: 40,
    category: "Fruits",
  },
  {
    name: "Whole Grain Pasta",
    description: "Healthy whole grain pasta, a good source of fiber.",
    price: 2.49,
    image:
      "https://ipcdn.freshop.com/resize?url=https://images.freshop.com/00076808533286/65d95f50f1917c0ec220759a114c9d9b_large.png&width=512&type=webp&quality=90",
    published: true,
    qty: 25,
    category: "Grains & Pasta",
  },
  {
    name: "Organic Broccoli",
    description: "Fresh organic broccoli, packed with nutrients.",
    price: 2.79,
    image:
      "https://www.earthboundfarm.com/wp-content/uploads/2017/01/EBF-Broccoli-1ct-cello.png",
    published: true,
    qty: 35,
    category: "Vegetables",
  },
]);

db.getCollection("orders").insertMany([
  {
    user_id: "9876543210",
    order_status: "Delivered",
    order_items: [
      {
        product_id: "1234567890",
        qty: 2,
      },
      {
        product_id: "2345678901",
        qty: 1,
      },
    ],
    payment: {
      payment_mode: "Credit/Debit Card",
      payment_date: "2023-07-22T10:30:00.000Z",
    },
  },
  {
    user_id: "7890123456",
    order_status: "Pending",
    order_items: [
      {
        product_id: "3456789012",
        qty: 3,
      },
    ],
    payment: {
      payment_mode: "Cash",
      payment_date: "2023-07-21T15:45:00.000Z",
    },
  },
  {
    user_id: "5678901234",
    order_status: "Shipped",
    order_items: [
      {
        product_id: "4567890123",
        qty: 1,
      },
      {
        product_id: "5678901234",
        qty: 4,
      },
    ],
    payment: {
      payment_mode: "Credit/Debit Card",
      payment_date: "2023-07-20T09:10:00.000Z",
    },
  },
  {
    user_id: "3456789012",
    order_status: "Delivered",
    order_items: [
      {
        product_id: "6789012345",
        qty: 2,
      },
    ],
    payment: {
      payment_mode: "Cash",
      payment_date: "2023-07-19T18:20:00.000Z",
    },
  },
  {
    user_id: "1234567890",
    order_status: "Cancelled",
    order_items: [
      {
        product_id: "7890123456",
        qty: 1,
      },
    ],
    payment: {
      payment_mode: "Credit/Debit Card",
      payment_date: "2023-07-18T14:30:00.000Z",
    },
  },
  {
    user_id: "8901234567",
    order_status: "Delivered",
    order_items: [
      {
        product_id: "8901234567",
        qty: 3,
      },
    ],
    payment: {
      payment_mode: "Cash",
      payment_date: "2023-07-17T12:45:00.000Z",
    },
  },
  {
    user_id: "9012345678",
    order_status: "Delivered",
    order_items: [
      {
        product_id: "9012345678",
        qty: 2,
      },
      {
        product_id: "7890123456",
        qty: 1,
      },
    ],
    payment: {
      payment_mode: "Credit/Debit Card",
      payment_date: "2023-07-16T11:00:00.000Z",
    },
  },
  {
    user_id: "2345678901",
    order_status: "Shipped",
    order_items: [
      {
        product_id: "6789012345",
        qty: 5,
      },
      {
        product_id: "8901234567",
        qty: 2,
      },
    ],
    payment: {
      payment_mode: "Credit/Debit Card",
      payment_date: "2023-07-15T16:30:00.000Z",
    },
  },
  {
    user_id: "4567890123",
    order_status: "Pending",
    order_items: [
      {
        product_id: "4567890123",
        qty: 1,
      },
    ],
    payment: {
      payment_mode: "Cash",
      payment_date: "2023-07-14T09:45:00.000Z",
    },
  },
  {
    user_id: "6789012345",
    order_status: "Delivered",
    order_items: [
      {
        product_id: "2345678901",
        qty: 3,
      },
      {
        product_id: "9012345678",
        qty: 2,
      },
    ],
    payment: {
      payment_mode: "Credit/Debit Card",
      payment_date: "2023-07-13T17:15:00.000Z",
    },
  },
]);

db.getCollection("categories").insertMany([
  {
    name: "Fruits",
  },
  {
    name: "Dairy & Eggs",
  },
  {
    name: "Seafood",
  },
  {
    name: "Vegetables",
  },
  {
    name: "Bakery",
  },
  {
    name: "Meat & Poultry",
  },
  {
    name: "Beverages",
  },
  {
    name: "Grains & Pasta",
  },
]);
