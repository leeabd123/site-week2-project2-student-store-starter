const express = require('express')
const { getProductByID, productList, purchaseOrder, purchaseList, getPurchaseById } = require("../models/Store")
const router = express.Router()



router.get('/store', (req, res) => {
    const products = productList();
    res.send(products);
});
  
router.get('/store/:productId', (req, res) => {
    const product = getProductByID(req.params.productId);
    if (product) {
      res.send({ product });
    } else {
      res.sendStatus(404);
    }
});

router.get('/orders', (req, res) => {
    const purchases = purchaseList();
    res.send(purchases);
});

router.get('/orders/:productId', (req, res) => {
    const purchase = getPurchaseById(req.params.productId);
    if ({purchase}) {
      res.send({ purchase });
    } else {
      res.sendStatus(404);
    }
});

  router.post('/store', (req, res) => {
    const { shoppingCart, user } = req.body;
    try {
        purchaseOrder(shoppingCart, user);
        res.sendStatus(201);
      } catch (error) {
        console.error(error);
        res.sendStatus(400);
      }
    
  });

//   router.post('/order:id', (req, res) => {

//   })


//   router.post('/orders', (req, res) => {

//   })

module.exports = router;

