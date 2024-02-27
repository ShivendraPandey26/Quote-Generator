import React from "react";
import { useState, useEffect } from "react";

function Quotebox() {
  const [data, setData] = useState(0);

  const url = "https://api.quotable.io/random";

  useEffect(() => {
    fun();
  }, [setData]);

  const fun = async () => {
    let data = await fetch(url);
    let passedData = await data.json();
    setData(passedData);
  };

  return (
    <div>
      <div className="h-screen flex items-center justify-center">
        <div className="w-11/12 lg:w-1/2 md:w-3/4 h-[70%] md:h-[65%] bg-white rounded-xl">
          <h1 className="text-xs p-2 text-center underline">Today Date :- {Date()} </h1>

          <h1 className="text-3xl m-10 text-center underline underline-offset-8 font-sans">
            Quote of the day
          </h1>

          <div className="w-auto h-[50%]">
            <p className="h-[60%] text-xl md:text-2xl font-serif p-5 md:p-14 font-[550] overflow-y-auto">

              "{data.content}"
            </p>

            <div>
              <h1 className="font-serif w-auto mt-5 absolute left-[45%] lg:left-[60%] ">
                <span className="text-2xl text-blue-500 px-1">-</span>
                {data.author + '.'}
                <h1 className="lg:px-10 overflow-hidden">
                  Date :-{data.dateAdded + "."}
                </h1>
              </h1>
            </div>
          </div>

          <div className="flex justify-center ">
            <button
              className="w-36 p-3 bg-blue-500 rounded-3xl hover:bg-blue-700 font-semibold text-white text-xl"
              onClick={() => fun()}
            >
              New Quote
            </button>
          </div>
            <img src="./src/assets/ZKZg.gif"></img>
        </div>
      </div>
    </div>
  );
}

export default Quotebox;
