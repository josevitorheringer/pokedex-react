import styled from "styled-components";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

export const WrapperPokeInformations = styled.div`
  display: flex;
  margin: 100px;
  justify-content: center;
`;

export const WrapperCard = styled.div`
  padding: 40px;
  border-radius: 10%;
`;

export const WrapperTabs = styled(Tabs)``;

export const WrapperTab = styled(Tab)`
  padding: 10px 5px 10px 5px;
  border: none;

  margin: 10px 5px 0px 0px;

  &:hover {
    cursor: pointer;
  }

  &.is-selected {
    border-bottom: solid 1px black;
  }
`;

export const WrapperTabList = styled(TabList)`
  display: flex;
`;

export const WrapperTabPanel = styled(TabPanel)``;
