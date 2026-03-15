import { useParams, Link } from "react-router-dom";
import { Star, Users, Clock, BookOpen, BarChart3, Globe, Play, CheckCircle2, ChevronDown } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { courses, reviews } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const CourseDetail = () => {
  const { id } = useParams();
  const course = courses.find((c) => c.id === id) || courses[0];
  const [activeTab, setActiveTab] = useState<"overview" | "curriculum" | "reviews">("overview");
  const [expandedSections, setExpandedSections] = useState<string[]>([course.sections[0]?.id]);

  const toggleSection = (sid: string) =>
    setExpandedSections((prev) => (prev.includes(sid) ? prev.filter((s) => s !== sid) : [...prev, sid]));

  const totalLessons = course.sections.reduce((acc, s) => acc + s.lessons.length, 0);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <div className="bg-[image:var(--gradient-hero)] py-12">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <Badge variant="secondary" className="bg-primary-foreground/10 text-primary-foreground">{course.category}</Badge>
            <h1 className="mt-3 font-heading text-3xl font-bold text-primary-foreground md:text-4xl">{course.title}</h1>
            <p className="mt-3 text-primary-foreground/80">{course.description}</p>
            <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-primary-foreground/80">
              <span className="flex items-center gap-1"><Star className="h-4 w-4 fill-warning text-warning" /> {course.rating} ({course.reviewCount.toLocaleString()} reviews)</span>
              <span className="flex items-center gap-1"><Users className="h-4 w-4" /> {course.studentCount.toLocaleString()} students</span>
              <span>by <strong className="text-primary-foreground">{course.instructor}</strong></span>
            </div>
            <div className="mt-2 flex flex-wrap items-center gap-4 text-xs text-primary-foreground/60">
              <span>Last updated {course.lastUpdated}</span>
              <span className="flex items-center gap-1"><Globe className="h-3 w-3" /> {course.language}</span>
              <span className="flex items-center gap-1"><BarChart3 className="h-3 w-3" /> {course.level}</span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col-reverse gap-8 lg:flex-row">
          {/* Main content */}
          <div className="flex-1">
            {/* Tabs */}
            <div className="flex gap-1 border-b border-border">
              {(["overview", "curriculum", "reviews"] as const).map((tab) => (
                <button key={tab} onClick={() => setActiveTab(tab)}
                  className={`border-b-2 px-4 py-3 text-sm font-medium capitalize transition-colors ${activeTab === tab ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground"}`}>
                  {tab}
                </button>
              ))}
            </div>

            <div className="mt-6">
              {activeTab === "overview" && (
                <div className="space-y-6">
                  <div>
                    <h2 className="font-heading text-xl font-bold text-foreground">What you'll learn</h2>
                    <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                      {["Master core concepts from scratch", "Build real-world projects", "Understand industry best practices", "Prepare for technical interviews", "Get lifetime access to course updates", "Earn a completion certificate"].map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h2 className="font-heading text-xl font-bold text-foreground">Description</h2>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{course.description}</p>
                  </div>
                </div>
              )}

              {activeTab === "curriculum" && (
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">{course.sections.length} sections • {totalLessons} lessons • {course.duration}</p>
                  {course.sections.map((section) => (
                    <div key={section.id} className="rounded-lg border border-border">
                      <button onClick={() => toggleSection(section.id)}
                        className="flex w-full items-center justify-between px-4 py-3 text-left">
                        <span className="font-heading text-sm font-semibold text-foreground">{section.title}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-muted-foreground">{section.lessons.length} lessons</span>
                          <ChevronDown className={`h-4 w-4 text-muted-foreground transition-transform ${expandedSections.includes(section.id) ? "rotate-180" : ""}`} />
                        </div>
                      </button>
                      {expandedSections.includes(section.id) && (
                        <div className="border-t border-border">
                          {section.lessons.map((lesson) => (
                            <div key={lesson.id} className="flex items-center gap-3 px-4 py-2.5 text-sm text-muted-foreground">
                              <Play className="h-3.5 w-3.5 shrink-0" />
                              <span className="flex-1">{lesson.title}</span>
                              <span className="text-xs">{lesson.duration}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {activeTab === "reviews" && (
                <div className="space-y-4">
                  {reviews.map((r) => (
                    <div key={r.id} className="rounded-lg border border-border p-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                          {r.user[0]}
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">{r.user}</p>
                          <div className="flex items-center gap-1">
                            {Array.from({ length: 5 }, (_, i) => (
                              <Star key={i} className={`h-3 w-3 ${i < r.rating ? "fill-warning text-warning" : "text-muted"}`} />
                            ))}
                            <span className="ml-2 text-xs text-muted-foreground">{r.date}</span>
                          </div>
                        </div>
                      </div>
                      <p className="mt-2 text-sm text-muted-foreground">{r.text}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-80">
            <div className="sticky top-20 rounded-xl border border-border bg-card p-6 shadow-sm">
              <div className="flex items-baseline gap-2">
                <span className="font-heading text-3xl font-bold text-foreground">₹{course.price.toLocaleString()}</span>
                <span className="text-sm text-muted-foreground line-through">₹{course.originalPrice.toLocaleString()}</span>
              </div>
              <p className="mt-1 text-xs font-medium text-destructive">
                {Math.round((1 - course.price / course.originalPrice) * 100)}% off — limited time!
              </p>
              <Link to={`/learn/${course.id}`}>
                <Button className="mt-4 w-full" size="lg">Enroll Now</Button>
              </Link>
              <Button variant="outline" className="mt-2 w-full">Add to Wishlist</Button>
              <p className="mt-3 text-center text-xs text-muted-foreground">30-day money-back guarantee</p>
              <hr className="my-4 border-border" />
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex justify-between"><span className="flex items-center gap-1"><Clock className="h-4 w-4" /> Duration</span><span className="font-medium text-foreground">{course.duration}</span></div>
                <div className="flex justify-between"><span className="flex items-center gap-1"><BookOpen className="h-4 w-4" /> Lessons</span><span className="font-medium text-foreground">{course.lessonCount}</span></div>
                <div className="flex justify-between"><span className="flex items-center gap-1"><BarChart3 className="h-4 w-4" /> Level</span><span className="font-medium text-foreground">{course.level}</span></div>
                <div className="flex justify-between"><span className="flex items-center gap-1"><Globe className="h-4 w-4" /> Language</span><span className="font-medium text-foreground">{course.language}</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CourseDetail;
