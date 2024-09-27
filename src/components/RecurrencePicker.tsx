"use client";

import React from "react";
import RecurrenceOptions from "./RecurrenceOptions";
import DatePickerComponent from "./DatePickerComponent";
import PreviewCalendar from "./PreviewCalendar";

const RecurrencePicker = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4 space-y-6 ">
      <RecurrenceOptions />
      <DatePickerComponent />
      <PreviewCalendar />
      <div>Submitted by Abhilash R Prasad</div>
      <div>arprasad.abhi@gmail.com, +91-9886737745</div>
    </div>
  );
};

export default RecurrencePicker;
