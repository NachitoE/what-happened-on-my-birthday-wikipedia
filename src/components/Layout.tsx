export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-400 to-gray-200 via-gray-100">
        <main>
            {children}
        </main>
    </div>
    );
}