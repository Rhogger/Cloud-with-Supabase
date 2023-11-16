import { Auth } from '@supabase/auth-ui-react';
import supabase from '../lib/supabase';
import defaultTheme from '../themes/defaultTheme';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Authentication() {
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.onAuthStateChange((event) => {
      if (event == 'SIGNED_IN') {
        navigate('/upload');
      }
    });
  }, [navigate]);

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
