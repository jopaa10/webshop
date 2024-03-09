import "./login.scss";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { PageTitle } from "@/components/common/pageTitle/pageTitle";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser, registrationUser } from "@/features/user/userSlice";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { SubmitButton } from "@/components/common/submitButton/submitButton";

function Login() {
  const [isToggled, setIsToggled] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [repeatPassword, setRepeatPassword] = useState<string>("");
  const dispatch = useDispatch();
  const userData = useSelector((state) => state?.userState?.user);
  const router = useRouter();

  const LOGINDATA = [
    {
      icon: <MailOutlineIcon />,
      type: "email",
      id: "email",
      name: "email",
      placeholder: "Email",
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setEmail(e.target.value),
      value: email,
    },
    {
      icon: <LockOutlinedIcon />,
      type: "password",
      id: "password",
      name: "password",
      placeholder: "Password",
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setPassword(e.target.value),
      value: password,
    },
  ];

  const REGISTRATIONDATA = [
    {
      icon: <PersonOutlineOutlinedIcon />,
      type: "name",
      id: "name",
      name: "name",
      placeholder: "name",
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setName(e.target.value),
      value: name,
    },
    {
      icon: <MailOutlineIcon />,
      type: "email",
      id: "email",
      name: "email",
      placeholder: "Email",
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setEmail(e.target.value),
      value: email,
    },
    {
      icon: <LockOutlinedIcon />,
      type: "password",
      id: "password",
      name: "password",
      placeholder: "Password",
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setPassword(e.target.value),
      value: password,
    },
    {
      icon: <LockOutlinedIcon />,
      type: "password",
      id: "password",
      name: "repeat password",
      placeholder: "Repeat password",
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setRepeatPassword(e.target.value),
      value: repeatPassword,
    },
  ];

  const toggleCardInfo = () => {
    setIsToggled(!isToggled);
  };

  const handleSubmitLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email || !password) {
      alert("please fill all fields");
      return null;
    }

    const user = { email, password };

    dispatch(loginUser(user));

    if (userData?.length > 0) {
      return router.push("/");
    }

    setEmail("");
    setPassword("");
  };

  const handleSubmitRegistration = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || !email || !password || !repeatPassword) {
      alert("please fill all fields");
      return null;
    }

    if (password !== repeatPassword) {
      alert("Please enter correct password and repeat it");
      return null;
    }

    const user = { name, email, password };
    dispatch(registrationUser(user));

    return router.push("/");
  };

  return (
    <section className="login-registration-container">
      <div className={`login `}>
        <form
          action=""
          className={`${
            !isToggled
              ? "login--move-login-form-left"
              : "login--move-login-form-right"
          }`}
          onSubmit={handleSubmitLogin}
        >
          <PageTitle text="sign in to mobile webshop" />
          {LOGINDATA.map((item, index) => {
            return (
              <div className="input" key={index}>
                <span>{item.icon}</span>
                <input
                  type={item.type}
                  id={item.id}
                  name={item.name}
                  placeholder={item.name}
                  onChange={item.onChange}
                  value={item.value}
                />
              </div>
            );
          })}
          <SubmitButton />
        </form>
        <div
          className={`log-text ${
            !isToggled
              ? "log-text--move-text-left"
              : "log-text--move-text-right"
          }`}
        >
          <h3 className={"title"}>hello, friend!</h3>
          <p className={"details"}> please registrate to shop with us</p>
        </div>
      </div>

      <div className="registration">
        <form
          action=""
          className={`${
            !isToggled
              ? "registration--move-reg-form-left"
              : "registration--move-reg-form-right"
          }`}
          onSubmit={handleSubmitRegistration}
        >
          <PageTitle text="sign in to mobile webshop" />
          {REGISTRATIONDATA.map((item, index) => {
            return (
              <div className="input" key={index}>
                <span>{item.icon}</span>
                <input
                  type={item.type}
                  id={item.id}
                  name={item.name}
                  placeholder={item.name}
                  value={item.value}
                  onChange={item.onChange}
                />
              </div>
            );
          })}
          <SubmitButton />
        </form>

        <div
          className={`reg-text ${
            !isToggled
              ? "reg-text--move-text-left"
              : "reg-text--move-text-right"
          }`}
        >
          <h3 className={"title"}>hello, friend!</h3>
          <p className={"details"}>
            enter your personal details and shop with us
          </p>
        </div>
      </div>

      <div
        className={`log-reg-layout ${
          isToggled
            ? "log-reg-layout--toggle-card"
            : "log-reg-layout--toggle-card-right"
        }`}
      >
        <button
          className={`button ${
            isToggled ? "button--scale-left" : "button--scale-right"
          }`}
          onClick={() => toggleCardInfo()}
        >
          {!isToggled ? "sign up" : "sign in"}
        </button>
      </div>
    </section>
  );
}

export default Login;
