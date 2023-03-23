import { Button, useColorMode } from "@chakra-ui/react";
import { BsMoon, BsSun } from 'react-icons/bs'
export function ChangeColorButton() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <header>
      <Button
        display={{ base: "none", sm: "none", md: "inline", lg: "inline" }}
        onClick={toggleColorMode}
      >
        {colorMode === "light" ? <BsMoon /> : <BsSun />}
      </Button>
    </header>
  );
}

