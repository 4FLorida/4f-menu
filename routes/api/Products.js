const express = require('express');
const router = express.Router();
const redis = require('../../middleware/redis');
const Product = require('../../models/Product');

// [GET] Fetch from cache until database has change
router.get('/', redis.checkCache, (req, res) => {
  const promise = Product.find({});
  promise
    .then(products =>
      res.json({
        length: products.length,
        success: true,
        from: 'Database',
        products,
      })
    )
    .then(redis.updateCache())
    .catch(() => res.json({ success: false, message: 'Kayıtlı ürün yok' }));
});

// [GET] Fetch products from database and set cache
router.get('/products', (req, res) => {
  const promise = Product.find({});
  promise
    .then(products =>
      res.json({
        length: products.length,
        success: true,
        from: 'Database',
        products,
      })
    )
    .catch(() => res.json({ success: false, message: 'Kayıtlı ürün yok' }));
  promise.then(products => redis.setCache('products', products));
});

// [PUT] Product update by id
router.put('/update/:id', (req, res) => {
  Product.findByIdAndUpdate(
    {
      _id: req.params.id,
    },
    req.body,
    { new: true }
  )
    .then(product => res.json({ success: true, product }))
    .then(redis.updateCache())
    .catch(() => res.json({ success: false, message: 'Ürün güncellenemedi' }));
});

// [POST] Add new product
router.post('/add/', (req, res) => {
  const newProduct = new Product({
    name: req.body.name,
    price: req.body.price,
    info: req.body.info,
    image: req.body.image,
  });
  newProduct
    .save()
    .then(product => res.json({ success: true, product }))
    .then(redis.updateCache())
    .catch(err =>
      res.json({ success: false, message: 'Ürün eklenemedi', err })
    );
});

// [DELETE] Delete product by id
router.delete('/delete/:id', (req, res) => {
  Product.findById(req.params.id)
    .then(product => product.remove().then(res.json({ success: true })))
    .then(redis.updateCache())
    .catch(() => res.json({ success: false, message: 'Ürün silinemedi' }));
});

// [DELETE] Delete multiple product by id
router.delete('/deleteMany/:ids', (req, res) => {
  var deletingProducts = req.params.ids.split(',');
  Product.deleteMany({ _id: { $in: deletingProducts } })
    .then(res.json({ success: true, count: deletingProducts.length }))
    .then(redis.updateCache())
    .catch(err => res.json({ success: false, message: 'Ürünler silinemedi.' }));
});

module.exports = router;
