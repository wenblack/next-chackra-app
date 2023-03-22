import { Button, useColorMode } from "@chakra-ui/react";

export function ChangeColorButton() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <header>
      <Button
        display={{ base: "none", sm: "none", md: "inline", lg: "inline" }}
        onClick={toggleColorMode}
      >
        Change to {colorMode === "light" ? "Dark" : "Light"} mode
      </Button>
    </header>
  );
}
