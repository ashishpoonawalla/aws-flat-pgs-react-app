import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { Button, CheckBox, Img, Input, List, Slider, Text } from "components";

import LandingPageFooter from "components/LandingPageFooter";
import LandingPageHeader from "components/LandingPageHeader";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
    const navigate = useNavigate();

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
                                            Forgot Password
                                        </div>
                                    </Text>
                                    {/* <Text
                                        className="leading-[180.00%] max-w-[610px] md:max-w-full text-gray-700 text-xl"
                                        size="txtManropeRegular20"
                                    >
                                        We helps you to find your dream space.
                                    </Text> */}
                                </div>
                                <div className="bg-white-A700 shadow flex flex-col items-start justify-start p-6 sm:px-5 rounded-[16px] w-full">
                                    <div className="flex flex-col gap-[38px] items-center justify-start w-full">

                                        <div className="flex flex-col gap-6 items-start justify-start w-full">
                                            <div className="flex flex-col gap-5 items-start justify-start w-full">
                                                <Input
                                                    name="textfieldlarge"
                                                    placeholder="Email"

                                                    className="bg-white-A700 font-semibold p-0 placeholder:text-gray-600 text-gray-600 text-left  w-full"
                                                    wrapClassName="bg-white-A700 border border-bluegray-100 border-solid flex pb-3.5 pt-5 px-4 rounded-[10px] w-full"


                                                ></Input>
                                               


                                            </div>
                                            <div className="flex sm:flex-col flex-row gap-4 items-center justify-center w-full">
                                                <Button className="bg-gray-900 cursor-pointer flex-1 font-bold py-3 rounded-[10px] text-center text-white-A700  w-full hover:bg-gray-700">
                                                    Send Email
                                                </Button>
                                              

                                            </div>
                                            <Link to="/signin"
                                                className="leading-[180.00%] max-w-[610px] md:max-w-full text-blue-700 "
                                                size="txtManropeRegular20"
                                            >
                                                Login now
                                            </Link>
                                        </div>
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

export default ForgotPassword;
