import React, { FC, InputHTMLAttributes, useEffect, useState } from "react";
import { API_URL } from "../../constants/config";
import clsx from "clsx";

interface selectProps extends InputHTMLAttributes<HTMLSelectElement> {
  containerClass?: string;
  inputSelectClass?: string;
  labelText?: string;
  changeEvent?: any;
  name?: string;
  selected?: number;
  placeholder?: string;
  id?: string;
}

const SelectStates: FC<selectProps> = ({
  containerClass,
  inputSelectClass,
  labelText,
  name,
  selected,
  changeEvent,
  placeholder,
  id,
}) => {
  const stateUser = [
    {
      id: 1,
      name: "Activo",
    },
    {
      id: 0,
      name: "Inactivo",
    },
  ];

  return (
    <div
      className={clsx(
        "w-full px-4 py-2 flex flex-col border rounded-md mb-4",
        containerClass
      )}
    >
      <label htmlFor={name} className="text-sm font-bold">
        {labelText}
      </label>
      <select
        name={name}
        id={id}
        onChange={changeEvent}
        className={clsx("outline-none", inputSelectClass)}
        placeholder={placeholder}
      >
        {selected ? (
          <option className="hidden">
            {selected === 0 ? "Inactivo" : "Activo"}
          </option>
        ) : (
          <option className="hidden">{labelText}</option>
        )}
        <option className="hidden">{labelText}</option>
        {stateUser.map((profile: { id: number; name: string }) => (
          <option key={profile.id} value={profile.id}>
            {profile.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectStates;
