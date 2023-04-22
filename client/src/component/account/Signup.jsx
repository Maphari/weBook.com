import React from "react";
// BOOTSTRAP IMPORTS
import { InputGroup, Form, Col } from "react-bootstrap";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import GoogleLogoImage from "../../assets/google-logo.png";
import SpotifyLogoImage from "../../assets/spotify-logo.png";
import LogoImage from "../../assets/logo.png";

export const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [messageERROR, setMessageERROR] = useState("");
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();
  const userLanguage = navigator.language;

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (!email) {
      setEmailError("Email is required");
    } else if (!email.includes("@")) {
      setEmailError("Enter a valid email address");
    } else {
      setEmailError("");
    }
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (!password) {
      setPasswordError("Password is required");
    } else if (password.length < 8) {
      setPasswordError("password must be at least 8 characters");
    } else {
      setPasswordError("");
    }
  };

  const toastNotificationSuccess = (message) => {
    toast.success(message, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const toastNotificationError = (message) => {
    toast.error(message, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const handleCreateUser = async (e) => {
    try {
      e.preventDefault();
      const res = await axios.post("/api/v1/auth/signup_user", {
        email,
        password,
      });

      if (res.data.exist === true) {
        toastNotificationError("User already exists login");
        navigate("/account/signin");
      } else if (res.data.session) {
        toastNotificationSuccess(res.data.message);
        localStorage.setItem("sessionID", res.data.session);
        navigate("/home", { replace: true });
      } else {
        toastNotificationError(res.data.message);
        navigate("/account/signin", { replace: true });
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setMessageERROR("Invalid username or password");
      } else {
        setMessageERROR(
          "An unexpected error occurred. Please try again later."
        );
      }
    }
  };
  async function handleGoogleLogin() {
    window.open("/api/v1/auth/google", "_self");
    const res = await axios.get("/api/auth/passport_success");
    const clientid = res?.data?.user?.clientID;
    localStorage.setItem("google-token", clientid);
  }

  async function handleSpotifyLogin() {
    window.open("/api/v1/auth/spotify", "_self");
    const res = await axios.get("/api/auth/passport_success");
    const clientid = res?.data?.user?.clientID;
    localStorage.setItem("spotify-token", clientid);
  }

  return (
    <>
      <div className="signup-container">
        <Form
          onSubmit={handleCreateUser}
          className="drop-shadow-2xl rounded was-validated"
        >
          <div className="signup-container__top">
            <div className="mb-3">
              <h1 className="signup-container__top-header">Create account</h1>
              <p className="signup-container__top-para">
                Please provide you details
              </p>
            </div>
            {messageERROR && (
              <p className="text-red-500 mb-1">{messageERROR}</p>
            )}
            <InputGroup as={Col} hasValidation className="mb-3">
              <InputGroup.Text id="basic-addon2" className="rounded-none">
                <i className="fa-solid fa-envelope"></i>
              </InputGroup.Text>
              <Form.Control
                className="rounded-none"
                placeholder="example@gmail.com"
                type="email"
                aria-label="email"
                aria-labelledby="basic-addon2"
                name="email"
                value={email}
                onChange={handleEmailChange}
                isValid={!!emailError}
                isInvalid={emailError && emailError}
                required
              />
              {emailError ? (
                <Form.Control.Feedback type="invalid">
                  {emailError}
                </Form.Control.Feedback>
              ) : (
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              )}
            </InputGroup>
            <InputGroup as={Col} hasValidation>
              <InputGroup.Text id="basic-addon3" className="rounded-none">
                <i className="fa-solid fa-lock"></i>
              </InputGroup.Text>
              <Form.Control
                className="rounded-none"
                placeholder="at least 8 characters"
                type="password"
                aria-label="password"
                aria-labelledby="basic-addon3"
                name="password"
                value={password}
                onChange={handlePasswordChange}
                isValid={!!passwordError}
                isInvalid={passwordError && passwordError}
                required
              />
              {passwordError ? (
                <Form.Control.Feedback type="invalid">
                  {passwordError}
                </Form.Control.Feedback>
              ) : (
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              )}
            </InputGroup>
            <p className="opacity-60 text-sm my-2">
              By creating an account you agree to our{" "}
              <span className="text-sky-600">terms</span> and{" "}
              <span className="text-sky-600">conditions</span>
            </p>

            <button
              type="submit"
              className=" bg-sky-600 text-white mt-1 flex items-center justify-center  gap-2 border p-2 mb-2 hover:cursor-pointer rounded-lg hover:bg-sky-700"
            >
              <i className="fa-solid fa-envelope text-lg"></i>
              <span className="text-md">Continue with email</span>
            </button>
            <div className="mt-2">
              <div className="flex items-center justify-center gap-1 border p-2 mb-2   hover:cursor-pointer rounded-lg hover:bg-gray-200">
                <img src={GoogleLogoImage} alt="google logo" className="w-5" />
                <a onClick={handleGoogleLogin} className="text-md">
                  Continue with google
                </a>
              </div>
              <div className="flex items-center justify-center gap-1 border p-2 mb-2   hover:cursor-pointer rounded-lg hover:bg-gray-200">
                <img src={SpotifyLogoImage} alt="google logo" className="w-7" />
                <a onClick={handleSpotifyLogin} className="text-md">
                  Continue with spotify
                </a>
              </div>
            </div>
            <div className="flex items-center justify-center gap-1 p-2 mb-2">
              <p>Already have an account with us ?</p>
              <Link
                to="/account/signin"
                className="text-md text-sky-500 font-bold"
              >
                login
              </Link>
            </div>
          </div>
        </Form>
        <p className="absolute mb-3 bottom-0 font-[300] text-l flex items-center gap-2">
          <span className="text-sky-600 font-bold">Elite Express Inc.</span>{" "}
          copyright &copy;
          <span>{currentYear}</span> <span>{userLanguage}</span>
        </p>
      </div>
    </>
  );
};
