import { useState } from "react";
import { Plus, Users, DollarSign, BookOpen, TrendingUp, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { courses } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const InstructorDashboard = () => {
  const [tab, setTab] = useState<"courses" | "create" | "analytics">("courses");
  const myCourses = courses.slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="font-heading text-3xl font-bold text-foreground">Instructor Dashboard</h1>
        <p className="mt-1 text-muted-foreground">Manage your courses and track performance</p>

        {/* Stats */}
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { label: "Total Students", value: "1,240", icon: Users, color: "text-primary" },
            { label: "Total Revenue", value: "₹2,45,000", icon: DollarSign, color: "text-success" },
            { label: "Active Courses", value: "3", icon: BookOpen, color: "text-secondary" },
            { label: "Avg Rating", value: "4.7", icon: Star, color: "text-warning" },
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
          {(["courses", "create", "analytics"] as const).map((t) => (
            <button key={t} onClick={() => setTab(t)}
              className={`border-b-2 px-4 py-3 text-sm font-medium capitalize transition-colors ${tab === t ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground"}`}>
              {t === "create" ? "Create Course" : t}
            </button>
          ))}
        </div>

        <div className="mt-6">
          {tab === "courses" && (
            <div className="space-y-4">
              {myCourses.map((c) => (
                <div key={c.id} className="flex flex-col gap-4 rounded-xl border border-border bg-card p-4 sm:flex-row sm:items-center">
                  <div className="aspect-video w-full rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 sm:w-40" />
                  <div className="flex-1">
                    <h3 className="font-heading text-sm font-semibold text-card-foreground">{c.title}</h3>
                    <div className="mt-1 flex flex-wrap gap-3 text-xs text-muted-foreground">
                      <span>{c.studentCount.toLocaleString()} students</span>
                      <span>⭐ {c.rating}</span>
                      <span>₹{c.price.toLocaleString()}</span>
                    </div>
                  </div>
                  <Button size="sm" variant="outline">Edit</Button>
                </div>
              ))}
            </div>
          )}

          {tab === "create" && (
            <div className="max-w-lg space-y-4 rounded-xl border border-border bg-card p-6">
              <h2 className="font-heading text-lg font-bold text-card-foreground">Create New Course</h2>
              <div><Label>Course Title</Label><Input className="mt-1" placeholder="e.g. Advanced React Patterns" /></div>
              <div><Label>Category</Label>
                <select className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground">
                  <option>Programming</option><option>Web Development</option><option>Data Science</option><option>Cloud</option><option>AI/ML</option><option>DevOps</option><option>Cybersecurity</option><option>Design</option>
                </select>
              </div>
              <div><Label>Price (₹)</Label><Input className="mt-1" type="number" placeholder="999" /></div>
              <div><Label>Description</Label><textarea className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground" rows={4} placeholder="Describe your course..." /></div>
              <div><Label>YouTube/Vimeo Video URL</Label><Input className="mt-1" placeholder="https://youtube.com/..." /></div>
              <Button className="w-full"><Plus className="mr-1 h-4 w-4" /> Create Course</Button>
            </div>
          )}

          {tab === "analytics" && (
            <div className="space-y-6">
              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="font-heading text-lg font-bold text-card-foreground">Revenue Overview</h3>
                <div className="mt-4 grid gap-4 sm:grid-cols-3">
                  {[
                    { label: "This Month", value: "₹45,200", change: "+12%" },
                    { label: "Last Month", value: "₹40,300", change: "+8%" },
                    { label: "Total", value: "₹2,45,000", change: "+25%" },
                  ].map(({ label, value, change }) => (
                    <div key={label} className="rounded-lg bg-muted/50 p-4">
                      <p className="text-xs text-muted-foreground">{label}</p>
                      <p className="mt-1 font-heading text-xl font-bold text-foreground">{value}</p>
                      <p className="flex items-center gap-1 text-xs text-success"><TrendingUp className="h-3 w-3" /> {change}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="font-heading text-lg font-bold text-card-foreground">Recent Enrollments</h3>
                <div className="mt-4 space-y-3">
                  {["Rohit Agarwal enrolled in Python Programming", "Sneha Reddy enrolled in Full Stack Bootcamp", "Arjun Nair enrolled in Python Programming", "Kavita Menon enrolled in Full Stack Bootcamp"].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <div className="h-2 w-2 rounded-full bg-success" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default InstructorDashboard;
