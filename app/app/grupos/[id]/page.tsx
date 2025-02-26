import { createClient } from "@/utils/supabase/server"

export default async function GrupoIdPage({
    params,
}: {
    params: { id: string }
}) {
    const supabase = await createClient()
    const { data: authUser } = await supabase.auth.getUser()

    const groupId = (await params).id

    const { data, error } = await supabase
        .from("grupos")
        .select(`
        name, 
        participants (*)
        `
        )
        .eq("id", groupId)
        .single()

        if (error) {
            return <p>Erro ao carregar o grupo</p>
        }

        const assignedParticipantId = data.participants.find(
            (p) => authUser?.user?.email === p.email
        )?.assigned_ot

        const assignedParticipant = data.participants.find(
            p => p.id === assignedParticipantId
        )

    return (
        <main></main>
    )
}