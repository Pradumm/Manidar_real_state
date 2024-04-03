import React from "react";

const MessageBox = ({ onClose }) => {
  return (
    <div className="fixed bottom-5 right-0 lg:right-5 z-50">
      <div className="cursor-pointer w-56 p-5 bg-white shadow-lg opacity-100">
        <div>
          <div>
            <button
              onClick={onClose}
              className="absolute top-0 right-0 mt-2 mr-2 text-gray-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3.293 3.293a1 1 0 0 1 1.414 0L10 8.586l5.293-5.293a1 1 0 1 1 1.414 1.414L11.414 10l5.293 5.293a1 1 0 0 1-1.414 1.414L10 11.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L8.586 10 3.293 4.707a1 1 0 0 1 0-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <p className="text-sm leading-tight">
              Hi, let’s connect on helping you with your property needs.
            </p>
            <button className="mt-3 rounded bg-black px-4 py-1.5 text-sm text-white">
              Message Maninder
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageBox;
