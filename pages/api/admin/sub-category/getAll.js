import { createRouter } from 'next-connect';
import db from '@/utils/db';
import SubCategory from '@/models/SubCategory';


const router = createRouter();

router.get(async(req, res)=>{
    try {
        db.connectDb();
        const subcategories =await SubCategory.find({}).sort({ updatedAt: -1 });
        db.disconnectDb();
        return res.json({
          subcategories: subcategories,
        });
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
})




export default router.handler();