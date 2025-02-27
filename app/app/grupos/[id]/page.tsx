import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHeader, TableRow } from "@/components/ui/table"
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
        .from("groups")
        .select(`
        name, 
        participants (*)
        `
        )
        .eq("id", groupId)
        .single()

        console.log("Grupo encontrado:", data);
        console.log("Erro ao buscar grupo:", error)

        if (error) {
            return <p>Erro ao carregar o grupo</p>
        }

        const assignedParticipantId = data.participants.find(
            (p) => authUser?.user?.email == p.email
        )?.assigned_to


        const assignedParticipant = data.participants.find(
            (p) => p.id == assignedParticipantId
        )

    return (
        <main className="container mx-auto py-6">
            <Card className="w-full max-w-3xl mx-auto">
                <CardHeader>
                    <div className="flex items-center justify-between">
                        <CardTitle className="text-2xl">
                            Grupo{" "}
                            <span className="font-light underline decoration-green-400">
                                {data.name}
                            </span>
                        </CardTitle>
                    </div>
                    <CardDescription>
                        Informações do grupo e participantes
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <h2 className="text-xl font-semibold mb-4">Participantes</h2>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHeader>Nome</TableHeader>
                                <TableHeader>Email</TableHeader>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {data.participants.map((participant) => (
                                <TableRow key={participant.id}>
                                    <TableCell>{participant.name}</TableCell>
                                    <TableCell>{participant.email}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </main>
    )
}