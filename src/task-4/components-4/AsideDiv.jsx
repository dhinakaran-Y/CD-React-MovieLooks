// import { useState } from "react";


const AsideDiv = () => {
  // const [inputVal , setInputVal] = useState("")
  return (
    <aside className="col-span-3 h-full py-8 space-y-7 px-8 border-r border-white/50">
      {/* input */}
      <input
        type="search"
        className="w-full px-3 py-2 rounded-full border border-white/50 focus:border-orange-600 focus:outline-none"
        placeholder="Search by movie name"
        // onInput={(e) => setInputVal(e.target.value.trim())}
      />

      {/* lang select */}
      <form className="max-w-sm mx-auto">
        {/* <label
          for="countries"
          className="block mb-2.5 text-sm font-medium text-heading">
          Filter by language :
        </label> */}
        <select
          id="language-select"
          className="block w-full px-3 py-2.5 bg-zinc-900 border border-white/50 rounded-full text-sm focus:ring-orange-600 focus:border-orange-600 shadow-xs text-white/50">
          <option defaultValue>Filter by Language</option>
          <option value="ta">Tamil</option>
          <option value="CA">Canada</option>
          <option value="FR">France</option>
          <option value="DE">Germany</option>
        </select>
      </form>

      {/* adult */}
      <div className="flex items-center ml-3">
        <input
          id="adult-checkbox"
          type="checkbox"
          value=""
          className="w-4 h-4 border border-white/50 rounded focus:ring focus:ring-orange-600"
        />
        <label
          htmlFor="adult-checkbox"
          className="select-none ml-2 text-sm font-medium text-heading">
          18+
        </label>
      </div>
    </aside>
  );
};

export default AsideDiv;
