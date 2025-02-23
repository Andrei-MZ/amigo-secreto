"use server";

import { createClient } from "@/utils/supabase/server";

export type CreateGroupState = {
  success: null | boolean;
  message?: string;
};

export async function createGroup(
  _previousState: CreateGroupState,
  formData: FormData
) {
  const supabase = await createClient();

  const { data: authUser, error: authError } = await supabase.auth.getUser();

  if (authError) {
    return {
      succeso: false,
      message: "Ocorreu um erro ao criar o grupo",
    };
  }

  const names = formData.getAll("name");
  const emails = formData.getAll("email");
  const groupName = formData.getAll("group-name");

  const { data: newGroup, error } = await supabase
    .from("groups")
    .insert({
      name: groupName,
      owner_id: authUser?.user.id,
    })
    .select()
    .single();

  if (error) {
    return {
      success: false,
      message: "Ocorreu um erro ao criar o grupo. Por favor tente novamente.",
    };
  }

  const participants = names.map((name, index) => ({
    group_id: newGroup.id,
    name,
    email: emails[index]
  }))

  const { data: createdParticipants, error: errorParticipants } = await supabase
  .from("participants")
  .insert(participants)
  .select()

}
