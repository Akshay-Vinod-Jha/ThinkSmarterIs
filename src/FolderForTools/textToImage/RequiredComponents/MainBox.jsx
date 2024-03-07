import React from "react";
import ActualBoxes from "./ActualBoxes";
function MainBox({setPrompt}) {
  return (
    <div className="w-99 h-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 grid-rows-2 mx-1">
      {['Create a stylized portrait of an entrepreneur against a city skyline. Use dramatic lighting and post-processing techniques to create a futuristic look.',
      'Recreate the essence of autumn by depicting a tree-lined boulevard covered in vibrant, multicolored leaves. Be meticulous with details, from the textures of the leaves to the play of light and shadows.',
      'Capture a bustling city street at dusk with people and vehicles under glowing neon lights. Use a low-angle shot to capture the grandeur of the skyscrapers and the vibrant atmosphere of the city.',
      'Illustrate a lone lighthouse standing against the vibrant colors of a sunset. Emphasize the contrasting elements, such as the lighthouse’s solidity against the ephemeral beauty of the sunset.']
        .map((value, index) => {
          return (
            <ActualBoxes key={`txttoimgActualBoxes${index}`} setPrompt={setPrompt}>
              {value}
            </ActualBoxes>
          );
        })}
    </div>
  );
}

export default MainBox;
