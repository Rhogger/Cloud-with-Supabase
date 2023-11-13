// export default App;

// import { Auth } from '@supabase/auth-ui-react';
// import { ThemeSupa } from '@supabase/auth-ui-shared';
// import { ChangeEvent, useEffect, useState } from 'react';
// import { v4 as uuidv4 } from 'uuid';
// import supabase from './supabase';
// import { FileObject } from '@supabase/storage-js/src/lib/types';

// function App() {
//     const [userId, setUserId] = useState('');
//     const [media, setMedia] = useState<FileObject[]>([]);

//     const getUser = async () => {
//       try {
//         const {
//           data: { user },
//         } = await supabase.auth.getUser();

//         if (user !== null) {
//           setUserId(user.id);
//         } else {
//           setUserId('');
//         }
//       } catch (e) {
//         console.error(e);
//       }
//     };

//     async function uploadImage(e: ChangeEvent<HTMLInputElement>) {
//       let files = e.target.files;

//       if (files && files.length > 0) {
//         const file = files[0];

//         const { data, error } = await supabase.storage
//           .from('files-upload')
//           .upload(userId + '/' + uuidv4(), file);

//         if (data) getMedia();
//         else console.error(error);
//       } else {
//         console.warn('Nenhum arquivo selecionado!');
//       }
//     }

//     async function getMedia() {
//       const { data, error } = await supabase.storage
//         .from('files-upload')
//         .list(userId + '/', {
//           limit: 10,
//           offset: 0,
//           sortBy: {
//             column: 'name',
//             order: 'asc',
//           },
//         });

//       if (data) setMedia(data);
//       else console.error(error);
//     }

//     const signout = async () => {
//       supabase.auth.signOut();
//     };

//     useEffect(() => {
//       getUser();
//       getMedia();
//     }, [userId]);

//   return (
//     <div className='flex justify-center items-center h-screen'>
//       {userId == '' ? (
//         <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />
//       ) : (
//         <></>
//       )}
//       <input
//         className='w-96 file:font-medium file:bg-purple-700 hover:file:bg-purple-600 focus:file:bg-purple-600 file:border file:border-white file:rounded-md file:p-2 file:mr-4 focus:outline-0'
//         type='file'
//         name='upload'
//         id='upload'
//         multiple
//         onChange={(e) => uploadImage(e)}
//       />
//       <h2>My Uploads</h2>
//       {media.map((media) => {
//         return (
//           <>
//             <div>
//               <img
//                 src={`https://tfuefxkmrjkzebejzxpx.supabase.co/storage/v1/object/public/files-upload/${userId}/${media.name}`}
//                 alt=''
//               />
//             </div>
//           </>
//         );
//       })}
//       <button onClick={signout}>Sign Out</button>;
//     </div>
//   );
// }
