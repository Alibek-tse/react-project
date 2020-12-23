import React, { useContext, useState } from "react";
import { AlertContext } from "../context/alert/alertContext";

export const Search = () => {
  const [value, setValue] = useState("");
  const { show } = useContext(AlertContext);

  const onsubmit = (event) => {
    if (event.key !== "Enter") {
      return
    }
    if (value.trim()) {
      console.log('request with: ',value)
    } else {
      show('Введите данные пользователя!!!')
    }
  };

  return (
    <div className="form-group">
      <input
        type="text"
        className="form-control"
        placeholder="Введите ник пользователя..."
        onKeyPress={onsubmit}
        value={value}
        onChange={(event) => setValue(event.target.value)}
      ></input>
    </div>
  );
};
