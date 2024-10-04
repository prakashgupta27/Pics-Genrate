import React from "react";
import ImageShow from "./ImageShow";
import './imageList.css';

function ImageList({images}){
  const renderimage = images.map((image)=>{
    return(
      <ImageShow image={image}/>
    )
  });
  return(
    <div className="image-list">{renderimage}</div>
  )
}
export default ImageList;