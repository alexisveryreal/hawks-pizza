import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import colors from "../../assets/colors/colors";
import { PopularData } from "../../assets/data/popularData";
import { Feather } from "@expo/vector-icons";

type RedeemCardProps = {
  item: PopularData;
};

const RedeemCard = ({ item }: RedeemCardProps) => {
  return (
    <TouchableOpacity
      onPress={() => alert(`Redeemed ${item.title} for 200 pts!`)}
    >
      <View
        style={[
          styles.redeemCardWrapper,
          {
            marginTop: item.id === "1" ? 10 : 20,
          },
        ]}
      >
        <View style={styles.redeemCardLeft}>
          <Image source={item.image} style={styles.redeemImage} />
        </View>
        <View style={styles.redeemItemTitleWrapper}>
          <Text style={styles.redeemItemTitle}>{item.title}</Text>
          <Text style={styles.redeemItemTitlePoints}>200 pts</Text>
        </View>
        <View style={styles.redeemTextWrapper}>
          <View style={styles.redeemTextFormat}>
            <Text style={styles.redeemText}>REDEEM</Text>
            <Feather name="chevron-right" color={colors.textDark} size={20} />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RedeemCard;

const styles = StyleSheet.create({
  redeemCardWrapper: {
    backgroundColor: colors.white,
    borderRadius: 25,
    paddingTop: 20,
    flexDirection: "row",
    overflow: "hidden",
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
    // borderWidth: 1,
  },
  redeemCardLeft: {
    marginLeft: -60,
    marginRight: -10,
    // borderWidth: 1,
  },
  redeemImage: {
    width: 210,
    height: 125,
    resizeMode: "contain",
  },
  redeemItemTitleWrapper: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    // borderWidth: 1,
  },
  redeemItemTitle: {
    fontSize: 14,
    fontFamily: "Montserrat_600SemiBold",
    color: colors.textDark,
  },
  redeemItemTitlePoints: {
    fontSize: 12,
    fontFamily: "Montserrat_500Medium",
    color: colors.textLight,
  },
  redeemTextWrapper: {
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  redeemTextFormat: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingVertical: 10,
  },
  redeemText: {
    fontSize: 14,
    fontFamily: "Montserrat_600SemiBold",
    color: colors.price,
  },
});
