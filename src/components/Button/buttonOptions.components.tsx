import { useState } from "react";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import Button from "./button.component";
import ButtonCrud from "./buttonCrud";

const ButtonOption = () => {
  const [optionsActive, setOptionsActive] = useState<boolean>();
  const buttonOptionsRef = useOutsideClick<HTMLDivElement>(() =>
    setOptionsActive(false)
  );
  const handleOptions = () => {
    setOptionsActive(true);
  };

  return (
    <div className="relative" ref={buttonOptionsRef}>
      <Button
        icon="mi:options-vertical"
        buttonClass="flex items-center justify-center w-full"
        event={handleOptions}
      ></Button>
      {optionsActive && (
        <ul className="shadow-2xl flex flex-col w-32 absolute z-30 top-0 right-0 bg-white border rounded-md">
          <ButtonCrud option="view" />
          <ButtonCrud option="update" />
          <Button buttonClass="hover:bg-gray-200">Elimiar</Button>
        </ul>
      )}
    </div>
  );
};

export default ButtonOption;
