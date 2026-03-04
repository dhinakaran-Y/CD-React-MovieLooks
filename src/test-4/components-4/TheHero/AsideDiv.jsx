const AsideDiv = ({setInputVal, setTopRate, setPopular, inputVal, setFormShow}) => {
  return (
    <aside className="col-span-3 h-screen py-8 space-y-7 px-8 border-r border-white/50">
      {/* input */}
      <input
        type="search"
        className="w-full px-3 py-2 rounded-full border border-white/50 focus:border-orange-600 focus:outline-none"
        placeholder="Search by movie name"
        onInput={(e) =>
          e.target.value.length > 1
            ? setInputVal(e.target.value.trim())
            : setInputVal("")
        }
      />

      {/* top rated */}
      <div className="flex items-center ml-3">
        <input
          id="rating-checkbox"
          type="checkbox"
          className="w-4 h-4 border border-white/50 rounded focus:ring focus:ring-orange-600"
          onChange={(e) => setTopRate(e.target.checked) }
        />
        <label
          htmlFor="rating-checkbox"
          className="select-none ml-2 text-sm font-medium text-heading">
          Top Rated
        </label>
      </div>

      {/* popular */}
      <div className="flex items-center ml-3">
        <input
          id="popular-checkbox"
          type="checkbox"
          value=""
          className="w-4 h-4 border border-white/50 rounded focus:ring focus:ring-orange-600"
          onChange={() => setPopular(pre => !pre)}
        />
        <label
          htmlFor="popular-checkbox"
          className="select-none ml-2 text-sm font-medium text-heading">
          Popular
        </label>
      </div>

      {/* filter Indication div */}
      <div className="text-orange-500">
        {inputVal !== "" && (
          <p>
            Movies are filtered by name : <span>{inputVal}</span>
          </p>
        )}
      </div>

      <div className="">
        <button
          className="w-full px-4 text-center text-white bg-orange-600 rounded-full py-1 cursor-pointer hover:bg-amber-700 active:scale-105"
          type="button"
          onClick={() => {
            setFormShow({ action: true, editId: null, deleteId: null });
          }}
        >
          + Add Movies
        </button>
      </div>
    </aside>
  );
};

export default AsideDiv;
