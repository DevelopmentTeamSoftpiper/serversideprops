import { createRouter } from "next-connect";
import { verifyTokenAndAdmin } from "@/helpers/verityToken";
import db from "@/utils/db";

import slugify from "slugify";
import Product from "@/models/Products";
import applyCors from "@/middleware/cors";

const router = createRouter();

router.post(async (req, res) => {
  try {
    const {
      id,
      title,
      price,
      image,
      originalPrice,
      shortDescription,
      description,
      brand,
      category,
      subCategory,
      bestDeal,
      discountedSale,
    } = req.body;

    db.connectDb();

    const updated = await Product.findByIdAndUpdate(id, {
      title,
      slug: slugify(title),
      price,
      image,
      originalPrice,
      shortDescription,
      description,
      brand,
      category,
      subCategory,
      bestDeal,
      discountedSale,
    });
    db.disconnectDb();
    if (updated) {
      return res.json({
        status: true,
        message: "Product has been updated successfully",
      });
    } else {
      return res.json({
        status: false,
        message: "Product not found with this id",
      });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default applyCors(router.handler());
