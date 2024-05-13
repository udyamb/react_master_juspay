import React from "react";
import CatSprite from './Catsprite';

export default function PreviewArea({transform}) {
  return (

    <div className="flex-none h-full overflow-y-auto p-2">
      <CatSprite transform={transform} />
    </div>
  );
}
