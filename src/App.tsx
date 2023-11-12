import PlusIcon from './assets/icons/plus-circle.svg';

import { createClient } from '@supabase/supabase-js';
import { Auth } from '@supabase/auth-ui-react';
import {
  // Import predefined theme
  ThemeSupa,
} from '@supabase/auth-ui-shared';

const supabase = createClient(process.env.);

// const App = () => <Auth
// supabaseClient={supabase}
// appearance={{ theme: ThemeSupa }}
// />

function App() {
  return (
    <main className='flex flex-col justify-center items-center gap-7 h-screen'>
      <h1 className='text-4xl font-bold'>Save ur images</h1>

      <label
        htmlFor='upload'
        className='flex flex-col justify-center items-center gap-4 w-96 h-48 border border-dashed rounded-2xl p-6'>
        <img src={PlusIcon} alt='Arrow Icon' className='w-14' />

        <h2 className='text-lg font-bold text-zinc-300'>Drag here</h2>
      </label>

      <input
        className='w-96 file:font-medium file:bg-purple-700 hover:file:bg-purple-600 focus:file:bg-purple-600 file:border file:border-white file:rounded-md file:p-2 file:mr-4 focus:outline-0'
        type='file'
        name='upload'
        id='upload'
      />

      <button className='text-xl font-semibold py-3 px-8 border-2 border-purple-700 hover:border-purple-500 focus:border-purple-500 focus:outline-0 rounded-2xl mt-4'>
        Send
      </button>
    </main>
  );
}

export default App;
