function Header() {
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
        <a
          href='#'
          className='text-base font-medium hover:text-purple-300 focus:text-purple-300 focus:outline-0'>
          Sign Out
        </a>
      </nav>
    </header>
  );
}

export default Header;
