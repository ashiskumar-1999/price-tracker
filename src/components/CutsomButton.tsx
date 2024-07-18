import React from "react";
import { Button } from "@chakra-ui/react";

type buttonProp = {
  label: string;
  onClick: () => void;
};

const CutsomButton = ({ label, onClick }: buttonProp) => {
  return (
    <Button
      bgColor="none"
      width="50px"
      height="33px"
      borderRadius={5}
      color="gray.200"
      my={5}
      mx={1}
      _hover={{ bgColor: "none" }}
      _active={{ bgColor: "purple", color: "white" }}
      _focus={{ bgColor: "purple", color: "white" }}
      onClick={onClick}
    >
      {label}
    </Button>
  );
};

export default CutsomButton;
