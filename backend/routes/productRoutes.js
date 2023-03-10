const router = require('express').Router();
const Product = require('../models/Product');


//get products;
router.get('/', async(req, res)=> {
  try {
    const sort = {'_id': -1}
    const products = await Product.find().sort(sort);
    res.status(200).json(products);
  } catch (e) {
    res.status(400).send(e.message);
  }
})


//create product
router.post('/', async(req, res)=> {
  try {
    const {name, description, price, category, images: pictures,dealerNo} = req.body;
    const product = await Product.create({name, description, price, category, pictures,dealerNo});
    const products = await Product.find();
    res.status(201).json(products);
  } catch (e) {
    res.status(400).send(e.message);
  }
})

//update product
router.patch('/:id', async(req, res)=> {
  const {id} = req.params;
  try {
    const {name, description, price, category, images: pictures,dealerNo} = req.body;
    const product = await Product.findByIdAndUpdate(id, {name, description, price, category, pictures,dealerNo});
    const products = await Product.find();
    res.status(200).json(products);
  } catch (e) {
    res.status(400).send(e.message);
  }
})


// delete product

router.delete('/:id', async(req, res)=> {
  const {id} = req.params;
  
  try {
   
    await Product.findByIdAndDelete(id);
    const products = await Product.find();
    res.status(200).json(products);
  } catch (e) {
    res.status(400).send(e.message);
  }
})


router.get('/:id', async(req, res)=> {
  const {id} = req.params;
  try {
    const product = await Product.findById(id);
    const similar = await Product.find({category: product.category}).limit(5);
    res.status(200).json({product, similar})
  } catch (e) {
    res.status(400).send(e.message);
  }
});

router.get('/category/:category', async(req,res)=> {
  const {category} = req.params;
  try {
    let products;
    const sort = {'_id': -1}
    if(category == "all"){
      products = await Product.find().sort(sort);
    } else {
      products = await Product.find({category}).sort(sort)
    }
    res.status(200).json(products)
  } catch (e) {
    res.status(400).send(e.message);
  }
})




module.exports = router;