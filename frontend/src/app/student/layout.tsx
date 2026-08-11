import DashboardLayout from "@/components/layout/dashboard/DashboardLayout";

export default function StudentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DashboardLayout role="STUDENT">{children}</DashboardLayout>;
}
