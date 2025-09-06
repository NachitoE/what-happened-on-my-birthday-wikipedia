export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 relative overflow-hidden flex flex-col">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 50%, rgba(120,53,15,0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(120,53,15,0.08) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(120,53,15,0.06) 0%, transparent 50%)
          `,
        }}
      ></div>
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            radial-gradient(ellipse at 15% 30%, rgba(62,39,35,0.3) 0%, transparent 40%),
            radial-gradient(ellipse at 85% 70%, rgba(62,39,35,0.2) 0%, transparent 35%),
            radial-gradient(ellipse at 45% 10%, rgba(62,39,35,0.15) 0%, transparent 25%),
            radial-gradient(ellipse at 70% 90%, rgba(62,39,35,0.25) 0%, transparent 30%)
          `,
        }}
      ></div>
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: `
            repeating-conic-gradient(
              from 0deg at 50% 50%,
              rgba(160,82,45,0.1) 0deg,
              transparent 30deg,
              rgba(160,82,45,0.08) 60deg,
              transparent 90deg
            )
          `,
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-200/40 via-transparent to-amber-200/40"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-amber-100/30 via-transparent to-yellow-100/30"></div>

      <main className="relative z-10 flex-1">{children}</main>

      <footer className="relative z-10 mt-auto">
        <div className="flex items-center justify-center mb-6">
          <div
            className="h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent flex-1 max-w-md opacity-60"
            style={{
              transform: "rotate(-0.2deg)",
              filter: "drop-shadow(0 1px 1px rgba(120,53,15,0.2))",
            }}
          ></div>
          <div className="mx-4 text-amber-600 text-lg opacity-70">✦</div>
          <div
            className="h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent flex-1 max-w-md opacity-60"
            style={{
              transform: "rotate(0.2deg)",
              filter: "drop-shadow(0 1px 1px rgba(120,53,15,0.2))",
            }}
          ></div>
        </div>

        <div
          className="text-center pb-6 px-4 font-serif text-amber-700"
          style={{
            textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
            transform: "rotate(-0.1deg)",
          }}
        >
          <p className="text-sm">
            Made with <span className="text-red-600">❤️</span> by{" "}
            <a
              href="https://github.com/NachitoE"
              className="text-amber-800 hover:text-orange-600 transition-colors duration-200 font-medium underline decoration-amber-400 hover:decoration-orange-500"
              style={{
                textShadow: "1px 1px 2px rgba(0,0,0,0.15)",
              }}
            >
              Ignacio Esteves
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
