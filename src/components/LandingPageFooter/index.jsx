import React from "react";

import { Img, Text } from "components";
import { Link } from "react-router-dom";

const LandingPageFooter = (props) => {
  return (
    <>
      <footer className={props.className}>
        <div className="flex flex-col md:gap-10 gap-[80px] items-start justify-start w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
            <div className="flex flex-col gap-[33px] items-start justify-start w-[341px]">
              <div className="flex flex-row gap-[11px] h-10 md:h-auto items-center justify-start w-[341px]">
                {/* <Img
                  className="h-10 w-10"
                  src="images/img_home.svg"
                  alt="home_One"
                /> */}
                <Text
                  className="text-orange-A700 text-xl w-auto"
                  size="txtMarkoOneRegular20"
                >
                  © Flat-Mate-PGs.
                </Text>
              </div>
              <div className="flex flex-col gap-7 h-[194px] md:h-auto items-start justify-start w-full">
                <Text
                  className="leading-[160.00%] text-sm text-gray-900"
                  size="txtManropeSemiBold16"
                >
                  <>
                    Sagar Arcade, F C Road,
                    <br />
                    Pune 411004, MH, IN
                  </>
                </Text>
                <div className="flex flex-col gap-1 items-start justify-start w-auto">
                  {/* <Text
                    className="text-sm text-gray-900 w-auto"
                    size="txtManropeSemiBold16"
                  >
                    +(123) 456-7890
                  </Text> */}
                  <Text
                    className="text-sm text-gray-900 w-auto"
                    size="txtManropeSemiBold16"
                  >
                    info@flat-mate-pgs.com
                  </Text>
                </div>
                <div className="flex flex-row gap-3 items-start justify-start w-full">
                  <div className="flex flex-col h-[30px] items-center justify-start w-[30px]">
                    <Img
                      className="h-[30px] w-[30px]"
                      src="images/img_plus.svg"
                      alt="plus"
                    />
                  </div>
                  <div className="flex flex-col h-[30px] items-center justify-start w-[30px]">
                    <Img
                      className="h-[30px] w-[30px]"
                      src="images/img_twitter.svg"
                      alt="twitter"
                    />
                  </div>
                  <Img
                    className="h-[30px] w-[30px]"
                    src="images/img_instagram_orange_a700_30x30.svg"
                    alt="instagram"
                  />
                  <Img
                    className="h-[30px] w-[30px]"
                    src="images/img_linkedin.svg"
                    alt="linkedin"
                  />
                  <div className="flex flex-col h-[30px] items-center justify-start w-[30px]">
                    <Img
                      className="h-[30px] w-[30px]"
                      src="images/img_clock_orange_a700.svg"
                      alt="clock"
                    />
                  </div>

                </div>

              </div>
            </div>
            <div className="flex flex-1 sm:flex-col flex-row md:gap-10 gap-[77px] items-start justify-start w-full">
              <div className="flex flex-1 flex-col gap-5 items-start justify-start w-full">
                <Text
                  className="text-gray-900 text-lg w-full"
                  size="txtManropeBold18Gray900"
                >
                  About
                </Text>
                <div className="flex flex-col gap-3.5 items-start justify-start w-full">

                  <Link to="/aboutus">
                    <Text
                      className="text-sm text-gray-900 w-full"
                      size="txtManropeSemiBold16"
                    >
                      Company
                    </Text>
                  </Link>
                  <Link to="/contactpage">
                    <Text
                      className="text-sm text-gray-900 w-full"
                      size="txtManropeSemiBold16"
                    >
                      Contact
                    </Text>
                  </Link>
                  <Link to="/terms">
                    <Text
                      className="text-sm text-gray-900 w-full"
                      size="txtManropeSemiBold16"
                    >
                      Terms of Uses
                    </Text>
                  </Link>
                  <Link to="/privacypolicy">
                    <Text
                      className="text-sm text-gray-900 w-full"
                      size="txtManropeSemiBold16"
                    >
                      Privacy Policy
                    </Text>
                  </Link>
                  <Text
                    className="text-sm text-gray-900 w-full"
                    size="txtManropeSemiBold16"
                  >
                    Blogs
                  </Text>
                </div>
              </div>

              <div className="flex flex-1 flex-col gap-5 items-start justify-start w-full">
                <Text
                  className="text-gray-900 text-lg w-full"
                  size="txtManropeBold18Gray900"
                >
                  Flat Mate
                </Text>
                <div className="flex flex-col gap-3.5 items-start justify-start w-full">
                  <Link to="/listing?city=Pune&type=FlatMate">
                    <Text
                      className="text-sm text-gray-900 w-full"
                      size="txtManropeSemiBold16"
                    >
                      In Pune
                    </Text>
                  </Link>
                  <Link to="/listing?city=Mumbai&type=FlatMate">
                    <Text
                      className="text-sm text-gray-900 w-full"
                      size="txtManropeSemiBold16"
                    >
                      In Mumbai
                    </Text>
                  </Link>
                  <Link to="/listing?city=Bengaluru&type=FlatMate">
                    <Text
                      className="text-sm text-gray-900 w-full"
                      size="txtManropeSemiBold16"
                    >
                      In Bengaluru
                    </Text>
                  </Link>
                  <Link to="/listing?city=Delhi&type=FlatMate">
                    <Text
                      className="text-sm text-gray-900 w-full"
                      size="txtManropeSemiBold16"
                    >
                      In Delhi
                    </Text>
                  </Link>
                  <Link to="/listing?city=Chennai&type=FlatMate">
                    <Text
                      className="text-sm text-gray-900 w-full"
                      size="txtManropeSemiBold16"
                    >
                      In Chennai
                    </Text>
                  </Link>
                </div>
              </div>

              <div className="flex flex-1 flex-col gap-5 items-start justify-start w-full">
                <Text
                  className="text-gray-900 text-lg w-full"
                  size="txtManropeBold18Gray900"
                >
                  PGs
                </Text>
                <div className="flex flex-col gap-3.5 items-start justify-start w-full">
                  <Link to="/listing?city=Pune&type=PGs">
                    <Text
                      className="text-sm text-gray-900 w-full"
                      size="txtManropeSemiBold16"
                    >
                      PGs in Pune
                    </Text>
                  </Link>
                  <Link to="/listing?city=Mumbai&type=PGs">
                    <Text
                      className="text-sm text-gray-900 w-full"
                      size="txtManropeSemiBold16"
                    >
                      PGs in Mumbai
                    </Text>
                  </Link>
                  <Link to="/listing?city=Bengaluru&type=PGs">
                    <Text
                      className="text-sm text-gray-900 w-full"
                      size="txtManropeSemiBold16"
                    >
                      PGs in Bengaluru
                    </Text>
                  </Link>
                  <Link to="/listing?city=Delhi&type=PGs">
                    <Text
                      className="text-sm text-gray-900 w-full"
                      size="txtManropeSemiBold16"
                    >
                      PGs in Delhi
                    </Text>
                  </Link>
                  <Link to="/listing?city=Chennai&type=PGs">
                    <Text
                      className="text-sm text-gray-900 w-full"
                      size="txtManropeSemiBold16"
                    >
                      PGs in Chennai
                    </Text>
                  </Link>
                </div>
              </div>

              <div className="flex flex-1 flex-col gap-5 items-start justify-start w-full">
                <Text
                  className="text-gray-900 text-lg w-full"
                  size="txtManropeBold18Gray900"
                >
                  Flat
                </Text>
                <div className="flex flex-col gap-3.5 items-start justify-start w-full">
                  <Link to="/listing?city=Pune&type=Flat">
                    <Text
                      className="text-sm text-gray-900 w-full"
                      size="txtManropeSemiBold16"
                    >
                      Flat in Pune
                    </Text>
                  </Link>
                  <Link to="/listing?city=Mumbai&type=Flat">
                    <Text
                      className="text-sm text-gray-900 w-full"
                      size="txtManropeSemiBold16"
                    >
                      Flat in Mumbai
                    </Text>
                  </Link>
                  <Link to="/listing?city=Bengaluru&type=Flat">
                    <Text
                      className="text-sm text-gray-900 w-full"
                      size="txtManropeSemiBold16"
                    >
                      Flat in Bengaluru
                    </Text>
                  </Link>
                  <Link to="/listing?city=Delhi&type=Flat">
                    <Text
                      className="text-sm text-gray-900 w-full"
                      size="txtManropeSemiBold16"
                    >
                      Flat in Delhi
                    </Text>
                  </Link>
                  <Link to="/listing?city=Chennai&type=Flat">
                    <Text
                      className="text-sm text-gray-900 w-full"
                      size="txtManropeSemiBold16"
                    >
                      Flat in Chennai
                    </Text>
                  </Link>
                </div>
              </div>


            </div>
          </div>
          {/* <Text
            className="text-sm text-gray-900 w-full"
            size="txtManropeSemiBold16"
          >
            © 2023. Flat-Mate-PGs.
          </Text> */}
        </div>
      </footer>
    </>
  );
};

LandingPageFooter.defaultProps = {};

export default LandingPageFooter;
