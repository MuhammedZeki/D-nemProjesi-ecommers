import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { CiCircleInfo } from "react-icons/ci";
import { IoIosArrowBack, IoMdEye } from "react-icons/io";
import { FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const initialValue = {
  email: "",
  password: "",
};
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX =
  // eslint-disable-next-line no-useless-escape
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const SignIn = () => {
  const [isShow, setIsShow] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const {
    register,
    formState: { errors, isSubmitting, isValid },
    handleSubmit,
    setValue,
  } = useForm({
    defaultValues: initialValue,
    mode: "onChange",
  });

  useEffect(() => {
    const rememberData = JSON.parse(localStorage.getItem("rememberUser"));
    if (rememberData) {
      setValue("email", rememberData.email);
      setValue("password", rememberData.password);
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setRememberMe(true);
    }
  }, [setValue]);

  const onsubmit = (data) => {
    const isLocal = JSON.parse(localStorage.getItem("users")) || [];

    const foundUser = isLocal.find(
      (user) => user.email === data.email && user.password === data.password
    );

    if (!foundUser) {
      toast.error("Email veya şifre hatalı!");
      return;
    }

    localStorage.setItem("loggedInUser", foundUser.username);

    if (rememberMe) {
      localStorage.setItem(
        "rememberUser",
        JSON.stringify({ email: data.email, password: data.password })
      );
    } else {
      localStorage.removeItem("rememberUser");
    }
    toast.success("Giriş başarılı!");
    const redirectPath = location.state?.from || "/";
    navigate(redirectPath, { replace: true });
  };
  return (
    <div className="bg-[#FCF6D9] flex items-center justify-center h-screen">
      <form
        onSubmit={handleSubmit(onsubmit)}
        className="border lg:w-1/3 w-full mx-2 border-[#fff5e0] bg-[#FAFAFA] rounded-lg shadow-[0px_2px_4px_rgba(0,0,0,0.1)] flex flex-col gap-6 font-montserrat px-10 py-15 relative"
      >
        <div
          onClick={() => navigate("/")}
          className="absolute top-6 left-3 flex items-center justify-between font-bold tracking-[0.2px] leading-6 text-[#CF4B00] hover:border-b hover:border-b-[#CF4B00] cursor-pointer"
        >
          <IoIosArrowBack className="w-6 h-6" /> Go Home
        </div>
        <div className="flex flex-col gap-10 items-center">
          <img src="/vite.svg" className="h-40 w-40" />
          <h1 className="font-bold text-4xl leading-6 tracking-[0.2px] text-[#CF4B00]">
            Bandage
          </h1>
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="username"
            className="font-medium text-xl leading-6 tracking-[0.1px] text-[#CF4B00]"
          >
            Email
          </label>
          <input
            {...register("email", {
              required: {
                value: true,
                message: "Lütfen bir email adres giriniz",
              },
              pattern: {
                value: EMAIL_REGEX,
                message: "Lütfen geçerli bir email adresi giriniz",
              },
            })}
            type="text"
            id="email"
            placeholder="muhammed@gmail.com"
            className="text-[#252B42] px-2 py-3 text-sm font-medium tracking-[0.2px] leading-1.4 border-b outline-none border-b-[#DDBA7D] w-full"
          />
          {errors.email && (
            <div className="flex text-[#df3b3b] items-center mt-2 font-inter font-normal text-sm gap-2">
              <CiCircleInfo className="w-6 h-6 text-[#df3b3b]" />
              {errors.email.message}
            </div>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="password"
            className="font-medium text-xl leading-6 tracking-[0.1px] text-[#CF4B00] relative"
          >
            Password
            <input
              {...register("password", {
                required: {
                  value: true,
                  message: "Lütfen şifrenizi giriniz!",
                },
                pattern: {
                  value: PWD_REGEX,
                  message:
                    "Şifreniz 8-24 karakter uzunluğunda olmalı ve en az 1 harf, 1 rakam ve 1 özel karakter içermelidir!",
                },
              })}
              type={`${isShow ? "text" : "password"}`}
              id="password"
              placeholder="********"
              className="text-[#252B42] px-2 py-3 text-sm font-medium tracking-[0.2px] leading-1.4 border-b outline-none border-b-[#DDBA7D] w-full"
            />
            {errors.password && (
              <div className="flex text-[#df3b3b] items-center mt-2 font-inter font-normal text-sm gap-2">
                <CiCircleInfo className="w-6 h-6 text-[#df3b3b]" />
                {errors.password.message}
              </div>
            )}
            <div className="text-[#717784] absolute top-8 right-4 bg-[url(/images/icon-show-password.svg)] bg-cover bg-no-repeat cursor-pointer">
              {isShow ? (
                <IoMdEye
                  className="w-6 h-6 text-[#717784]"
                  onClick={() => setIsShow(!isShow)}
                />
              ) : (
                <FaEyeSlash
                  className="w-6 h-6 text-[#717784]"
                  onClick={() => setIsShow(!isShow)}
                />
              )}
            </div>
          </label>
        </div>
        <button
          type="submit"
          className={`${
            isValid
              ? "bg-[#CF4B00] cursor-pointer"
              : "bg-[#ebce91] cursor-not-allowed"
          } py-5 px-8 rounded-lg text-xl text-white font-bold leading-5 tracking-[0.2px]`}
        >
          {isSubmitting ? "Signing In..." : "Sign In"}
        </button>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 ">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
              className="w-4 h-4 cursor-pointer"
            />
            <span className="text-[#252B42] font-medium text-md leading-6 tracking-[0.2px]">
              Remember Me
            </span>
          </div>
          <div className=" text-right font-medium text-lg leading-6 tracking-[0.2px] text-[#252B42] hover:underline">
            <Link to={"/signUp"}>No account yet?</Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
