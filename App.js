import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import homeIcon from "./icon/home.png";
import orderIcon from "./icon/order.png";
import orderIconActive from "./icon/order-active.png";
import helpIcon from "./icon/help.png";
import inboxIcon from "./icon/inbox.png";
import accountIcon from "./icon/account.png";

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        {/* <Text style={styles.welcome}>Clone Gojek App !</Text> */}
        <View style={{ flex: 1, backgroundColor: "blue" }}></View>
        <View
          style={{
            height: 55,
            flexDirection: "row"
          }}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <View style={{ width: 26, height: 26 }}>
              <Image source={homeIcon} />
            </View>
            <Text style={{ fontSize: 10, color: "#545454", marginTop: 4 }}>
              Home
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <View style={{ width: 26, height: 26 }}>
              <Image source={orderIcon} />
            </View>
            <Text style={{ fontSize: 10, color: "#545454", marginTop: 4 }}>
              Orders
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <View style={{ width: 26, height: 26 }}>
              <Image source={helpIcon} />
            </View>
            <Text style={{ fontSize: 10, color: "#545454", marginTop: 4 }}>
              Help
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <View style={{ width: 26, height: 26 }}>
              <Image source={inboxIcon} />
            </View>
            <Text style={{ fontSize: 10, color: "#545454", marginTop: 4 }}>
              Inbox
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <View style={{ width: 26, height: 26 }}>
              <Image source={accountIcon} />
            </View>
            <Text style={{ fontSize: 10, color: "#545454", marginTop: 4 }}>
              Account
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
