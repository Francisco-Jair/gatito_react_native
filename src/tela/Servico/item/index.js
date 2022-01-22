import React from "react";
import { Text } from "react-native";

export default function Item({ nome, preco, descrisao }) {
  return (
    <>
      <Text>{nome}</Text>
      <Text>{preco}</Text>
      <Text>{descrisao}</Text>
    </>
  );
}
