import { ChangeEvent } from 'react';
import { SelectQtdItems, Container } from './styles';
import { UploadFile } from '..';

interface OwnProps {
  handleChangeSeller: (event: ChangeEvent<HTMLInputElement>) => void;
  selectedSeller: string;
}

function SellerFilter({ handleChangeSeller, selectedSeller }: OwnProps) {
  return (
    <Container>
      <SelectQtdItems>
        <input onChange={handleChangeSeller} placeholder="Pesquisar Seller..." value={selectedSeller} />
      </SelectQtdItems>
      <UploadFile />
    </Container>
  );
}

export default SellerFilter;
