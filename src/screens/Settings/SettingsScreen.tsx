import React from 'react';
import { StyleSheet, Image, Text, View, ScrollView } from 'react-native';
import styled from 'styled-components/native';

const RootContainer = styled.ScrollView`
  padding: 0;
`;

const Title = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #253846;
`;

const SubTitle = styled.Text`
  font-size: 14px;
  text-align: center;
  color: #253846;
  font-weight: bold;
  padding: 5px;
`;

const HeaderContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

const HeaderImage = styled.Image`
  width: 100%;
  height: 200px;
`;

const SectionContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 5px;
`;

const Paragraph = styled.Text`
  color: #393846;
  flex: 1;
  flex-wrap: wrap;
  padding: 10px;
`;

const OverflownImage = styled.Image`
  width: 150px;
  height: 150px;
`;

export default function Settings() {
  return (
    <RootContainer>
      <HeaderContainer>
        <HeaderImage
          source={{
            uri:
              'https://c402277.ssl.cf1.rackcdn.com/photos/18325/images/hero_full/Humpback_Whale_and_Calf_WW2131047.jpg?1576596196',
          }}
        />
        <Title>Facts about whales</Title>
        <SubTitle>
          They live their whole lives in water and have a lot of special qualities. Although they couldn’t look more
          different than human beings, we have so much in common!
        </SubTitle>
      </HeaderContainer>
      <SectionContainer>
        <OverflownImage
          source={{
            uri:
              'https://c402277.ssl.cf1.rackcdn.com/photos/18325/images/hero_full/Humpback_Whale_and_Calf_WW2131047.jpg?1576596196',
          }}
        />
        <Paragraph>
          Whales are mammals just like we are. Just like us, they breathe air, have hair, are warm-blooded, give birth
          to live young, and feed their young milk. Whales are unique, beautiful, graceful and mysterious; they nurture,
          form friendships, innovate, grieve, play, sing and cooperate with one another. Here are some extraordinary
          facts about whales and their lives in the oceans.
        </Paragraph>
      </SectionContainer>
      <SectionContainer>
        <Paragraph>
          Whales are mammals just like we are. Just like us, they breathe air, have hair, are warm-blooded, give birth
          to live young, and feed their young milk. Whales are unique, beautiful, graceful and mysterious; they nurture,
          form friendships, innovate, grieve, play, sing and cooperate with one another. Here are some extraordinary
          facts about whales and their lives in the oceans.
        </Paragraph>
        <OverflownImage
          source={{
            uri:
              'https://c402277.ssl.cf1.rackcdn.com/photos/18325/images/hero_full/Humpback_Whale_and_Calf_WW2131047.jpg?1576596196',
          }}
        />
      </SectionContainer>
    </RootContainer>
  );
}
