// src/contexts/UIContext.jsx
import { createContext, useState } from "react";
import { toast } from "sonner";

// eslint-disable-next-line react-refresh/only-export-components
export const UIContext = createContext();

export function UIProvider({ children }) {
  const [modalOpen, setModalOpen] = useState(false);
  
  const notify = {
    success: (msg) => toast.success(msg),
    error: (msg) => toast.error(msg),
    info: (msg) => toast(msg),
  };

  return (
    <UIContext.Provider
      value={{
        modalOpen,
        setModalOpen,
        notify  // NUEVO
      }}
    >
      {children}
    </UIContext.Provider>
  );
}
