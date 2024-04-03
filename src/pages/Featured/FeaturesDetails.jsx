import React from "react";
import Header from "../../components/header/Header";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Footer from "../../components/footer/Footer";
import BlogCard from "../../components/BlogCard";
import { FeaturCard } from "../../components/FeaturCard";
const FeaturesDetails = () => {
  const data = [1, 2, 3, 4];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <Header />
      <div
        className="bg-black flex justify-center items-center text-white  w-full bg-cover bg-no-repeat h-56"
        style={{ backgroundImage: `url("/asset/bg-lines-svg.svg")` }}
      >
        <form className=" w-full px-4 lg:w-1/2">
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 ps-10 text-sm text-gray-900 border  focus:outline-none  rounded-full bg-gray-50 "
              placeholder="Search Mockups, Logos..."
              required
            />
            <button
              type="submit"
              className="text-white absolute end-2.5 bottom-2.5 bg-NewYello hover:bg-NewYello  focus:outline-none  font-medium rounded-full text-sm px-5 py-2"
            >
              Search
            </button>
          </div>
        </form>
      </div>

      <div className="bg-[#fffcfc]">
        <div className="container mx-auto py-6 lg:py-16px-4 lg:px-10">
          <div className="flex justify-between items-center">
            <div className="mb-6">
              <h1 className="text-2xl lg:text-4xl font-[400] mb-1  ">
                #407 - 5380 TYEE LANE{" "}
              </h1>
              <p className="text-xs">GARRISON CROSSING – CHILLIWACK, BC</p>
            </div>

            <div>
              <button className=" text-sm border-[1px] uppercase font-semibold rounded-md border-1 py-2 px-3 border-NewYello">
                Just Listed
              </button>
            </div>
          </div>

          <Carousel
            responsive={responsive}
            autoPlay={true}
            autoPlaySpeed={2000}
            infinite={true}
            removeArrowOnDeviceType={["tablet", "mobile"]}
          >
            <div
              class="bg-cover bg-no-repeat  shadow overflow-hidden relative"
              style={{
                backgroundImage: `url("https://sanjose-wpresidence.b-cdn.net/wp-content/uploads/2014/05/9.1.webp")`,
              }}
            >
              <div class=" py-40 md:py-48"></div>
            </div>

            <div
              class="bg-cover  bg-no-repeat  shadow overflow-hidden relative"
              style={{
                backgroundImage: `url("https://s3-us-west-2.amazonaws.com/avenuehq-listings/fvrebgv/000/262/885/a236cace3a6775ed0231181878f6b8e53f2c0caf.jpg?fit=clip&w=1140")`,
              }}
            >
              <div class=" py-40 md:py-48"></div>
            </div>

            <div
              class="bg-cover    bg-no-repeat shadow overflow-hidden relative"
              style={{
                backgroundImage: `url("https://idx-media.s3.ca-central-1.amazonaws.com/residential/PhotoE8177012-22.jpeg")`,
              }}
            >
              <div class=" py-40 md:py-48"></div>
            </div>

            <div
              class="bg-cover    bg-no-repeat shadow overflow-hidden relative"
              style={{
                backgroundImage: `url("https://s3-us-west-2.amazonaws.com/avenuehq-listings/fvrebgv/000/262/885/409a9c461cd63da437ed08331cba3a2f378a4e27.jpg?fit=clip&w=1140")`,
              }}
            >
              <div class=" py-40 md:py-48"></div>
            </div>
          </Carousel>
        </div>

        <div className="container mx-auto py-6 lg:py-10 px-4 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-[55%_auto] gap-5">
            <div>
              <h6 className="text-2xl  font-[400] mb-6 underline underline-offset-8 ">
                ABOUT{" "}
              </h6>
              <p className="leading-relaxed mb-4">
                Enjoy the LUXURY LIFE @ The Boardwalk in famous RIVER’S EDGE!
                This sub-penthouse 1841 sq ft 2 BDRM + DEN home is PERFECT for
                those ready to ‘downsize’ without losing the SIZE! An incredible
                (and RARE) find with a lovely SOUTH EASTERN CORNER LOCATION w/ 2
                PATIOS w/ stunning views of the mountains & river. Spacious open
                concept modern kitchen w/ soft close cabinets, quartz counters,
                upgraded SS appliances incl gas range, that opens to a VAULTED
                living room w/ floor to ceiling cultured stone f/p. Primary
                suite w/ 5 piece ensuite, massive walk-in closet, & access to a
                COVERED VIEW PATIO. Large laundry room, den, & inviting dining
                area for entertaining. 1 covered parking (secondary available to
                purchase) w/ storage unit. Trails, shopping, parks, & nature are
                all at your DOORSTEP!
              </p>

              <p className="leading-relaxed">
                Enjoy the LUXURY LIFE @ The Boardwalk in famous RIVER’S EDGE!
                This sub-penthouse 1841 sq ft 2 BDRM + DEN home is PERFECT for
                those ready to ‘downsize’ without losing the SIZE! An incredible
                (and RARE) find with a lovely SOUTH EASTERN CORNER LOCATION w/ 2
                PATIOS w/ stunning views of the mountains & river. Spacious open
                concept modern kitchen w/ soft close cabinets, quartz counters,
                upgraded SS appliances incl gas range, that opens to a VAULTED
                living room w/ floor to ceiling cultured stone f/p. Primary
                suite w/ 5 piece ensuite, massive walk-in closet, & access to a
                COVERED VIEW PATIO. Large laundry room, den, & inviting dining
                area for entertaining. 1 covered parking (secondary available to
                purchase) w/ storage unit. Trails, shopping, parks, & nature are
                all at your DOORSTEP!
              </p>
            </div>

            {/* side section */}
            <div className="lg:pl-10">
              <div>
                <h6 className="text-2xl  font-[400] mb-6 underline underline-offset-8 ">
                  DETAILS{" "}
                </h6>

                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <table className="min-w-full divide-y divide-gray-200">
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr className="bg-gray-50">
                        <td className="px-6 py-2 whitespace-wrap font-bold">
                          List Price:
                        </td>
                        <td className="px-6 py-2 whitespace-wrap text-2xl text-NewYello">
                          $1,149,900
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <td className="px-6 py-2 whitespace-wrap font-bold">
                          MLS®:
                        </td>
                        <td className="px-6 py-2 whitespace-wrap">#R2863509</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-6 py-2 whitespace-wrap font-bold">
                          Style:
                        </td>
                        <td className="px-6 py-2 whitespace-wrap">
                          Corner Unit, Penthouse
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <td className="px-6 py-2 whitespace-wrap font-bold">
                          Bedrooms:
                        </td>
                        <td className="px-6 py-2 whitespace-wrap">2</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-6 py-2 whitespace-wrap font-bold">
                          Bathrooms:
                        </td>
                        <td className="px-6 py-2 whitespace-wrap">
                          3 (1 partial)
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <td className="px-6 py-2 whitespace-wrap font-bold">
                          Year Built:
                        </td>
                        <td className="px-6 py-2 whitespace-wrap">2019</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-6 py-2 whitespace-wrap font-bold">
                          Age:
                        </td>
                        <td className="px-6 py-2 whitespace-wrap">5</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="px-6 py-2 whitespace-nowrap font-bold">
                          Floor Space:
                        </td>
                        <td className="px-6 py-2 whitespace-wrap">
                          1,841 sqft
                        </td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-6 py-2 whitespace-nowrap font-bold">
                          Condo Fees:
                        </td>
                        <td className="px-6 py-2 whitespace-wrap">$502</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="px-6 py-2 whitespace-wrap font-bold">
                          Taxes:
                        </td>
                        <td className="px-6 py-2 whitespace-wrap">$4,046</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-6 py-2 whitespace-wrap font-bold">
                          Tax Year:
                        </td>
                        <td className="px-6 py-2 whitespace-wrap">2023</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="px-6 py-2 whitespace-wrap font-bold">
                          Features:
                        </td>
                        <td className="px-6 py-2 whitespace-wrap">
                          Central Location, Cul-de-Sac, Recreation Nearby,
                          Shopping Nearby
                        </td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-6 py-2 whitespace-wrap font-bold">
                          Amenities:
                        </td>
                        <td className="px-6 py-2 whitespace-wrap">
                          Air Cond./Central, Elevator, Storage, Wheelchair
                          Access
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <td className="px-6 py-2 whitespace-wrap font-bold">
                          Address:
                        </td>
                        <td className="px-6 py-2 whitespace-wrap">
                          #407, 5380 Tyee Lane, Chilliwack, BC, V2R 6B6
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[60%_auto] xl:grid-cols-[70%_auto] gap-4">
            <div className="py-6">
              <h1 className=" text-black text-2xl inline-block lg:text-3xl font-[400] mb-6 ">
                Similar Listings
              </h1>
              <div className="inline-flex flex-wrap  gap-5  ">
                {data.map((item) => {
                  return <FeaturCard />;
                })}
              </div>
            </div>

            <div className="py-6">
              <form class=" w-full bg-white shadow-lg text-[#464646] lg:mt-8 p-8">
                <div className="flex gap-4 mb-4">
                  <div>
                    <img
                      className="w-28"
                      src="https://seattle.b-cdn.net/wp-content/uploads/2014/05/agent_profile-500x328.png"
                      alt=""
                    />
                  </div>
                  <div>
                    <p>
                      Maninder Singh <br />
                      <span className="text-NewYello">SE DRE# 12567897</span>
                    </p>
                  </div>
                </div>

                <div className="mb-3">
                  <input
                    class=" border border-gray-300 text-sm rounded-lg  focus:outline-none block w-full p-2.5 placeholder-[#464646] "
                    placeholder=" Your Name"
                    type="text"
                  />
                </div>
                <div className="mb-3">
                  <input
                    class=" border border-gray-300 text-sm rounded-lg  focus:outline-none block w-full p-2.5 placeholder-[#464646] "
                    placeholder="Your Email "
                    type="text"
                  />
                </div>
                <div className="mb-3">
                  <input
                    class=" border border-gray-300 text-sm rounded-lg  focus:outline-none block w-full p-2.5 placeholder-[#464646] "
                    placeholder="Your Mobile "
                    type="text"
                  />
                </div>

                <div className="mb-3">
                  <textarea
                    className=" my-3 border w-full rounded-lg px-4 focus:outline-none border-gray-300 py-2"
                    placeholder="Im interested in  Gorgeous studio for rent  "
                    cols="6"
                    rows="5"
                  ></textarea>
                </div>
                <div className="mt-6">
                  <button className="text-white  shadow-xl text-sm transition duration-150 ease-out hover:ease-in  bg-[#C5B351] hover:bg-black    focus:outline-none block w-full p-2.5 ">
                    Send Email
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default FeaturesDetails;
