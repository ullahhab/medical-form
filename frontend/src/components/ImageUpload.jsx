// ImageUpload.jsx
import React, { useState } from "react";

const ImageUpload = ({ onUpload }) => {
  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    const file = e.target.files[0];
    setImage(URL.createObjectURL(file));
    onUpload(file);
  };

  return (
    <div className="p-4 border rounded shadow bg-white space-y-2">
      <input type="file" accept="image/*" onChange={handleChange} />
      {image && <img src={image} alt="Preview" className="max-w-xs rounded" />}
    </div>
  );
};

export default ImageUpload;
