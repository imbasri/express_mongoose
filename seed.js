const mongoose = require('mongoose');
const Product = require('./models/product')

mongoose.connect('mongodb://127.0.0.1:27017/shop_db').then((_res) => {
  console.log('connected to db')
}).catch((err) => { console.log(err) })

const seedProducts = [
  {
    "name": "Kemeja Flanel",
    "brand": "Hollister",
    "price": 750000,
    "color": "biru muda",
    "size": "S"
  },
  {
    "name": "Celana Chino",
    "brand": "Levi's",
    "price": 900000,
    "color": "krem",
    "size": "L",
  },
  {
    "name": "Sweater",
    "brand": "Gap",
    "price": 650000,
    "color": "merah muda",
    "size": "M",
  },
  {
    "name": "Sepatu Sneakers",
    "brand": "Nike",
    "price": 1200000,
    "color": "putih",
    "size": "XS",
  },
  {
    "name": "Tas Ransel",
    "brand": "Herschel",
    "price": 1500000,
    "color": "biru",
    "size": "S",
  },
  {
    "name": "Kacamata Aviator",
    "brand": "Ray-Ban",
    "price": 2000000,
    "color": "emas",
    "size": "M",

  },
  {
    "name": "Baju Renang",
    "brand": "Speedo",
    "price": 500000,
    "color": "biru tua",
    "size": "XS",
  },
  {
    "name": "Topi Baseball",
    "brand": "New Era",
    "price": 350000,
    "color": "hitam",
    "size": "L",
  },
  {
    "name": "Rompi",
    "brand": "Zara",
    "price": 850000,
    "color": "abu-abu",
    "size": "XL",
  },
  {
    "name": "Jas",
    "brand": "Hugo Boss",
    "price": 4500000,
    "color": "hitam",
    "size": "M",
  },
  {
    "name": "Sepatu Loafers",
    "brand": "Gucci",
    "price": 8000000,
    "color": "coklat",
    "size": "S",
  }
]

Product.insertMany(seedProducts).then((result) => {
  console.log(result)
}).catch((err) => {
  console.log(err)
})
