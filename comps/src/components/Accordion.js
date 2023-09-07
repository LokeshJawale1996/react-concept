import { useState } from "react";
function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(0);
  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;
    const handleClick = (nextIndex) => {
      setExpandedIndex(nextIndex);
    };

    const icon = <span>{isExpanded ? "DOWN" : "LEFT"}</span>;
    return (
      <div key={item.id}>
        <div onClick={() => handleClick(index)}>
          {icon}

          {item.label}
        </div>
        {/* conditional rendering according to index */}
        {isExpanded && <div>{item.content}</div>}
      </div>
    );
  });
  return <div>{renderedItems}</div>;
}
export default Accordion;
