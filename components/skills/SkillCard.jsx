import { VStack, Divider, Text } from "@chakra-ui/react";
import React from "react";

 const SkillCard= ({ icon, label, size, boxSize }) => {
  return (
    <VStack
      spacing={2}
      minH={"150px"}
      boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)"
      rounded={"md"}
      p={boxSize}
      transition="all 0.2s ease-in-out"
      cursor="pointer"
      _hover={{
        transform: "scale(1.05)",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
      }}
    >
      {React.cloneElement(icon, { size })}
      <Divider />
      <Text as="span">{label}</Text>
    </VStack>
  );
};

export default SkillCard;