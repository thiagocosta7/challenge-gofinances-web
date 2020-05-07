import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import filesize from 'filesize';

import api from '../../services/api';

import alert from '../../assets/alert.svg';

import FileList from '../../components/FileList';
import Upload from '../../components/Upload';

import { Container, Title, ImportFileContainer, Footer } from './styles';

interface FileProps {
  file: File;
  name: string;
  readableSize: string;
}

const Import: React.FC = () => {
  const [uploadedFiles, setUploadedFiles] = useState<FileProps[]>([]);
  const [uploadError, setUploadError] = useState('');
  const history = useHistory();

  async function submitFile(): Promise<void> {
    const formData = new FormData();

    if (!uploadedFiles.length) return;

    formData.append('file', uploadedFiles[0].file, uploadedFiles[0].name);

    try {
      await api.post('/transactions/import', formData);
      // eslint-disable-next-line no-alert
      window.alert('Importação realizada com sucesso!');
      history.push('/');
    } catch (err) {
      setUploadError(err.response.error);
    }
  }

  function handleUpload(files: File[]): void {
    const uploadFiles = files.map((file: File) => ({
      file,
      name: file.name,
      readableSize: filesize(file.size),
    }));

    setUploadedFiles(uploadFiles);
  }

  return (
    <>
      {/* <Header size="small" /> */}
      <Container>
        <Title>Importar uma transação</Title>
        <ImportFileContainer>
          <Upload onUpload={handleUpload} />
          {!!uploadedFiles.length && <FileList files={uploadedFiles} />}

          <Footer>
            <p>
              <img src={alert} alt="Alert" />
              Permitido apenas arquivos CSV
            </p>
            <button onClick={submitFile} type="button">
              Enviar
            </button>
          </Footer>
          {uploadError && `${uploadError}`}
        </ImportFileContainer>
      </Container>
    </>
  );
};

export default Import;
