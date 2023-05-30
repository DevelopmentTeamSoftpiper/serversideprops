import { createRouter } from 'next-connect';
import { verifyTokenAndAdmin } from '@/helpers/verityToken';
import db from '@/utils/db';
import Category from '@/models/Category';
import slugify from 'slugify';


const router = createRouter().use(verifyTokenAndAdmin);

router.post(async(req, res)=>{
    try {
        const { id, name } = req.body;
        db.connectDb();
        await Category.findByIdAndUpdate(id, { name, slug: slugify(name) });
        db.disconnectDb();
        return res.json({
          message: "Category has been updated successfuly",
          categories: await Category.find({}).sort({ createdAt: -1 }),
        });
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
})




export default router.handler();