import React, { useState } from "react";
import { Text, View, Button } from "react-native";
import CampoInteiro from "../../../comonentes/CampoInteiro";
import estilos from "./estilos";

export default function Item({ nome, preco, descrisao }) {
  const [quantidade, setQuantidade] = useState(1);

  return (
    <>
      <View style={estilos.informacao}>
        <Text style={estilos.nome}>{nome}</Text>
        <Text style={estilos.descricao}>{descrisao}</Text>
        <Text style={estilos.preco}>{preco}</Text>
      </View>
      <View style={estilos.carrinho}>
        <View>
          <View style={estilos.valor}>
            <Text style={estilos.descricao}>Quantidade: </Text>
            <CampoInteiro valor={quantidade} acao={setQuantidade} />
          </View>
          <View style={estilos.valor}>
            <Text style={estilos.descricao}>Preço: </Text>
            <Text style={estilos.preco}>0</Text>
          </View>
        </View>
        <Button title="Adicionar" />
      </View>
      <View style={estilos.divisor} />
    </>
  );
}
