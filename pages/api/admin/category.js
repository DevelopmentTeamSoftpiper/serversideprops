import { createRouter } from 'next-connect';
import bcrypt from 'bcrypt';
import db from "../../../utils/db";

import jwt from "jsonwebtoken";
import slugify from "slugify";
import Category from '@/models/Category';
import User from '@/models/User';
import { sendEmailWithNodemailer } from '@/helpers/emails';
import { verifyTokenAndAdmin } from '@/helpers/verityToken';


const router = createRouter().use(verifyTokenAndAdmin);

router.get(async(req, res)=>{
    try{
      
        const categories = await Category.find();
        res.status(200).json(categories);

    }catch(error){
        return res.json({
            message: "something went wrong",
          });
    }
})



export default router.handler();