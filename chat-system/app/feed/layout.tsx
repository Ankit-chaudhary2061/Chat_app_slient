import Sidebar from "@/src/lib/components/sidebar";


export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-slate-900 text-white">

      {/* LEFT SIDEBAR */}
      <Sidebar />

      {/* PAGE CONTENT */}
      {children}

    </div>
  );
}