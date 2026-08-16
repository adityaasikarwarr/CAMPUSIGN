import DashboardLayout from "@/components/layout/dashboard/DashboardLayout";

export default function StaffLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DashboardLayout role="STAFF">{children}</DashboardLayout>;
}
