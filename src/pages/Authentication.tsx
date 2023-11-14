import { Auth } from '@supabase/auth-ui-react';
import supabase from '../lib/supabase';
import defaultTheme from '../themes/defaultTheme';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Authentication() {
  const navigate = useNavigate();
  const [isSignedIn, setIsSignedIn] = useState<boolean>();

  useEffect(() => {
    const verifySession = async () => {
      const { data, error } = await supabase.auth.getSession();

      if (error) {
        console.error('error: ' + error);
      }

      if (data.session) {
        console.log(data);
        console.log(data.session);

        setIsSignedIn(true);
      } else {
      }
    };

    verifySession();

    if (isSignedIn) {
      navigate('/upload');
    }
  }, [navigate]);

  console.log(isSignedIn);

  return (
    <div className='flex flex-col h-screen'>
      <main className='flex flex-grow justify-center items-center'>
        <Auth
          supabaseClient={supabase}
          appearance={{
            theme: defaultTheme,
            style: {
              anchor: {
                textDecoration: 'none',
              },
            },
          }}
          providers={[]}
        />
      </main>
    </div>
  );
  // : (
  //   <>
  //     <h1>Nao to logado</h1>
  //   </>
  // );
}

export default Authentication;
