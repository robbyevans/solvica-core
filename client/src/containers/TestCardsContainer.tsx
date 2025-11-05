import React, { useEffect, useState } from "react";
import TestCards from "../components/TestCards/TestCards";

type Card = {
  title: string;
  description: string;
  bgColor: string;
  age: number;
};

const TestCardsContainer: React.FC = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const image =
    "https://images.pexels.com/photos/18884939/pexels-photo-18884939.jpeg";

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch(
          "https://mocki.io/v1/2881488f-41ed-4b03-b141-64e981bc0961",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setCards(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchCards();
  }, []);

  if (loading) return <p>Loading data...</p>;
  if (error) return <p>Error: {error}</p>;

  return <TestCards year={2025} image={image} cards={cards} />;
};

export default TestCardsContainer;
