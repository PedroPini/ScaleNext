'use server'

import { createClerkSupabaseClient } from "@/utils/supabase/client"

const client = createClerkSupabaseClient();

export async function addTask(name: string) {
  await client.from("tasks").insert({
    name
  });
}

export async function deleteTask(taskId: number) {
  await client.from("tasks").delete().eq("id", taskId)
}

export async function setTaskState(taskId: number, isDone: boolean) {
  await client.from("tasks").update({
    is_done: isDone
  }).eq("id", taskId)
}