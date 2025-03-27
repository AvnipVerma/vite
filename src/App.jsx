import { useState } from "react";
import "./App.module.css";

function App() {
  const [imageData, setImageData] = useState(null);
  const [error, setError] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    {
      id: 1,
      url: "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 2,
      url: "https://plus.unsplash.com/premium_photo-1664474404787-1228364aa978?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];

  const fetchImageData = async () => {
    setError(null);
    const data = images[currentImageIndex];

    try {
      const response = await fetch(`http://localhost:5000/get-image?id=${data.id}&url=${encodeURIComponent(data.url)}`);

      if (!response.ok) {
        throw new Error("Failed to fetch image data");
      }

      const result = await response.json();
      setImageData(result);
      // Cycle to the next image
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    } catch (error) {
      console.error("Error fetching image data:", error);
      setError("Failed to fetch image. Please make sure the server is running on port 5000.");
    }
  };

  return (
    <div className="container">
      <button onClick={fetchImageData}>Fetch Next Image</button>
      {error && <div className="error">{error}</div>}
      {imageData && (
        <div className="card">
          <h3>Image {imageData.id}</h3>
          <img src={imageData.url} alt="Unsplash" className="image" />
        </div>
      )}
    </div>
  );
}

export default App;
