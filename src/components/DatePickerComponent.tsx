"use client";

import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useRecurrenceStore } from "@/store/recurrenceStore";
import "./DatePicker.css";

export default function DatePickerComponent() {
  const { startDate, setStartDate, endDate, setEndDate } = useRecurrenceStore();

  return (
    <>
      <div className="flex space-x-4">
        <div>
          <label className="mr-1">Start Date</label>
          <DatePicker
            className="max-w-[150px] border border-black border-solid p-1"
            selected={startDate}
            onChange={(date) => setStartDate(date as Date)}
          />
        </div>
        <div>
          <label className="mr-1">End Date (optional)</label>
          <DatePicker
            className="max-w-[150px] border border-black border-solid p-1"
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            isClearable
          />
        </div>
      </div>
    </>
  );
}
