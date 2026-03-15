import { useState } from "react";
import { Link } from "react-router-dom";
import { BookOpen, Heart, Settings, BarChart3 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { courses } from "@/data/mockData";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Dashboard = () => {
  const [tab, setTab] = useState<"enrolled" | "wishlist" | "profile">("enrolled");
  const enrolledCourses = courses.slice(0, 4);
  const wishlistCourses = courses.slice(5, 8);

  const mockProgress = [65, 30, 90, 10];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        {/* Profile header */}
        <div className="flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">JD</div>
          <div>
            <h1 className="font-heading text-2xl font-bold text-foreground">John Doe</h1>
            <p className="text-sm text-muted-foreground">john@example.com • Student</p>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { label: "Enrolled", value: "4", icon: BookOpen },
            { label: "Completed", value: "1", icon: BarChart3 },
            { label: "Wishlist", value: "3", icon: Heart },
            { label: "Certificates", value: "1", icon: Settings },
          ].map(({ label, value, icon: Icon }) => (
            <div key={label} className="rounded-xl border border-border bg-card p-4">
              <Icon className="h-5 w-5 text-primary" />
              <p className="mt-2 font-heading text-2xl font-bold text-card-foreground">{value}</p>
              <p className="text-xs text-muted-foreground">{label}</p>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="mt-8 flex gap-1 border-b border-border">
          {(["enrolled", "wishlist", "profile"] as const).map((t) => (
            <button key={t} onClick={() => setTab(t)}
              className={`border-b-2 px-4 py-3 text-sm font-medium capitalize transition-colors ${tab === t ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground"}`}>
              {t === "enrolled" ? "My Courses" : t === "wishlist" ? "Wishlist" : "Profile"}
            </button>
          ))}
        </div>

        <div className="mt-6">
          {tab === "enrolled" && (
            <div className="space-y-4">
              {enrolledCourses.map((c, i) => (
                <div key={c.id} className="flex flex-col gap-4 rounded-xl border border-border bg-card p-4 sm:flex-row sm:items-center">
                  <div className="aspect-video w-full rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 sm:w-40" />
                  <div className="flex-1">
                    <h3 className="font-heading text-sm font-semibold text-card-foreground">{c.title}</h3>
                    <p className="text-xs text-muted-foreground">{c.instructor}</p>
                    <div className="mt-2">
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>{mockProgress[i]}% complete</span>
                      </div>
                      <Progress value={mockProgress[i]} className="mt-1 h-2" />
                    </div>
                  </div>
                  <Link to={`/learn/${c.id}`}>
                    <Button size="sm">Continue</Button>
                  </Link>
                </div>
              ))}
            </div>
          )}

          {tab === "wishlist" && (
            <div className="space-y-4">
              {wishlistCourses.map((c) => (
                <div key={c.id} className="flex flex-col gap-4 rounded-xl border border-border bg-card p-4 sm:flex-row sm:items-center">
                  <div className="aspect-video w-full rounded-lg bg-gradient-to-br from-accent to-primary/10 sm:w-40" />
                  <div className="flex-1">
                    <h3 className="font-heading text-sm font-semibold text-card-foreground">{c.title}</h3>
                    <p className="text-xs text-muted-foreground">{c.instructor}</p>
                    <p className="mt-1 font-heading text-sm font-bold text-foreground">₹{c.price.toLocaleString()}</p>
                  </div>
                  <div className="flex gap-2">
                    <Link to={`/courses/${c.id}`}><Button size="sm">View</Button></Link>
                    <Button size="sm" variant="outline"><Heart className="h-4 w-4" /></Button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {tab === "profile" && (
            <div className="max-w-md space-y-4">
              <div>
                <label className="text-sm font-medium text-foreground">Full Name</label>
                <input defaultValue="John Doe" className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground">Email</label>
                <input defaultValue="john@example.com" className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground" />
              </div>
              <Button>Save Changes</Button>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
