import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-background w-screen h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">App Amigo Secreto</h1>
      <Link href="/app/grupos/novo">
        <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition">
          Criar Novo Grupo
        </button>
      </Link>
    </div>
  );
}
