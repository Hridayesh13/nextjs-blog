import { IconButton, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export const ToggleColorMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton
      aria-label="Toggle Color Mode"
      size="sm"
      icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
      borderRadius="20px"
      colorScheme={colorMode === "light" ? "blackAlpha" : "yellow"}
      onClick={toggleColorMode}
    />
  );
};
