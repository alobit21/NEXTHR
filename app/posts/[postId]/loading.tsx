"use client";
import { Center, Text } from "@chakra-ui/react";
import React from "react";

export default function Loading() {
  return (
    <Center pt={20} w="full">
      <Text color="white">Loading...</Text>
    </Center>
  );
}