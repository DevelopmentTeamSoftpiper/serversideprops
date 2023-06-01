import { createRouter } from 'next-connect';
import { verifyTokenAndAdmin } from '@/helpers/verityToken';
import db from '@/utils/db';
import slugify from 'slugify';
import SubCategory from '@/models/SubCategory';


const router = createRouter().use(verifyTokenAndAdmin);

router.post(async(req, res)=>{
    try {
        const { id, name, parent } = req.body;
        db.connectDb();
        const updated = await SubCategory.findByIdAndUpdate(id, {
          name,
          parent,
          slug: slugify(name),
        });
        db.disconnectDb();
        if(updated){
          return res.json({
            message: "SubCategory has been updated successfully",

          });
        }else{
          return res.json({
            message: "SubCategory not found with this id",

          });
        }
 
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
})




export default router.handler();