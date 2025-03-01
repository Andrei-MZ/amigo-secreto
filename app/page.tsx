import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="bg-background min-h-screen flex flex-col items-center justify-center gap-6 p-4">
      <Card className="w-full max-w-xs sm:max-w-sm">
        <CardHeader>
          <CardTitle className="text-xl sm:text-2xl text-green-400">Acesse sua conta</CardTitle>
          <CardDescription className="text-white text-sm sm:text-base">
            Você deve fazer login antes de criar um grupo.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center">
          <Link href="/login">
            <Button className="w-full sm:w-auto">Fazer Login</Button>
          </Link>
        </CardContent>
      </Card>

      <Card className="w-full max-w-xs sm:max-w-sm">
        <CardHeader>
          <CardTitle className="text-xl sm:text-2xl text-green-400">Criar Grupo</CardTitle>
          <CardDescription className="text-white text-sm sm:text-base">
            Se você já fez login, clique abaixo para criar um grupo.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center">
          <Link href="/app/grupos/novo">
            <Button className="w-full sm:w-auto">Criar Grupo</Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
