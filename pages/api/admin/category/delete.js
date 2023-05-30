import { createRouter } from 'next-connect';
import { verifyTokenAndAdmin } from '@/helpers/verityToken';
import db from '@/utils/db';
import Category from '@/models/Category';
import slugify from 'slugify';


const router = createRouter().use(verifyTokenAndAdmin);

router.post(async(req, res)=>{
    try {
        const { id } = req.body;
        db.connectDb();
        await Category.findByIdAndRemove(id);
        db.disconnectDb();
        return res.json({
          message: "Category has been deleted successfuly",
          categories: await Category.find({}).sort({ updatedAt: -1 }),
        });
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
})




export default router.handler();