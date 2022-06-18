import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  width: 246px;
  height: 400px;
  padding: 50px;
  background-color: rgb(255 255 255 / 38%);
  align-items: center;
  justify-content: space-evenly;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  box-shadow: 2px 10px 12px 2px rgba(0, 0, 0, 0.1);

  h1 {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    color: rgb(248, 82, 138);
    font-size: 20px;
  }

  img {
    width: 100px;
    height: 100px;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px;
    font-weight: bold;
    width: 203px;
    height: 36px;
    background-color: transparent;
    cursor: pointer;
    border-radius: 4px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    color: rgb(163, 72, 199);
    margin-top: 10px;
  }

  button:hover {
    background-color: rgb(254, 245, 223);
    color: rgb(248, 82, 138);
    border: 1px solid rgb(57, 204, 236);
  }

  @media (max-width: 425px) {
    width: 146px;
    height: 300px;

    h1 {
      font-size: 18px;
    }

    img {
      width: 80px;
      height: 80px;
    }

    button {
      width: 150px;
      height: 32px;
      margin-top: 0px;
    }
  }
`;
