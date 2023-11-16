import Header from '../components/Header';
import { useEffect, useState } from 'react';
import supabase from '../lib/supabase';
import { FileObject } from '@supabase/storage-js/src/lib/types';
import { useNavigate } from 'react-router-dom';
import { PropagateLoader } from 'react-spinners';

function Gallery() {
  const [userId, setUserId] = useState('');
  const [media, setMedia] = useState<FileObject[]>([]);
  const [loading, setLoading] = useState(true);
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

  async function getMedia() {
    try {
      const { data, error } = await supabase.storage
        .from('files-upload')
        .list(userId + '/', {
          limit: 10,
          offset: 0,
          sortBy: {
            column: 'name',
            order: 'asc',
          },
        });

      if (data) setMedia(data);
      else console.error(error);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  async function handleMediaClick(event: React.MouseEvent<HTMLDivElement>) {
    const keyElement = event.target as HTMLDivElement;
    const id = keyElement.id;

    const imgElement = event.target as HTMLImageElement;
    const name = imgElement.id;

    navigate(`./${id}`, {
      state: {
        userId,
        name,
      },
    });
  }

  useEffect(() => {
    getUser();
    getMedia();
  }, [userId]);
  return (
    <div className='flex flex-col h-screen'>
      <Header />

      <main className='flex flex-col flex-grow justify-center items-center gap-12'>
        <h1 className='text-4xl font-bold'>Your images</h1>

        <article className='w-4/5 flex flex-wrap gap-8 justify-center'>
          {loading && <PropagateLoader className='mt-10' color='#A855F7' />}

          {media.map((media) => {
            return (
              <div
                className='bg-zinc-400/10 border border-white/25 hover:border-white/50 rounded-lg w-56 flex items-center justify-center p-2 transition-colors'
                key={media.id}
                id={media.id}
                onClick={handleMediaClick}>
                <img
                  className='w-full h-full object-cover cursor-pointer'
                  src={`https://tfuefxkmrjkzebejzxpx.supabase.co/storage/v1/object/public/files-upload/${userId}/${media.name}`}
                  id={`${media.name}`}
                  alt=''
                />
              </div>
            );
          })}
        </article>
      </main>
    </div>
  );
}

export default Gallery;
