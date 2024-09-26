import { create } from "zustand";

interface RecurrenceState {
  recurrenceType: string;
  startDate: Date | null;
  endDate: Date | null;
  updateRecurrenceType: (type: string) => void;
  setStartDate: (date: Date) => void;
  setEndDate: (date: Date | null) => void;
}

export const useRecurrenceStore = create<RecurrenceState>((set) => ({
  recurrenceType: "daily",
  startDate: new Date(),
  endDate: null,
  updateRecurrenceType: (type) => set({ recurrenceType: type }),
  setStartDate: (date) => set({ startDate: date }),
  setEndDate: (date) => set({ endDate: date }),
}));
