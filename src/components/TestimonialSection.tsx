import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/data/mockData";
import { Button } from "@/components/ui/button";

const TestimonialSection = () => {
  const [current, setCurrent] = useState(0);
  const t = testimonials[current];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl font-bold text-foreground">What Our Students Say</h2>
        <p className="mt-2 text-muted-foreground">Real stories from real learners</p>

        <div className="relative mt-10 flex items-center justify-center">
          <Button variant="ghost" size="icon" className="absolute left-0 z-10"
            onClick={() => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)}>
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.3 }}
              className="mx-12 max-w-2xl rounded-xl border border-border bg-card p-8 shadow-sm"
            >
              <Quote className="h-8 w-8 text-primary/30" />
              <p className="mt-4 text-lg text-card-foreground">{t.text}</p>
              <div className="mt-4 flex items-center gap-1">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star key={i} className={`h-4 w-4 ${i < t.rating ? "fill-warning text-warning" : "text-muted"}`} />
                ))}
              </div>
              <div className="mt-4">
                <p className="font-heading text-sm font-semibold text-card-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.course}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          <Button variant="ghost" size="icon" className="absolute right-0 z-10"
            onClick={() => setCurrent((c) => (c + 1) % testimonials.length)}>
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)}
              className={`h-2 w-2 rounded-full transition-colors ${i === current ? "bg-primary" : "bg-muted"}`} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
