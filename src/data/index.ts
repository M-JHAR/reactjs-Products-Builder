import { v4 as uuid } from "uuid";
import { ICategory, IFormInput, IProduct } from "../interfaces";

export const productList: IProduct[] = [
  {
    id: uuid(),
    title: "Wireless Bluetooth Headphones",
    description:
      "High-quality wireless headphones with noise cancellation and long battery life.",
    imageURL:
      "https://th.bing.com/th/id/OIP.VKQ__hT5n6GNtqYvzlItVgHaHa?w=192&h=192&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    price: "9999",
    colors: ["#000000", "#FFFFFF", "#0000FF"],
    category: {
      name: "Electronics",
      imageURL:
        "https://th.bing.com/th/id/OIP.24hPcANHaYdUsQX5QBArygHaHa?rs=1&pid=ImgDetMain",
    },
  },
  {
    id: uuid(),
    title: "Smartwatch Series X",
    description:
      "Feature-packed smartwatch with heart rate monitoring and GPS.",
    imageURL:
      "https://th.bing.com/th/id/OIP.j7-KnTuZp6fACkJfqdFVxQHaHa?rs=1&pid=ImgDetMain",
    price: "14999",
    colors: ["#000000", "#C0C0C0", "#B76E79"],
    category: {
      name: "Electronics",
      imageURL:
        "https://th.bing.com/th/id/OIP.24hPcANHaYdUsQX5QBArygHaHa?rs=1&pid=ImgDetMain",
    },
  },
  {
    id: uuid(),
    title: "Gaming Mechanical Keyboard",
    description: "RGB-backlit mechanical keyboard with fast response time.",
    imageURL:
      "https://th.bing.com/th/id/OIP.YMsHaOTxhOybx0h-ZcpnegHaHa?rs=1&pid=ImgDetMain",
    price: "7999",
    colors: ["#000000", "#FFFFFF"],
    category: {
      name: "Electronics",
      imageURL:
        "https://th.bing.com/th/id/OIP.24hPcANHaYdUsQX5QBArygHaHa?rs=1&pid=ImgDetMain",
    },
  },
  {
    id: uuid(),
    title: "Ergonomic Office Chair",
    description:
      "Comfortable office chair with adjustable height and lumbar support.",
    imageURL:
      "https://i5.walmartimages.com/asr/56883df4-5d5a-4483-a3f0-25c28b22a100_1.e9041c88d624050a115dae5dbf70160d.jpeg",
    price: "19999",
    colors: ["#000000", "#808080", "#0000FF"],
    category: {
      name: "Computer Accessories",
      imageURL:
        "https://th.bing.com/th/id/OIP.vH256gqdIXyF-CKExUfmaQHaEh?rs=1&pid=ImgDetMain",
    },
  },
  {
    id: uuid(),
    title: "Stainless Steel Water Bottle",
    description:
      "Insulated water bottle that keeps drinks hot or cold for hours.",
    imageURL:
      "https://th.bing.com/th/id/OIP.NCJe4n0DNUZCbzgQkYYinwHaHa?rs=1&pid=ImgDetMain",
    price: "2999",
    colors: ["#C0C0C0", "#0000FF", "#FF0000"],
    category: {
      name: "Fitness",
      imageURL:
        "https://th.bing.com/th/id/OIP.EwbatycHx_915hcNzd7vRgHaE8?rs=1&pid=ImgDetMain",
    },
  },
  {
    id: uuid(),
    title: "4K Ultra HD Smart TV",
    description:
      "55-inch smart TV with ultra HD resolution and streaming capabilities.",
    imageURL:
      "https://th.bing.com/th/id/OIP.Wx_lY9E6QIi4duGfH2OyOQHaHX?rs=1&pid=ImgDetMain",
    price: "59999",
    colors: ["#000000"],
    category: {
      name: "Computer Accessories",
      imageURL:
        "https://th.bing.com/th/id/OIP.Wx_lY9E6QIi4duGfH2OyOQHaHX?rs=1&pid=ImgDetMain",
    },
  },
  {
    id: uuid(),
    title: "Wireless Charging Pad",
    description: "Fast wireless charging pad compatible with most smartphones.",
    imageURL:
      "https://www.bhphotovideo.com/images/images2000x2000/naztech_14490_power_pad_qi_certified_1418643.jpg",
    price: "3999",
    colors: ["#000000", "#FFFFFF"],
    category: {
      name: "Computer Accessories",
      imageURL:
        "https://th.bing.com/th/id/OIP.vH256gqdIXyF-CKExUfmaQHaEh?rs=1&pid=ImgDetMain",
    },
  }
];

export const formInputsList: IFormInput[] = [
  {
    id: "title",
    name: "title",
    label: "Product Title",
    type: "text",
  },
  {
    id: "description",
    name: "description",
    label: "Product Description",
    type: "text",
  },
  {
    id: "image",
    name: "imageURL",
    label: "Product Image URL",
    type: "text",
  },
  {
    id: "price",
    name: "price",
    label: "Product Price",
    type: "text",
  },
];

export const colors: string[] = [
  "#FF0000",
  "#0000FF",
  "#008000",
  "#FFFF00",
  "#800080",
  "#FFA500",
  "#00FFFF",
  "#FFC0CB",
  "#A52A2A",
  "#4682B4",
  "#32CD32",
  "#FFD700",
  "#4B0082",
  "#FF6347",
];

export const categories: ICategory[] = [
  {
    id: uuid(),
    imageURL: "https://th.bing.com/th/id/OIP.EwbatycHx_915hcNzd7vRgHaE8?rs=1&pid=ImgDetMain",
    name: "Fitness",
  },
  {
    id: uuid(),
    imageURL: "https://th.bing.com/th/id/OIP.vH256gqdIXyF-CKExUfmaQHaEh?rs=1&pid=ImgDetMain",
    name: "Computer Accessories",
  },
  {
    id: uuid(),
    imageURL: "https://th.bing.com/th/id/OIP.24hPcANHaYdUsQX5QBArygHaHa?rs=1&pid=ImgDetMain",
    name: "Electronics",
  },
];
