import type { RequestHandler } from "./$types";
import { supabase } from "$lib/server/supabase";
import { error, json } from "@sveltejs/kit";
import type { ServerAPIResponseProps } from "$lib/types/Types";

export const GET: RequestHandler = async ({ url }) => {

  const score = url.searchParams.get('score')
  const userid = url.searchParams.get('userid')

  if (!score || !userid) throw error(500, 'Please provide a score.') 

  const {data,  error: err } = await supabase
    .from('leaderboard')
    .update({ score: score })
    .eq('id', userid)
    .select('id, score')

  if (err) {
    throw error(500, 'There was an error.')
  }

  let response: ServerAPIResponseProps

  if (data.length) {
    response = {
      status: 201
    }
  } else {
    response = {
      status: 500,
      message: 'Error while updating user score.'
    }
  }

  return json(response);
};