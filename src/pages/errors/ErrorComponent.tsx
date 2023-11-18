import Header from '../../components/Header';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import supabase from '../../lib/supabase';
import { useEffect, useState } from 'react';

type ErrorComponentProps = {
  errorMessage: string;
  solutionMessage: string;
};

function ErrorComponent({
  errorMessage,
  solutionMessage,
}: ErrorComponentProps) {
  const navigate = useNavigate();
  const [userId, setUserId] = useState('');
  const { id } = useParams();
  const [nameImage, setNameImage] = useState<string | undefined>();

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
      console.log('Caiu aqui');
      console.log('userId: ' + userId);
      console.log('Id: ' + id);

      if (!nameImage) {
        const { data, error } = await supabase.storage
          .from('files-upload')
          .list(userId + '/', {
            limit: 100,
            offset: 0,
            sortBy: { column: 'name', order: 'asc' },
            search: `${id}`,
          });

        if (error) {
          console.error(error);
        }

        if (!data) {
          setNameImage(id);
        }
      }
    } catch (error) {
      console.error(error);
    } finally {
      console.log(nameImage);
    }
  };

  useEffect(() => {
    getUser();
    searchImage();
  }, [userId]);

  return (
    <div className='flex flex-col h-screen'>
      <Header />

      <main className='flex justify-center items-center my-20 h-full'>
        <article className='flex justify-center items-center gap-12 h-60 w-4/5'>
          <section className='flex flex-col gap-4 bg-zinc-400/10 border border-white/25 rounded-lg h-full w-full p-5'>
            <h1 className='text-4xl font-bold text-center'>Error Message</h1>

            <p>{errorMessage}</p>
          </section>

          <section className='flex flex-col gap-4 bg-zinc-400/10 border border-white/25 rounded-lg h-full w-full p-5'>
            <h1 className='text-4xl font-bold text-center'>
              Possible Solution
            </h1>

            <p>{solutionMessage}</p>
          </section>
        </article>
      </main>
    </div>
  );
}

export default ErrorComponent;
