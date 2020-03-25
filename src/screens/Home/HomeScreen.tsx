import React from "react";
import { StyleSheet, Image, View, ScrollView } from "react-native";
import styled from "styled-components/native";

const HeaderImage = styled.Image`
  width: 400px;
  height: 200px;
`;

const Paragraph = styled.Text`
  color: #393846;
`;

const TitleText = styled.Text`
  font-weight: bold;
  font-size: 22px;
  padding-bottom: 10px;
  color: #253846;
`;

const TextContainer = styled.View`
  padding: 20px;
`;

export default function HomeScreen() {
  return (
    <ScrollView>
      <HeaderImage
        source={{
          uri:
            "https://c402277.ssl.cf1.rackcdn.com/photos/18325/images/hero_full/Humpback_Whale_and_Calf_WW2131047.jpg?1576596196"
        }}
      />
      <TextContainer>
        <TitleText>Lorem ipsum dolor</TitleText>
        <Paragraph>
          Whales roam throughout all of the world's oceans, communicating with
          complex and mysterious sounds. Their sheer size amazes us: the blue
          whale can reach lengths of more than 100 feet and weigh up to 200
          tons—as much as 33 elephants. Despite living in the water, whales
          breathe air. And like humans, they are warm-blooded mammals who nurse
          their young. A thick layer of fat called blubber insulates them from
          cold ocean waters. Some whales are known as baleen whales, including
          blue, right, bowhead, sei, and gray whales. This refers to the fact
          that they have special bristle-like structures in their mouths (called
          baleen) that strain food from the water. Other whales, such as beluga
          or sperm whales, have teeth. Whales are at the top of the food chain
          and have an important role in the overall health of the marine
          environment. Whales play a significant role in capturing carbon from
          the atmosphere; each great whale sequesters an estimated 33 tons of
          CO2 on average, thus playing their part in the fight against climate
          change. Unfortunately, their large size and mythical aura does not
          protect them; six out of the 13 great whale species are classified as
          endangered or vulnerable, even after decades of protection. An
          estimated minimum of 300,000 whales and dolphins are killed each year
          as a result of fisheries bycatch, while others succumb to a myriad of
          threats including shipping and habitat loss. WWF has been actively
          working to protect whales for 50 years. In 1984, we helped to convince
          the world to ban commercial whaling. WWF and our partners want to
          reduce the number of whales lost each year by demonstrating to
          shipping companies, fishing fleets, and governments that new tools and
          best practices can significantly reduce whale deaths and injury. WWF
          documents and works to protect critical feeding and breeding areas and
          migration routes of whales. We work to establish whale sanctuaries,
          help shift shipping lanes, and curtail seismic surveys that disrupt
          feeding grounds. For example, WWF played a vital role in the creation
          of the Ross Sea Sanctuary in the Southern Ocean. We strive to increase
          awareness of the need for whale conservation at national, regional,
          and international levels. We also create opportunities for local
          communities to be involved with and profit from whale conservation
          initiatives.
        </Paragraph>
      </TextContainer>
    </ScrollView>
  );
}
