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
    <aside className="w-64 bg-slate-900 text-slate-300 shadow-2xl relative overflow-hidden flex flex-col">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-teal-900/40 to-transparent pointer-events-none" />
      
      <nav className="space-y-3 relative z-10 p-6 flex-1">
        {liens.map((lien) => {
          const actif = pathname === lien.href;
          const IconComponent = lien.icon;
          return (
            <Link
              key={lien.href}
              href={lien.href}
              className={`flex items-center gap-4 px-4 py-3.5 rounded-xl transition-all duration-300 group ${
                actif 
                  ? "bg-teal-600/15 text-teal-400 font-semibold border border-teal-500/20 shadow-inner" 
                  : "hover:bg-slate-800/60 hover:text-white"
              }`}
            >
              <span className={`flex items-center justify-center transition-transform duration-300 ${actif ? "scale-110" : "group-hover:scale-110"}`}>
                <IconComponent size={20} className={actif ? "text-teal-400" : "text-slate-400 group-hover:text-white transition-colors"} />
              </span>
              <span>{lien.nom}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
