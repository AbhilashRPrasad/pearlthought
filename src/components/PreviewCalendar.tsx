"use client";

import React from "react";
import { useRecurrenceStore } from "@/store/recurrenceStore";

export default function PreviewCalendar() {
  const { startDate, endDate, recurrenceType } = useRecurrenceStore();

  return (
    <div className="mt-4 bg-green-300 p-2">
      <h3 className="text-lg font-medium">Preview</h3>
      <p>Recurrence Type: {recurrenceType.toUpperCase()}</p>
      <p>Start Date: {startDate?.toDateString()}</p>
      {endDate && <p>End Date: {endDate.toDateString()}</p>}
    </div>
  );
}
