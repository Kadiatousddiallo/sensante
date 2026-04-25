export default function Header() {
  return (
    <header className="bg-gradient-to-r from-teal-800 to-teal-600 text-white p-4 px-8 flex items-center justify-between shadow-lg sticky top-0 z-50">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/30 shadow-inner">
          <span className="font-extrabold text-lg">S</span>
        </div>
        <h1 className="text-xl font-extrabold tracking-tight">SénSanté</h1>
      </div>
      <span className="text-sm font-medium bg-teal-900/30 px-4 py-1.5 rounded-full border border-teal-500/30 backdrop-blur-sm shadow-sm">
        Assistant de santé communautaire
      </span>
    </header>
  );
}