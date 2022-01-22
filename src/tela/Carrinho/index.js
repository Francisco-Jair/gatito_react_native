import React from "react";
import { FlatList } from "react-native";
import Item from "./item";
import StatusCarrinho from "../../comonentes/StatusCarrinho";

const servico = [
  {
    id: 1,
    nome: "banho",
    preco: 79.9,
    descrisao: "Não de banho no seu gato! mas se precisar nos damos",
    quantidade: 1,
  },
  {
    id: 2,
    nome: "Vacina V4",
    preco: 89.9,
    descrisao: "Uma dose da vacina v4. Seu gato precisa de duas",
    quantidade: 2,
  },
  {
    id: 3,
    nome: "Vacina antirrábica",
    preco: 99.9,
    descrisao:
      "Uma dose da vacina antirrábica. Seu gato precisa de uma por ano",
    quantidade: 1,
  },
];

export default function Carrinho() {
  const total = servico.reduce(
    (soma, { preco, quantidade }) => soma + preco * quantidade,
    0
  );
  return (
    <>
      <StatusCarrinho total={total} />
      <FlatList
        data={servico}
        renderItem={({ item }) => <Item {...item} />}
        keyExtractor={({ id }) => String(id)}
      />
    </>
  );
}
