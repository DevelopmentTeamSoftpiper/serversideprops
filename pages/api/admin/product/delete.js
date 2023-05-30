import { createRouter } from 'next-connect';
import { verifyTokenAndAdmin } from '@/helpers/verityToken';
import db from '@/utils/db';
import Product from '@/models/Products';


const router = createRouter().use(verifyTokenAndAdmin);

router.post(async(req, res)=>{
    try {
        const { id } = req.body;
        db.connectDb();
        await Product.findByIdAndRemove(id);
        db.disconnectDb();
        return res.json({
          message: "Product has been deleted successfully",
          products: await Product.find({}).sort({ updatedAt: -1 }),
        });
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
})




export default router.handler();