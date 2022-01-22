import React from "react";
import { Text, SafeAreaView, StatusBar, FlatList } from "react-native";
import Item from "./item";

export default function Servico() {
  const servico = [
    {
      id: 1,
      nome: "banho",
      preco: 79.9,
      descrisao: "Não de banho no seu gato! mas se precisar nos damos",
    },
    {
      id: 2,
      nome: "Vacina V4",
      preco: 89.9,
      descrisao: "Uma dose da vacina v4. Seu gato precisa de duas",
    },
    {
      id: 3,
      nome: "Vacina antirrábica",
      preco: 99.9,
      descrisao:
        "Uma dose da vacina antirrábica. Seu gato precisa de uma por ano",
    },
  ];

  return (
    <SafeAreaView>
      <StatusBar />
      {/* A status bar e para o android */}
      <Text>Serviços!</Text>
      <FlatList
        data={servico}
        renderItem={({ item }) => <Item {...item} />}
        keyExtractor={({id}) => String(id)}
      />
    </SafeAreaView>
  );
}
