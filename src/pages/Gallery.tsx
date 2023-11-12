import * as auth from '../auth/auth';

function Gallery() {
  return (
    <>
      <main className='flex flex-col justify-center items-center gap-7 h-screen'>
        <h1 className='text-4xl font-bold'>Your images</h1>

        <article>
          {auth.media.map((media) => {
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
          })}
        </article>
      </main>
    </>
  );
}

export default Gallery;
