const Product = require("../models/productModel");

// Create PRoduct -- Admin

exports.createProduct = async (req, res, next) => {
  const product = await Product.create(req.body);

  res.status(201).json({
    success: true,
    product,
  });
};

// Get All Products

exports.getAllProducts = async (req, res) => {
  const products = await Product.find();

  res.status(200).json({
    success: true,
    products,
  });
};


// Get Producty Detail 

exports.getProductDetails= async(req,res,next)=>{
    
    const product = await Product.findById(req.params.id);

    
  if (!product) {
    return res.status(500).json({
      success: false,
      message: "Product not foound",
    });
  }

  res.status(200).json({
    success: true,
    product,
  });
}





// Update Product -- Admin

exports.updateProduct = async (req, res, next) => {
  let product = await Product.findById(req.params.id);

  if (!product) {
    return res.status(500).json({
      success: false,
      message: "Product not foound",
    });
  }

  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    success: true,
    product,
  });
};

// DELETE PRODUCTS

exports.deleteProduct = async (req, res, next) => {
    console.log("delete ");
//   const product = await Product.findById(req.params.id);

  await Product.deleteOne({ _id: req.params.id }).then((data) => {
    res.status(200).json({
      success: true,
      message: "product Delete Succesfully ",
      data:data
    });
  });


//   if(!product){
//       return res.status(500).json({
//           success:false,
//           message:"PRoduct not Found"
//       })
//   }

//   await product.remove();

//   res.status(200).json({
//     success: true,
//     message: "product Delete Succesfully ",
//   });
};
