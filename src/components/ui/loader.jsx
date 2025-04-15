// src/components/ui/loader.jsx
import { Loader2 } from "lucide-react";

export default function Spinner() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Loader2 className="h-6 w-6 animate-spin text-primary" />
    </div>
  );
}
