import { useState } from "react";

export default function Dropdown() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      {/* Button */}
      <button
        onClick={() => setOpen(!open)}
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
        Options
      </button>

      {/* Dropdown menu */}
      {open && (
        <div className="absolute mt-2 w-40 bg-white border rounded-md shadow-lg">
          <ul className="py-1 flex flex-col">
            <a
              href="../index.html"
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              task-1
            </a>
            <a
              href="../task-2.html"
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              task-2
            </a>
            <a
              href="../task-3.html"
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              task-3
            </a>
          </ul>
        </div>
      )}
    </div>
  );
}