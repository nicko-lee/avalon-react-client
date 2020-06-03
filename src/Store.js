import React, { useState } from "react";

export const FormContext = React.createContext({});

const Store = ({ children }) => {
  const [formData, setFormData] = useState({});

  return (
    <FormContext.Provider value={[formData, setFormData]}>
      {children}
    </FormContext.Provider>
  );
};

export default Store;
