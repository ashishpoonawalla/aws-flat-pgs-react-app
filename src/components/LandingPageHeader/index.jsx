import React, { useState } from "react";

import { Button, Img, List, Text } from "components";
import { Link, useNavigate } from "react-router-dom";
import newRequest from "utils/newRequest";

const LandingPageHeader = (props) => {
  const navigate = useNavigate()
  const currentUser = JSON.parse(localStorage.getItem("currentUser"))
  const [menu, setMenu] = useState(false)

  const handleLogout = async () => {
    try {
      await newRequest.post("/auth/logout")
      localStorage.setItem("currentUser", null)
      navigate("/")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <header className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
          <div className="header-row my-px">
            <Link to="/">
              <div className="flex flex-row gap-[15px] items-center justify-start">
                <Img className="h-8 w-8" src="images/img_home.svg" alt="home" />
                <Text
                  className="text-orange-A700 text-2xl w-auto mt-2"
                  size="txtMarkoOneRegular20"
                >
                  Flat-Mate-PGs
                </Text>
              </div>
            </Link>
            {/* <div className="mobile-menu">
              <div></div>
              <div></div>
              <div></div>
            </div> */}
          </div>
          {/* <div className="flex sm:flex-1 sm:flex-col flex-row sm:hidden items-center justify-between w-[492px] sm:w-full">
            <List
              className="sm:flex-col flex-row gap-10 grid grid-cols-3"
              orientation="horizontal"
            >
              <div className="flex flex-row gap-1.5 items-start justify-start w-[77px]">
                <Text
                  className="text-base text-gray-900 w-auto"
                  size="txtManropeSemiBold16"
                >
                  Home
                </Text>
                <Img
                  className="h-4 w-4"
                  src="images/img_arrowdown_gray_600.svg"
                  alt="arrowdown"
                />
              </div>
              <div className="flex flex-row gap-1.5 items-start justify-start w-[77px]">
                <Text
                  className="text-base text-gray-900 w-auto"
                  size="txtManropeSemiBold16"
                >
                  Listing
                </Text>
                <Img
                  className="h-4 w-4"
                  src="images/img_arrowdown_gray_600.svg"
                  alt="arrowdown"
                />
              </div>
              <div className="flex flex-row gap-1.5 items-start justify-start w-[77px]">
                <Text
                  className="text-base text-gray-900 w-auto"
                  size="txtManropeSemiBold16"
                >
                  Agents
                </Text>
                <Img
                  className="h-4 w-4"
                  src="images/img_arrowdown_gray_600.svg"
                  alt="arrowdown"
                />
              </div>
            </List>
            <Text
              className="text-base text-center text-gray-900 w-auto"
              size="txtManropeSemiBold16"
            >
              Property{" "}
            </Text>
            <Text
              className="text-base text-gray-900 w-auto"
              size="txtManropeSemiBold16"
            >
              Blog
            </Text>
          </div> */}
          <div className="flex flex-row gap-4 h-[42px] md:h-auto sm:hidden items-center justify-start w-[180px]">
            {/* <Button
              className="bg-transparent cursor-pointer flex items-center justify-center min-w-[94px]"
              leftIcon={
                <Img
                  className="h-6 mb-px mr-2"
                  src="images/img_search.svg"
                  alt="search"
                />
              }
            >
              <div className="font-bold font-manrope text-gray-900 text-left text-lg">
                Search
              </div>
            </Button> */}
            {!currentUser &&
              <>
                <Link to="/signin" className="bg-gray-900 cursor-pointer font-manrope font-semibold py-2.5 rounded-[10px] text-sm text-center text-white-A700 w-full hover:bg-gray-700">
                  Sign in
                </Link>
                <Link to="/signup" className="bg-gray-900 cursor-pointer font-manrope font-semibold py-2.5 rounded-[10px] text-sm text-center text-white-A700 w-full hover:bg-gray-700">
                  Register
                </Link>
              </>
            }
            {currentUser &&
              <div className="flex flex-col w-full">
                <div
                  onClick={e => setMenu(!menu)}
                  className="text-gray-700  flex items-center justify-center gap-2 uppercase bg-gray-200 cursor-pointer font-manrope font-semibold py-2.5 rounded-[10px] text-sm text-center w-full hover:bg-gray-300">
                  {currentUser?.username}
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user-circle" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                    <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                    <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855"></path>
                  </svg>
                </div>
                {menu &&
                  <div className="cursor-pointer absolute mt-12 flex flex-col gap-2 bg-white-A700 p-4 w-48 border-gray-300 border rounded-lg shadow-xl">
                    <Link to="/newpost">New Post</Link>
                    <Link to="/mylist">My List</Link>
                    <Link to="/message">Message</Link>
                    <Link to="/profile">Profile</Link>
                    <span onClick={handleLogout}>
                      Logout
                    </span>
                  </div>
                }
              </div>
            }

          </div>
        </div>
      </header>
    </>
  );
};

LandingPageHeader.defaultProps = {};

export default LandingPageHeader;
