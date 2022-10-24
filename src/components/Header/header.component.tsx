import { Icon } from "@iconify/react";

const Header = () => {
  return (
    <header className="bg-green-300 w-full px-8 h-16 rounded-lg flex items-center justify-between">
      <h2 className="text-2xl font-bold text-white">Test MovilBox</h2>
      <div className="flex gap-x-4 items-center">
        <div className="flex gap-x-2 items-center text-white">
          <Icon icon={"twemoji:flag-spain"} />
          <p className="font-bold">Español</p>
        </div>
        <span className="relative">
          <Icon icon={"carbon:shopping-cart"} className="text-white w-5 h-5" />
          <span className="text-xs absolute -top-2 -right-2 bg-red-600 w-4 h-4 rounded-full text-white flex items-center justify-center font-bold ">
            8
          </span>
        </span>
        <span className="relative">
          <Icon
            icon={"clarity:notification-line"}
            className="text-white w-5 h-5"
          />
          <span className="text-xs absolute -top-2 -right-2 bg-red-600 w-4 h-4 rounded-full text-white flex items-center justify-center font-bold">
            4
          </span>
        </span>

        <div className="text-white flex flex-col items-end">
          <p className="text-whi}te font-bold mb-0 pb-0">Jhon Doe</p>
          <span className="text-sm">Admin</span>
        </div>
        <span className="w-10 h-10 bg-white flex items-center justify-center rounded-full relative">
          <span className="font-bold text-green-300">JS</span>
          <span className="bg-green-400 border-2 p-1 rounded-full border-white absolute bottom-0 right-0"></span>
        </span>
      </div>
    </header>
  );
};

export default Header;
