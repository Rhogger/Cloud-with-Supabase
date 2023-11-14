import { useNavigate } from 'react-router-dom';
import supabase from '../lib/supabase';

function Header() {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut(); // Realiza o logout
    if (!error) {
      navigate('/');
    } else {
      console.error('Erro ao fazer logout:', error.message);
    }
  };

  return (
    <header className='flex justify-between items-center px-5 py-3'>
      <h1 className='text-xl font-bold'>Data Cloud</h1>

      <nav className='flex gap-7'>
        <a
          href='/upload'
          className='text-base font-medium hover:text-purple-300 focus:text-purple-300 focus:outline-0'>
          Upload
        </a>
        <a
          href='/gallery'
          className='text-base font-medium hover:text-purple-300 focus:text-purple-300 focus:outline-0'>
          Gallery
        </a>
        <button
          className='text-base font-medium hover:text-purple-300 focus:text-purple-300 focus:outline-0'
          onClick={handleSignOut}>
          Sign Out
        </button>
      </nav>
    </header>
  );
}

export default Header;
