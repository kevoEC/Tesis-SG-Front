// src/contexts/UIProvider.jsx
import { useState } from "react";
import { toast } from "sonner";
import { UIContext } from "./UIContext"; // importa desde archivo separado

export function UIProvider({ children }) {
  const [modalOpen, setModalOpen] = useState(false);

  const notify = {
    success: (msg) => toast.success(msg),
    error: (msg) => toast.error(msg),
    info: (msg) => toast(msg),
  };

  return (
    <UIContext.Provider value={{ modalOpen, setModalOpen, notify}}>
      {children}
    </UIContext.Provider>
  );
}
