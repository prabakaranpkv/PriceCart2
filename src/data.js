const data = {
  products: [
    {
      id: "1",
      name: "Samsung Galaxy F12",
      price: 11499,
      rating: 4,
      image:
        "https://enter21st.com/wp-content/uploads/2021/04/Samsung-Galaxy-F12-price-first-sale-of-Samsung-Galaxy-F12.jpg",
    },
    {
      id: "2",
      name: "Redmi 9A",
      price: 6999,
      rating: 3,
      image:
        "https://specifications-pro.com/wp-content/uploads/2020/06/Xiaomi-Redmi-9A.jpg",
    },
    {
      id: "3",
      name: "Samsung Galaxy M12",
      price: 13499,
      rating: 4,
      image:
        "https://static.digit.in/default/fe968bbcb963a5c651890b4e03a65dfc528c0e00.jpeg?tr=1200",
    },
    {
      id: "4",
      name: "OnePlus Nord CE 5G",
      price: 24599,
      rating: 5,
      image:
        "data:image/jpeg;base64,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",
    },
    {
      id: "5",
      name: "OPPO A31",
      price: 12990,
      rating: 3,
      image:
        "https://www.gizmochina.com/wp-content/uploads/2020/02/Oppo-A31-500x500.jpg",
    },
    {
      id: "6",
      name: "Nokia 3.4",
      price: 10749,
      rating: 4,
      image:
        "https://www.powerplanetonline.com/cdnassets/nokia_3_4_3gb_64gb_03_negro_ad_l.jpg",
    },
  ],
};

export default data;