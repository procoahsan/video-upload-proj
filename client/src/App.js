import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('video', selectedFile);

      axios.post('http://127.0.0.1:5000/video', formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // Important for file uploads
        },
      })
        .then((response) => {
          // Handle the response from the Flask backend, if needed
          console.log('File uploaded successfully', response.data);
        })
        .catch((error) => {
          console.error('Error uploading file:', error);
        });
    }
  };

  return (
    <div>
      <h1>Upload Video</h1>
      <input type="file" accept="video/*" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}

export default App;
