import mongoose from "mongoose";

const { ObjectId } = mongoose.Schema;

const orderSchema = new mongoose.Schema(
  {
    name: { //ok
      type: String,
      trim: true,
      max: 32,
    },
    email: {  //ok
      type: String,
      trim: true,
      lowercase: true,
    },
    address: { //ok
      type: String,
      trim: true,
    },
    city: { //ok
      type: String,
      trim: true,
    },
    country: { //ok
      type: String,
      trim: true,
    },
    post_code: { //ok
      type: String,
      trim: true,
    },
    phone: { //ok
      type: String,
      trim: true,
    },
    user_id_no: { //ok
      type: String,
      trim: true,
    },
    products: [], //ok

    payment_method: { //ok
      type: String,
      required: true,
    },

    shipping_cost: { //ok
      type: String,
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
