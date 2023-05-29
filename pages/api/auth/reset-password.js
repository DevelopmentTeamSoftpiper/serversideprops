import { createRouter } from 'next-connect';
import db from "../../../utils/db";
import jwt from "jsonwebtoken";
import User from '@/models/User';
import { sendEmailWithNodemailer } from '@/helpers/emails';
const _ = require('lodash');

const router = createRouter();

router.post(async (req, res) => {
    try {
        const { token, number, password } = req.body;
      if (token) {
        jwt.verify(
          token,
          process.env.JWT_SECRET,
          async function (err, decoded) {
            if (err) {
              console.log("JWT verify account activation error");
              return res.status(401).json({
                error: "Expired link",
              });
            }
            if (decoded) {
                const {email, randomNumber} = jwt.decode(token);
              
              if (number == randomNumber) {
                  const filter = {email:email};
                  const update = { 
                     password:password
                  };
                  db.connectDb();
                  let doc = await User.findOneAndUpdate(filter, update , {new:true});
                  res.status(200).json(doc);

              } else {
                return res.status(401).json({
                  error: "Verification Number is incorrect",
                });
              }
            }
          }
        );
      }
    } catch (error) {
      return res.json({
        message: "something went wrong",
      });
    }
  });




export default router.handler();