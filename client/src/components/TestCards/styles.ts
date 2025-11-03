import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 20px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
`;

export const Card = styled.div<{ bgColor: string }>`
  background-color: ${({ bgColor }) => bgColor};
  color: white;
  padding: 16px;
  border-radius: 8px;
  width: 22%;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  font-family: "Arial", sans-serif;
`;

export const Title = styled.h3`
  margin: 0 0 8px;
  font-size: 20px;
  font-weight: bold;
`;

export const Text = styled.p`
  font-size: 14px;
  line-height: 1.4;
`;
