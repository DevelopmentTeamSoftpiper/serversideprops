import { createRouter } from 'next-connect';
import { verifyTokenAndAdmin } from '@/helpers/verityToken';
import db from '@/utils/db';
import Category from '@/models/Category';
import slugify from 'slugify';
import Product from '@/models/Products';


const router = createRouter().use(verifyTokenAndAdmin);

router.post(async(req, res)=>{
    try {
        const { title, price,image,originalPrice,shortDescription,
            description,brand,category,subCategory,bestDeal,discountedSale} = req.body;


        db.connectDb();
        const test = await Product.findOne({title});
        if (test) {
          return res
            .status(400)
            .json({ message: "Product already exist, Try a different name" });
        }
        await new Product({ title, slug: slugify(title),price,image,originalPrice,shortDescription,description,brand,
        category,subCategory,bestDeal,discountedSale }).save();
    
        db.disconnectDb();
        res.json({
          message: `Product ${title} has been created successfully.`,
          categories: await Product.find({}).sort({ updatedAt: -1 }),
        });
      } catch (error) {
        db.disconnectDb();
        res.status(500).json({ message: error.message });
      }
})




export default router.handler();