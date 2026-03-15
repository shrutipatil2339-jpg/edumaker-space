import { useState } from "react";
import { Users, BookOpen, DollarSign, TrendingUp, Trash2, Ban } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { courses, instructors } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const AdminDashboard = () => {
  const [tab, setTab] = useState<"overview" | "users" | "courses">("overview");

  const mockUsers = [
    { name: "John Doe", email: "john@example.com", role: "Student", status: "Active" },
    { name: "Dr. Arjun Mehta", email: "arjun@example.com", role: "Instructor", status: "Active" },
    { name: "Priya Sharma", email: "priya@example.com", role: "Instructor", status: "Active" },
    { name: "Rohit Agarwal", email: "rohit@example.com", role: "Student", status: "Active" },
    { name: "Sneha Reddy", email: "sneha@example.com", role: "Student", status: "Suspended" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="font-heading text-3xl font-bold text-foreground">Admin Dashboard</h1>
        <p className="mt-1 text-muted-foreground">Manage platform users, courses, and analytics</p>

        {/* Stats */}
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { label: "Total Users", value: "12,450", icon: Users, color: "text-primary" },
            { label: "Total Courses", value: "10", icon: BookOpen, color: "text-secondary" },
            { label: "Revenue", value: "₹18,50,000", icon: DollarSign, color: "text-success" },
            { label: "Growth", value: "+24%", icon: TrendingUp, color: "text-warning" },
          ].map(({ label, value, icon: Icon, color }) => (
            <div key={label} className="rounded-xl border border-border bg-card p-4">
              <Icon className={`h-5 w-5 ${color}`} />
              <p className="mt-2 font-heading text-2xl font-bold text-card-foreground">{value}</p>
              <p className="text-xs text-muted-foreground">{label}</p>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="mt-8 flex gap-1 border-b border-border">
          {(["overview", "users", "courses"] as const).map((t) => (
            <button key={t} onClick={() => setTab(t)}
              className={`border-b-2 px-4 py-3 text-sm font-medium capitalize transition-colors ${tab === t ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground"}`}>
              {t === "users" ? "Manage Users" : t === "courses" ? "Manage Courses" : t}
            </button>
          ))}
        </div>

        <div className="mt-6">
          {tab === "overview" && (
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="font-heading text-lg font-bold text-card-foreground">Top Courses</h3>
                <div className="mt-4 space-y-3">
                  {courses.slice(0, 5).map((c) => (
                    <div key={c.id} className="flex items-center justify-between text-sm">
                      <span className="text-foreground">{c.title}</span>
                      <span className="text-muted-foreground">{c.studentCount.toLocaleString()}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="font-heading text-lg font-bold text-card-foreground">Top Instructors</h3>
                <div className="mt-4 space-y-3">
                  {instructors.map((inst) => (
                    <div key={inst.id} className="flex items-center justify-between text-sm">
                      <span className="text-foreground">{inst.name}</span>
                      <span className="text-muted-foreground">{inst.studentCount.toLocaleString()} students</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {tab === "users" && (
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-sm">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="px-4 py-3 text-left font-medium text-muted-foreground">Name</th>
                    <th className="px-4 py-3 text-left font-medium text-muted-foreground">Email</th>
                    <th className="px-4 py-3 text-left font-medium text-muted-foreground">Role</th>
                    <th className="px-4 py-3 text-left font-medium text-muted-foreground">Status</th>
                    <th className="px-4 py-3 text-left font-medium text-muted-foreground">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {mockUsers.map((u, i) => (
                    <tr key={i} className="bg-card">
                      <td className="px-4 py-3 font-medium text-foreground">{u.name}</td>
                      <td className="px-4 py-3 text-muted-foreground">{u.email}</td>
                      <td className="px-4 py-3"><Badge variant={u.role === "Instructor" ? "default" : "secondary"}>{u.role}</Badge></td>
                      <td className="px-4 py-3"><Badge variant={u.status === "Active" ? "outline" : "destructive"}>{u.status}</Badge></td>
                      <td className="px-4 py-3">
                        <div className="flex gap-1">
                          <Button size="sm" variant="ghost"><Ban className="h-4 w-4" /></Button>
                          <Button size="sm" variant="ghost" className="text-destructive"><Trash2 className="h-4 w-4" /></Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {tab === "courses" && (
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-sm">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="px-4 py-3 text-left font-medium text-muted-foreground">Course</th>
                    <th className="px-4 py-3 text-left font-medium text-muted-foreground">Instructor</th>
                    <th className="px-4 py-3 text-left font-medium text-muted-foreground">Students</th>
                    <th className="px-4 py-3 text-left font-medium text-muted-foreground">Rating</th>
                    <th className="px-4 py-3 text-left font-medium text-muted-foreground">Price</th>
                    <th className="px-4 py-3 text-left font-medium text-muted-foreground">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {courses.map((c) => (
                    <tr key={c.id} className="bg-card">
                      <td className="max-w-[200px] px-4 py-3 font-medium text-foreground">{c.title}</td>
                      <td className="px-4 py-3 text-muted-foreground">{c.instructor}</td>
                      <td className="px-4 py-3 text-muted-foreground">{c.studentCount.toLocaleString()}</td>
                      <td className="px-4 py-3 text-muted-foreground">⭐ {c.rating}</td>
                      <td className="px-4 py-3 text-muted-foreground">₹{c.price.toLocaleString()}</td>
                      <td className="px-4 py-3">
                        <Button size="sm" variant="ghost" className="text-destructive"><Trash2 className="h-4 w-4" /></Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AdminDashboard;
