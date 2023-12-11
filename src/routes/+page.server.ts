import type { Actions } from "./$types";
import { supabase } from "$lib/server/supabase";
import { fail } from "@sveltejs/kit";

export const actions: Actions = {
  startgame: async ({request}) => {
    const formData = await request.formData()
    const name = formData.get('name')

    if (!name) return fail(406)
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