import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { Button, CheckBox, Img, Input, List, Slider, Text } from "components";

import LandingPageFooter from "components/LandingPageFooter";
import LandingPageHeader from "components/LandingPageHeader";
import axios from "axios";
import newRequest from "utils/newRequest";
import upload from "utils/upload";

const Signup = () => {
  const navigate = useNavigate();
  const [file, setFile] = useState(null)
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    img: "",
    country: "",
    isSeller: false,
    desc: "",
  })
  
  const handleChange = (e) => {
    setUser(prev => {
      return { ...prev, [e.target.name]: e.target.value }
    })
    console.log(user)
  }

  const handleSubmit = async (e)=>{
    e.preventDefault()

    //const url = await upload(file)
    const url = ""
    try {
      await newRequest.post("/auth/register",{
        ...user,
        img: url
      });
      navigate("/signin")
    } catch (error) {
      console.log(error)
    }

  }

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-markoone sm:gap-10 md:gap-10 gap-[100px] items-center justify-start mx-auto w-auto sm:w-full md:w-full">
        <div className="flex flex-col items-start justify-start w-full">
          <LandingPageHeader className="fixed bg-white-A700 flex gap-2 h-20 md:h-auto items-center justify-between md:px-5 px-[120px] py-[19px] w-full" />
          <div className="mt-16 bg-yellow-50 flex flex-col font-manrope items-start justify-start md:pl-10 sm:pl-5 pl-[120px] py-[50px] w-full">
            <div className="flex md:flex-col flex-row md:gap-10 gap-[100px] items-center justify-start w-full">
              <div className="flex flex-1 flex-col gap-10 items-start justify-start w-full">
                <div className="flex flex-col gap-4 items-start justify-start w-full">
                  <Text
                    className="leading-[140.00%] sm:text-2xl md:text-[32px] text-[32px] text-gray-800 tracking-[-0.92px]"
                    size="txtManropeExtraBold46"
                  >
                    <div className="">
                      Sign up
                    </div>
                  </Text>
                  <Text
                    className="leading-[180.00%] max-w-[610px] md:max-w-full text-gray-700 "
                    size="txtManropeRegular20"
                  >
                    We helps you to find your dream space.
                  </Text>
                </div>
                <div className="bg-white-A700 shadow flex flex-col items-start justify-start p-6 sm:px-5 rounded-[16px] w-full">
                  <div className="flex flex-col gap-[38px] items-center justify-start w-full">

                    <form onSubmit={handleSubmit} className="flex flex-col gap-6 items-start justify-start w-full">
                      <div className="flex flex-col gap-5 items-start justify-start w-full">

                        <input placeholder="Username" name="username" type="text" onChange={handleChange}
                          className="bg-white-A700 p-3 border-gray-300 rounded-xl focus:border-gray-400 font-semibold placeholder:text-gray-600 text-gray-600 text-left  w-full"
                        //wrapClassName="bg-white-A700 border border-bluegray-100 border-solid flex pb-3.5 pt-5 px-4 rounded-[10px] w-full"
                        />
                        <input placeholder="Email" type="email" name="email" onChange={handleChange}
                          className="bg-white-A700 p-3 border-gray-300 rounded-xl focus:border-gray-400 font-semibold placeholder:text-gray-600 text-gray-600 text-left  w-full"
                        //wrapClassName="bg-white-A700 border border-bluegray-100 border-solid flex pb-3.5 pt-5 px-4 rounded-[10px] w-full"
                        />
                        <input placeholder="Password" type="password" name="password" onChange={handleChange}
                          className="bg-white-A700 p-3 border-gray-300 rounded-xl focus:border-gray-400 font-semibold placeholder:text-gray-600 text-gray-600 text-left  w-full"
                        //wrapClassName="bg-white-A700 border border-bluegray-100 border-solid flex pb-3.5 pt-5 px-4 rounded-[10px] w-full"
                        />
                        <input placeholder="Phone" type="text" name="phone" onChange={handleChange}
                          className="bg-white-A700 p-3 border-gray-300 rounded-xl focus:border-gray-400 font-semibold placeholder:text-gray-600 text-gray-600 text-left  w-full"
                        //wrapClassName="bg-white-A700 border border-bluegray-100 border-solid flex pb-3.5 pt-5 px-4 rounded-[10px] w-full"
                        />

                        {/* <input placeholder="Profile Image" type="file" name="file" onChange={e=>setFile(e.target.files[0])}
                          className="bg-white-A700 p-3 border-gray-300 rounded-xl focus:border-gray-400 font-semibold placeholder:text-gray-600 text-gray-600 text-left  w-full"
                        //wrapClassName="bg-white-A700 border border-bluegray-100 border-solid flex pb-3.5 pt-5 px-4 rounded-[10px] w-full"
                        /> */}

                      </div>
                      <div className="flex sm:flex-col flex-row gap-4 items-center justify-center w-full">

                        <Button className="bg-gray-900 cursor-pointer flex-1 font-bold py-3 rounded-[10px] text-center text-white-A700  w-full hover:bg-gray-700">
                          Sign up
                        </Button>

                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-1 flex-col items-center justify-start w-[47%] md:w-full">
                <Img
                  className="h-[503px] md:h-auto object-cover w-full"
                  src="images/img_rectangle20.png"
                  alt="image"
                />
              </div>
            </div>
          </div>
        </div>





        <LandingPageFooter className="bg-white-A700 flex gap-2 items-center justify-center md:px-5 px-[120px] py-20 w-full" />
      </div>
    </>
  );
};

export default Signup;
