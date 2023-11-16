import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import supabase from '../lib/supabase';
import { ArrowLeft, Trash } from '@phosphor-icons/react';

function Image() {
  const navigate = useNavigate();
  const location = useLocation();
  const { userId, name } = location.state;

  const deleteImage = async () => {
    await supabase.storage.from('files-upload').remove([`${userId}/${name}`]);

    backToGallery();
  };

  const backToGallery = () => {
    navigate('/gallery');
  };

  return (
    <div className='flex flex-col'>
      <Header />

      <main className='flex flex-col items-center py-16'>
        <div className='flex flex-col items-center justify-center gap-10 max-w-7xl h-4/6'>
          <img
            className='w-full h-full object-cover rounded-2xl'
            src={`https://tfuefxkmrjkzebejzxpx.supabase.co/storage/v1/object/public/files-upload/${userId}/${name}`}
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
        </div>
      </main>
    </div>
  );
}

export default Image;
