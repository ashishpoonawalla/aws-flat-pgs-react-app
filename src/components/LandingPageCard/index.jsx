import React from "react";

import { Button, Img, Text } from "components";
import { Link } from "react-router-dom";

const LandingPageCard = (props) => {
  return (
    <Link to="/propertydetails" className="overflow-hidden hover:shadow-2xl ">
      <div className={props.className}>
        <Img
          className="h-[260px] sm:h-auto object-cover w-full"
          alt="image"
          //src={props?.image}
          src={ props?.cat == "PGs" ? "images/img_image_3.png" : props?.cat == "Flat" ? "images/img_image_5.png" : "images/img_image_2.png" }
        />
        <div className="bg-gray-51 border border-red-101 border-solid flex flex-col items-start justify-start px-5 py-[30px] rounded-bl-[10px] rounded-br-[10px] w-full">
          <div className="flex flex-col gap-[27px] items-start justify-start w-full">
            <div className="flex flex-row gap-3 items-center justify-start w-full">
              <Img className="h-6 w-6" src="images/img_eye.svg" alt="eye" />
              <Text
                className="flex-1 text-base text-gray-900 w-auto"
                size="txtManropeSemiBold16"
              >
                {props?.location}, {props?.city}
              </Text>
            </div>
            <div className="flex flex-col gap-[21px] items-start justify-start w-full">
              <div className="flex flex-row gap-10 items-center justify-between w-full">
                <div className="flex flex-1 flex-row gap-3 items-center justify-start w-full">
                  <Img
                    className="h-5 w-5"
                    src="images/img_bookmark.svg"
                    alt="bookmark"
                  />
                  <Text
                    className="flex-1 text-base text-gray-700 w-auto"
                    size="txtManropeSemiBold16Gray700"
                  >
                    {props?.title}
                  </Text>
                </div>
                {/* <div className="flex flex-1 flex-row gap-3 items-center justify-start w-full">
                  <Img
                    className="h-5 w-5"
                    src="images/img_ticket.svg"
                    alt="ticket"
                  />
                  <Text
                    className="text-base text-gray-700 w-auto"
                    size="txtManropeSemiBold16Gray700"
                  >
                    {props?.price}
                  </Text>
                </div> */}
              </div>
              <div className="flex flex-row gap-10 items-center justify-between w-full">
                <div className="flex flex-1 flex-row gap-3 items-center justify-start w-full">
                  <Img
                    className="h-5 w-5"
                    src="images/img_icon.svg"
                    alt="icon"
                  />
                  <Text
                    className="flex-1 text-base text-gray-700 w-auto"
                    size="txtManropeSemiBold16Gray700"
                  >
                    {props?.cat}
                  </Text>
                </div>
                <div className="flex flex-1 flex-row gap-3 items-center justify-start w-full">
                  <Img
                    className="h-5 w-5"
                    src="images/img_settings.svg"
                    alt="settings"
                  />
                  <Text
                    className="text-base text-gray-700 w-auto"
                    size="txtManropeSemiBold16Gray700"
                  >
                    Rs.{props?.price}
                  </Text>
                </div>
              </div>
            </div>
            {/* <div className="flex flex-row gap-[31px] items-center justify-start w-full">
              <Button className="bg-gray-900 cursor-pointer flex-1 font-manrope font-semibold py-[13px] rounded-[10px] text-md hover:bg-gray-700 text-center text-white-A700 w-full">
                {props?.viewDetails}
              </Button>
              <Text
                className="flex-1 text-xl md:text-[22px] text-gray-900 sm:text-xl tracking-[-0.48px] w-auto"
                size="txtManropeBold24Gray900"
              >
                {props?.price}
              </Text>
            </div> */}
          </div>
        </div>
      </div>
    </Link>
  );
};

LandingPageCard.defaultProps = {
  image: "images/img_image_260x384.png",
  p286162ndaveoaklone: "2861 62nd Ave, Oakland, CA 94605",
  p3bedroom: "3 Bed Room",
  bathcounter: "1 Bath",
  sqftcounter: "1,032 sqft",
  p1bath: "Family",
  viewDetails: "View Details",
  price: "$649,900",
};

export default LandingPageCard;
