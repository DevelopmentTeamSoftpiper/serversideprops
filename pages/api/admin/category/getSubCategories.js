import { createRouter } from "next-connect";
import { verifyTokenAndAdmin } from "@/helpers/verityToken";
import db from "@/utils/db";
import applyCors from "@/middleware/cors";
import SubCategory from "@/models/SubCategory";

const router = createRouter();

router.get(async (req, res) => {
  try {
    const { categoryId } = req.query;
    db.connectDb();
    const subcategories = await SubCategory.find({ parent: categoryId });
    db.disconnectDb();
    return res.json({
      subcategories: subcategories,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default applyCors(router.handler());
