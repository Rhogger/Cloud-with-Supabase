import supabase from '../lib/supabase';
import { NavigateFunction } from 'react-router-dom';

async function verifySignedIn(): Promise<boolean> {
  const session = supabase.auth.getSession();
  return Boolean((await session).data.session);
}

async function verifySignedInToProtectedRoutes(
  navigate: NavigateFunction
): Promise<boolean> {
  const session = supabase.auth.getSession();

  if ((await session).data.session) {
    return true;
  } else {
    navigate('/');
    return false;
  }
}

export { verifySignedIn, verifySignedInToProtectedRoutes };
