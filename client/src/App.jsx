import { useState } from "react";
import "./App.module.css"; 
function App() {
  const [imageData, setImageData] = useState(null);
  const [error, setError] = useState(null);

  const fetchImageData = async () => {
    setError(null); 
    const data = {
      id: Math.floor(Math.random() * 1000), 
      url: "https://placekitten.com/200/300" 
    };

    try {
      const response = await fetch(`http://localhost:5000/get-image?id=${data.id}&url=${encodeURIComponent(data.url)}`);

      if (!response.ok) {
        throw new Error("Failed to fetch image data");
      }

      const result = await response.json();
      setImageData(result);
    } catch (error) {
      console.error("Error fetching image data:", error);
      setError("Failed to fetch image. Please make sure the server is running on port 5000.");
    }
  };

  return (
    <div className="container">
      <button onClick={fetchImageData}>Fetch Image</button>
      {error && <div className="error">{error}</div>}
      {imageData && (
        <div className="card">
          <h3>ID: {imageData.id}</h3>
          <img src={imageData.url} alt="Random" className="image" />
        </div>
      )}
    </div>
  );
}

export default App;
