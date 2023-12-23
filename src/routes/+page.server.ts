import type { Actions, PageServerLoad } from "./$types";
import { supabase } from "$lib/server/supabase";
import { fail } from "@sveltejs/kit";

export const load: PageServerLoad = async () => {


  const twoDaysAgo = new Date();
  twoDaysAgo.setDate(twoDaysAgo.getDate() - 2);

  // Format the date in a way that your database expects
  // This format assumes your database expects a date in YYYY-MM-DD format
  const formattedDate = twoDaysAgo.toISOString().split('T')[0];

  // Delete all row, which are older than 2 days and have a score of null
  const {  error } = await supabase
    .from('leaderboard')
    .delete()
    .is('score', null)
    .lte('created_at', formattedDate);

  if (error) throw error;
};

export const actions: Actions = {
  startgame: async ({request}) => {
    const formData = await request.formData()
    const name = formData.get('name')

    if (!name || !name?.toString().trim()) return fail(406)
    const { data, error: err } = await supabase
      .from('leaderboard')
      .insert([{
        name
      }])
      .select('id, name')
      .single()

    if (err) {
      console.log(err)
      return fail(500)
    }

    return {
      id: data.id,
      name: data.name
    }

  }
};