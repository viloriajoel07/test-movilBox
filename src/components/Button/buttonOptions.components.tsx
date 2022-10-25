import { FC } from "react";
import { useState } from "react";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import Button from "./button.component";
import ButtonCrud from "./buttonCrud";

interface buttonOptionsProps {
  data?: any;
}

const ButtonOption: FC<buttonOptionsProps> = ({ data }) => {
  const [optionsActive, setOptionsActive] = useState<boolean>();

  const ulRef = useOutsideClick<HTMLDivElement>(() => setOptionsActive(false));

  const handleOptions = () => {
    setOptionsActive(true);
  };

  return (
    <div className="relative" ref={ulRef}>
      <Button
        icon="mi:options-vertical"
        buttonClass="flex items-center justify-center w-full"
        event={handleOptions}
      ></Button>
      <ul
        className={`shadow-2xl flex flex-col w-32 absolute z-30 top-0 right-0 bg-white border rounded-md ${
          !optionsActive && "hidden"
        }`}
      >
        <ButtonCrud option="view" data={data} />
        <ButtonCrud option="update" data={data} />
        <ButtonCrud option="delete" data={data} />
      </ul>
    </div>
  );
};

export default ButtonOption;
