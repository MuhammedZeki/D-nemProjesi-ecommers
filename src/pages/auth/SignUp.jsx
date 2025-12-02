import { useState } from "react";
import { useForm } from "react-hook-form";
import { CiCircleInfo } from "react-icons/ci";
import { IoMdEye } from "react-icons/io";
import { FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { IoIosArrowBack } from "react-icons/io";
const initialValue = {
  username: "",
  email: "",
  password: "",
};
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX =
  // eslint-disable-next-line no-useless-escape
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const SignUp = () => {
  const [isShow, setIsShow] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    formState: { errors, isSubmitting, isValid },
    handleSubmit,
    reset,
  } = useForm({
    defaultValues: initialValue,
    mode: "onChange",
  });

  const onsubmit = (data) => {
    const isLocal = JSON.parse(localStorage.getItem("users")) || [];

    const isUserExist = isLocal.some((user) => user.email === data.email);
    if (isUserExist) {
      toast.warning("Bu email ile daha önce kayıt yapılmış!");
      return;
    }

    const updatedUsers = [...isLocal, data];

    localStorage.setItem("users", JSON.stringify(updatedUsers));
    toast.success("Kayıt başarılı bir şekilde yapıldı!");

    reset();
    navigate("/signIn");
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
            Name
          </label>
          <input
            {...register("username", {
              required: {
                value: true,
                message: "Lütfen bir ad giriniz",
              },
              minLength: {
                value: 3,
                message: "Lütfen en az 3 karakter giriniz",
              },
              maxLength: {
                value: 50,
                message: "En fazla 50 karakter girebilirsiniz",
              },
            })}
            type="text"
            id="username"
            placeholder="Muhammed Zeki"
            className="text-[#252B42] px-2 py-3 text-sm font-medium tracking-[0.2px] leading-1.4 border-b outline-none border-b-[#DDBA7D] w-full"
          />
          {errors.username && (
            <div className="flex text-[#df3b3b] items-center mt-2 font-inter font-normal text-sm gap-2">
              <CiCircleInfo className="w-6 h-6 text-[#df3b3b]" />
              {errors.username.message}
            </div>
          )}
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
          {isSubmitting ? "Sign Up..." : "Sign Up"}
        </button>
        <div className=" text-right font-medium text-lg leading-6 tracking-[0.2px] text-[#252B42] hover:underline">
          <Link to={"/signIn"}>Already have an account?</Link>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
