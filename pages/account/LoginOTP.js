import { BsFillShieldLockFill } from "react-icons/bs";
import { CgSpinner } from "react-icons/cg";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import {
    signInWithPhoneNumber,
    RecaptchaVerifier
  } from "firebase/auth";
import { auth } from "@/firebase.config";
import { toast, Toaster } from "react-hot-toast";
import { loginSuccess } from "@/store/userSlice";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";

const LoginOTP = () => {

    const [otp, setOtp] = useState("");
    const [ph, setPh] = useState("");
    const [loading, setLoading] = useState(false);
    const [showOTP, setShowOTP] = useState(false);
    const [user, setUser] = useState(null);
    const dispatch = useDispatch();
  
 
    function onCaptchVerify() {
        if (!window.recaptchaVerifier) {
            window.recaptchaVerifier = new RecaptchaVerifier(
              "recaptcha-container",
              {
                size: "invisible",
                callback: (response) => {
                  onSignup();
                },
                "expired-callback": () => {},
              },
              auth
            );
          }
    }

    function onSignup() {
      setLoading(true);
      onCaptchVerify();
      const appVerifier = window.recaptchaVerifier;
  
      const formatPh = "+" + ph;
  
      signInWithPhoneNumber(auth, formatPh, appVerifier)
        .then((confirmationResult) => {
          window.confirmationResult = confirmationResult;
          setLoading(false);
          setShowOTP(true);
          toast.success("OTP sended successfully!");
        })
        .catch((error) => {
          console.log("sign in -->", error);
          setLoading(false);
        });
    }
  
    function onOTPVerify() {
      setLoading(true);
      window.confirmationResult
        .confirm(otp)
        .then(async (res) => {
          setUser(res?.user);
          const  {phoneNumber, accessToken ,uid} = res?.user;
          const firebaseUser = {uid, phoneNumber, accessToken};
          dispatch(loginSuccess(firebaseUser));
          setLoading(false);
        })
        .catch((err) => {
          console.log("Otp===> ", err);
          setLoading(false);
        });
    }

    return (
        <>
    <section className="flex items-center justify-center">
 
      <div>
        <Toaster toastOptions={{ duration: 4000 }} />
        <div id="recaptcha-container"></div>
        {user ? (
          <>
            <h2 className="text-center text-white font-medium text-2xl">
              👍Login Success
            </h2>
          </>
        ) : (

          <div className="w-full flex flex-col gap-4 rounded-lg p-4">
            {showOTP ? (
              <>
                <div className="bg-white text-emerald-500 w-fit mx-auto p-4 rounded-full">
                  <BsFillShieldLockFill size={30} />
                </div>
                <label
                  htmlFor="otp"
                  className="font-bold text-xl text-primary text-center"
                >
                  Enter your OTP
                </label>

                <div className="form-group">
                    <input
                    type="text"
                    name="otp"
                    value={otp}
                    onChange={(e)=> setOtp(e.target.value)}
                    className="form-control"
                    required
                    />
                </div>

                <button
                  onClick={onOTPVerify}
                  className="bg-primary w-full flex gap-1 items-center justify-center py-1 text-white rounded"
                >
                  {loading && (
                    <CgSpinner size={20} className="mt-1 animate-spin" />
                  )}
                  <span>Verify OTP</span>
                </button>
              </>
            ) : (

                <div>
                    <PhoneInput country={"bd"} value={ph} onChange={setPh} />
                    <button
                        onClick={onSignup}
                        className="bg-primary w-full flex gap-1 mt-1 items-center justify-center py-2.5 text-white rounded"
                        >
                        {loading && (
                        <CgSpinner size={20} className="mt-1 animate-spin" />
                        )}
                        <span>Send code via SMS</span>
                    </button>
                    <hr />
                </div>
            )}

          </div>
        )}
      </div>
    </section>
      </>
    )
}

export default LoginOTP;