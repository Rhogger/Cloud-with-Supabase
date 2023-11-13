import { Auth } from '@supabase/auth-ui-react';
import supabase from '../lib/supabase';
import defaultTheme from '../themes/defaultTheme';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function Authentication() {
  const navigate = useNavigate();

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange((event) => {
      if (event === 'SIGNED_IN') {
        navigate('/upload');
      }
    });

    return () => {
      authListener?.subscription.unsubscribe();
    };
  }, [navigate]);

  return (
    <div className='flex flex-col h-screen'>
      <Header />

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
}

export default Authentication;
