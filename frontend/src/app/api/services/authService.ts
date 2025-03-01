import { supabase } from '../config/supabase-client';
import { UserModel } from '../models/user-model';

export const storeUserInSupabase = async (user: UserModel) => {

    console.log(user,"data in storeUserInSupabase")
  // Check if user already exists
  const { data } = await supabase.from('users').select('*').eq('id', user.user_id).single();

  if (!data) {
    // Insert new user
    const { error: insertError } = await supabase.from('users').insert([
      { user_id: user.user_id, email: user.email, full_name: user.full_name },
    ]);

    if (insertError) throw insertError;
  }

  return user;
};
