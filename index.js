import { SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import WebView from "react-native-webview";

export default function ArcanaWebView({ visible = true, ...props }) {
  return (
    <>
      {visible ? (
        <SafeAreaView style={[styles.containerStyle, props.containerStyle]}>
          <WebView
            source={{
              uri: "https://verify.dev.arcana.network/start?clientId=xar_dev_2cbfe3fc82840d8f4191935e1811b0c2e33619f8&type=google&loginSrc=rn",
            }}
            style={[styles.viewStyle, props.viewStyle]}
            javaScriptEnabled={true}
            userAgent="Mozilla/5.0 (Linux; Android 5.1.1) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/91.0.4472.164 Mobile Safari/535.19"
            originWhitelist={["https://*", "http://*", "file://*", "sms://*"]}
          />
        </SafeAreaView>
      ) : null}
    </>
  );
}

const styles = StyleSheet.create({
  containerStyle: { flex: 1 },
  viewStyle: { marginTop: 5 },
});
