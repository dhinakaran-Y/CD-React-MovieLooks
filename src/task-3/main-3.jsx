import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style-3.css";
import Accordion from "./components-3/Accordion";
import Dropdown from "./components-3/Dropdown";
import Anchor from "../task-1/components/Anchor";
import RatingBatch from "../task-1/components/RatingBatch";
import RatingDiv from "./components-3/RatingDiv";

const accordionData = [
  {
    id: 1,
    title: "What is React?",
    content:
      "React is a JavaScript library for building user interfaces using components and a virtual DOM.",
  },
  {
    id: 2,
    title: "What is Tailwind CSS?",
    content:
      "Tailwind CSS is a utility-first CSS framework that lets you build modern UI directly in your markup.",
  },
  {
    id: 3,
    title: "Why use an Accordion?",
    content:
      "Accordions help organize content by hiding sections until users need them.",
  },
];

createRoot(document.getElementById("root")).render(
  <>
    <Anchor path={"index.html"} link={"home"} />
    <div className="py-10">
      {accordionData.map((accordion) => {
        return (
          <Accordion
            id={accordion.id}
            title={accordion.title}
            content={accordion.content}
          />
        );
      })}
    </div>
    <hr />
    <div className="flex justify-center py-10">
      <Dropdown />
    </div>
    <hr />
    <div className="flex justify-center py-10">
      <RatingDiv/>
    </div>
  </>,
);
