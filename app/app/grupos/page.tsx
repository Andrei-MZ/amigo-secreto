import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { createClient } from "@/utils/supabase/client";
import Link from "next/link";

export default async function GruposPage() {
    const supabase = await createClient()

    const { data: authUser } = await supabase.auth.getUser()

    const { data, error } = await supabase.from("groups").select(`
        id,
        name,
        owner_id,
        created_at,
        participants!inner(email)
        `)
        .eq("participants.email", authUser?.user?.email)

    if (error) {
        return <p>Erro ao carregar grupos</p>
    }

    return (
        <main className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Meus grupos</h1>

            <Separator className="my-4" />

            <ScrollArea className="h-[calc(100vh-200px)]">
                <div className="grid gap-4 grid-cols-2 lg:grid-cols-3">
                    {data.map((group) => (
                        <Link
                            href={`/app/grupo/${group.id}`}
                            key={group.id}
                            className="cursor-pointer"
                        ></Link>
                    ))}
                </div>
            </ScrollArea>

        </main>
    )
}