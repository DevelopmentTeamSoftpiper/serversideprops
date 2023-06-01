import { createRouter } from 'next-connect';
import { verifyTokenAndAdmin } from '@/helpers/verityToken';
import db from '@/utils/db';
import Product from '@/models/Products';
import applyCors from '@/middleware/cors';


const router = createRouter()

router.post(async(req, res)=>{
  console.log(req.body);
    // try {
    //     const { id } = req.body;
    //     db.connectDb();
    //     const deleted = await Product.findByIdAndRemove(id);
    //     db.disconnectDb();
    //     if(deleted){
    //       return res.json({
    //         message: "Product has been deleted successfully",
    //       });
    //     }else{
    //       return res.json({
    //         message: "Product not found with this id",
    //       });
    //     }
       
    //   } catch (error) {
    //     res.status(500).json({ message: error.message });
    //   }
})




export default applyCors(router.handler());