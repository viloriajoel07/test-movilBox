import { FC } from "react";
import { Button } from "../Button";

interface headerProps {
  setOpen?: any;
  titleHeader?: string;
}

const HeaderForm: FC<headerProps> = ({ setOpen, titleHeader }) => {
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-gray-200 text-gray-600">
      <h2 className="font-bold text-xl">{titleHeader}</h2>
      <Button
        event={() => setOpen(false)}
        buttonClass="!p-0"
        icon="heroicons:x-mark-20-solid"
      ></Button>
    </header>
  );
};

export default HeaderForm;
