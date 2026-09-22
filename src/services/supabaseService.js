import { supabase } from '../lib/supabase';

export async function fetchProducts() {
  const { data, error } = await supabase.from('products').select('*');

  if (error) {
    throw error;
  }

  return data ?? [];
}

export async function getSession() {
  const { data: { session }, error } = await supabase.auth.getSession();

  if (error) {
    throw error;
  }

  return session;
}

export async function signOutUser() {
  const { error } = await supabase.auth.signOut();

  if (error) {
    throw error;
  }
}
