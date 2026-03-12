import Sidebar from "@/src/lib/components/sidebar";
import { ReduxProvider } from "@/src/lib/provider/provider";


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
      <ReduxProvider>
      {children}
      </ReduxProvider>

    </div>
  );
}