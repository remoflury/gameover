import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";
import { supabase } from "$lib/server/supabase";
import { serverErrMessage } from "$lib/utils/generalVariables";
import type { ServerAPIResponseProps } from "$lib/types/Types";

export const GET: RequestHandler = async () => {
  // fetch leaderboard users with score
  const {data: users, error: err} = await supabase
    .from('leaderboard')
    .select('id, name, score')
    .not('score','is', null)
    .order('score', {ascending: false})

  let response: ServerAPIResponseProps

  if (err) {
    response = {
      status: 500,
      message: serverErrMessage
    }
  } else {
    response = {
      status: 200,
      data: users
    }
  }

  return json(response);
};