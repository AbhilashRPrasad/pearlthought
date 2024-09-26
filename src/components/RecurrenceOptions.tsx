"use client";

import React from "react";
import { useRecurrenceStore } from "@/store/recurrenceStore";

export default function RecurrenceOptions() {
  const { recurrenceType, updateRecurrenceType } = useRecurrenceStore();

  return (
    <div className="mb-4">
      <label className="block mb-2 font-medium text-gray-700">Recurrence Type</label>
      <select
        className="border p-2 rounded w-full"
        value={recurrenceType}
        onChange={(e) => updateRecurrenceType(e.target.value)}
      >
        {["daily", "weekly", "monthly", "yearly"].map((type) => (
          <option key={type} value={type}>
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
}
