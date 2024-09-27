"use client";

import React from "react";
import RecurrencePicker from "@/components/RecurrencePicker";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <RecurrencePicker />
    </div>
  );
}
