import styled from "styled-components";

export const Container = styled.div`
  width: 300px;
  height: 1000px;
  border: 1px solid black;
  background-color:rgb(0,123,255);
  padding: 20px;
`;
export const Card = styled.a`
  height: 40px;
  background-color: aliceblue;
  display: flex;
  align-items: center;
  border-radius: 10px;
  cursor: pointer;
  margin-bottom: 10px;
  font-weight: 600;
  font-size: 18px;
  padding-left:10px;
  transition: all 0.3s ease-in-out;

&:hover {
  background-color: lightblue;
  transform: scale(1.05);
}
`;
