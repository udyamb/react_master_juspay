// MainContent.js
import React, { useState } from 'react';
import { useDrop } from 'react-dnd';

const MainContent = () => {
  const [droppedItems, setDroppedItems] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleDeleteItem = (index) => {
    const newItems = [...droppedItems];
    newItems.splice(index, 1);
    setDroppedItems(newItems);
  };

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const [{ isOver }, drop] = useDrop({
    accept: 'ITEM',
    drop: (item) => {
      setDroppedItems([...droppedItems, item.text]);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <div
      ref={drop}
      style={{ border: '1px dashed #ccc', minHeight: '200px', marginTop: '20px', padding: '20px' }}
    >
      {isOver && <div>Drop here</div>}
      {droppedItems.map((item, index) => (
        <div
          key={index}
          style={{ marginBottom: '4px', display: 'flex', alignItems: 'center', position: 'relative' }}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          <div>{item}</div>
          {hoveredIndex === index && (
            <div
              className="delete-icon-container"
              style={{ position: 'absolute', right: '5px', cursor: 'pointer', display: 'inline-block' }}
              onClick={() => handleDeleteItem(index)}
            >
              &#10006;
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default MainContent;
