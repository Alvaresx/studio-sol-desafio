import styled from "styled-components";
import { colors } from "./colors";

const { error, success, ledActive, ledNotActive } = colors;

export const Title = styled.h1`
  font-size: 36px;
  text-align: center;
  background: linear-gradient(174.92deg, #ef6c00 18.47%, #db6300 36.57%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: -1px;
  margin-bottom: 10px;
`;

export const Divider = styled.div`
  width: 255px;
  border-top: 1px solid #cfcfcf;
  margin: 20px auto;

  @media only screen and (max-width: 767px) {
    width: 200px;
  }
`;

export const InfoMessage = styled.div`
  text-align: center;
  font-weight: bold;
  color: ${(props) => props.textColor};
`;

export const ContainerSegments = styled.div`
  display: flex;
  column-gap: 15px;
  justify-content: center;
  height: 165px;
`;

export const SendButton = styled.button`
  background: linear-gradient(180deg, #ef6c00 0%, #c0661c 100%);
  color: #fff;
  border: none;
  border-radius: 4px;
  width: 70px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 700;
  &:disabled {
    background: #ddd;
  }
`;

export const GuessInput = styled.input`
  border: 1px solid #cfcfcf;
  outline: 0;
  border-radius: 4px;
  width: 217px;
  padding: 14px 12px;
  &:disabled {
    background-color: #f5f5f5;
  }
  &:focus {
    border: 1px solid #ff6600;
  }
`;

export const ContainerInputButton = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 10px;
  height: 42px;
`;

export const RestartButton = styled.button`
  width: 130px;
  height: 42px;
  border: none;
  text-transform: uppercase;
  color: #fff;
  background: linear-gradient(180deg, #434854 0%, #9e9e9e 100%);
  border-radius: 4px;
  font-size: 12px;
  font-weight: 700;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ContainerRestartButton = styled.div`
  display: flex;
  visibility: ${(props) => props.visibility};
  justify-content: center;
  margin-bottom: 30px;
`;

export const ReloadIcon = styled.img`
  width: 18px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100vh - 120px);
  margin: 60px;

  @media only screen and (max-width: 767px) {
    height: calc(100vh - 40px);
    margin: 20px;
  }
`;

export const Segment = styled.div`
  height: 15px;
  width: 80px;
  position: relative;
  border-radius: 6px;
  &.segment_a {
    clip-path: polygon(0 0, 100% 0, 80% 100%, 20% 100%);
  }
  &.segment_b {
    clip-path: polygon(0 0, 100% 0, 80% 100%, 20% 100%);
    border-top-right-radius: 10px;
    transform: rotate(90deg);
    top: 21px;
    left: 34px;
  }
  &.segment_c {
    clip-path: polygon(0 0, 100% 0, 80% 100%, 20% 100%);
    border-top-left-radius: 10px;
    transform: rotate(90deg);
    top: 85px;
    left: 34px;
  }
  &.segment_d {
    clip-path: polygon(0 0, 100% 0, 80% 100%, 20% 100%);
    transform: rotate(180deg);
    top: 105px;
  }
  &.segment_e {
    clip-path: polygon(0 0, 100% 0, 80% 100%, 20% 100%);
    border-top-right-radius: 10px;
    transform: rotate(270deg);
    top: 55px;
    right: 34px;
  }
  &.segment_f {
    clip-path: polygon(0 0, 100% 0, 80% 100%, 20% 100%);
    border-top-left-radius: 10px;
    transform: rotate(270deg);
    bottom: 39px;
    right: 34px;
  }
  &.segment_g {
    clip-path: polygon(0 50%, 12% 0, 88% 0, 100% 50%, 88% 100%, 12% 100%);
    bottom: 14px;
    left: 3px;
    width: 74px;
  }
  &.not_active {
    background-color: ${ledNotActive};
  }
  &.active {
    background-color: ${ledActive};
  }
  &.success {
    background-color: ${success};
  }
  &.error {
    background-color: ${error};
  }
`;
