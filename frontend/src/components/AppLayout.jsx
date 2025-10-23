// App.jsx
import React, { useState } from "react";
import DailyLog from "./components/DailyLog";
import ImageUpload from "./components/ImageUpload";
import Challenges from "./components/Challenges";

function App() {
  const [logs, setLogs] = useState([]);

  const handleLog = (data) => {
    setLogs([...logs, { ...data, timestamp: new Date() }]);
  };

  const handleUpload = (file) => {
    console.log("Image uploaded:", file);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">EatTrackShare</h1>
      <Challenges />
      <DailyLog onSubmitLog={handleLog} />
      <ImageUpload onUpload={handleUpload} />

      <div className="mt-4">
        <h2 className="font-bold mb-2">Your Logs</h2>
        {logs.map((log, idx) => (
          <div key={idx} className="p-2 bg-white border rounded mb-2">
            <div>{log.meal}</div>
            {log.calories && <div>{log.calories} cal</div>}
            <div className="text-sm text-gray-500">{log.timestamp.toLocaleString()}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
