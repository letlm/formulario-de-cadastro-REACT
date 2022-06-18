import styled from "styled-components";

export const FormLogin = styled.form`
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

  h3 {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    color: rgb(163 72 199);
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
    background-color: rgb(309, 233, 244);
    color: rgb(163, 72, 199);
  }

  span {
    margin-top: 3px;
    color: red;
    font-size: 12px;
  }

  @media (max-width: 425px) {
    width: 146px;
    height: 300px;

    h3 {
      font-size: 15px;
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

export const DivLabel = styled.div`
  position: relative;
  padding-top: 13px;
  display: flex;
  flex-direction: column;

  input {
    border: 0;
    border-bottom: 2px solid rgb(189 118 218);
    outline: none;
    min-width: 180px;
    width: 252px;
    font-size: 16px;
    transition: all 0.3s ease-out;
    -webkit-transition: all 0.3s ease-out;
    -moz-transition: all 0.3s ease-out;
    -webkit-appearance: none;
    border-radius: 8px;
    height: 28px;
  }

  input:focus {
    border-bottom: 2px solid rgb(389 18 288);
  }

  label {
    pointer-events: none;
    position: absolute;
    top: 0;
    left: 8px;
    margin-top: 18px;
    font-size: 14px;
    color: #463f3f;
    transition: all 0.3s ease-out;
    -webkit-transition: all 0.3s ease-out;
    -moz-transition: all 0.3s ease-out;
  }

  input:focus + label,
  input:not(:placeholder-shown) + label {
    font-size: 14px;
    font-weight: bold;
    margin-top: -4px;
    color: rgb(389 18 288);
  }

  @media (max-width: 425px) {
    input {
      width: 152px;
      font-size: 14px;
      height: 24px;
    }

    label {
      font-size: 12px;
      color: #463f3f;
    }

    input:focus + label,
    input:not(:placeholder-shown) + label {
      font-size: 12px;
      margin-top: -2px;
    }
  }
`;
