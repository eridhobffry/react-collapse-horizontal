import styled, { css } from "styled-components";

export const Ul = styled.ul`
  list-style: none;
`;

export const Input = styled.input`
  position: absolute;
  top: -9999px;
  left: -9999px;
`;

const SharedStyleLabel = css`
  background: #2196f3;
  color: #fff;
  cursor: pointer;
`;

export const Label = styled.label`
  display: block;
  float: left;
  height: 100vh;
  width: 40px;
  overflow: hidden;
  background: #30354a;
  text-align: center;
  font-size: 14px;
  line-height: 50px;
  -webkit-transition: background 300ms ease;
  transition: background 300ms ease;
  color: #fff;

  &:hover {
    ${SharedStyleLabel}

    li:nth-child(even) > input + & {
      ${SharedStyleLabel}
    }
  }

  li:nth-child(even) > input + & {
    background: #3a4059;
  }

  input[type="radio"]:checked ~ & {
    background: #2196f3;
    color: #fff;
    cursor: default !important;
  }

  input[type="radio"]:not(:checked) ~ & {
    & * {
      padding-left: 7px;
      font-size: 1.2em;
      white-space: nowrap;
      -webkit-transform: rotate(90deg);
      transform: rotate(90deg);
    }
  }

  input[type="radio"]:checked ~ & {
    & * {
      display: none;
    }
  }
`;

export const Accslide = styled.div`
  display: block;
  height: 100%;
  width: 0px;
  padding: 10px 0;
  float: left;
  overflow-x: hidden;
  font-size: 12px;
  line-height: 1.5;
  -webkit-transition: all 700ms ease;
  transition: all 700ms ease;

  &* {
    padding-left: 10px;
  }

  img {
    margin-top: 10px;
  }

  li:nth-child(1):nth-last-child(2) input[type="radio"]:checked ~ & {
    width: calc(100% - 80px);
  }

  li:nth-child(2):nth-last-child(1) input[type="radio"]:checked ~ & {
    width: calc(100% - 80px);
  }

  li:nth-child(1):nth-last-child(3) input[type="radio"]:checked ~ & {
    width: calc(100% - 120px);
  }

  li:nth-child(2):nth-last-child(2) input[type="radio"]:checked ~ & {
    width: calc(100% - 120px);
  }
  li:nth-child(3):nth-last-child(1) input[type="radio"]:checked ~ & {
    width: calc(100% - 120px);
  }

  li:nth-child(1):nth-last-child(4) input[type="radio"]:checked ~ & {
    width: calc(100% - 160px);
  }

  li:nth-child(2):nth-last-child(3) input[type="radio"]:checked ~ & {
    width: calc(100% - 160px);
  }

  li:nth-child(3):nth-last-child(2) input[type="radio"]:checked ~ & {
    width: calc(100% - 160px);
  }

  li:nth-child(4):nth-last-child(1) input[type="radio"]:checked ~ & {
    width: calc(100% - 160px);
  }

  li:nth-child(1):nth-last-child(5) input[type="radio"]:checked ~ & {
    width: calc(100% - 200px);
  }

  li:nth-child(2):nth-last-child(4) input[type="radio"]:checked ~ & {
    width: calc(100% - 200px);
  }

  li:nth-child(3):nth-last-child(3) input[type="radio"]:checked ~ & {
    width: calc(100% - 200px);
  }

  li:nth-child(4):nth-last-child(2) input[type="radio"]:checked ~ & {
    width: calc(100% - 200px);
  }

  li:nth-child(5):nth-last-child(1) input[type="radio"]:checked ~ & {
    width: calc(100% - 200px);
  }

  li:nth-child(1):nth-last-child(6) input[type="radio"]:checked ~ & {
    width: calc(100% - 240px);
  }

  li:nth-child(2):nth-last-child(5) input[type="radio"]:checked ~ & {
    width: calc(100% - 240px);
  }

  li:nth-child(3):nth-last-child(4) input[type="radio"]:checked ~ & {
    width: calc(100% - 240px);
  }

  li:nth-child(4):nth-last-child(3) input[type="radio"]:checked ~ & {
    width: calc(100% - 240px);
  }

  li:nth-child(5):nth-last-child(2) input[type="radio"]:checked ~ & {
    width: calc(100% - 240px);
  }

  li:nth-child(6):nth-last-child(1) input[type="radio"]:checked ~ & {
    width: calc(100% - 240px);
  }

  li:nth-child(1):nth-last-child(7) input[type="radio"]:checked ~ & {
    width: calc(100% - 280px);
  }

  li:nth-child(2):nth-last-child(6) input[type="radio"]:checked ~ & {
    width: calc(100% - 280px);
  }

  li:nth-child(3):nth-last-child(5) input[type="radio"]:checked ~ & {
    width: calc(100% - 280px);
  }

  li:nth-child(4):nth-last-child(4) input[type="radio"]:checked ~ & {
    width: calc(100% - 280px);
  }

  li:nth-child(5):nth-last-child(3) input[type="radio"]:checked ~ & {
    width: calc(100% - 280px);
  }

  li:nth-child(6):nth-last-child(2) input[type="radio"]:checked ~ & {
    width: calc(100% - 280px);
  }

  li:nth-child(7):nth-last-child(1) input[type="radio"]:checked ~ & {
    width: calc(100% - 280px);
  }

  li:nth-child(1):nth-last-child(8) input[type="radio"]:checked ~ & {
    width: calc(100% - 320px);
  }

  li:nth-child(2):nth-last-child(7) input[type="radio"]:checked ~ & {
    width: calc(100% - 320px);
  }

  li:nth-child(3):nth-last-child(6) input[type="radio"]:checked ~ & {
    width: calc(100% - 320px);
  }

  li:nth-child(4):nth-last-child(5) input[type="radio"]:checked ~ & {
    width: calc(100% - 320px);
  }

  li:nth-child(5):nth-last-child(4) input[type="radio"]:checked ~ & {
    width: calc(100% - 320px);
  }

  li:nth-child(6):nth-last-child(3) input[type="radio"]:checked ~ & {
    width: calc(100% - 320px);
  }

  li:nth-child(7):nth-last-child(2) input[type="radio"]:checked ~ & {
    width: calc(100% - 320px);
  }

  li:nth-child(8):nth-last-child(1) input[type="radio"]:checked ~ & {
    width: calc(100% - 320px);
  }
`;
