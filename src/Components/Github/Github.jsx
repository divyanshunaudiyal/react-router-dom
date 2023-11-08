import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
export default function Github() {
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("https://api.github.com/users/divyanshunaudiyal")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  const data = useLoaderData();
  return (
    <>
      <div className="text-center m-4 bg-gray-100 p-4 text-3xl">
        <h1 className=" text-cyan-800">
          {data.name.slice(0, 9)} {data.name.slice(9)}
        </h1>
        <div className=" flex flex-row align-middle justify-center gap-3 my-4 items-center text-xl">
          <img src={data.avatar_url} width={300} alt="image" />
          <p className=" text-center text-sm text-black">
            {data.bio}
            <span className="block text-center ">
              Public repositories : {data.public_repos}
            </span>
            <span className="block text-center ">
              User since : {data.created_at.slice(0, 10)}{" "}
              <span className=" text-gray-200 text-3xl">_</span>
              {data.created_at.slice(11, -1)}
            </span>
          </p>
        </div>
      </div>
    </>
  );
}

export const githubInfoLoader = async () => {
  const response = await fetch(
    "https://api.github.com/users/divyanshunaudiyal"
  );
  const data = await response.json();
  console.log(data.created_at.slice(0, 10));
  return data;
};
