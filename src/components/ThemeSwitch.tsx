import { MdLightMode } from "react-icons/md";
import { useTheme } from "../provider";
import { CgDarkMode } from "react-icons/cg";

export const ThemeSwitch = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      className="hover:bg-primary group size-7 flex  justify-center items-center rounded-full cursor-pointer"
    >
      {theme === "dark" ? (
        <MdLightMode className="text-base" />
      ) : (
        <CgDarkMode className="text-d-base group-hover:text-base text-xl" />
      )}
    </button>
  );
};
