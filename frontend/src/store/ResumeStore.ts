import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ResumeDataProps {
  name: string;
  setname: (newName: string) => void;
}

const ResumeData = create<ResumeDataProps>()(
  persist(
    (set) => ({
      name: "",
      setname: (newName) => set({ name: newName }),
    }),
    {
      name: "resume-data",
    }
  )
);

export default ResumeData;
