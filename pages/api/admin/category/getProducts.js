import { createRouter } from "next-connect";
import db from "@/utils/db";
import Product from "@/models/Products";
import applyCors from "@/middleware/cors";

const router = createRouter();

router.get(async (req, res) => {
  try {
    const { categoryId } = req.query;
    db.connectDb();
    const products = await Product.find({ category: categoryId });
    db.disconnectDb();
    return res.json({
      products: products,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default applyCors(router.handler());