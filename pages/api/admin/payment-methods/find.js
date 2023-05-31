import { createRouter } from 'next-connect';
import { verifyTokenAndAdmin } from '@/helpers/verityToken';
import db from '@/utils/db';
import Product from '@/models/Products';
import PaymentMethods from '@/models/PaymentMethods';


const router = createRouter();

router.get(async(req, res)=>{
    try {
        const { id } = req.body;
        db.connectDb();
        const found = await PaymentMethods.findOne(id);
        db.disconnectDb();
        if(found){
          return res.json({
            message: "Product has been found successfully",
            product: found
          });
        }else{
          return res.json({
            message: "Product not found with this id",
          });
        }
       
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
})




export default router.handler();