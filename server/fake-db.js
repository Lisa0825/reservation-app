const Product = require('./model/product')

class FakeDB {
    constructor(){
        this.products = [
            {
              coverImage: 'phone-cover.jpg',
              name: 'Phone XL',
              price: 799,
              description: 'A large phone with one of the best screens',
              heading1: 'ストレージ',
              heading2: '大画面',
              heading3: 'バッテリー',
              headingtext1: 'サンプルテキスト１',
              headingtext2: 'サンプルテキスト２',
              headingtext3: 'サンプルテキスト３'
            },
            {
              coverImage: 'phone-cover.jpg',
              name: 'Phone Mini',
              price: 699,
              description: 'A great phone with one of the best cameras',
              heading1: 'サイズ',
              heading2: '価格',
              heading3: 'デザイン',
              headingtext1: 'サンプルテキスト１',
              headingtext2: 'サンプルテキスト２',
              headingtext3: 'サンプルテキスト３'
            },
            {
              coverImage: 'phone-cover.jpg',
              name: 'Phone Standard',
              price: 299,
              description: '',
              heading1: 'ラインナップ',
              heading2: 'サポート',
              heading3: '保証',
              headingtext1: 'サンプルテキスト１',
              headingtext2: 'サンプルテキスト２',
              headingtext3: 'サンプルテキスト３'
            },
            {
                coverImage: 'phone-cover.jpg',
                name: 'Phone Special',
                price: 999,
                description: '',
                heading1: 'オプション',
                heading2: 'デュアルSIM',
                heading3: '多機能',
                headingtext1: 'サンプルテキスト１',
                headingtext2: 'サンプルテキスト２',
                headingtext3: 'サンプルテキスト３'
              }
          ]
    }

    pushProductstoDb(){
        this.products.forEach(
            (product) => {
                const newProduct = new Product(product)
                newProduct.save()
            }
        )
    }

    seeDb() {
        this.pushProductstoDb()
    }

    async cleanDb() {
        await Product.deleteMany({})
    }

    async initDb(){
        await this.cleanDb()
        this.pushProductstoDb()
    }
}

module.exports = FakeDB