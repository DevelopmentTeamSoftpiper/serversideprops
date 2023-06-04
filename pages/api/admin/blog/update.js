import { createRouter } from "next-connect";
import { verifyTokenAndAdmin } from "@/helpers/verityToken";
import db from "@/utils/db";
import slugify from "slugify";
import applyCors from "@/middleware/cors";
import Blog from "@/models/Blog";

const router = createRouter().use(verifyTokenAndAdmin);

router.post(async (req, res) => {
  try {
    const { title, image, author, content, subBlog, id } = req.body;
    db.connectDb();
    const updated = await Blog.findByIdAndUpdate(id, {
      title,
      slug: slugify(title.toString()),
      image,
      author,
      content,
      subBlog,
    });
    db.disconnectDb();
    if (updated) {
      return res.json({
        status: true,
        message: "Blog has been updated successfully",
      });
    } else {
      return res.json({
        status: false,
        message: "Blog not found with this id",
      });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default applyCors(router.handler());
  