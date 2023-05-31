import { createRouter } from 'next-connect';
import { verifyTokenAndAdmin } from '@/helpers/verityToken';
import db from '@/utils/db';
import PaymentMethods from '@/models/PaymentMethods';


const router = createRouter();

router.get(async(req, res)=>{
    try {
        db.connectDb();
        const paymentMethods =await PaymentMethods.find({}).sort({ updatedAt: -1 });
        db.disconnectDb();
        return res.json({
            paymentMethods: paymentMethods,
        });
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
})




export default router.handler();