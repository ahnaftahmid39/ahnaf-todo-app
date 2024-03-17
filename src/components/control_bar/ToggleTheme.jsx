import { useHotkeys } from "react-hotkeys-hook";
import { THEMES, useThemeStore } from "../../store/themeStore";
import { CiDark, CiLight } from "react-icons/ci";

const ToggleTheme = () => {
  const currentTheme = useThemeStore((state) => state.theme);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);

  let buttonIcon = "";
  if (currentTheme === THEMES.dark) {
    buttonIcon = <CiLight size={32} />;
  } else if (currentTheme === THEMES.light) {
    buttonIcon = <CiDark size={32} />;
  }

  useHotkeys("shift+t", () => {
    toggleTheme();
  });

  return (
    <>
      <button onClick={toggleTheme}> {buttonIcon}</button>
    </>
  );
};

export default ToggleTheme;
