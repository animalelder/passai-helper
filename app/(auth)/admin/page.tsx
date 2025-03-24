import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import UsersTable from "@/components/users-table";

export default async function AdminDashboard() {
  return (
    <main className="flex flex-col">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4">
        <div className="mb-8 flex flex-col gap-2">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <p className="text-muted-foreground">
            Manage users and view system statistics
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Users</CardTitle>
          </CardHeader>
          <CardContent>
            <UsersTable />
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
