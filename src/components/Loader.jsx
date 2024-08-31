import {LoaderIcon } from "../assets/loaderIcon.jsx";
export const Loader = ({ title }) => (
  <div className="w-full flex justify-center items-center flex-col">
    <LoaderIcon />
    <h1 className="font-bold text-2xl text-white mt-2">
      {title || "Loading..."}
    </h1>
  </div>
);

export default Loader;
