import React from "react";

const From = () => {
  return (
    <div className="mt-10 flex justify-center gap-10  ">
      <form className="flex gap-10 ">
        <input
          className="rounded-md px-3 py-1 text-base font-semibold outline-none"
          type="text"
          placeholder="name"
        />
        <input
          className="rounded-md px-3 py-1 text-base font-semibold outline-none"
          type="text"
          placeholder="email"
        />
        <input
          className="rounded-md px-3 py-1 text-base font-semibold outline-none"
          type="text"
          placeholder="image url"
        />
        <input
          className="px-5 bg-blue-800  rounded-md text-white font-semibold"
          type="submit"
        />
      </form>
    </div>
  );
};

export default From;
