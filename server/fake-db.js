const Product = require('./model/product')

class FakeDb {
  constructor(){
    this.products = [
      {
        coverImage: './assets/img/phone-cover.jpg',
        name: 'Phone XL',
        price: 799,
        description: 'A large phone with one of the best screens',
        head1: 'header1:PhoneXL',
        head2: 'header2:PhoneXL',
        head3: 'header3:PhoneXL',
      },
      {
        coverImage: './assets/img/phone-cover.jpg',
        name: 'Phone Mini',
        price: 699,
        description: 'A great phone with one of the best cameras',
        head1: 'header1:PhoneMini',
        head2: 'header2:PhoneMini',
        head3: 'header3:PhoneMini',
      },
      {
        coverImage: './assets/img/phone-cover.jpg',
        name: 'Phone Standard',
        price: 299,
        description: '',
        head1: 'header1:PhoneSta',
        head2: 'header2:PhoneSta',
        head3: 'header3:PhoneSta',
      },
      {
        coverImage: './assets/img/phone-cover.jpg',
        name: 'Phone Special',
        price: 999,
        description: 'special',
        head1: 'header1:PhoneSP',
        head2: 'header2:PhoneSP',
        head3: 'header3:PhoneSP',
      }
    ]
  }

  async initDb(){
    await this.cleanDb()
    this.pushProductsToDb()
  }

  //DBを起動するたびにデータが追加されるため、すでにあるデータを削除してから追加のプログラムを実行する
  async cleanDb(){
    //awaitはこのプログラムが終了するまで次のプログラムを実行しないことを示す
    await Product.deleteMany({})
  }

  pushProductsToDb(){
    this.products.forEach(
      (product) => {
        const newProduct = new Product(product)
        newProduct.save()
      }
    )
  }
  seeDb(){
    this.pushProductsToDb()
  }
}

module.exports = FakeDb