import React, { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import Botao from "../../../comonentes/Botao";
import CampoInteiro from "../../../comonentes/CampoInteiro";
import estilos from "./estilos";

export default function Item({ nome, preco, descrisao }) {
  const [quantidade, setQuantidade] = useState(1);
  const [total, setTotal] = useState(preco);
  const [expandir, setExpandir] = useState(false);

  const atualizaQuantidadeTotal = (novaQuantidade) => {
    setQuantidade(novaQuantidade);
    calculaTotal(novaQuantidade);
  };

  const calculaTotal = (quantidade) => {
    setTotal(quantidade * preco);
  };

  const inverteExpandir = () => {
    setExpandir(!expandir);
    atualizaQuantidadeTotal(1);
  };

  return (
    <>
      <TouchableOpacity onPress={inverteExpandir} style={estilos.informacao}>
        <Text style={estilos.nome}>{nome}</Text>
        <Text style={estilos.descricao}>{descrisao}</Text>
        <Text style={estilos.preco}>
          {Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(preco)}
        </Text>
      </TouchableOpacity>
      {expandir && (
        <View style={estilos.carrinho}>
          <View>
            <View style={estilos.valor}>
              <Text style={estilos.descricao}>Quantidade: </Text>
              <CampoInteiro
                valor={quantidade}
                estilos={estilos.quantidade}
                acao={atualizaQuantidadeTotal}
              />
            </View>
            <View style={estilos.valor}>
              <Text style={estilos.descricao}>total: </Text>
              <Text style={estilos.preco}>
                {Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(total)}
              </Text>
            </View>
          </View>
          <Botao valor="Adicionar" acao={() => {}} />
        </View>
      )}
      <View style={estilos.divisor} />
    </>
  );
}
