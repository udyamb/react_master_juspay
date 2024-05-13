// App.js
import React, { useState } from 'react';
import './App.css';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Sidebar from './Components/Sidebar';
import MainContent from './Components/Maincontent';
import PreviewArea from './Components/PreviewArea';
import { Card } from '@mui/material';

function App() {
  const [transform, setTransform] = useState({
    translateX: 0,
    translateY: 0,
    rotate: 0,
  });

  const handleMove = () => {
    const { translateX, translateY, rotate } = transform;
    
    const radianAngle = rotate * (Math.PI / 180);
    const newX = translateX + Math.cos(radianAngle) * 10; 
    const newY = translateY + Math.sin(radianAngle) * 10; 

    setTransform({
      ...transform,
      translateX: newX,
      translateY: newY,
    });
  };

  const handleRotateLeft = () => {

    setTransform((prevTransform) => ({
      ...prevTransform,
      rotate: prevTransform.rotate - 15,
    }));
  };

  const handleRotateRight = () => {
    // Increment rotate by 15 for rotating right
    setTransform((prevTransform) => ({
      ...prevTransform,
      rotate: prevTransform.rotate + 15,
    }));
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
      <div>
          <Card variant="outlined">
        <p>I have not worked with SVG images and to create a clone of MIT scratch upto 80% in the given timeline close to impossible.</p>
        <p>Instead of downloading the starter project,I have made a react APP of my own and added the functionalities that were asked(Drag and Drop & Movement on events)</p>
        <p>The css is not upto the mark as I have not made any changes to the CSS files</p>
        <p>Please judge on functionality and concepts</p>
        </Card>
          </div>
        <div className="container">

          <div className="sidebar">
            <Sidebar onMove={handleMove} onRotateLeft={handleRotateLeft} onRotateRight={handleRotateRight} />
          </div>
          <div className="main">
            <MainContent />
          </div>
          <div className="third-column" style={{ width: '50%' }}>
            <PreviewArea transform={transform} />
          </div>
        </div>
      </div>
    </DndProvider>
  );
}

export default App;
