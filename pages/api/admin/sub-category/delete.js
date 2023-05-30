import { createRouter } from 'next-connect';
import { verifyTokenAndAdmin } from '@/helpers/verityToken';
import db from '@/utils/db';
import SubCategory from '@/models/SubCategory';


const router = createRouter().use(verifyTokenAndAdmin);

router.post(async(req, res)=>{
    try {
        const { id } = req.body;
        db.connectDb();
        await SubCategory.findByIdAndRemove(id);
        db.disconnectDb();
        return res.json({
          message: "SubCategory has been deleted successfuly",
          subcategories: await SubCategory.find({}).sort({ updatedAt: -1 }),
        });
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
})




export default router.handler();