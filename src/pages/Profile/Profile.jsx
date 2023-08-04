import React from "react";

import { Button, GoogleMap, Img, Input, List, Text } from "components";
import LandingPageCard from "components/LandingPageCard";
import LandingPageFooter from "components/LandingPageFooter";
import LandingPageHeader from "components/LandingPageHeader";

const Profile = () => {
    const landingPageCardPropList = [
        {},
        { image: "images/img_image_1.png" },
        { image: "images/img_image_2.png" },
    ];

    return (
        <>
            <div className="bg-gray-51 flex flex-col font-markoone sm:gap-10 md:gap-10 gap-[100px] items-start justify-start mx-auto w-auto sm:w-full md:w-full">
                <div className="flex flex-col md:gap-10 gap-[60px] items-start justify-start w-full">
                    <div className="flex flex-col gap-10 items-start justify-start w-full">
                        <LandingPageHeader className="bg-white-A700 flex gap-2 h-20 md:h-auto items-center justify-between md:px-5 px-[120px] py-[19px] w-full" />
                        <div className="flex flex-col font-manrope items-center justify-center md:px-10 sm:px-5 px-[120px] w-full">
                            <div className="flex md:flex-col flex-row gap-6 items-center justify-center max-w-[1200px] mx-auto w-full">
                                <div className="flex flex-1 flex-col items-center justify-start w-full">
                                    <div className="flex flex-col gap-10 items-start justify-start w-full">
                                        <div className="flex flex-col gap-6 items-start justify-start w-full">
                                            <Text
                                                className="sm:text-2xl md:text-[26px] text-[28px] text-gray-900 tracking-[-0.56px] w-full"
                                                size="txtManropeExtraBold28"
                                            >
                                                Profile
                                            </Text>
                                            <div className="flex flex-col gap-3 md:h-auto items-start justify-start w-full">
                                                <Input
                                                    name="textfieldlarge"
                                                    placeholder="Your Name"
                                                    className="font-semibold p-0 placeholder:text-gray-600 sm:pr-5 text-gray-600 text-left text-lg w-full"
                                                    wrapClassName="bg-white-A700 border border-bluegray-100 border-solid flex pl-4 pr-[35px] py-[17px] rounded-[10px] w-full"
                                                    type="text"

                                                />
                                               
                                                <Input
                                                    name="textfieldlarge_One"
                                                    placeholder="Phone"
                                                    className="font-semibold p-0 placeholder:text-gray-600 sm:pr-5 text-gray-600 text-left text-lg w-full"
                                                    wrapClassName="bg-white-A700 border border-bluegray-100 border-solid flex pl-4 pr-[35px] py-[17px] rounded-[10px] w-full"
                                                    type="text"

                                                />
                                                
                                              
                                                <div className="bg-white-A700 border border-bluegray-100 border-solid flex flex-col h-[152px] md:h-auto items-start justify-start px-[19px] py-3.5 rounded-[10px] w-full">
                                                    <Text
                                                        className="text-gray-600 text-lg w-auto"
                                                        size="txtManropeSemiBold18Gray600"
                                                    >
                                                        Description
                                                    </Text>
                                                </div>
                                               
                                                
                                                
                                            </div>
                                        </div>
                                        <Button className="bg-gray-900 cursor-pointer font-semibold py-[17px] rounded-[10px] text-base text-center text-white-A700 w-full">
                                            Save Profile
                                        </Button>
                                    </div>
                                </div>
                                <div className="flex sm:flex-1 flex-col gap-6 h-[550px] md:h-auto items-start justify-start w-auto sm:w-full">
                                    <Img
                                        className="h-[263px] sm:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-full pt-20"
                                        src="images/img_rectangle5611.png"
                                        alt="rectangle5611"
                                    />
                                    
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
                <LandingPageFooter className="bg-white-A700 flex gap-2 items-center justify-center md:px-5 px-[120px] py-20 w-full" />
            </div>
        </>
    );
};

export default Profile;
