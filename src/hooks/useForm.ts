import { useState } from "react";

const useForm = (initialState: any) => {
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e: any) => {
    const field = e.target.name;
    setFormData({
      ...formData,
      [field]: e.target.value,
    });
  };

  return {
    formData,
    handleChange,
  };
};

export default useForm;
