import React, { useState } from "react";
import styled from "styled-components/native";

const quotes = [
  "It is certain.",
  "It is decidedly so.",
  "Without a doubt.",
  "You may rely on it.",
  "As I see it, yes.",
  "Most likely.",
  "Outlook good.",
  "Yes.",
  "Signs point to yes.",
  "Reply hazy, try again.",
  "Ask again later.",
  "Better not tell you now.",
  "Cannot predict now.",
  "Concentrate and ask again.",
  "My reply is no.",
  "My sources say no.",
  "Outlook not so good.",
  "Very doubtful.",
];

export default function MagicBall() {
  const [quote, setQuote] = useState(0);

  const showQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <View>
      <BigCircel>
        <TextNumber> 8</TextNumber>
        <SmallCircel>
          <Answear> {quote} </Answear>
        </SmallCircel>
      </BigCircel>
      <TouchableOpacity onPress={showQuote}>
        <Text>Ask me</Text>
      </TouchableOpacity>
    </View>
  );
}

const View = styled.View`
  flex: 1;
  height: 210;
`;

const BigCircel = styled.View`
  height: 320;
  width: 320;
  background-color: #000000;
  margin-top: 80;
  border-radius: 320;
  justify-content: center;
  align-items: center;
`;

const SmallCircel = styled.View`
  height: 190;
  width: 190;
  background-color: #fff;
  border-radius: 100;
  justify-content: center;
  align-items: center;
`;
const Text = styled.Text`
  font-size: 40;
  text-align: center;
`;

const TextNumber = styled.Text`
  color: #fff;
  font-size: 40;
  margin-top: -60;
  padding-bottom: 20;
  font-weight: bold;
`;
const Answear = styled.Text`
  font-size: 25;
  text-align: center;
  font-weight: bold;
`;
const TouchableOpacity = styled.TouchableOpacity`
  background-color: #fced84;
  border-radius: 50;
  justify-content: space-between;
  margin-top: 15;
`;
