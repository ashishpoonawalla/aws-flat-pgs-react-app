import React, { useState, useEffect } from "react";

import {
  Button,
  GoogleMap,
  Img,
  Input,
  List,
  SelectBox,
  Text,
} from "components";
import LandingPageCard from "components/LandingPageCard";
import LandingPageFooter from "components/LandingPageFooter";
import LandingPageHeader from "components/LandingPageHeader";
import newRequest from "utils/newRequest";



const ListingPage = () => {
  // ---- get parameters from URLs
  const [Att, setAtt] = useState(true)

  const queryParameters = new URLSearchParams(window.location.search)
  var city1 = queryParameters.get("city")
  var cat1 = queryParameters.get("type")

  if (Att) {   
    if (city1 == null) city1 = "All City"
    if (cat1 == null) cat1 = "Prefer All"

    console.log("AA ---- ", cat1, city1)
  }else{
    city1 = "All City"
    cat1 = "Prefer All"
  }
  
  const [postlist, setPostlist] = useState([])
  const [count, setCount] = useState(12)

  const [location, setlocation] = useState("")
  const [cat, setcat] = useState(cat1)
  const [city, setcity] = useState(city1)
  const [price, setprice] = useState("Any Budget")

  useEffect(() => {
    setAtt(false)
    const loadList = async () => {
      var filter = ""
      if (cat !== "Prefer All") filter += "cat=" + cat;
      if (city !== "All City") filter += "&city=" + city;
      if (location !== "") filter += "&search=" + location;
      if (price !== "Any Budget") {
        const minmax = price.split('-')
        filter += "&min=" + minmax[0] + "&max=" + minmax[1];
      }

      const res = await newRequest.get("/gigs?" + filter)
      console.log("list", res.data)
      setPostlist(res.data)
    }
    loadList()
  }, [location, cat, city, price, city1, cat1])

  const addMore = () => {
    setCount(count + 12)
  }

  console.log(location, city, cat, price)

  const search = () => {

  }


  return (
    <>
      <div className="bg-gray-51 flex flex-col font-markoone sm:gap-10 md:gap-10 gap-[100px] items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-center w-full">
          <LandingPageHeader className="bg-white-A700 flex gap-2 h-20 md:h-auto items-center justify-between md:px-5 px-[120px] py-[19px] w-full" />
          <div className="flex flex-col font-manrope items-center justify-start md:px-10 sm:px-5 px-[120px] w-full">
            <div className="flex flex-col gap-6 items-center justify-center max-w-[1200px] mx-auto w-full">
              <Text
                className="text-3xl sm:text-[27px] md:text-[30px] text-gray-900 tracking-[-0.72px] w-full"
                size="txtManropeExtraBold36"
              >
                Find Property
              </Text>
              <div className="flex flex-col gap-3 items-start justify-start w-full">
                <div className="flex md:flex-col flex-row gap-5 items-start justify-start w-full">

                  <label htmlFor="location" className="relative text-gray-400 focus-within:text-gray-600 block w-full">
                    <Img
                      className="pointer-events-none w-6 h-6 absolute top-1/2 transform -translate-y-1/2 left-3"
                      src="images/img_location.svg"
                      alt="location"
                    />
                    <input placeholder="Location" name="location" type="text" onChange={e => setlocation(e.target.value)}
                      className="bg-white-A700 p-4 pl-12 border-gray-300 rounded-xl focus:border-gray-400 font-semibold placeholder:text-gray-600 text-gray-600 text-left md:w-full w-[350px]"
                    />
                  </label>

                  <select id="city" onChange={e => setcity(e.target.value)}
                    class="bg-white-A700 p-4 border-gray-300 rounded-xl focus:border-gray-400 font-semibold placeholder:text-gray-600 text-gray-600 text-left  w-full">
                    <option value="All City">All City</option>
                    <option value="Pune">Pune</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Bengaluru">Bengaluru</option>
                    <option value="Chennai">Chennai</option>
                  </select>

                  <select id="cat" onChange={e => setcat(e.target.value)}
                    class="bg-white-A700 p-4 border-gray-300 rounded-xl focus:border-gray-400 font-semibold placeholder:text-gray-600 text-gray-600 text-left  w-full">
                    <option value="Prefer All">Prefer All</option>
                    <option value="FlatMate">Flat Mate</option>
                    <option value="PGs">PGs</option>
                    <option value="Flat">Flat</option>
                  </select>

                  <select id="price" onChange={e => setprice(e.target.value)}
                    class="bg-white-A700 p-4 border-gray-300 rounded-xl focus:border-gray-400 font-semibold placeholder:text-gray-600 text-gray-600 text-left  w-full">
                    <option value="Any Budget">Any Budget</option>
                    <option value="0-3001">0 - 3000</option>
                    <option value="3000-6001">3001 - 6000</option>
                    <option value="6000-15001">6001 - 15000</option>
                    <option value="15000-30001">15001 - 30000</option>
                    <option value="30000-60001">30001 - 60000</option>
                    <option value="60000-100001">60001 - 100000</option>
                    <option value="100000-1000001">100001 - 1000000</option>
                  </select>

                  {/* <SelectBox
                    className="bg-white-A700 border border-bluegray-100 border-solid md:flex-1 font-bold px-4 py-[17px] rounded-[10px] text-gray-700 text-left text-base w-[18%] md:w-full"
                    placeholderClassName="text-gray-700"
                    indicator={
                      <Img
                        className="h-4 w-4"
                        src="images/img_arrowdown_gray_700.svg"
                        alt="arrow_down"
                      />
                    }
                    isMulti={false}
                    name="price"
                    options={priceOptionsList}
                    isSearchable={false}
                    placeholder="All"
                  /> */}



                  {/* <SelectBox
                    className="bg-white-A700 border border-bluegray-100 border-solid md:flex-1 font-bold px-4 py-[17px] rounded-[10px] text-gray-700 text-left text-base w-[11%] md:w-full"
                    placeholderClassName="text-gray-700"
                    indicator={
                      <Img
                        className="h-4 w-4"
                        src="images/img_arrowdown_gray_700.svg"
                        alt="arrow_down"
                      />
                    }
                    isMulti={false}
                    name="dropdownlarge_One"
                    options={dropdownlargeOneOptionsList}
                    isSearchable={false}
                    placeholder="Bed - 3"
                  /> */}
                  {/* <Button
                    className="bg-white-A700 border border-bluegray-100 border-solid cursor-pointer flex items-center justify-center min-w-[113px] px-[15px] py-[17px] rounded-[10px]"
                    rightIcon={
                      <Img
                        className="h-6 mb-px ml-3"
                        src="images/img_plus_gray_700.svg"
                        alt="plus"
                      />
                    }
                  >
                    <div className="font-bold text-gray-700 text-left text-base">
                      More
                    </div>
                  </Button> */}
                  <Button
                    className="bg-gray-900 cursor-pointer flex items-center justify-center min-w-[124px] px-4 py-[17px] rounded-[10px]"
                    rightIcon={
                      <Img
                        className="h-5 mt-px mb-[3px] ml-2.5"
                        src="images/img_search_white_a700.svg"
                        alt="search"
                      />
                    }
                  >
                    <div className="font-bold text-left text-base text-white-A700">
                      Search
                    </div>
                  </Button>
                </div>
                {/* <div className="flex flex-row flex-wrap gap-2.5 items-start justify-start max-w-[1200px] w-full">
                  <Button
                    className="border border-bluegray-101 border-solid cursor-pointer flex items-center justify-center px-[13px] py-2 rounded-[10px] w-[145px]"
                    rightIcon={
                      <Img
                        className="h-4 mt-0.5 mb-px ml-2"
                        src="images/img_close.svg"
                        alt="close"
                      />
                    }
                  >
                    <div className="font-semibold text-gray-700 text-left text-sm">
                      Bathrooms 2+
                    </div>
                  </Button>
                  <Button
                    className="border border-bluegray-101 border-solid cursor-pointer flex items-center justify-center min-w-[243px] px-[13px] py-2 rounded-[10px]"
                    rightIcon={
                      <Img
                        className="h-4 mt-px mb-[3px] ml-2"
                        src="images/img_close.svg"
                        alt="close"
                      />
                    }
                  >
                    <div className="font-semibold text-gray-700 text-left text-sm">
                      Square Feet 750 - 2000 sq. ft
                    </div>
                  </Button>
                  <Button
                    className="border border-bluegray-101 border-solid cursor-pointer flex items-center justify-center min-w-[151px] px-[13px] py-2 rounded-[10px]"
                    rightIcon={
                      <Img
                        className="h-4 mt-0.5 mb-px ml-2"
                        src="images/img_close.svg"
                        alt="close"
                      />
                    }
                  >
                    <div className="font-semibold text-gray-700 text-left text-sm">
                      Year Built 5 - 15
                    </div>
                  </Button>
                  <Button
                    className="border border-bluegray-101 border-solid cursor-pointer flex items-center justify-center min-w-[168px] px-[13px] py-2 rounded-[10px]"
                    rightIcon={
                      <Img
                        className="h-4 mt-px mb-[3px] ml-2"
                        src="images/img_close.svg"
                        alt="close"
                      />
                    }
                  >
                    <div className="font-semibold text-gray-900 text-left text-sm">
                      For Sale By Agent
                    </div>
                  </Button>
                  <Button
                    className="border border-bluegray-101 border-solid cursor-pointer flex items-center justify-center min-w-[174px] px-[13px] py-2 rounded-[10px]"
                    rightIcon={
                      <Img
                        className="h-4 mt-0.5 mb-px ml-2"
                        src="images/img_close.svg"
                        alt="close"
                      />
                    }
                  >
                    <div className="font-semibold text-gray-900 text-left text-sm">
                      New Construction
                    </div>
                  </Button>
                </div> */}
              </div>
            </div>
          </div>
          <div className="flex flex-col font-manrope items-center justify-center md:px-10 sm:px-5 px-[120px] w-full">
            <div className="flex md:flex-col flex-row gap-6 items-start justify-center max-w-[1200px] mx-auto w-full">
              {/* <div className="h-[511px] relative w-[32%] md:w-full">
                <div className="h-[511px] m-auto w-full">
                  <GoogleMap
                    className="h-[511px] m-auto rounded-[10px] w-full"
                    showMarker={false}
                  ></GoogleMap>
                  <Img
                    className="absolute h-[427px] inset-y-[0] my-auto right-[6%]"
                    src="images/img_group1000001533.svg"
                    alt="group1000001533"
                  />
                </div>
                <div className="absolute bg-white-A700 border border-gray-600 border-solid flex flex-col h-max inset-y-[0] items-center justify-start left-[7%] my-auto px-4 py-6 rounded-lg w-[308px]">
                  <div className="flex flex-col gap-[21.66px] items-start justify-start w-full">
                    <div className="flex flex-row gap-[9.63px] items-center justify-start w-full">
                      <Img
                        className="h-[19px] w-[19px]"
                        src="images/img_eye.svg"
                        alt="eye"
                      />
                      <Text
                        className="flex-1 text-[12.83px] text-gray-900 w-auto"
                        size="txtManropeSemiBold1283"
                      >
                        2861 62nd Ave, Oakland, CA 94605
                      </Text>
                    </div>
                    <List
                      className="flex flex-col gap-[16.84px] items-start w-full"
                      orientation="vertical"
                    >
                      <div className="flex flex-1 flex-row gap-[32.08px] items-center justify-between my-0 w-full">
                        <div className="flex flex-1 flex-row gap-[9.63px] items-center justify-start w-full">
                          <Img
                            className="h-4 w-4"
                            src="images/img_bookmark.svg"
                            alt="bookmark"
                          />
                          <Text
                            className="flex-1 text-[12.83px] text-gray-700 w-auto"
                            size="txtManropeSemiBold1283Gray700"
                          >
                            3 Bed Room
                          </Text>
                        </div>
                        <div className="flex flex-1 flex-row gap-[9.63px] items-center justify-start w-full">
                          <Img
                            className="h-4 w-4"
                            src="images/img_ticket.svg"
                            alt="ticket"
                          />
                          <Text
                            className="text-[12.83px] text-gray-700 w-auto"
                            size="txtManropeSemiBold1283Gray700"
                          >
                            1 Bath
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-1 flex-row gap-[32.08px] items-center justify-between my-0 w-full">
                        <div className="flex flex-1 flex-row gap-[9.63px] items-center justify-start w-full">
                          <Img
                            className="h-4 w-4"
                            src="images/img_icon.svg"
                            alt="icon"
                          />
                          <Text
                            className="flex-1 text-[12.83px] text-gray-700 w-auto"
                            size="txtManropeSemiBold1283Gray700"
                          >
                            1,032 sqft
                          </Text>
                        </div>
                        <div className="flex flex-1 flex-row gap-[9.63px] items-center justify-start w-full">
                          <Img
                            className="h-4 w-4"
                            src="images/img_iocnmenu.svg"
                            alt="iocnmenu"
                          />
                          <Text
                            className="text-[12.83px] text-gray-700 w-auto"
                            size="txtManropeSemiBold1283Gray700"
                          >
                            Family
                          </Text>
                        </div>
                      </div>
                    </List>
                    <div className="flex flex-col items-center justify-start w-full">
                      <Text
                        className="text-[19.25px] text-gray-900 tracking-[-0.39px] w-auto"
                        size="txtManropeBold1925"
                      >
                        $649,900
                      </Text>
                    </div>
                  </div>
                </div>
              </div> */}
              <div className="flex flex-1 flex-col md:gap-10 gap-[60px] items-start justify-start w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="md:gap-5 gap-6 grid md:grid-cols-1 grid-cols-3 justify-center min-h-[auto] w-full">
                    {postlist.slice(0, count).map((props, index) => (
                      <React.Fragment key={`LandingPageCard${index}`}>
                        <LandingPageCard
                          className="flex flex-1 flex-col h-[442px] md:h-auto items-start justify-start w-full over"
                          {...props}
                        />
                      </React.Fragment>
                    ))}
                  </div>
                </div>
                <div className="flex sm:flex-col flex-row gap-5 items-center justify-between w-full">
                  {/* <div className="flex flex-row gap-[5px] items-start justify-start w-auto">
                    <Button className="border border-gray-700 border-solid cursor-pointer font-semibold h-12 py-[13px] rounded-[10px] text-base text-center text-gray-900 w-12">
                      1
                    </Button>
                    <Button className="border border-bluegray-102 border-solid cursor-pointer font-semibold h-12 py-[13px] rounded-[10px] text-base text-center text-gray-900 w-12">
                      2
                    </Button>
                    <Button className="border border-bluegray-102 border-solid cursor-pointer font-semibold h-12 py-[13px] rounded-[10px] text-base text-center text-gray-900 w-12">
                      3
                    </Button>
                    <Button className="border border-bluegray-102 border-solid cursor-pointer font-semibold h-12 py-[13px] rounded-[10px] text-base text-center text-gray-900 w-12">
                      4
                    </Button>
                    <Button className="border border-bluegray-102 border-solid cursor-pointer font-semibold h-12 py-[13px] rounded-[10px] text-base text-center text-gray-900 w-12">
                      5
                    </Button>
                  </div> */}
                  {count < postlist.length &&
                    <Button
                      className="border border-bluegray-102 border-solid cursor-pointer flex items-center justify-center min-w-[134px] px-[17px] py-[13px] rounded-[10px]"
                      rightIcon={
                        <Img
                          className="h-4 mt-px mb-[5px] ml-1"
                          src="images/img_arrowright_gray_900.svg"
                          alt="arrow_right"
                        />
                      }
                    >

                      <div onClick={addMore} className="font-semibold text-base text-gray-900 text-left">
                        Load more
                      </div>

                    </Button>
                  }
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

export default ListingPage;
