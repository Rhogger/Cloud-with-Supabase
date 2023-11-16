import { ChangeEvent, useEffect, useState } from 'react';
import Header from '../components/Header';
import supabase from '../lib/supabase';
import { v4 as uuidv4 } from 'uuid';
import DragNDrop from './../components/DragNDrop';
import { useNavigate } from 'react-router-dom';

function Upload() {
  const [userId, setUserId] = useState('');
  const [selectedFile, setSelectedFile] = useState<FileList | null>(null);
  const navigate = useNavigate();

  const getUser = async () => {
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (user !== null) {
        setUserId(user.id);
      } else {
        navigate('/');
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    let files = e.target.files;

    if (files && files.length > 0) {
      setSelectedFile(files);
    }
  };

  async function handleSendFiles() {
    if (selectedFile) {
      for (let i = 0; i < selectedFile.length; i++) {
        const file = selectedFile[i];

        await supabase.storage
          .from('files-upload')
          .upload(userId + '/' + uuidv4(), file);
      }

      setSelectedFile(null);
    } else {
      console.warn('Nenhum arquivo selecionado!');
    }
  }

  useEffect(() => {
    getUser();
  }, [userId]);

  return (
    <div className='flex flex-col h-screen'>
      <Header></Header>

      <main className='flex flex-col flex-grow justify-center items-center gap-7'>
        <h1 className='text-4xl font-bold'>Save ur images</h1>

        <DragNDrop onChange={handleFileChange} />

        <button
          className='text-xl font-semibold py-3 px-8 bg-purple-500 border-2 border-purple-700 hover:bg-purple-700 focus:bg-purple-700 focus:outline-0 rounded-2xl mt-4'
          onClick={handleSendFiles}>
          Send
        </button>
      </main>
    </div>
  );
}

export default Upload;
