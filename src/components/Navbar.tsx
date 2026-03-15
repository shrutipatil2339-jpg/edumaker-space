import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, Menu, X, ChevronDown, Sun, Moon, User, LogOut, BookOpen, LayoutDashboard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTheme } from "@/contexts/ThemeContext";
import { categories } from "@/data/mockData";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) navigate(`/courses?q=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto flex h-16 items-center justify-between gap-4 px-4">
        {/* Logo */}
        <Link to="/" className="flex shrink-0 items-center gap-2">
          <BookOpen className="h-7 w-7 text-primary" />
          <span className="hidden font-heading text-xl font-bold text-foreground sm:inline">SkillForge</span>
        </Link>

        {/* Categories */}
        <div className="relative hidden lg:block">
          <button
            onClick={() => setShowCategories(!showCategories)}
            onBlur={() => setTimeout(() => setShowCategories(false), 200)}
            className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Categories <ChevronDown className="h-4 w-4" />
          </button>
          {showCategories && (
            <div className="absolute left-0 top-full mt-2 w-56 rounded-lg border border-border bg-popover p-2 shadow-xl">
              {categories.map((cat) => (
                <Link key={cat.id} to={`/courses?category=${cat.name}`} className="block rounded-md px-3 py-2 text-sm text-popover-foreground transition-colors hover:bg-accent">
                  {cat.name}
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Search */}
        <form onSubmit={handleSearch} className="hidden flex-1 md:flex md:max-w-md lg:max-w-lg">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for courses..."
              className="w-full pl-10"
            />
          </div>
        </form>

        {/* Right side */}
        <div className="flex items-center gap-2">
          <Link to="/instructor" className="hidden text-sm font-medium text-muted-foreground transition-colors hover:text-foreground lg:block">
            Become an Instructor
          </Link>

          <Button variant="ghost" size="icon" onClick={toggleTheme} className="shrink-0">
            {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          </Button>

          {isLoggedIn ? (
            <div className="relative">
              <button
                onClick={() => setShowProfile(!showProfile)}
                onBlur={() => setTimeout(() => setShowProfile(false), 200)}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground"
              >
                JD
              </button>
              {showProfile && (
                <div className="absolute right-0 top-full mt-2 w-48 rounded-lg border border-border bg-popover p-2 shadow-xl">
                  <Link to="/dashboard" className="flex items-center gap-2 rounded-md px-3 py-2 text-sm text-popover-foreground hover:bg-accent">
                    <LayoutDashboard className="h-4 w-4" /> Dashboard
                  </Link>
                  <Link to="/dashboard" className="flex items-center gap-2 rounded-md px-3 py-2 text-sm text-popover-foreground hover:bg-accent">
                    <User className="h-4 w-4" /> Profile
                  </Link>
                  <button onClick={() => setIsLoggedIn(false)} className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm text-destructive hover:bg-accent">
                    <LogOut className="h-4 w-4" /> Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Link to="/login"><Button variant="ghost" size="sm">Log in</Button></Link>
              <Link to="/signup"><Button size="sm">Sign up</Button></Link>
            </div>
          )}

          {/* Mobile menu */}
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon"><Menu className="h-5 w-5" /></Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetTitle className="font-heading">Menu</SheetTitle>
              <div className="mt-6 flex flex-col gap-4">
                <form onSubmit={handleSearch} className="md:hidden">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search..." className="pl-10" />
                  </div>
                </form>
                <p className="text-xs font-semibold uppercase text-muted-foreground">Categories</p>
                {categories.map((cat) => (
                  <Link key={cat.id} to={`/courses?category=${cat.name}`} className="text-sm text-foreground hover:text-primary">
                    {cat.name}
                  </Link>
                ))}
                <hr className="border-border" />
                <Link to="/instructor" className="text-sm font-medium text-foreground hover:text-primary">Become an Instructor</Link>
                <Link to="/courses" className="text-sm font-medium text-foreground hover:text-primary">All Courses</Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
