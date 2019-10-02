import styled from "styled-components";
import { IProps, } from "./types";

export const Wrapper = styled.div`
  font-size: ${(props: IProps): string => {
    switch (props.type) {
      case "title":
        return "64px";
      case "subTitle":
        return "24px";
      case "note":
        return "8px";
      default:
        return "12px";
    }
  }};
  font-weight: ${(props: IProps): string => {
    switch (props.type) {
      case "note":
        return "100";
      default:
        return "bold";
    }
  }};
  color: ${(props: IProps): string => {
    return props.color ? props.color : '#fff';
  }};
  line-height: ${(props: IProps): string|number => props.type === "subTitle" ? 1 : "normal"};
`;