import Header from '../components/Header';

function Gallery() {
  return (
    <div className='flex flex-col h-screen'>
      <Header />

      <main className='flex flex-col flex-grow justify-center items-center gap-7'>
        <h1 className='text-4xl font-bold'>Your images</h1>

        <article>
          {/* {auth.media.map((media) => {
            return (
              <>
                <div>
                  <img
                    src={`https://tfuefxkmrjkzebejzxpx.supabase.co/storage/v1/object/public/files-upload/${auth.userId}/${media.name}`}
                    alt=''
                  />
                </div>
              </>
            );
          })} */}
        </article>
      </main>
    </div>
  );
}

export default Gallery;
