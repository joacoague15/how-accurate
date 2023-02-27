import GenerateSection from "./GenerateSection";
import ImgGenerated from "./ImgGenerated";
import { useState } from "react";
import Layout from "./Layout";

function App() {
    const [img, setImg] = useState('');
    const [isLoaded, setIsLoaded] = useState(true);

    return (
        <Layout>
            <div style={{ backgroundColor: "black", display: "flex", flexDirection: "column" }} className="App">
                <GenerateSection setImg={setImg} isLoaded={isLoaded} setIsLoaded={setIsLoaded} />
                <ImgGenerated img={img} isLoaded={isLoaded} setIsLoaded={setIsLoaded} />
            </div>
        </Layout>
  );
}

export default App;
