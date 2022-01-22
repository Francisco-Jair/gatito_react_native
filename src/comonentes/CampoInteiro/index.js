import React from "react";
import { TextInput } from "react-native";
import estilosPadrao from "./estilos";

export default function CampoInteiro({ valor, acao, estilos }) {
  const atualiza = (novoValor, acaoRetorno) => {
    const verificarInteiro = novoValor.match(/^[0-9]*$/);
    if (!verificarInteiro) {
      return;
    }

    const removerZeroEsquerda = novoValor.replace(/^(0)(.+)/, "$2");

    acaoRetorno(removerZeroEsquerda);
  };

  const numberString = String(valor);
  return (
    <TextInput
      style={[estilosPadrao.campo, estilos]}
      keyboardType="number-pad"
      selectTextOnFocus
      onChangeText={(novoValor) => {
        atualiza(novoValor, acao);
      }}
      value={numberString}
    />
  );
}
