import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import Imagelist from "./components/ImageList";
import searchImage from "./api"

function App(){
  const [images , setImage] = useState([]);

  const handleSubmit= async (term) => {
    const result = await searchImage(term);
    setImage(result)
  };
  return(
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <Imagelist images={images}/>
    </div>
  )
}
export default App;