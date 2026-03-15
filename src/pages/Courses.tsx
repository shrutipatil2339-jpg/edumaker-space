import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { Search, SlidersHorizontal, X } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourseCard from "@/components/CourseCard";
import { courses, categories } from "@/data/mockData";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Courses = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);
  const [search, setSearch] = useState(searchParams.get("q") || "");
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get("category") || "");
  const [selectedLevel, setSelectedLevel] = useState("");
  const [selectedRating, setSelectedRating] = useState(0);
  const [sortBy, setSortBy] = useState("popular");

  const filtered = useMemo(() => {
    let result = [...courses];
    if (search) result = result.filter((c) => c.title.toLowerCase().includes(search.toLowerCase()) || c.instructor.toLowerCase().includes(search.toLowerCase()));
    if (selectedCategory) result = result.filter((c) => c.category === selectedCategory);
    if (selectedLevel) result = result.filter((c) => c.level === selectedLevel);
    if (selectedRating) result = result.filter((c) => c.rating >= selectedRating);
    if (sortBy === "price-low") result.sort((a, b) => a.price - b.price);
    else if (sortBy === "price-high") result.sort((a, b) => b.price - a.price);
    else if (sortBy === "rating") result.sort((a, b) => b.rating - a.rating);
    else result.sort((a, b) => b.studentCount - a.studentCount);
    return result;
  }, [search, selectedCategory, selectedLevel, selectedRating, sortBy]);

  const clearFilters = () => { setSelectedCategory(""); setSelectedLevel(""); setSelectedRating(0); setSearch(""); };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="font-heading text-3xl font-bold text-foreground">All Courses</h1>
        <p className="mt-1 text-muted-foreground">{filtered.length} courses available</p>

        {/* Search & Sort bar */}
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search courses..." className="pl-10" />
          </div>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}
            className="rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground">
            <option value="popular">Most Popular</option>
            <option value="rating">Highest Rated</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
          <Button variant="outline" size="sm" onClick={() => setShowFilters(!showFilters)} className="gap-1 lg:hidden">
            <SlidersHorizontal className="h-4 w-4" /> Filters
          </Button>
        </div>

        <div className="mt-6 flex gap-8">
          {/* Filter sidebar */}
          <aside className={`shrink-0 ${showFilters ? "block" : "hidden"} w-full lg:block lg:w-56`}>
            <div className="space-y-6 rounded-xl border border-border bg-card p-4">
              <div>
                <h3 className="font-heading text-sm font-semibold text-card-foreground">Category</h3>
                <div className="mt-2 space-y-1">
                  {categories.map((cat) => (
                    <button key={cat.id} onClick={() => setSelectedCategory(selectedCategory === cat.name ? "" : cat.name)}
                      className={`block w-full rounded-md px-2 py-1.5 text-left text-sm transition-colors ${selectedCategory === cat.name ? "bg-primary/10 font-medium text-primary" : "text-muted-foreground hover:text-foreground"}`}>
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-heading text-sm font-semibold text-card-foreground">Level</h3>
                <div className="mt-2 space-y-1">
                  {["Beginner", "Intermediate", "Advanced"].map((lvl) => (
                    <button key={lvl} onClick={() => setSelectedLevel(selectedLevel === lvl ? "" : lvl)}
                      className={`block w-full rounded-md px-2 py-1.5 text-left text-sm transition-colors ${selectedLevel === lvl ? "bg-primary/10 font-medium text-primary" : "text-muted-foreground hover:text-foreground"}`}>
                      {lvl}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-heading text-sm font-semibold text-card-foreground">Rating</h3>
                <div className="mt-2 space-y-1">
                  {[4.5, 4.0, 3.5].map((r) => (
                    <button key={r} onClick={() => setSelectedRating(selectedRating === r ? 0 : r)}
                      className={`block w-full rounded-md px-2 py-1.5 text-left text-sm transition-colors ${selectedRating === r ? "bg-primary/10 font-medium text-primary" : "text-muted-foreground hover:text-foreground"}`}>
                      {r}+ ★
                    </button>
                  ))}
                </div>
              </div>
              {(selectedCategory || selectedLevel || selectedRating > 0) && (
                <Button variant="ghost" size="sm" onClick={clearFilters} className="w-full gap-1">
                  <X className="h-3 w-3" /> Clear Filters
                </Button>
              )}
            </div>
          </aside>

          {/* Course grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="py-20 text-center text-muted-foreground">No courses found. Try adjusting your filters.</div>
            ) : (
              <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {filtered.map((c, i) => <CourseCard key={c.id} course={c} index={i} />)}
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Courses;
