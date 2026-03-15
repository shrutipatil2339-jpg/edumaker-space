import { motion } from "framer-motion";
import { Star, Users, BookOpen } from "lucide-react";
import { instructors } from "@/data/mockData";

const InstructorSection = () => (
  <section className="bg-muted/50 py-16">
    <div className="container mx-auto px-4">
      <h2 className="font-heading text-3xl font-bold text-foreground">Top Instructors</h2>
      <p className="mt-2 text-muted-foreground">Learn from the best in the industry</p>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {instructors.map((inst, i) => (
          <motion.div
            key={inst.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="flex flex-col items-center rounded-xl border border-border bg-card p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 font-heading text-xl font-bold text-primary">
              {inst.name.split(" ").map((n) => n[0]).join("")}
            </div>
            <h3 className="mt-3 font-heading text-sm font-semibold text-card-foreground">{inst.name}</h3>
            <p className="mt-0.5 text-xs text-muted-foreground">{inst.title}</p>
            <div className="mt-3 flex items-center gap-1 text-xs text-muted-foreground">
              <Star className="h-3.5 w-3.5 fill-warning text-warning" /> {inst.rating}
            </div>
            <div className="mt-2 flex gap-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1"><BookOpen className="h-3 w-3" /> {inst.courseCount}</span>
              <span className="flex items-center gap-1"><Users className="h-3 w-3" /> {(inst.studentCount / 1000).toFixed(0)}K</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default InstructorSection;
