import { createRouter } from "next-connect";
import { verifyToken, verifyTokenAndAdmin, verifyTokenAndAuthorization } from "@/helpers/verityToken";
import db from "@/utils/db";
import Category from "@/models/Category";
import slugify from "slugify";
import applyCors from "@/middleware/cors";
import User from "@/models/User";

const router = createRouter().use(verifyToken).use(verifyTokenAndAuthorization);

router.post(async (req, res) => {
  try {
    const { id , password} = req.body;
    db.connectDb();
    const updated = await User.findByIdAndUpdate(id, {
        password :password
    });
    db.disconnectDb();
    if (updated) {
      return res.json({
        status: true,
        message: "Password updated successfully",
      });
    } else {
      return res.json({
        status: false,
        message: "Something went wrong",
      });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default applyCors(router.handler());
