import { FC, InputHTMLAttributes } from "react";
import { useSelector } from "react-redux";
import clsx from "clsx";

interface selectProps extends InputHTMLAttributes<HTMLSelectElement> {
  containerClass?: string;
  inputSelectClass?: string;
  labelText?: string;
  selected?: number;
  name?: string;
  changeEvent?: any;
  placeholder?: string;
  id?: string;
  value?: number;
}

const SelectProfiles: FC<selectProps> = ({
  containerClass,
  inputSelectClass,
  labelText,
  name,
  selected,
  changeEvent,
  placeholder,
  value,
  id,
}) => {
  const profiles = useSelector(({ users }: any) => users.profiles);

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
        value={value}
      >
        {selected ? (
          <option className="hidden">
            {selected === 1
              ? "Practicante"
              : selected === 2
              ? "Desarrollador"
              : selected === 3
              ? "Vendedor"
              : "Administrativo"}
          </option>
        ) : (
          <option className="hidden">{labelText}</option>
        )}

        {profiles.map((profile: { id: number; name: string }) => (
          <option key={profile.id} value={profile.id}>
            {profile.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectProfiles;
