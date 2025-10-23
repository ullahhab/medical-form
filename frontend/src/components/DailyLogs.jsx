// DailyLog.jsx
import React from "react";
import { useForm } from "react-hook-form";

const DailyLog = ({ onSubmitLog }) => {
  const { register, handleSubmit, reset } = useForm();

  const handleSubmitForm = (data) => {
    onSubmitLog(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(handleSubmitForm)} className="space-y-4 p-4 border rounded shadow bg-white">
      <div>
        <label>What did you eat today?</label>
        <input {...register("meal", { required: true })} className="border p-2 w-full" placeholder="E.g., salad, sandwich..." />
      </div>

      <div>
        <label>Calories (optional)</label>
        <input type="number" {...register("calories")} className="border p-2 w-full" placeholder="E.g., 350" />
      </div>

      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Log Meal</button>
    </form>
  );
};

export default DailyLog;
