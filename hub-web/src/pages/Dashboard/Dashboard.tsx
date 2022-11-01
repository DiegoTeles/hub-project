import { ChangeEvent, useEffect, useState } from 'react';
import { RankingCard, SellerFilter, TransactionTable } from '../../components';
import { ContainerTable } from './styles';

import { useDispatch, useSelector } from 'react-redux';

/* Action */
import { transactionsList } from '../../store/duck/transactions/actions';

function Dashboard() {
  const dispatch = useDispatch();
  const { transactions }: any = useSelector((state) => state);

  const [rowsPerPage, setRowsPerPage] = useState<number>(15);
  const [selectedSeller, setSelectedSeller] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(0);


  const getTransactions = async (
    seller?: string,
    rowsPerPage?: number,
    currentPage?: number
  ) => {
    dispatch(transactionsList({ seller, currentPage, rowsPerPage }));
  };

  useEffect(() => {
    getTransactions(selectedSeller, rowsPerPage, currentPage);
  }, [rowsPerPage, selectedSeller, currentPage]);

  const handleChangeRowsPage = (event: ChangeEvent<HTMLSelectElement>) => {
    setRowsPerPage(+event.target.value);
  };

  const handleChangeSeller = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedSeller(event.target.value);
  };

  const handleNextPage = () => {
    setCurrentPage((prevState) =>
      prevState <= transactions?.data?.totalPages
        ? +1
        : transactions?.data?.totalPages
    );
  };

  const handlePrevPage = () => {
    setCurrentPage((prevState) => (prevState !== 0 ? prevState - 1 : 0));
  };

  return (
    <>
      <ContainerTable>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          <h1>Transações realizadas</h1>
          {transactions?.data && (
            <TransactionTable
              transactionsData={transactions.data}
              handleChangeRowsPage={handleChangeRowsPage}
              handleNextPage={handleNextPage}
              handlePrevPage={handlePrevPage}
              rowsPerPage={rowsPerPage}
            >
              <SellerFilter
                handleChangeSeller={handleChangeSeller}
                selectedSeller={selectedSeller}
              />
            </TransactionTable>
          )}
        </div>
      </ContainerTable>
    </>
  );
}

export default Dashboard;
