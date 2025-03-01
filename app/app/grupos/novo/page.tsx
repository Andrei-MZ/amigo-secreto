import NewGroupForm from "@/components/new-group-form";
import { createClient } from "@/utils/supabase/server";

export default async function NewGroupPage() {
  const supabase = await createClient();
  const { data } = await supabase.auth.getUser();

  const loggedUser = {
    id: data?.user?.id as string,
    email: data?.user?.email as string,
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-lg p-6 rounded-lg shadow-md">
        <NewGroupForm loggedUser={loggedUser} />
      </div>
    </div>
  );
}
