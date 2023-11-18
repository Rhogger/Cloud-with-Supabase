import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Header from '../components/Header';
import supabase from '../lib/supabase';
import { ArrowLeft, Trash } from '@phosphor-icons/react';
import { useEffect, useState } from 'react';
import { PropagateLoader } from 'react-spinners';

function Image() {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();
  const [userId, setUserId] = useState('');
  const [nameImage, setNameImage] = useState<string | undefined>();
  const [existImage, setExistImage] = useState<boolean>(false);
  const [searchingImage, setSearchingImage] = useState<boolean>(true);

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

  const searchImage = async () => {
    try {
      setExistImage(false);

      if (!id) {
        const { name } = location.state;
        setNameImage(name);
      } else {
        setNameImage(id);
      }
    } catch (error) {
      console.error(error);
    } finally {
      const { data, error } = await supabase.storage
        .from('files-upload')
        .list(userId + '/', {
          limit: 100,
          offset: 0,
          sortBy: { column: 'name', order: 'asc' },
          search: `${nameImage}`,
        });

      if (data && data?.length > 0 && data[0].name == nameImage) {
        setExistImage(true);
      }

      if (error) {
        console.error(error);
      }

      setSearchingImage(false);
    }
  };

  const deleteImage = async () => {
    await supabase.storage
      .from('files-upload')
      .remove([`${userId}/${nameImage}`]);

    backToGallery();
  };

  const backToGallery = () => {
    navigate('/gallery');
  };

  useEffect(() => {
    getUser();
    searchImage();
  }, [userId]);

  return (
    <div className='flex flex-col h-screen'>
      <Header />

      <main className='flex flex-grow flex-col items-center justify-center py-16 h-full'>
        <div className='flex flex-col items-center justify-center gap-10 max-w-7xl h-4/6'>
          {searchingImage && (
            <PropagateLoader className='mt-10' color='#A855F7' />
          )}
          {!searchingImage && !existImage && (
            <h1 className='text-center text-3xl'>Não existe imagem!</h1>
          )}
          {!searchingImage && existImage && (
            <>
              <img
                className='w-full h-full object-cover rounded-2xl'
                src={`https://tfuefxkmrjkzebejzxpx.supabase.co/storage/v1/object/public/files-upload/${userId}/${nameImage}`}
                alt=''
              />

              <div className='flex gap-3 w-full'>
                <button
                  className='flex items-center justify-center gap-3 rounded-lg w-full py-2 px-4 bg-zinc-500 hover:bg-zinc-700 focus:bg-zinc-700 font-bold text-lg transition-colors'
                  onClick={backToGallery}>
                  <ArrowLeft size={40} />
                  Voltar
                </button>
                <button
                  className='flex items-center justify-center gap-3 rounded-lg w-full py-2 px-4 bg-red-500 hover:bg-red-700 focus:bg-red-700 font-bold text-lg transition-colors'
                  onClick={deleteImage}>
                  <Trash size={40} />
                  Deletar
                </button>
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
}

export default Image;
