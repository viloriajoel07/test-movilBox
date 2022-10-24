import React, { FC, InputHTMLAttributes, useEffect, useState } from "react";
import { API_URL } from "../../constants/config";
import clsx from "clsx";

interface selectProps extends InputHTMLAttributes<HTMLSelectElement> {
  containerClass?: string;
  inputSelectClass?: string;
  labelText?: string;
  list?: any;
  name?: string;
  placeholder?: string;
  id?: string;
}

const SelectList: FC<selectProps> = ({
  containerClass,
  inputSelectClass,
  labelText,
  name,
  list,
  placeholder,
  id,
}) => {
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
        className={clsx("outline-none", inputSelectClass)}
        placeholder={placeholder}
      >
        <option className="hidden">{labelText}</option>
        {list.map((profile: any) => {
          return (
            <option value={profile.id} key={profile.id}>
              {profile.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectList;
