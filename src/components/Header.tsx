import { Link, useNavigate } from 'react-router-dom';
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
    <header className='flex justify-between items-center px-5 py-3 border-b-2 border-zinc-500/20'>
      <h1 className='text-xl font-bold'>Data Cloud</h1>

      <nav className='flex gap-7'>
        <Link
          to='/upload'
          className='text-base font-medium hover:text-purple-600 focus:text-purple-600 focus:outline-0 transition-colors'>
          Upload
        </Link>
        <Link
          to='/gallery'
          className='text-base font-medium hover:text-purple-600 focus:text-purple-600 focus:outline-0 transition-colors'>
          Gallery
        </Link>
        <button
          className='text-base font-medium hover:text-purple-600 focus:text-purple-600 focus:outline-0 transition-colors'
          onClick={handleSignOut}>
          Sign Out
        </button>
      </nav>
    </header>
  );
}

export default Header;
