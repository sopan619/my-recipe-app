import React from "react";

export default function RecipeTile({ value }) {
  return (
    // <div className="flex py-5 px-5">
    //   <img
    //     className="w-48 h-48 object-cover"
    //     src={value["recipe"]["image"]}
    //     alt="Not found"
    //   />
    //   <p className="text-lg px-8 font-semibold">{value["recipe"]["label"]}</p>
    // </div>
    <>
      <div className="max-w-sm w-full md:max-w-full md:flex py-4 ml-[10%] overflow-x-hidden">
        <div className="h-48 w-[95%] bg-purple-400 md:h-48 md:w-48 border border-black flex-none bg-cover rounded-t md:rounded-t-none md:rounded-l text-center overflow-hidden">
          <img
            className=" object-cover m-auto"
            src={value["recipe"]["image"]}
            alt="Not found"
          />
        </div>
        <div className="border-r w-fit md:w-[70%] border-b border-l border-gray-800 md:border-l-0 md:border-t md:border-gray-800 bg-purple-400 rounded-b md:rounded-b-none md:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <div className="text-gray-900 font-bold text-xl mb-2">
              {value["recipe"]["label"]}
            </div>

            <div className="justify-left space-x-1 hidden md:flex select-none ">
              <button className="px-2 py-1 bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm font-medium rounded-full">
                {value["recipe"]["healthLabels"][0]}
              </button>

              <button className="px-2 py-1 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-full">
                {value["recipe"]["healthLabels"][1]}
              </button>

              <button className="px-2 py-1 bg-yellow-500 hover:bg-yellow-600 text-white text-sm font-medium rounded-full">
                {value["recipe"]["healthLabels"][2]}
              </button>

              <button className="px-2 py-1 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium rounded-full">
                {value["recipe"]["healthLabels"][3]}
              </button>

              <button className="px-2 py-1 bg-green-500 hover:bg-green-600 text-white text-sm font-medium rounded-full">
                {value["recipe"]["healthLabels"][4]}
              </button>

              <button className="px-2 py-1 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-full">
                {value["recipe"]["healthLabels"][5]}
              </button>

              <button className="px-2 py-1 bg-gray-800 hover:bg-gray-900 text-white text-sm font-medium rounded-full">
                {value["recipe"]["healthLabels"][6]}
              </button>
              <button className="px-2 py-1 bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm font-medium rounded-full">
                {value["recipe"]["healthLabels"][7]}
              </button>

              <button className="px-2 py-1 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-full">
                {value["recipe"]["healthLabels"][8]}
              </button>

              <button className="px-2 py-1 bg-yellow-500 hover:bg-yellow-600 text-white text-sm font-medium rounded-full">
                {value["recipe"]["healthLabels"][9]}
              </button>
            </div>
          </div>
          <div className="text-sm flex justify-between">
            <div>
              <p className="text-gray-700">
                Type of Dish - {value["recipe"]["dishType"]}
              </p>
              <p className="text-gray-900 font-semibold ">
                Source - {value["recipe"]["source"]}
              </p>
            </div>
            <button
              type="button"
              className=" mx-4  px-4 py-2.5 bg-fuchsia-700 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-lg transition duration-150 ease-in-out"
            >
              <a rel="noreferrer" href={value["recipe"]["url"]} target="_blank">
                Read Full Recipe
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
