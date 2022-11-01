import styled from 'styled-components';

const getWidth = (type: string) => {
  return {
    id: '48px',
    type: '48px',
    product: '390px',
    value: '110px',
    seller: '280px',
    date: '180px',
    total: '200px',
    currerncy: '200px',
  }[type];
};

const getColor = (type: string) => {
  return {
    total: '#e7e7e7',
    currency: '#e1e1e1',
  }[type];
};

interface Props {
  value: string;
}

interface TextInformationProps {
  align: string;
}

export const Table = styled.table`
  border-radius: 15px;
  max-width: 990px;
  min-width: 990px;

  overflow: auto;
  border-collapse: collapse;
`;

export const TextInformation = styled.div<TextInformationProps>`
 text-align: ${(props: TextInformationProps) => props.align };
 font-size: 22px;
`;

export const THead = styled.thead`
  width: 100%;
  overflow: auto;
  align-items: flex-end;
  display: flex;
  flex-flow: row wrap;

  background: #0000009e;
  color: azure;
  font-size: 16px;
  font-weight: bold;
  font-family: arial;
`;

export const TBody = styled.tbody`
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-flow: row wrap;
  height: 450px;
`;

export const Column: any = styled.td`
  padding: 10px 0;
  max-width: ${(props: Props) => getWidth(props.value)};
  min-width: ${(props: Props) => getWidth(props.value)};
  font-size: 14px;
  text-transform: capitalize;
  text-align: center;
  background: ${(props: Props) => getColor(props.value)};
`;

export const ContentRow: any = styled.tr`
  transition: 0.8s;
  background-color: ${(props: any) => (props.pair ? '' : '#e9e9e9')};

  &:hover {
    background-color: #f7ddf6;
  }
`;

export const ScrollContainer = styled.div`
  width: 100%;
  height: 450px;
  overflow-y: auto;
  position: relative;
  &::-webkit-scrollbar {
    width: 8px;
    border: 1px solid black;
    border-radius: 14px;
    transition: 0.8s;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #888;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export const ColumnFooter: any = styled.div`
  padding: 10px 14px;
  text-align: ${(props: Props) =>
    props.value === 'total' ? 'right' : 'center'};
  background-color: ${(props: Props) => getColor(props.value)};
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const PageIndex: any = styled.div`
  padding: 0px 22px;
`;
export const SelectQtdItems: any = styled.div``;
export const ActionButtons: any = styled.div`
  padding: 0px 4px 0 14px;
  svg {
    font-size: 20px;
    padding: 0px 8px 0 0px;
    cursor: pointer;
  }
`;

export const TotalInfo: any = styled.div`
  padding: 10px 14px;
  font-size: 20px;
  font-weight: 600;
  text-align: ${(props: Props) =>
    props.value === 'total' ? 'right' : 'center'};
  background-color: ${(props: Props) => getColor(props.value)};
  display: flex;
  justify-content: flex-end;
`;
