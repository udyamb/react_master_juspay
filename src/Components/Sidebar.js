// Sidebar.js
import React from 'react';
import { useDrag } from 'react-dnd';
import Button from '@mui/material/Button';


const SidebarItem = ({ text }) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'ITEM', 
    item: { text },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      style={{ opacity: isDragging ? 0.5 : 1, cursor: 'pointer', border: '1px solid #ccc', padding: '8px', marginBottom: '4px' }}
    >
      {text}
    </div>
  );
};

const Sidebar = ({ onMove, onRotateLeft, onRotateRight }) => {
    return (
        <>
    <div className='sidebarcss'>
      <SidebarItem text="When Flag Clicked" />
      <SidebarItem text="When Sprite Clicked" />
      <SidebarItem text="When Space clicked" /> 
      </div>
<div>

      <div style={{marginBottom:"5px"}}>
      <Button variant='outlined' color='primary' onClick={onMove}>Move</Button>
        </div>  
        <div style={{marginBottom:"5px"}}>
                  <Button variant='outlined' color='primary' onClick={onRotateLeft}>Rotate Left 15°</Button>
            </div> 
             <div style={{marginBottom:"5px"}}>
                      <Button variant='outlined' color='primary' onClick={onRotateRight}>Rotate Right 15°</Button>
                </div>  
    </div>
    </>
  );
};

export default Sidebar;
