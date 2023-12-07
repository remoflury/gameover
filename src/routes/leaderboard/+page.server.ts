import type { PageServerLoad } from "../$types";
import { supabase } from "$lib/server/supabase";
import { error } from "@sveltejs/kit";
import { serverErrMessage } from "$lib/utils/generalVariables";
import type { LeaderboardUsersProps } from "$lib/types/Types";

export const load: PageServerLoad = async () => {

  // fetch leaderboard users with score
  const {data: users, error: err} = await supabase
    .from('leaderboard')
    .select('name, score')
    .not('score','is', null)
    .order('score', {ascending: false})

  if (err) {
    console.error(err)
    throw error(500, serverErrMessage)
  }

  return {
    users: users as LeaderboardUsersProps[]
  }
};