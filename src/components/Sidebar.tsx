"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Users, Stethoscope, LayoutDashboard, UserCircle } from "lucide-react";

const liens = [
  { nom: "Accueil", href: "/", icon: Home },
  { nom: "Patients", href: "/patients", icon: Users },
  { nom: "Consultations", href: "/consultations", icon: Stethoscope },
  { nom: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { nom: "Profil", href: "/profil", icon: UserCircle },
];

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className="w-64 bg-slate-950 text-slate-300 min-h-screen relative flex flex-col border-r border-slate-800">
      <nav className="space-y-2 relative z-10 p-6 flex-1 pt-8">
        {liens.map((lien) => {
          const actif = pathname === lien.href;
          const IconComponent = lien.icon;
          return (
            <Link
              key={lien.href}
              href={lien.href}
              className={`flex items-center gap-4 px-4 py-3.5 rounded-xl transition-all duration-300 group ${
                actif 
                  ? "bg-teal-500 text-white shadow-lg shadow-teal-500/25" 
                  : "text-slate-400 hover:bg-slate-800 hover:text-white"
              }`}
            >
              <span className={`flex items-center justify-center transition-transform duration-300 ${actif ? "scale-110" : "group-hover:scale-110"}`}>
                <IconComponent size={20} className={actif ? "text-white" : "text-slate-400 group-hover:text-white transition-colors"} />
              </span>
              <span className="font-medium">{lien.nom}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
