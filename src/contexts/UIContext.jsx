<<<<<<< Updated upstream
<<<<<<< Updated upstream
// src/contexts/UIContext.jsx
import { createContext, useState } from "react";
import { toast } from "sonner";
=======
// src/contexts/UIContext.js
import { createContext } from "react";
>>>>>>> Stashed changes
=======
// src/contexts/UIContext.js
import { createContext } from "react";
>>>>>>> Stashed changes

// eslint-disable-next-line react-refresh/only-export-components
export const UIContext = createContext();
<<<<<<< Updated upstream
<<<<<<< Updated upstream

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
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
