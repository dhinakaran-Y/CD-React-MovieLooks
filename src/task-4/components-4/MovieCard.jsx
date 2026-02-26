const MovieCard = ({
  title,
  img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJVpl5uz2yeWufgp0HN3xCFU2kQ9_A5h2kTw&s",
  id,
  rating,
  popular,
  desc,
  setFormShow
}) => {

  function handleEdit() {
    setFormShow({ action: true, editId: id, deleteId: null });
  }

  return (
    <div className="h-120 brightness-70 relative" key={id}>
      <img
        src={
          img == ""
            ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJVpl5uz2yeWufgp0HN3xCFU2kQ9_A5h2kTw&s"
            : img
        }
        className="h-full object-center object-cover w-full"
      />
      <div className="absolute flex-col space-y-3 text-white/90 font-semibold bg-black/80 top-0 right-0 left-0 bottom-0 flex items-center justify-center opacity-0 text-div hover:opacity-100 transition-all duration-300">
        <h1 className="text-orange-600/70 capitalize font-semibold text-center text-3xl font-mono">
          {title}
        </h1>
        {rating !== "" && popular >= 0 && <p>Rating : {rating}</p>}
        {popular !== "" &&  popular >= 0 && <p>Popular : {popular.toFixed(1)}</p>}
        <p className="w-[90%] line-clamp-10">{desc ?? desc}</p>
        <div className="absolute flex space-x-3 bottom-3 right-3 *:hover:border *:rounded *:p-2 *:cursor-pointer *:hover:**:fill-orange-600 *:active:*:-rotate-12 *:border-orange-600">
          <button typeof="button" className="" onClick={handleEdit}>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M5 19h1.425L16.2 9.225L14.775 7.8L5 17.575zm-2 2v-4.25L16.2 3.575q.3-.275.663-.425t.762-.15t.775.15t.65.45L20.425 5q.3.275.438.65T21 6.4q0 .4-.137.763t-.438.662L7.25 21zM19 6.4L17.6 5zm-3.525 2.125l-.7-.725L16.2 9.225z" /></svg>
          </button>
          <button typeof="button" className="">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21zM17 6H7v13h10zM9 17h2V8H9zm4 0h2V8h-2zM7 6v13z" /></svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;