import React, { useState } from "react";

import { Button, GoogleMap, Img, Input, List, Text } from "components";
import LandingPageCard from "components/LandingPageCard";
import LandingPageFooter from "components/LandingPageFooter";
import LandingPageHeader from "components/LandingPageHeader";
import newRequest from "utils/newRequest";

const NewPost = () => {

  const [title, setTitle] = useState("")
  const [price, setPrice] = useState("")
  const [cat, setCat] = useState("")
  const [location, setLocation] = useState("")
  const [city, setCity] = useState("")
  const [details, setDetails] = useState("")

  console.log(title, price, cat, location, city, details)
  const handleSave = async () => {
    try {
      const res = await newRequest.post("/gigs", {
        title,
        price,
        cat,
        location,
        city,
        desc: details,
      })
      console.log("Success")
    } catch (error) {
      console.log("Error")
    }
    

  }

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
                        New post
                      </Text>
                      <div className="flex flex-col gap-3 md:h-auto items-start justify-start w-full">

                        <input placeholder="Post Title" name="title" type="text" onChange={e => setTitle(e.target.value)}
                          className="bg-white-A700 p-4 border-gray-300 rounded-xl focus:border-gray-400 font-semibold placeholder:text-gray-600 text-gray-600 text-left  w-full"
                        />
                        <input placeholder="Amount" name="amount" type="number" onChange={e => setPrice(e.target.value)}
                          className="bg-white-A700 p-4 border-gray-300 rounded-xl focus:border-gray-400 font-semibold placeholder:text-gray-600 text-gray-600 text-left  w-full"
                        />
                        <div className="flex">
                          <div class="flex items-center pl-4  rounded dark:border-gray-700">
                            <input onClick={e => setCat("FlatMate")} id="bordered-radio-1" type="radio" value="" name="bordered-radio" class="w-4 h-4 text-blue-400   focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label for="bordered-radio-1" class="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Flate Mate</label>
                          </div>
                          <div class="flex items-center pl-4  rounded dark:border-gray-700">
                            <input onClick={e => setCat("PGs")} id="bordered-radio-2" type="radio" value="" name="bordered-radio" class="w-4 h-4 text-blue-400   focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label for="bordered-radio-2" class="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">PGs</label>
                          </div>
                          <div class="flex items-center pl-4  rounded dark:border-gray-700">
                            <input onClick={e => setCat("Flat")} id="bordered-radio-3" type="radio" value="" name="bordered-radio" class="w-4 h-4 text-blue-400   focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label for="bordered-radio-3" class="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Flat</label>
                          </div>
                        </div>
                        <input placeholder="Location" name="location" type="text" onChange={e => setLocation(e.target.value)}
                          className="bg-white-A700 p-4 border-gray-300 rounded-xl focus:border-gray-400 font-semibold placeholder:text-gray-600 text-gray-600 text-left  w-full"
                        />
                        <select id="countries" onChange={e => setCity(e.target.value)}
                          class="bg-white-A700 p-4 border-gray-300 rounded-xl focus:border-gray-400 font-semibold placeholder:text-gray-600 text-gray-600 text-left  w-full">
                          <option selected>Choose a City</option>
                          <option value="Pune">Pune</option>
                          <option value="Mumbai">Mumbai</option>
                          <option value="Delhi">Delhi</option>
                          <option value="Bengaluru">Bengaluru</option>
                          <option value="Chennai">Chennai</option>
                        </select>

                        {/* <div className="flex gap-6 flex-wrap">
                          <label class="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" class="sr-only peer" />
                            <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-500 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-300"></div>
                            <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Lift</span>
                          </label>
                          <label class="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" class="sr-only peer" />
                            <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-500 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-300"></div>
                            <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">AC</span>
                          </label>
                          <label class="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" class="sr-only peer" />
                            <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-500 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-300"></div>
                            <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Wifi</span>
                          </label>
                          <label class="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" class="sr-only peer" />
                            <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-500 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-300"></div>
                            <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">TV</span>
                          </label>
                          <label class="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" class="sr-only peer" />
                            <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-500 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-300"></div>
                            <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Parking</span>
                          </label>
                        </div> */}

                        <textarea placeholder="Details" name="details" onChange={e => setDetails(e.target.value)}
                          className="bg-white-A700 p-4 border-gray-300 rounded-xl focus:border-gray-400 font-semibold placeholder:text-gray-600 text-gray-600 text-left h-[200px] w-full"
                        >
                        </textarea>

                        {/* <div className="flex gap-4">
                                                    <label class="relative inline-flex items-center cursor-pointer">
                                                        <input type="checkbox" value="" class="sr-only peer" />
                                                        <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-500 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-300"></div>
                                                        <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Now Owl</span>
                                                    </label>
                                                    <label class="relative inline-flex items-center cursor-pointer">
                                                        <input type="checkbox" value="" class="sr-only peer" />
                                                        <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-500 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-300"></div>
                                                        <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Studious</span>
                                                    </label>
                                                    <label class="relative inline-flex items-center cursor-pointer">
                                                        <input type="checkbox" value="" class="sr-only peer" />
                                                        <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-500 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-300"></div>
                                                        <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Fitness</span>
                                                    </label>
                                                    <label class="relative inline-flex items-center cursor-pointer">
                                                        <input type="checkbox" value="" class="sr-only peer" />
                                                        <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-500 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-300"></div>
                                                        <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">No Smoker</span>
                                                    </label>
                                                </div> */}

                      </div>
                    </div>
                    <Button onClick={handleSave} className="bg-gray-900 cursor-pointer font-semibold py-[17px] rounded-[10px] text-base text-center text-white-A700 w-full">
                      Save Post
                    </Button>
                  </div>
                </div>
                <div className="flex sm:flex-1 flex-col gap-6 h-[550px] md:h-auto items-start justify-start w-auto sm:w-full">
                  <Img
                    className="h-[263px] sm:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-full"
                    src="images/img_rectangle5611.png"
                    alt="rectangle5611"
                  />
                  <div className="h-[263px] relative w-96 sm:w-full">
                    <Img
                      className="h-[263px] m-auto object-cover rounded-[10px] w-full"
                      src="images/img_rectangle5612.png"
                      alt="rectangle5612"
                    />
                    <Button
                      className="bg-white-A700 bottom-[0] cursor-pointer flex items-center justify-center min-w-[122px] px-4 py-[9px] right-[0] rounded-[10px]"
                      leftIcon={
                        <Img
                          className="h-6 mb-px mr-1.5 bottom-[0] right-[2%] absolute"
                          src="images/img_mail.svg"
                          alt="mail"
                        />
                      }
                    >

                    </Button>
                  </div>
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

export default NewPost;
