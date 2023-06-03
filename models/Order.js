import mongoose from "mongoose";

const { ObjectId } = mongoose.Schema;

const orderSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      max: 32
  },
  email: {
      type: String,
      trim: true,
      lowercase: true
  },
  address: {
      type: String,
      trim: true,
      
  },
  city: {
      type: String,
      trim: true,
  
  },
  country: {
      type: String,
      trim: true,
  
  },
  post_code: {
      type: String,
      trim: true,
  },
  phone: {
      type: String,
      trim: true,
  },
  user_id_no: {
      type: String,
      trim: true,
  },
    products: [ ],
  
    paymentMethod: {
      type: String,
      required:true
    },


    shipping_cost: {
      type: string,
      required: true,
      default: 0,
    },
    isPaid: {
      type: Boolean,
      required: true,
      default: false,
    },
    status: {
      type: String,
      default: "Not Processed",
      enum: [
        "Not Processed",
        "Processing",
        "Dispatched",
        "Cancelled",
        "Completed",
      ],
    },

  },
  {
    timestamps: true,
  }
);

const Order = mongoose.models.Order || mongoose.model("Order", orderSchema);

export default Order;