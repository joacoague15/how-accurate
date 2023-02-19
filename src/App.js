import GenerateSection from "./GenerateSection";
import ImgGenerated from "./ImgGenerated";
import {useEffect, useState} from "react";

function App() {
  const [img, setImg] = useState('');
    const [isLoaded, setIsLoaded] = useState(true);

    useEffect(() => {
      console.log(isLoaded)
    }, [isLoaded])

    return (
    <div style={{ backgroundColor: "black", height: "100vh", width: "100vw", display: "flex" }} className="App">
        <GenerateSection setImg={setImg} isLoaded={isLoaded} setIsLoaded={setIsLoaded} />
        {img && <ImgGenerated img={img} setIsLoaded={setIsLoaded} />}
    </div>
  );
}

export default App;
