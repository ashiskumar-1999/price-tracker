import { Avatar, Box, Heading, HStack, Text } from "@chakra-ui/react";
import React from "react";

type HeaderProps = {
  image: string;
  price: string;
  price_change: number;
  price_change_percentage: number;
};

const Header = ({
  image,
  price,
  price_change,
  price_change_percentage,
}: HeaderProps) => {
  return (
    <Box>
      <HStack gap={2}>
        <Avatar size="lg" src={image} name="Ethereum" />
        <Heading fontSize="70px" color="blue">
          {price}
        </Heading>
        <Text fontSize="2xl" pt="-10px" color="gray.100">
          USD
        </Text>
      </HStack>
      <Text
        px={20}
        fontSize="xl"
        color={price_change && price_change_percentage > 0 ? "green" : "red"}
      >
        {price_change_percentage.toFixed(2)}% (${price_change.toFixed(2)})
      </Text>
    </Box>
  );
};

export default Header;
