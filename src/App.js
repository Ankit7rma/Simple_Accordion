import React, { useState } from "react";
import "./styles.css";
function AccordionItem({ title, content, isOpen, onClick }) {
  return (
    <div className={`accordion-item ${isOpen ? "open" : ""}`}>
      <div className="accordion-header" onClick={onClick}>
        {title}
      </div>
      {isOpen && <div className="accordion-content">{content}</div>}
    </div>
  );
}

function Accordion() {
  const [items, setItems] = useState([
    {
      title: "Accordion Item 1",
      content: "Content for Item 1",
      isOpen: false
    },
    {
      title: "Accordion Item 2",
      content: "Content for Item 2",
      isOpen: false
    },
    {
      title: "Accordion Item 3",
      content: "Content for Item 3",
      isOpen: false
    }
  ]);

  const toggleItem = (index) => {
    setItems((prevItems) =>
      prevItems.map((item, i) => ({
        ...item,
        isOpen: i === index ? !item.isOpen : false
      }))
    );
  };

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={item.isOpen}
          onClick={() => toggleItem(index)}
        />
      ))}
    </div>
  );
}

export default Accordion;
