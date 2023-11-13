import { ChangeEvent, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import supabase from '../lib/supabase';
import { FileObject } from '@supabase/storage-js/src/lib/types';

const [userId, setUserId] = useState('');
const [media, setMedia] = useState<FileObject[]>([]);

const getUser = async () => {
  try {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (user !== null) {
      setUserId(user.id);
    } else {
      setUserId('');
    }
  } catch (e) {
    console.error(e);
  }
};

async function uploadImage(e: ChangeEvent<HTMLInputElement>, userId: string) {
  let files = e.target.files;

  if (files && files.length > 0) {
    const file = files[0];

    const { data, error } = await supabase.storage
      .from('files-upload')
      .upload(userId + '/' + uuidv4(), file);

    if (data) getMedia(userId);
    else console.error(error);
  } else {
    console.warn('Nenhum arquivo selecionado!');
  }
}

async function getMedia(userId: string) {
  const { data, error } = await supabase.storage
    .from('files-upload')
    .list(userId + '/', {
      limit: 10,
      offset: 0,
      sortBy: {
        column: 'name',
        order: 'asc',
      },
    });

  if (data) setMedia(data);
  else console.error(error);
}

const signOut = async () => {
  supabase.auth.signOut();
};

function updateData(userId: string) {
  useEffect(() => {
    getUser();
    getMedia(userId);
  }, [userId]);
}

export {
  userId,
  setUserId,
  media,
  setMedia,
  getUser,
  getMedia,
  updateData,
  uploadImage,
  signOut,
};
