import { useContext, useState } from "react";
import OTPInput from "react-otp-input";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider";

const Phone = () => {
  const navigate = useNavigate();
  const [ph, setPh] = useState("");
  const [otp, setOtp] = useState("");
  const [expandToOtp, setExpandToOtp] = useState(false);
  const [confirmObj, setConfirmObj] = useState("");
  const [error, setError] = useState("");

  const { captchaVerifier } = useContext(AuthContext);

  const getNumber = async (event) => {
    event.preventDefault();
    const phoneNumber = `+${ph}`;
    console.log(phoneNumber);
    if (phoneNumber.length < 11) {
      setExpandToOtp(false);
      setError("Please enter a valid number");
    } else {
      try {
        const res = await captchaVerifier(phoneNumber);
        console.log(res);
        setConfirmObj(res);
        setError("");
        setExpandToOtp(true);
      } catch (error) {
        console.log(error);
        setError(error.message);
        setExpandToOtp(false);
      }
    }
  };

  const getOtp = async (event) => {
    event.preventDefault();
    //     console.log(otp);
    if (otp == null || otp == "") {
      setError("Please provide the OTP");
    } else {
      try {
        await confirmObj.confirm(otp);
        setError("");
        navigate("/");
      } catch (err) {
        setError(err.message);
      }
    }
  };

  const phoneInputStyles = {
    width: "25%",
    margin: "0 auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "1.5rem",
  };

  return (
    <div className="bg-gradient-to-r from-blue-500 to-cyan-500 py-5">
      {expandToOtp ? (
        <>
          <h3 className="text-center">Please enter the OTP</h3>

          <div className="form-control my-3">
            <div className="flex justify-center">
              <OTPInput
                className="otp-input"
                value={otp}
                onChange={(value) => setOtp(value)}
                numInputs={6}
                renderSeparator={<span>-</span>}
                renderInput={(props) => (
                  <input
                    {...props}
                    style={{
                      border: "2px solid blue",
                      width: "2rem",
                      height: "2rem",
                      fontSize: "1.5rem",
                      textAlign: "center",
                    }}
                  />
                )}
              />
            </div>
          </div>
          <div className="text-center mt-2">
            <div className="btn btn-primary" onClick={getOtp}>
              Submit
            </div>
          </div>
        </>
      ) : (
        <>
          <h3 className="text-center">Sign Up with Phone</h3>

          <div>{error ? alert(error) : ""}</div>
          <div style={phoneInputStyles}>
            <PhoneInput
              country={"bd"}
              value={ph}
              onChange={(value) => setPh(value)}
              inputStyle={{
                width: "100%",
                height: "100%",
                fontSize: "1.5rem",
                padding: "5px",
                textAlign: "center",
              }}
            />
          </div>

          <div id="recaptcha-container" />

          <div className="text-center mt-2">
            <div className="btn btn-primary" onClick={getNumber}>
              Send OTP
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Phone;
