const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: {
    type: String,
    require: [true, "Please enter Product Name"],
  },
  description: {
    type: String,
    require: [true, "Please enter Product description"],
  },
  price: {
    type: Number,
    require: [true, "Please enter Product Price"],
    maxLength: [8, "Price cannot Exceed 8 characters"],
  },
  rating: {
    type: Number,
    default: 0,
  },
  images: [
    {
      public_id: {
        type: String,
        require: true,
      },
      url: {
        type: String,
        require: true,
      },
    },
  ],
  category: {
    type: String,
    require: [true, "Please enter Product category"],
  },
  Stock: {
    type: Number,
    require: [true, "Please enter Product Stock"],
    maxLength: [4, "Stock cannot exceed 4 characters"],
    default:1
  },
  numOfReviews: {
    type: String,
    default: 0,
  },
  reviews: [
    {
      name: {
        type: String,
        require: true,
      },
      rating: {
        type: Number,
        require: true,
      },
      comment: {
        type: String,
        require: true,
      }
    }
  ],
  createdAt:{
      type:Date,
      default:Date.now
  }
});


module.exports = mongoose.model("Product",productSchema);
