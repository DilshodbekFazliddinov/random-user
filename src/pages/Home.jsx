import {
  MdOutlineBadge,
  TbCake,
  MdPersonPin,
  ImMan,
  ImWoman,
  IoMdTrash,
} from "react-icons/all";

import { useState } from "react";
// search import
import Search from "./Search";

// FUNCTION HOME
function Home({
  data,

  setUrl,
  refresh,
  setRefresh,
  newData,
  setNewData,
}) {
  const [search, setSearch] = useState("");

  const clearClick = (cell) => {
    const deleteData = newData.filter((item) => {
      return item.cell !== cell;
    });
    console.log(deleteData);
    setNewData(deleteData);
  };

  return (
    <div className="py-[60px] h-[100%]  mx-auto  flex flex-col items-center dark:bg-slate-800">
      {/* Search import */}
      <Search
        setSearch={setSearch}
        search={search}
        setUrl={setUrl}
        refresh={refresh}
        setRefresh={setRefresh}
        newData={newData}
        setNewData={setNewData}
      />
      <div className="grid grid-cols-3 gap-10 pb-3">
        {newData &&
          newData
            .filter((result) => {
              const text = `${result.name.title} ${result.name.first} ${result.name.last}`;

              return text.toLowerCase().includes(search.toLowerCase());
            })
            .map((result) => {
              return (
                <div
                  className="max-w-sm p-6 bg-white border group relative border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-center"
                  key={result.cell}
                >
                  <button
                    onClick={() => clearClick(result.cell)}
                    className="text-3xl dark:text-red-600 absolute top-6 right-6 hidden group-hover:block transition-all hover:rotate-[15deg]  "
                  >
                    <IoMdTrash />
                  </button>
                  <img
                    src={result.picture.large}
                    alt=""
                    className="rounded-[50%] mx-auto mb-3"
                  />

                  <div className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white flex items-center justify-center">
                    <span>
                      <MdOutlineBadge />
                    </span>
                    <span>
                      -
                      {` ${result.name.title} ${result.name.first}
                    ${result.name.last}`}
                    </span>
                  </div>

                  <div className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white flex items-center justify-center">
                    <span>
                      <TbCake />
                    </span>
                    <span> - {result.dob.age} years old</span>
                  </div>
                  <div className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white flex items-center justify-center">
                    <span>
                      <MdPersonPin />
                    </span>
                    <span>
                      {" "}
                      - {result.location.city} , {result.location.country}
                    </span>
                  </div>
                  <div className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white flex items-center justify-center">
                    <span>
                      {result.gender === "male" ? <ImMan /> : <ImWoman />}
                    </span>
                    <span> - {result.gender}</span>
                  </div>
                </div>
              );
            })}
      </div>
    </div>
  );
}

export default Home;
{
}
