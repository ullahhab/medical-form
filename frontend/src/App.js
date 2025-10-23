// App.js
import React, { useState } from "react";
import "./App.css";

// DailyLogs Component
const DailyLogs = ({ onSubmitLog }) => {
  const [meal, setMeal] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!meal.trim()) return;

    onSubmitLog({
      meal: meal.trim(),
      timestamp: new Date(),
    });

    setMeal("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-8 bg-white rounded-3xl shadow-xl mb-8 max-w-3xl mx-auto"
    >
      <h2 className="text-3xl font-bold mb-6 text-center">Log Your Meal</h2>
      <input
        type="text"
        value={meal}
        onChange={(e) => setMeal(e.target.value)}
        placeholder="What did you eat today?"
        className="border-2 border-gray-300 rounded-2xl p-6 w-full text-2xl focus:outline-none focus:ring-4 focus:ring-blue-400"
        required
      />
      <button
        type="submit"
        className="mt-6 bg-blue-500 text-white font-bold px-8 py-4 rounded-2xl w-full hover:bg-blue-600 transition text-xl"
      >
        Add Meal
      </button>
    </form>
  );
};

// ImageUpload Component
const ImageUpload = ({ onUpload }) => {
  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setPreview(URL.createObjectURL(file));
    onUpload(file);
  };

  return (
    <div className="p-8 bg-white rounded-3xl shadow-xl mb-8 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Upload Meal Image</h2>
      <input
        type="file"
        accept="image/*"
        onChange={handleChange}
        className="block w-full text-center text-lg"
      />
      {preview && (
        <img
          src={preview}
          alt="Preview"
          className="mt-6 mx-auto max-w-md rounded-3xl shadow-lg"
        />
      )}
    </div>
  );
};

// Challenges Component
const Challenges = () => {
  const challenges = [
    "Eat 3 servings of vegetables today",
    "Drink 2 liters of water",
    "Try a new healthy recipe",
  ];

  return (
    <div className="p-8 bg-gradient-to-r from-green-300 via-green-400 to-green-500 rounded-3xl mb-8 shadow-2xl max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center text-white">Today's Challenges</h2>
      <ul className="list-disc list-inside space-y-3 text-white text-xl">
        {challenges.map((c, idx) => (
          <li key={idx}>{c}</li>
        ))}
      </ul>
    </div>
  );
};

// Feed Component
const Feed = ({ logs, images }) => {
  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Feed</h2>
      <div className="space-y-8">
        {logs.map((log, idx) => (
          <div
            key={idx}
            className="p-6 bg-white rounded-3xl shadow-xl border border-gray-200"
          >
            <div className="text-2xl font-semibold">{log.meal}</div>
            <div className="text-sm text-gray-400 mt-2 text-right">
              {log.timestamp.toLocaleString()}
            </div>
          </div>
        ))}
        {images.map((img, idx) => (
          <div
            key={idx}
            className="p-6 bg-white rounded-3xl shadow-xl border border-gray-200"
          >
            <img
              src={URL.createObjectURL(img.file)}
              alt="Meal"
              className="mx-auto max-w-lg rounded-3xl shadow-lg"
            />
            <div className="text-sm text-gray-400 mt-3 text-center">
              {img.timestamp.toLocaleString()}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Main App
function App() {
  const [logs, setLogs] = useState([]);
  const [images, setImages] = useState([]);

  const handleAddLog = (log) => {
    setLogs([log, ...logs]);
  };

  const handleAddImage = (file) => {
    setImages([{ file, timestamp: new Date() }, ...images]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-blue-100 to-blue-200 py-12">
      <h1 className="text-5xl font-bold text-center mb-12 text-gray-800">EatTrackShare</h1>

      <Challenges />
      <DailyLogs onSubmitLog={handleAddLog} />
      <ImageUpload onUpload={handleAddImage} />
      <Feed logs={logs} images={images} />
    </div>
  );
}

export default App;
