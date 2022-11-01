import { useState } from 'react';
import {
  UploadButton,
  UploadContainer,
  UploadForm,
  UploadInput,
} from './styles';

import { useDispatch } from 'react-redux';

/* Actions */
import { transactionsList, transactionPostNewTuple } from '../../store/duck/transactions/actions';

function UploadFile() {
  const dispatch = useDispatch();

  const [file, setFile] = useState(null);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await uploadFile(file);
    dispatch(transactionsList({ seller: '', currentPage: 0, rowsPerPage: 15 }));
    setFile(null);
  };

  const uploadFile = async (file: any) => {
    const formData = new FormData();
    formData.append('file', file);

    dispatch(transactionPostNewTuple(formData))
  };

  const handleOnChange = (e: any) => {
    setFile(e.target.files[0]);
  };

  return (
    <UploadContainer>
      <UploadForm onSubmit={handleSubmit}>
        <UploadInput type='file' onChange={handleOnChange} />
        <UploadButton type='submit' disabled={file === null ? true : false}>
          Upload File
        </UploadButton>
      </UploadForm>
    </UploadContainer>
  );
}

export default UploadFile;
