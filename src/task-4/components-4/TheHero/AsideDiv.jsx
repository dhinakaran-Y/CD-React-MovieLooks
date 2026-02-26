const AsideDiv = ({
  inputVal,
  setInputVal,
  topRate,
  setTopRate,
  popular,
  setPopular,
}) => {
  return (
    <aside className="col-span-3 h-full py-8 space-y-7 px-8 border-r border-white/50">
      <input
        type="search"
        className="w-full px-3 py-2 rounded-full border border-white/50 focus:border-orange-600 focus:outline-none"
        placeholder="Search by movie name"
        onChange={(e) =>
          e.target.value.length > 1
            ? setInputVal(e.target.value.trim())
            : setInputVal("")
        }
      />

      <div className="flex items-center ml-3">
        <input
          type="checkbox"
          className="w-4 h-4"
          checked={topRate}
          onChange={() => setTopRate((prev) => !prev)}
        />
        <label className="ml-2 text-sm text-heading">Top Rated</label>
      </div>

      <div className="flex items-center ml-3">
        <input
          type="checkbox"
          className="w-4 h-4"
          checked={popular}
          onChange={() => setPopular((prev) => !prev)}
        />
        <label className="ml-2 text-sm text-heading">Popular</label>
      </div>

      <div className="text-orange-500">
        {inputVal !== "" && (
          <p>
            Movies are filtered by name : <span>{inputVal}</span>
          </p>
        )}
      </div>
    </aside>
  );
};

export default AsideDiv;
