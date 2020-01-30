const express = require('express');
const router = express.Router();
const redis = require('redis');
const Category = require('../../models/Category');

// [GET] Fetch from cache until database has change
router.get('/', redis.checkCache, (req, res) => {
  const promise = Category.find({});
  promise
    .then(categories =>
      res.json({
        length: Category.length,
        success: true,
        from: 'Database',
        categories,
      })
    )
    .then(redis.updateCache())
    .catch(() => res.json({ success: false, message: 'Kayıtlı kategori yok' }));
});

// [GET] Fetch categories from database and set cache
router.get('/categories', (req, res) => {
  const promise = Category.find({});
  promise
    .then(categories =>
      res.json({
        length: categories.length,
        success: true,
        from: 'Database',
        categories,
      })
    )
    .catch(() => res.json({ success: false, message: 'Kayıtlı kategori yok' }));
  promise.then(categories => redis.setCache('categories', categories));
});

// [PUT] Update category by id
router.put('/update/:id', (req, res) => {
  Category.findByIdAndUpdate(
    {
      _id: req.params.id,
    },
    req.body,
    { new: true }
  )
    .then(category => res.json({ success: true, category }))
    .then(redis.updateCache())
    .catch(() =>
      res.json({ success: false, message: 'Kategori güncellenemedi' })
    );
});

// [POST] Add new category
router.post('/add/', (req, res) => {
  const newCategory = new Category({
    name: req.body.name,
    products: req.body.products,
    image: req.body.image,
  });
  newCategory
    .save()
    .then(category => res.json({ success: true, category }))
    .then(redis.updateCache())
    .catch(() => res.json({ success: false, message: 'Kategori eklenemedi' }));
});

// [DELETE] Delete category by id
router.delete('/delete/:id', (req, res) => {
  Category.findById(req.params.id)
    .then(category => category.remove().then(res.json({ success: true })))
    .then(redis.updateCache())
    .catch(() => res.json({ success: false, message: 'Kategori silinemedi' }));
});

module.exports = router;
