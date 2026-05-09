export default function Header() {
  return (
    <header className="bg-white text-slate-800 p-4 px-8 flex items-center justify-between border-b border-slate-200 sticky top-0 z-50">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-teal-600 rounded-xl flex items-center justify-center shadow-md shadow-teal-600/30">
          <span className="font-extrabold text-xl text-white">S</span>
        </div>
        <h1 className="text-2xl font-extrabold tracking-tight text-slate-900">SénSanté</h1>
      </div>
      <span className="text-sm font-semibold bg-teal-50 text-teal-700 px-4 py-2 rounded-full border border-teal-100">
        Assistant de santé communautaire
      </span>
    </header>
  );
}