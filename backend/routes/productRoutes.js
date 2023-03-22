const express = require('express');
// const { route } = require('../app');
const { getAllProducts, createProduct, updateProduct, deleteProduct, getProductDetails  } = require('../controllers/productController');

const router = express.Router();

router.route('/products').get(getAllProducts)

router.route('/product/new').post(createProduct)

router.route('/product/:id').put(updateProduct)

router.route('/delete/:id').delete(deleteProduct)
router.route('/getproduct/:id').get(getProductDetails)


module.exports = router;