import { createRouter } from "next-connect";
import { verifyTokenAndAdmin } from "@/helpers/verityToken";
import db from "@/utils/db";
import SubCategory from "@/models/SubCategory";
import applyCors from "@/middleware/cors";

const router = createRouter().use(verifyTokenAndAdmin);

router.post(async (req, res) => {
  try {
    const { id } = req.body;
    db.connectDb();
    const deleted = await SubCategory.findByIdAndRemove(id);
    db.disconnectDb();
    if (deleted) {
      return res.json({
        message: "SubCategory has been deleted successfully",
      });
    } else {
      return res.json({
        message: "SubCategory not found with this idF",
      });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default applyCors(router.handler());
