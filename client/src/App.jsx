import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./App.module.css"; 

function App() {
  const [image, setImage] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/random-image")
      .then(response => setImage(response.data))
      .catch(error => console.error("Error fetching image:", error));
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Random Image</h2>
      <div className={styles.card}>
        {image ? (
          <img src={image.url} alt="Random" className={styles.image} />
        ) : (
          <p className={styles.loading}>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default App;
