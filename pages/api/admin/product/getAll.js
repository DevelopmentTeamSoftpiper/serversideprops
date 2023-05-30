import { createRouter } from 'next-connect';
import { verifyTokenAndAdmin } from '@/helpers/verityToken';
import db from '@/utils/db';
import Category from '@/models/Category';
import slugify from 'slugify';
import Product from '@/models/Products';


const router = createRouter();

router.get(async(req, res)=>{
    try {
        db.connectDb();
        const products =await Product.find({}).sort({ updatedAt: -1 });
        db.disconnectDb();
        return res.json({
          products: products,
        });
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
})




export default router.handler();