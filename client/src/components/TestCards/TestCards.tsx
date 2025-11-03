import React from "react";
import * as S from "./styles";

const TestCards: React.FC = () => {
  const cards = [
    {
      title: "Jane",
      text: "Lead Paramedic with 10 years of field experience in trauma and emergency response. Passionate about improving pre-hospital care systems in Kenya.",
      bgColor: "#1976d2", // blue
    },
    {
      title: "Michael",
      text: "Data Analyst specializing in healthcare research. Focused on using data insights to enhance patient outcomes and optimize emergency response logistics.",
      bgColor: "#fbc02d", // yellow
    },
    {
      title: "Babra",
      text: "Paramedic educator and researcher in pre-hospital care. Dedicated to training EMTs and improving response strategies for geriatric emergencies.",
      bgColor: "#e53935", // red
    },
    {
      title: "Faith",
      text: "Public health specialist with expertise in community health and emergency preparedness. Works closely with local organizations to build resilience.",
      bgColor: "#bdbdbd", // gray
    },
  ];

  return (
    <S.Container>
      {Array(2)
        .fill(0)
        .map((_, rowIndex) => (
          <S.Row key={rowIndex}>
            {cards.map((card, i) => (
              <S.Card key={`${card.title}-${i}`} bgColor={card.bgColor}>
                <S.Title>{card.title}</S.Title>
                <S.Text>{card.text}</S.Text>
              </S.Card>
            ))}
          </S.Row>
        ))}
    </S.Container>
  );
};

export default TestCards;
