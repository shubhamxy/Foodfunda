import React from "react";
import { Image, ScrollView, Text, View, StyleSheet } from "react-native";
import { colors } from "../config";

const image = require("../assets/images/icon.png");

const UserProfileCard = (props) => {
  console.log("props are", props.user);
  const user = {
    id: props.user.id,
    name: props.user.name,
    image,
    email: "",
    details: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Distinctio nemo nam non facere possimus et magnam voluptatem ex excepturi! Laudantium officiis nemo consectetur velit magni unde nulla, debitis vel illum!"
  };

  return (
    <ScrollView style={styles.container}>

      <View style={{
        flexDirection: "row",
        justifyContent: "space-between"
      }}
      >
        <Text style={{
          alignSelf: "flex-start"
        }}
        >
          {user.name}
        </Text>
        <View style={{
          alignSelf: "flex-end"
        }}
        >
          <Image
            source={user.image}
            style={{
              width: 40,
              height: 40
            }}
          />

        </View>
      </View>
      <Text>
        {user.id}
        {user.details}
      </Text>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignContent: "center",
    borderWidth: 2,
    borderRadius: 12,
    borderColor: colors.grey,
    padding: 12,
    marginBottom: 40
  },
});

export default UserProfileCard;
