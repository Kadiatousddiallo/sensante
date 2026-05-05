"use client";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";

export default function Header() {
  const { data: session } = useSession();

  return (
    <header className="bg-white text-slate-800 p-4 px-8 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-teal-600 rounded-xl flex items-center justify-center">
          <span className="font-extrabold text-xl text-white">S</span>
        </div>
        <h1 className="text-2xl font-extrabold tracking-tight text-slate-900">SénSanté</h1>
      </div>

      <div className="flex items-center gap-4">
        {session ? (
          <>
            <span className="text-sm font-semibold bg-teal-50 text-teal-700 px-4 py-2 rounded">
              {session.user?.name}
            </span>
            <button
              onClick={() => signOut()}
              className="text-sm font-semibold bg-red-50 text-red-600 px-4 py-2 rounded hover:bg-red-100 transition"
            >
              Déconnexion
            </button>
          </>
        ) : (
          <Link
            href="/login"
            className="text-sm font-semibold bg-teal-50 text-teal-700 px-4 py-2 rounded hover:bg-teal-100 transition"
          >
            Se connecter
          </Link>
        )}
      </div>
    </header>
  );
}
