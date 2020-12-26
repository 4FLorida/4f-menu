const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const apiKey = require('../../config/keys').apiKEY;
const bcrypt = require('bcryptjs');
const verifyToken = require('../../middleware/token');
const salt = 12;
const Administrator = require('../../models/Administrator');

// [GET] All Administrators
router.get('/', (req, res) => {
  const promise = Administrator.find({});
  promise.then(administrators => {
    administrators.length > 0
      ? res.json({ success: true, data: administrators })
      : res.json({ success: false, message: 'Hiçbir kullanıcı bulunamadı.' });
  });
});

// [GET] Get administrator by id
router.get('/:id', (req, res) => {
  const promise = Administrator.findById({ _id: req.params.id });
  promise
    .then(administrator => {
      res.json({ success: true, data: administrator });
    })
    .catch(() => {
      res.json({ success: false, message: 'Böyle bir kullanıcı bulunamadı.' });
    });
});

// [DELETE] Delete administrator
router.delete('/:id', (req, res) => {
  Administrator.findById(req.params.id).then(administrator =>
    administrator
      .remove()
      .then(() => res.json({ success: true, message: 'Kullanıcı silindi.' }))
      .catch(() =>
        res.json({ success: false, message: 'Kullanıcı silinemedi.' })
      )
  );
});

// [POST] Administrator Register
router.post('/register', (req, res) => {
  const newAdministrator = new Administrator({
    email: req.body.email,
    password: req.body.password,
    companyName: req.body.companyName,
    companyLogo: req.body.logoPath, // BURAYA BAK
    companyAddress: req.body.address,
    adminName: req.body.name,
    adminSurname: req.body.surname,
    adminPhone: req.body.phone,
  });

  bcrypt.hash(newAdministrator.password, salt, (err, hash) => {
    if (err) res.json({ success: false });
    newAdministrator.password = hash;
    newAdministrator
      .save()
      .then(administrator => res.json({ success: true, data: administrator }))
      .catch((err) => {
        res.json({ errMsg: err.message, success: false, message: 'Kullanıcı zaten kayıtlı.' });
      });
  });
});

// [POST] Administrator Login
router.post('/login', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  Administrator.findOne({ email }).then(administrator => {
    if (!administrator) {
      res.json({ success: false, message: 'Kullanıcı bulunamadı.' });
    }
    bcrypt.compare(password, administrator.password).then(isMatch => {
      if (isMatch) {
        const payload = { id: administrator._id, email: administrator.email };
        jwt.sign(payload, apiKey, { expiresIn: '12h' }, (err, token) => {
          res.json({ success: true, token: 'Bearer ' + token });
        });
      } else {
        res.json({ success: false, message: 'Hatalı şifre.' });
      }
    });
  });
});

// [POST] Authentication
router.post('/authentication', verifyToken, (req, res) => {
  jwt.verify(req.token, apiKey, (err, authData) => {
    if (err) {
      res.json(err);
    } else {
      res.json({ success: true, data: authData });
    }
  });
});

module.exports = router;
