'use client'

import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

interface Participant {
    name: string;
    email: string;
}

export default function NewGroupForm({ loggedUser,

}: {
     loggedUser: { email: string; id: string }
}) {
    const [participants, setParticipants] = useState<Participant[]>([
        { name: "", email: loggedUser.email}
    ])

    const [groupName, setGroupName] = useState("")

    return (
        <Card className=" w-full max-w-2xl mx-auto">
            <CardHeader>
                <CardTitle>Novo grupo</CardTitle>
                <CardDescription>Convide seus amigos para participar</CardDescription>
            </CardHeader>
        </Card>
    )

}