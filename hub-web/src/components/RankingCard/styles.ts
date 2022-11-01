import styled from 'styled-components';
 
const getColorPosition = (type: string) => {
  return {
    1: 'gold',
    2: '#cd7f32',
    3: 'silver',
  }[type];
};

export interface Props {
  value: string;
}

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;

export const Card: any = styled.div`
  border: 1px solid #80808059;
  border-radius: 8px;
  max-width: 200px;
  min-width: 200px;
  min-height: 180px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  svg {
    color: ${(props: any) => getColorPosition(props.position)};
    font-size: 38px;
  }
`;

export const Paragraph = styled.p`
  font-size: 26px;
  margin: 0;
`;

export const CurrencyLable = styled.p`
  font-size: 18px;
  margin: 0;
  font-weight: 600;
  color: gray;
`;
