import { useParams } from "react-router-dom";
import { useState } from "react";
import { CheckCircle2, Circle, ChevronLeft, ChevronRight, Menu } from "lucide-react";
import { courses } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

const Learn = () => {
  const { courseId } = useParams();
  const course = courses.find((c) => c.id === courseId) || courses[0];

  const allLessons = course.sections.flatMap((s) => s.lessons.map((l) => ({ ...l, sectionTitle: s.title })));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [completed, setCompleted] = useState<Set<string>>(new Set());

  const currentLesson = allLessons[currentIndex];
  const progress = (completed.size / allLessons.length) * 100;

  const toggleComplete = (id: string) => {
    setCompleted((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const Sidebar = () => (
    <div className="flex h-full flex-col">
      <div className="border-b border-border p-4">
        <h2 className="font-heading text-sm font-bold text-foreground line-clamp-1">{course.title}</h2>
        <div className="mt-2">
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>{completed.size}/{allLessons.length} completed</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className="mt-1 h-2" />
        </div>
      </div>
      <div className="flex-1 overflow-y-auto">
        {course.sections.map((section) => (
          <div key={section.id}>
            <p className="bg-muted/50 px-4 py-2 text-xs font-semibold uppercase text-muted-foreground">{section.title}</p>
            {section.lessons.map((lesson) => {
              const globalIndex = allLessons.findIndex((l) => l.id === lesson.id);
              const isActive = globalIndex === currentIndex;
              const isDone = completed.has(lesson.id);
              return (
                <button key={lesson.id} onClick={() => setCurrentIndex(globalIndex)}
                  className={`flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm transition-colors ${isActive ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-muted"}`}>
                  {isDone ? <CheckCircle2 className="h-4 w-4 shrink-0 text-success" /> : <Circle className="h-4 w-4 shrink-0" />}
                  <span className="flex-1 line-clamp-1">{lesson.title}</span>
                  <span className="text-xs">{lesson.duration}</span>
                </button>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="flex h-screen bg-background">
      {/* Desktop sidebar */}
      <aside className="hidden w-72 shrink-0 border-r border-border lg:block">
        <Sidebar />
      </aside>

      {/* Main content */}
      <div className="flex flex-1 flex-col">
        {/* Top bar */}
        <div className="flex items-center gap-3 border-b border-border px-4 py-2">
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon"><Menu className="h-5 w-5" /></Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-72 p-0">
              <SheetTitle className="sr-only">Course Navigation</SheetTitle>
              <Sidebar />
            </SheetContent>
          </Sheet>
          <span className="text-sm font-medium text-foreground">{currentLesson.title}</span>
        </div>

        {/* Video player */}
        <div className="flex-1 bg-foreground/5">
          <div className="mx-auto aspect-video w-full max-w-5xl">
            <iframe
              src={currentLesson.videoUrl}
              className="h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={currentLesson.title}
            />
          </div>
        </div>

        {/* Bottom controls */}
        <div className="flex items-center justify-between border-t border-border px-4 py-3">
          <Button variant="outline" size="sm" onClick={() => setCurrentIndex(Math.max(0, currentIndex - 1))} disabled={currentIndex === 0}>
            <ChevronLeft className="mr-1 h-4 w-4" /> Previous
          </Button>
          <Button variant={completed.has(currentLesson.id) ? "secondary" : "default"} size="sm"
            onClick={() => toggleComplete(currentLesson.id)}>
            {completed.has(currentLesson.id) ? "Completed ✓" : "Mark as Complete"}
          </Button>
          <Button variant="outline" size="sm" onClick={() => setCurrentIndex(Math.min(allLessons.length - 1, currentIndex + 1))} disabled={currentIndex === allLessons.length - 1}>
            Next <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Learn;
