import { useHotkeys } from "react-hotkeys-hook";
import { THEMES, useThemeStore } from "../../store/themeStore";

const ToggleTheme = () => {
  const currentTheme = useThemeStore((state) => state.theme);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);

  // TODO: use icon instead of text
  let buttonLabel = "";
  if (currentTheme === THEMES.dark) {
    buttonLabel = "Switch to light";
  } else if (currentTheme === THEMES.light) {
    buttonLabel = "Switch to dark";
  }

  useHotkeys("shift+t", () => {
    toggleTheme();
  });

  return (
    <>
      <button onClick={toggleTheme}> {buttonLabel}</button>
    </>
  );
};

export default ToggleTheme;
