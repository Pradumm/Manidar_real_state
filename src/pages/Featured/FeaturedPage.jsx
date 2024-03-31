import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MdAddCall } from "react-icons/md";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

const FeaturedPage = () => {
  const [properties, setProperties] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [propertiesPerPage] = useState(9);

  useEffect(() => {
    fetch("https://backend.artechworld.tech/api/admin/property/list/all")
      .then((response) => response.json())
      .then((data) => {
        if (data.status && data.data) {
          setProperties(data.data);
        } else {
          console.error("Failed to fetch properties:", data.message);
        }
      })
      .catch((error) => {
        console.error("Error fetching properties:", error);
      });
  }, []);

  // Logic for pagination
  const indexOfLastProperty = currentPage * propertiesPerPage;
  const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
  const currentProperties = properties.slice(
    indexOfFirstProperty,
    indexOfLastProperty
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <Header />
      <div
        className="bg-black flex justify-center items-center text-white w-full bg-cover bg-no-repeat h-56"
        style={{ backgroundImage: `url("/asset/bg-lines-svg.svg")` }}
      >
        <form className="w-full px-4 lg:w-1/2">{/* Your search form */}</form>
      </div>

      <div className="container px-4 lg:px-10 py-6 mx-auto">
        {/* Content for displaying properties */}
        <div className="py-8 flex flex-wrap gap-5">
          {currentProperties.map((property, index) => (
            <div key={index} className="max-w-sm mb-4">
              <p className="font-semibold mb-2 pl-1">
                {property["listing-item-entry-title"]}
              </p>
              <div className="border p-2 relative h-[185px] overflow-hidden">
                <img
                  className="transform transition-transform duration-3000 hover:scale-125"
                  src={property.image_urls[0]}
                  alt=""
                />
                <div className="p-2 absolute top-2 right-2 bg-black/70 rounded-md">
                  <MdAddCall className="text-white" />
                </div>
                <div className="w-full flex justify-between absolute bottom-2">
                  <button className="px-4 py-2 bg-gray-50 text-red-500">
                    {property.property_info &&
                      property.property_info["info-section-RED-4"] && (
                        <p>
                          {
                            property.property_info["info-section-RED-4"][
                              "Property Type:"
                            ]
                          }
                        </p>
                      )}
                  </button>
                  <button className="px-4 py-2 bg-pink-200 text-red-500">
                    {property.property_info &&
                      property.property_info["info-section-RED-8"] && (
                        <p>
                          {
                            property.property_info["info-section-RED-8"][
                              "Original Price:"
                            ]
                          }
                        </p>
                      )}
                  </button>
                </div>
              </div>
              <div className="py-2">
                <div className="relative">
                  <table className="w-full text-sm text-left rtl:text-right">
                    <thead className="text-xs text-gray-700 uppercase">
                      <tr className="border">
                        <th scope="col" className="px-4 border py-1.5">
                          Color
                        </th>
                        <th scope="col" className="px-4 border py-1.5">
                          Category
                        </th>
                        <th scope="col" className="px-4 border py-1.5">
                          Price
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white border">
                        <td className="px-4 border py-1.5">Silver</td>
                        <td className="px-4 border py-1.5">Laptop</td>
                        <td className="px-4 border py-1.5">$2999</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <p className="text-xs pl-1">{property.description}</p>
              <p className="text-xs py-2 pl-1">Listed by {property.listedBy}</p>
              <div className="flex justify-between">
                <Link
                  to={`/property/${property.id}`}
                  className="text-white shadow-xl text-sm transition duration-150 ease-out hover:ease-in bg-[#C5B351] hover:bg-black uppercase px-8 py-2"
                >
                  View
                </Link>
                <Link
                  to={`/property/${property.id}`}
                  className="text-white shadow-xl text-sm transition duration-150 ease-out hover:ease-in bg-black hover:bg-[#C5B351] uppercase px-8 py-2"
                >
                  More
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-4">
          <nav className="inline-flex">
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-l-md"
            >
              Previous
            </button>
            {Array.from(
              { length: Math.ceil(properties.length / propertiesPerPage) },
              (_, index) => (
                <button
                  key={index}
                  onClick={() => paginate(index + 1)}
                  className={`px-4 py-2 ${
                    currentPage === index + 1
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-blue-400"
                  } `}
                >
                  {index + 1}
                </button>
              )
            )}
            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={
                currentPage === Math.ceil(properties.length / propertiesPerPage)
              }
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-r-md"
            >
              Next
            </button>
          </nav>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default FeaturedPage;
