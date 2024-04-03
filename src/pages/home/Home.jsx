import React from "react";
import "./home.css";
import Header from "../../components/header/Header";
import Homebanner from "../../components/banner/Homebanner";
import Footer from "../../components/footer/Footer";
import Testimonial from "../../components/testimonial/Testimonial";
import HomeContact from "./HomeContact";
import About from "./About";
import CardList from "./CardList";
import Homeinfo from "./Homeinfo";
import Homeslider from "./Homeslider";
import DemoCarousel from "./DemoCarousel";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Header />
      <Homebanner />
      <Homeslider />
      <div className=" mt-0 sm:mt-12 py-6">
        <About />
      </div>

      <section className="container mx-auto py-6 lg:pt-20 lg:pb:14 px-4 lg:px-10">
        <div className="flex flex-col text-center w-full mb-5 lg:mb-14">
          <h1 className=" text-2xl lg:text-5xl font-[400] mb-4 text-[#C5B351]  ">
            Featured Neighborhoods
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            In the vibrant neighborhood of San Jose, California, Sam is renowned
            among residents, property developers, local businesses, and
            professionals in the real estate industry for her remarkable skills,
            dynamic approach, and tireless commitment to facilitating
            transactions for buyers and sellers.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 ">
          <Link to="/feature">
            <div
              class="col-span-1 parent-div  py-28  lg:py-40 bg-cover bg-no-repeat shadow overflow-hidden relative flex items-center justify-center"
              style={{
                backgroundImage: `url("https://iss-cdn.myrealpage.com/E5lThairrDECelTxJ4AEpZ8NH6l-LfS3oTlTj_ABTG0/rs:auto:0:0:0/g:sm/bG9jYWw6Ly8vZGF0YS9hcHAvd3BzL19jb21tb24vYmxvY2tzL3NlYXJjaC1ib3gtMTAyL2NvdWNoLWxhbmRpbmcuanBnP3Q9MTYxNzA1NDA4OTE3MA?t=1617054089170")`,
              }}
            >
              <div class="   bg-black bg-opacity-70 hover:bg-opacity-0 z-50  text-center absolute inset-0 flex items-center justify-center ">
                <div className="flex flex-col">
                  <p class="text-white text-2xl font-normal font-prata  tracking-tight ">
                    MISSION
                  </p>
                  <div className="text-white content flex gap-2 mt-3">
                    <button className="px-4 py-1.5 bg-black hover:bg-NewYello">
                      House
                    </button>
                    <button className="px-4 py-1.5 bg-black hover:bg-NewYello">
                      Condos
                    </button>
                    <button className="px-4 py-1.5 bg-black hover:bg-NewYello">
                      Tounhouses
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          <Link to="/feature">
            <div
              class="col-span-1 parent-div  py-28  lg:py-40 bg-cover bg-no-repeat  shadow overflow-hidden relative flex items-center justify-center"
              style={{
                backgroundImage: `url("https://s3-us-west-2.amazonaws.com/avenuehq-listings/fvrebgv/000/262/883/0c8f25cb144d1f1445446c0391bf2caf97a1b653.jpg?fit=clip&w=1140")`,
              }}
            >
              <div class="   bg-black bg-opacity-70 hover:bg-opacity-0 z-50  text-center absolute inset-0 flex items-center justify-center ">
                <div className="flex flex-col">
                  <p class="text-white text-2xl font-normal font-prata  tracking-tight ">
                    ABBOTSFORD
                  </p>
                  <div className="text-white content flex gap-2 mt-3">
                    <button className="px-4 py-1.5 bg-black hover:bg-NewYello">
                      House
                    </button>
                    <button className="px-4 py-1.5 bg-black hover:bg-NewYello">
                      Condos
                    </button>
                    <button className="px-4 py-1.5 bg-black hover:bg-NewYello">
                      Tounhouses
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          <Link to="/feature">
            <div
              class="col-span-1 parent-div  py-28  lg:py-40 bg-cover bg-no-repeat  shadow overflow-hidden relative flex items-center justify-center"
              style={{
                backgroundImage: `url("https://iss-cdn.myrealpage.com/fT9pBdxiTbRnMkOq-sVZVpD36H31p7jJ_GEIe45q67Y/rs:auto:0:0:0/g:sm/bG9jYWw6Ly8vZGF0YS9hcHAvd3BzL19jb21tb24vYmxvY2tzL3NlYXJjaC1ib3gtMTAyL2xpdmluZy1yb29tLmpwZz90PTE2MTcwNTQwODkwNzA?t=1617054089070")`,
              }}
            >
              <div class="   bg-black bg-opacity-70 hover:bg-opacity-0 z-50  text-center absolute inset-0 flex items-center justify-center ">
                <div className="flex flex-col">
                  <p class="text-white text-2xl font-normal font-prata  tracking-tight ">
                    CHILLIWACK
                  </p>
                  <div className="text-white content flex gap-2 mt-3">
                    <button className="px-4 py-1.5 bg-black hover:bg-NewYello">
                      House
                    </button>
                    <button className="px-4 py-1.5 bg-black hover:bg-NewYello">
                      Condos
                    </button>
                    <button className="px-4 py-1.5 bg-black hover:bg-NewYello">
                      Tounhouses
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          <Link to="/feature">
            <div
              class="col-span-1 parent-div  py-28  lg:py-40 bg-cover bg-no-repeat  shadow overflow-hidden relative flex items-center justify-center"
              style={{
                backgroundImage: `url("https://iss-cdn.myrealpage.com/0QrmAdPZSMS9I_DXcQoFN9EeqsXKmztcQQDzuEUEcN4/rs:auto:0:0:0/g:sm/bG9jYWw6Ly8vZGF0YS9hcHAvd3BzL19jb21tb24vYmxvY2tzL3NlYXJjaC1ib3gtMTAyL3doaXRlLWtpdGNoZW4tZ2FsbGV5LmpwZz90PTE2MTcwNTQwODkxNTM?t=1617054089153")`,
              }}
            >
              <div class="   bg-black bg-opacity-70 hover:bg-opacity-0 z-50  text-center absolute inset-0 flex items-center justify-center ">
                <div className="flex flex-col">
                  <p class="text-white text-2xl font-normal font-prata  tracking-tight ">
                    MAPLE RIDGE
                  </p>
                  <div className="text-white content flex gap-2 mt-3">
                    <button className="px-4 py-1.5 bg-black hover:bg-NewYello">
                      House
                    </button>
                    <button className="px-4 py-1.5 bg-black hover:bg-NewYello">
                      Condos
                    </button>
                    <button className="px-4 py-1.5 bg-black hover:bg-NewYello">
                      Tounhouses
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2">
          <Link to="/feature">
            <div
              class="col-span-1 parent-div  py-28  lg:py-40 bg-cover bg-no-repeat shadow overflow-hidden relative flex items-center justify-center"
              style={{
                backgroundImage: `url("https://iss-cdn.myrealpage.com/Q1OJFGk0m94pSyRSSzlMM5TIPUn46tKXkgZ3MPDa2N4/rs:auto:0:0:0/g:sm/bG9jYWw6Ly8vZGF0YS9hcHAvd3BzL19jb21tb24vYmxvY2tzL3NlYXJjaC1ib3gtMTAyL2JlbmNoLXdpbmRvdy5qcGc_dD0xNjE3MDU0MDg5MDY0?t=1617054089064")`,
              }}
            >
              <div class="   bg-black bg-opacity-70 hover:bg-opacity-0 z-50  text-center absolute inset-0 flex items-center justify-center ">
                <div className="flex flex-col">
                  <p class="text-white text-2xl font-normal font-prata  tracking-tight ">
                    HOPE
                  </p>
                  <div className="text-white content flex gap-2 mt-3">
                    <button className="px-4 py-1.5 bg-black hover:bg-NewYello">
                      House
                    </button>
                    <button className="px-4 py-1.5 bg-black hover:bg-NewYello">
                      Condos
                    </button>
                    <button className="px-4 py-1.5 bg-black hover:bg-NewYello">
                      Tounhouses
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          <Link to="/feature">
            <div
              class="col-span-1 parent-div  py-28  lg:py-40 bg-cover bg-no-repeat  shadow overflow-hidden relative flex items-center justify-center"
              style={{
                backgroundImage: `url("https://s3-us-west-2.amazonaws.com/avenuehq-listings/fvrebgv/000/262/883/0c8f25cb144d1f1445446c0391bf2caf97a1b653.jpg?fit=clip&w=1140")`,
              }}
            >
              <div class="   bg-black bg-opacity-70 hover:bg-opacity-0 z-50  text-center absolute inset-0 flex items-center justify-center ">
                <div className="flex flex-col">
                  <p class="text-white text-2xl font-normal font-prata  tracking-tight ">
                    HARRISON
                  </p>
                  <div className="text-white content flex gap-2 mt-3">
                    <button className="px-4 py-1.5 bg-black hover:bg-NewYello">
                      House
                    </button>
                    <button className="px-4 py-1.5 bg-black hover:bg-NewYello">
                      Condos
                    </button>
                    <button className="px-4 py-1.5 bg-black hover:bg-NewYello">
                      Tounhouses
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          <Link to="/feature">
            <div
              class="col-span-1 parent-div  py-28  lg:py-40 bg-cover bg-no-repeat  shadow overflow-hidden relative flex items-center justify-center"
              style={{
                backgroundImage: `url("https://iss-cdn.myrealpage.com/fT9pBdxiTbRnMkOq-sVZVpD36H31p7jJ_GEIe45q67Y/rs:auto:0:0:0/g:sm/bG9jYWw6Ly8vZGF0YS9hcHAvd3BzL19jb21tb24vYmxvY2tzL3NlYXJjaC1ib3gtMTAyL2xpdmluZy1yb29tLmpwZz90PTE2MTcwNTQwODkwNzA?t=1617054089070")`,
              }}
            >
              <div class="   bg-black bg-opacity-70 hover:bg-opacity-0 z-50  text-center absolute inset-0 flex items-center justify-center ">
                <div className="flex flex-col">
                  <p class="text-white text-2xl font-normal font-prata  tracking-tight ">
                    SURREY
                  </p>
                  <div className="text-white content flex gap-2 mt-3">
                    <button className="px-4 py-1.5 bg-black hover:bg-NewYello">
                      House
                    </button>
                    <button className="px-4 py-1.5 bg-black hover:bg-NewYello">
                      Condos
                    </button>
                    <button className="px-4 py-1.5 bg-black hover:bg-NewYello">
                      Tounhouses
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          <Link to="/feature">
            <div
              class="col-span-1 parent-div  py-28  lg:py-40 bg-cover bg-no-repeat  shadow overflow-hidden relative flex items-center justify-center"
              style={{
                backgroundImage: `url("https://iss-cdn.myrealpage.com/0QrmAdPZSMS9I_DXcQoFN9EeqsXKmztcQQDzuEUEcN4/rs:auto:0:0:0/g:sm/bG9jYWw6Ly8vZGF0YS9hcHAvd3BzL19jb21tb24vYmxvY2tzL3NlYXJjaC1ib3gtMTAyL3doaXRlLWtpdGNoZW4tZ2FsbGV5LmpwZz90PTE2MTcwNTQwODkxNTM?t=1617054089153")`,
              }}
            >
              <div class="   bg-black bg-opacity-70 hover:bg-opacity-0 z-50  text-center absolute inset-0 flex items-center justify-center ">
                <div className="flex flex-col">
                  <p class="text-white text-2xl font-normal font-prata  tracking-tight ">
                    LANGLEY
                  </p>
                  <div className="text-white content flex gap-2 mt-3">
                    <button className="px-4 py-1.5 bg-black hover:bg-NewYello">
                      House
                    </button>
                    <button className="px-4 py-1.5 bg-black hover:bg-NewYello">
                      Condos
                    </button>
                    <button className="px-4 py-1.5 bg-black hover:bg-NewYello">
                      Tounhouses
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      <div className="mt-16">
        <DemoCarousel />
      </div>

      <div className="mt-3 lg:mt-16">
        <CardList />
      </div>
      <div className="mt-3 ">
        <HomeContact />
      </div>

      {/* <div className='mt-16'>
                <Testimonial />
            </div> */}
      <div className="mt-16">
        <Homeinfo />
      </div>
      <Footer />
    </>
  );
};

export default Home;
