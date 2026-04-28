
import Link from "next/link";

export default function LoginButton() {
  return (
    <Link href="/login" className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition" >
      Se connecter
    </Link>
  );
}