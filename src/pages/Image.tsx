import Header from '../components/Header';

function Image() {
  return (
    <div className='flex flex-col h-screen'>
      <Header />

      <main className='flex flex-col flex-grow justify-center items-center gap-7'></main>
    </div>
  );
}

export default Image;
