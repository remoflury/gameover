import type { RequestHandler } from "./$types";
import { supabase } from "$lib/server/supabase";
import { error, json } from "@sveltejs/kit";

export const GET: RequestHandler = async ({ url }) => {

  const score = url.searchParams.get('score')
  const name = url.searchParams.get('name')

  if (!score || !name) throw error(500, 'Please provide a score.') 

  const { error: err } = await supabase
  .from('leaderboard')
  .insert({ score: score, name: name })

  if (err) {
    console.error(err)
    throw error(500, 'There was an error.')
  }
  const response = {
    status: 201,
    score
  }

  return json(response);
};