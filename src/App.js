import GenerateSection from "./GenerateSection";
import ImgGenerated from "./ImgGenerated";
import { useState } from "react";

function App() {
  const [img, setImg] = useState('');

  return (
    <div style={{ backgroundColor: "black", height: "100vh", width: "100vw", display: "flex" }} className="App">
        <GenerateSection setImg={setImg} />
        {img && <ImgGenerated img={img} />}
    </div>
  );
}

export default App;
