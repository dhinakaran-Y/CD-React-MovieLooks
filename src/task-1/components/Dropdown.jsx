import { useState } from "react";

export default function Dropdown() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      {/* Button */}
      <button
        onClick={() => setOpen(!open)}
        className="px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700">
        Options
      </button>

      {/* Dropdown menu */}
      {open && (
        <div className="absolute mt-2 bg-zinc-800 -right-7 w-40 border rounded-md shadow-lg">
          <ul className="py-1 flex flex-col">
            <a
              href="../index.html"
              className="px-4 py-2 hover:bg-zinc-700 cursor-pointer">
              task-1
            </a>
            <a
              href="../task-2.html"
              className="px-4 py-2 hover:bg-zinc-700 cursor-pointer">
              task-2
            </a>
            <a
              href="../task-3.html"
              className="px-4 py-2 hover:bg-zinc-700 cursor-pointer">
              task-3
            </a>
            <a
              href="../src/task-4/task-4.html"
              className="px-4 py-2 hover:bg-zinc-700 cursor-pointer">
              task-4
            </a>
          </ul>
        </div>
      )}
    </div>
  );
}