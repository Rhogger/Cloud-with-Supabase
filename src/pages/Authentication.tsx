import { Auth } from '@supabase/auth-ui-react';
import supabase from '../supabase';
import defaultTheme from '../themes/defaultTheme';
import Header from '../components/Header';

function Authentication() {
  return (
    <>
      {/* <Header /> */}

      <div className='flex justify-center items-center h-screen'>
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
          redirectTo='uploading'
        />
      </div>
    </>
  );
}

export default Authentication;
