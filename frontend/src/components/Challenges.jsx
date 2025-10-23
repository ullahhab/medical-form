// Challenges.jsx
import React from "react";

const challenges = [
  "Eat 3 servings of vegetables today",
  "Drink 2 liters of water",
  "Try a new healthy recipe",
];

const Challenges = () => {
  return (
    <div className="p-4 border rounded shadow bg-white space-y-2">
      <h2 className="font-bold">Today's Challenges</h2>
      <ul className="list-disc pl-5">
        {challenges.map((challenge, idx) => (
          <li key={idx}>{challenge}</li>
        ))}
      </ul>
    </div>
  );
};

export default Challenges;
