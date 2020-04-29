import React from "react";
import { StyleSheet, Image, Text, View, ScrollView } from "react-native";
import styled from "styled-components/native";

const RootContainer = styled.ScrollView`
  padding: 0;
  background-color: #fff;
`;

const Title = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #253846;
`;

const SubTitle = styled.Text`
  font-size: 15px;
  color: #253846;
  max-width: 90%;
`;

const HeaderContainer = styled.View`
  justify-content: center;
`;

const HeaderImage = styled.Image`
  width: 100%;
  height: 200px;
`;

const SectionImage = styled.Image`
  width: 100%;
  height: 200px;
  margin-vertical: 15px;
`;

const SectionContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-horizontal: 15px;
`;

const Paragraph = styled.Text`
  color: #393846;
  flex: 1;
  flex-wrap: wrap;
  padding: 10px;
`;

const OverflownImage = styled.Image`
  border-radius: 100px;
  margin-horizontal: 5px;
  width: 150px;
  height: 150px;
`;

const TitleContainer = styled.View`
  padding: 15px;
`;

export default function Settings() {
  return (
    <RootContainer>
      <HeaderContainer>
        <HeaderImage
          source={{
            uri: "https://static.polityka.pl/_resource/res/path/16/01/16017f70-332b-49e0-bfa6-2228118a6e1c_f1400x900",
          }}
        />
        <TitleContainer>
          <Title>Marco Polo</Title>
          <SubTitle>
            Venetian merchant and adventurer Marco Polo traveled from Europe to Asia from 1271 to 1295. He wrote 'Il
            Milione,' known in English as 'The Travels of Marco Polo.'
          </SubTitle>
        </TitleContainer>
      </HeaderContainer>
      <SectionContainer>
        <OverflownImage
          source={{
            uri:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Marco_Polo_Mosaic_from_Palazzo_Tursi.jpg/220px-Marco_Polo_Mosaic_from_Palazzo_Tursi.jpg",
          }}
        />
        <Paragraph>
          Marco Polo was a Venetian explorer known for the book The Travels of Marco Polo, which describes his voyage to
          and experiences in Asia. Polo traveled extensively with his family, journeying from Europe to Asia from 1271
          to 1295 and remaining in China for 17 of those years. Around 1292, he left China, acting as consort along the
          way to a Mongol princess who was being sent to Persia.
        </Paragraph>
      </SectionContainer>
      <SectionImage
        source={{
          uri:
            "https://edsitement.neh.gov/sites/default/files/styles/teaser/public/resource/Marco_Polo%3B_his_travels_and_adventures_%281880%29_%2814775209831%29.jpg?itok=M60-N_74",
        }}
      />
      <SectionContainer>
        <Paragraph>
          Polo was born in 1254, in Venice, Italy. Although he was born to a wealthy Venetian merchant family, much of
          Polo’s childhood was spent parentless, and he was raised by an extended family. Polo's mother died when he was
          young, and his father and uncle, successful jewel merchants Niccolo and Maffeo Polo, were in Asia for much of
          Polo's youth.
        </Paragraph>
        <OverflownImage
          source={{
            uri:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSB3aS7AOjuTE-3IB79TDeYtgiSmvJRivpF0AUZJUlsMmS_M30U&usqp=CAU",
          }}
        />
      </SectionContainer>
    </RootContainer>
  );
}
