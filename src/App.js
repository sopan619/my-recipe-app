import axios from "axios";
import { useState } from "react";
import Navbar from "./components/Navbar";
import RecipeTile from "./components/RecipeTile";

export default function App() {
  const [search, setSearch] = useState("");
  const [recipe, setRecipe] = useState([]);
  const appId = "02a11016";
  const apiKey = "50243e47f1415c026623cf209195f77d";
  const url = `https://api.edamam.com/search?q=${search}&app_id=${appId}&app_key=${apiKey}`;

  const getRecipes = async () => {
    var result = await axios.get(url);
    setRecipe(result.data.hits);
    console.log(result.data.hits);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    getRecipes();
  };

  return (
    <>
      <Navbar />
      <h1 className="text-center text-gray-700 font-semibold font-mono py-3 mt-5 text-5xl">
        Let's Search for some Recipies
      </h1>

      <form className="flex ml-[33%] mt-5 align-middle" onSubmit={onSubmit}>
        <input
          className="py-2 px-4 rounded-md w-[45%] focus:outline-purple-500"
          type="text"
          value={search}
          placeholder="Search with ingredients"
          onChange={(e) => setSearch(e.target.value)}
        />
        <input
          type="submit"
          value="Search"
          className="inline-block px-6 py-2.5 ml-5 bg-purple-700 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-800 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
        />
      </form>
      <div className="">
        {recipe.map((res) => {
          return <RecipeTile value={res} />;
        })}
      </div>
    </>
  );
}
