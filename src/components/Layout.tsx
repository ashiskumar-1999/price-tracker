import React, { ReactNode } from "react";
import { Box } from "@chakra-ui/react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Box px="100px" py="40px">
      {children}
    </Box>
  );
};

export default Layout;
