import { useState } from "react";

const Accordion = ({id , title , content}) => {
  const [openId, setOpenId] = useState(null);

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="max-w-md mx-auto mt-10 space-y-4">
        <div
          key={id}
          className="border rounded-xl shadow-sm overflow-hidden">
          <button
            onClick={() => toggleAccordion(id)}
            className="w-full flex justify-between items-center p-4 text-left font-semibold bg-gray-100 hover:bg-gray-200 transition">
            {title}
            <span
              className={`transform transition-transform duration-300 ${
                openId === id ? "rotate-180" : ""
              }`}>
              ▼
            </span>
          </button>

          <div
            className={`transition-all duration-300 ease-in-out overflow-hidden bg-white ${
              openId === id
                ? "max-h-40 p-4 opacity-100"
                : "max-h-0 opacity-0"
            }`}>
            <p className="text-gray-600">{content}</p>
          </div>
        </div>
    </div>
  );
};

export default Accordion;
