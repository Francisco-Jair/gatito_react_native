import React from "react";
import {
  StatusBar,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import estilosGlobal, { cores } from "../../estilos";
import estilos from "./estilos";

export default function TelaPadrao({ children }) {
  return (
    <>
      <SafeAreaView style={estilos.ajusteTela}>
        {/* Status bar e para android */}
        <StatusBar backgroundColor={cores.roxo} />
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
          style={estilosGlobal.preencher}
        >
          {children}
        </KeyboardAvoidingView>
      </SafeAreaView>
      <SafeAreaView style={estilos.ajusteTelaBaixo} />
    </>
  );
}
