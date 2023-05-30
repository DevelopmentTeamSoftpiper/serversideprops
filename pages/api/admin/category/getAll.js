import { createRouter } from 'next-connect';
import { verifyTokenAndAdmin } from '@/helpers/verityToken';
import db from '@/utils/db';
import Category from '@/models/Category';
import slugify from 'slugify';


const router = createRouter();

router.get(async(req, res)=>{
    try {
        db.connectDb();
        const categories =await Category.find({}).sort({ updatedAt: -1 });
        db.disconnectDb();
        return res.json({
          categories: categories,
        });
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
})




export default router.handler();