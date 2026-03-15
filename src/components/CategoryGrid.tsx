import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Code, Globe, BarChart3, Cloud, Brain, GitBranch, Shield, Palette } from "lucide-react";
import { categories } from "@/data/mockData";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Code, Globe, BarChart3, Cloud, Brain, GitBranch, Shield, Palette,
};

const CategoryGrid = () => (
  <section className="py-16">
    <div className="container mx-auto px-4">
      <h2 className="font-heading text-3xl font-bold text-foreground">Popular Categories</h2>
      <p className="mt-2 text-muted-foreground">Browse courses by category</p>
      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {categories.map((cat, i) => {
          const Icon = iconMap[cat.icon] || Code;
          return (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <Link
                to={`/courses?category=${cat.name}`}
                className="group flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-6 text-center transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-md"
              >
                <div className="rounded-lg bg-accent p-3 transition-colors group-hover:bg-primary/10">
                  <Icon className="h-6 w-6 text-accent-foreground transition-colors group-hover:text-primary" />
                </div>
                <div>
                  <p className="font-heading text-sm font-semibold text-card-foreground">{cat.name}</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">{cat.courseCount} courses</p>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default CategoryGrid;
