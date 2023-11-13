import PlusIcon from '../assets/icons/plus-circle.svg';
import Header from '../components/Header';

function Uploading() {
  return (
    <div className='flex flex-col h-screen'>
      <Header></Header>

      <main className='flex flex-col flex-grow justify-center items-center gap-7'>
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
          multiple
        />

        <button className='text-xl font-semibold py-3 px-8 bg-purple-500 border-2 border-purple-700 hover:bg-purple-700 focus:bg-purple-700 focus:outline-0 rounded-2xl mt-4'>
          Send
        </button>
      </main>
    </div>
  );
}

export default Uploading;
