'use client'

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
        <Card>
            
        </Card>
    )

}