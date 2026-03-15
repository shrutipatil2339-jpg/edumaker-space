import { Link } from "react-router-dom";
import { Star, Users } from "lucide-react";
import { motion } from "framer-motion";
import type { Course } from "@/data/mockData";
import { Button } from "@/components/ui/button";

const colors = ["from-primary/20 to-secondary/20", "from-secondary/20 to-primary/20", "from-accent to-primary/10", "from-primary/10 to-accent"];

const CourseCard = ({ course, index = 0 }: { course: Course; index?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.05, duration: 0.4 }}
  >
    <Link to={`/courses/${course.id}`} className="group block">
      <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
        {/* Thumbnail placeholder */}
        <div className={`relative aspect-video bg-gradient-to-br ${colors[index % colors.length]}`}>
          <div className="flex h-full items-center justify-center">
            <span className="font-heading text-lg font-bold text-foreground/60">{course.title.split(" ").slice(0, 2).join(" ")}</span>
          </div>
          {course.originalPrice > course.price && (
            <span className="absolute right-2 top-2 rounded-full bg-destructive px-2 py-0.5 text-xs font-bold text-destructive-foreground">
              {Math.round((1 - course.price / course.originalPrice) * 100)}% OFF
            </span>
          )}
        </div>

        <div className="p-4">
          <h3 className="line-clamp-2 font-heading text-sm font-semibold text-card-foreground transition-colors group-hover:text-primary">
            {course.title}
          </h3>
          <p className="mt-1 text-xs text-muted-foreground">{course.instructor}</p>

          <div className="mt-2 flex items-center gap-1">
            <span className="text-sm font-bold text-warning">{course.rating}</span>
            <div className="flex">
              {Array.from({ length: 5 }, (_, i) => (
                <Star key={i} className={`h-3.5 w-3.5 ${i < Math.round(course.rating) ? "fill-warning text-warning" : "text-muted"}`} />
              ))}
            </div>
            <span className="text-xs text-muted-foreground">({course.reviewCount.toLocaleString()})</span>
          </div>

          <div className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
            <Users className="h-3 w-3" /> {course.studentCount.toLocaleString()} students
          </div>

          <div className="mt-3 flex items-center justify-between">
            <div className="flex items-baseline gap-2">
              <span className="font-heading text-lg font-bold text-foreground">₹{course.price.toLocaleString()}</span>
              {course.originalPrice > course.price && (
                <span className="text-xs text-muted-foreground line-through">₹{course.originalPrice.toLocaleString()}</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  </motion.div>
);

export default CourseCard;
