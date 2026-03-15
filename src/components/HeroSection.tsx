import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Play, Users, BookOpen, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => (
  <section className="relative overflow-hidden bg-[image:var(--gradient-hero)] py-20 lg:py-28">
    {/* Decorative shapes */}
    <div className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
    <div className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-secondary/10 blur-3xl" />

    <div className="container relative mx-auto px-4">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
          <span className="inline-block rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 text-sm font-medium text-primary-foreground">
            🚀 New courses added weekly
          </span>
          <h1 className="mt-6 font-heading text-4xl font-bold leading-tight text-primary-foreground md:text-5xl lg:text-6xl">
            Learn without <span className="bg-gradient-to-r from-primary-foreground to-primary-foreground/70 bg-clip-text text-transparent">limits</span>
          </h1>
          <p className="mt-4 max-w-lg text-lg text-primary-foreground/80">
            Join 100,000+ learners mastering new skills with expert-led courses in programming, design, data science, and more.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/courses">
              <Button size="lg" className="gap-2 bg-primary-foreground text-foreground hover:bg-primary-foreground/90">
                Explore Courses <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link to="/courses/1">
              <Button size="lg" variant="outline" className="gap-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <Play className="h-4 w-4" /> Watch Preview
              </Button>
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap gap-8">
            {[
              { icon: Users, label: "100K+ Learners" },
              { icon: BookOpen, label: "500+ Courses" },
              { icon: Award, label: "Expert Instructors" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-primary-foreground/80">
                <Icon className="h-5 w-5" /> <span className="text-sm font-medium">{label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="hidden lg:block">
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/30 to-secondary/30 p-8">
              <div className="flex h-full flex-col items-center justify-center gap-4 rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 backdrop-blur-sm">
                <BookOpen className="h-20 w-20 text-primary-foreground/60" />
                <p className="font-heading text-2xl font-bold text-primary-foreground">Start Learning Today</p>
                <p className="text-primary-foreground/60">Unlock your potential</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
