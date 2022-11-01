import { Card, Paragraph, CurrencyLable, CardContainer } from './styles';
import { BsFillTrophyFill } from 'react-icons/bs';

function RankingCard() {
  return (
    <CardContainer>
      {[1, 2, 3].map((top: any, index: number) => {
        index++;
        return (
          <Card key={index} position={index}>
            <BsFillTrophyFill />
            <Paragraph> Diego Telles</Paragraph>
            <CurrencyLable> R$ 112.000,00</CurrencyLable>
          </Card>
        );
      })}
    </CardContainer>
  );
}

export default RankingCard;
