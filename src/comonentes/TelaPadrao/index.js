import React from "react";
import {
  StatusBar,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import estilosGlobal from "../../estilos";

export default function TelaPadrao({ children }) {
  return (
    <SafeAreaView style={estilosGlobal.preencher}>
      <StatusBar />
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={estilosGlobal.preencher}
      >
        {children}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
