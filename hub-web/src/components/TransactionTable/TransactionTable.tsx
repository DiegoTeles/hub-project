import { ChangeEvent, ReactNode } from 'react';
import {
  Table,
  TBody,
  THead,
  ContentRow,
  Column,
  ColumnFooter,
  ScrollContainer,
  PageIndex,
  SelectQtdItems,
  ActionButtons,
  TotalInfo,
  TextInformation
} from './styles';
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs';

interface Columns {
  id: number;
  transactionType: string;
  date: string;
  product: string;
  value: number;
  seller: string;
}

interface OwnProps {
  transactionsData: any;
  handleChangeRowsPage: (event: ChangeEvent<HTMLSelectElement>) => void;
  handleNextPage: () => void;
  handlePrevPage: () => void;
  rowsPerPage: number;
  children: ReactNode;
}

function TransactionTable({
  transactionsData,
  handleChangeRowsPage,
  handleNextPage,
  handlePrevPage,
  rowsPerPage,
  children,
}: OwnProps) {
  return (
    <>
      <Table>
        {children}
        <THead>
          <tr>
            <Column value='id'>ID</Column>
            <Column value='type'>Type</Column>
            <Column value='product'>Product</Column>
            <Column value='value'>Value</Column>
            <Column value='seller'>Seller</Column>
            <Column value='date'>Date</Column>
          </tr>
        </THead>
        <TBody>
          <ScrollContainer>
            {transactionsData.data?.transactions?.length ? (
              transactionsData.data.transactions.map(
                (item: Columns, index: number) => {
                  const pair = index % 2 === 0;
                  return (
                    <ContentRow pair={pair} key={item.id}>
                      <Column value='id'>{item.id}</Column>
                      <Column value='type'>{item.transactionType}</Column>
                      <Column value='product'>{item.product}</Column>
                      <Column value='value'>{item.value}</Column>
                      <Column value='seller'>{item.seller}</Column>
                      <Column value='date'>{item.date}</Column>
                    </ContentRow>
                  );
                }
              )
            ) : (
              <TextInformation align="center">
                <p> Sem registros no momento</p>
              </TextInformation>
            )}
          </ScrollContainer>
        </TBody>
        <ColumnFooter>
          <PageIndex>
            <p>
              Pág. {transactionsData.page + 1} de {transactionsData.totalPages}{' '}
              de {transactionsData.totalCount} Registros
            </p>
          </PageIndex>
          <SelectQtdItems>
            <select onChange={handleChangeRowsPage} value={rowsPerPage}>
              <option value={10}>10</option>
              <option value={15}>15</option>
              <option value={20}>20</option>
              <option value={100}>100</option>
            </select>
          </SelectQtdItems>

          <ActionButtons>
            <BsArrowLeftCircle onClick={handlePrevPage} />
            <BsArrowRightCircle onClick={handleNextPage} />
          </ActionButtons>
          <TotalInfo value='total'>Total</TotalInfo>
          <TotalInfo value='currency'>
            {transactionsData.data && transactionsData.data.totalTransactions}
          </TotalInfo>
        </ColumnFooter>
      </Table>
    </>
  );
}

export default TransactionTable;
