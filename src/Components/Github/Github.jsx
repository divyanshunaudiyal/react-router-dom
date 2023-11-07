import { Link } from "react-router-dom";
import React from "react";
export default function Github() {
  return (
    <div className="mx-auto w-full max-w-7xl">
      <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
        <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
          <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
            <h2 className="text-4xl font-bold sm:text-5xl">
              Divyanshu Naudiyal
            </h2>
            <svg
              fill="white"
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
            >
              <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
            </svg>
            &nbsp; Divyanshu Naudiyal
          </div>
        </div>

        <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
          <img
            className="w-96"
            src="data:image/png;base64,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"
            alt="image1"
          />
        </div>
      </aside>

      <div className="grid  place-items-center sm:mt-20">
        <img
          className="sm:w-96 w-48"
          src="https://i.ibb.co/2M7rtLk/Remote1.png"
          alt="image2"
        />
      </div>
    </div>
  );
}
