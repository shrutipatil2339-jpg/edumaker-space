import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import CourseCard from "@/components/CourseCard";
import CategoryGrid from "@/components/CategoryGrid";
import InstructorSection from "@/components/InstructorSection";
import TestimonialSection from "@/components/TestimonialSection";
import { courses } from "@/data/mockData";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />

    {/* Featured Courses */}
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl font-bold text-foreground">Featured Courses</h2>
        <p className="mt-2 text-muted-foreground">Hand-picked courses to get you started</p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {courses.slice(0, 4).map((c, i) => (
            <CourseCard key={c.id} course={c} index={i} />
          ))}
        </div>
      </div>
    </section>

    <CategoryGrid />

    {/* Trending Courses */}
    <section className="bg-muted/30 py-16">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl font-bold text-foreground">Trending Now</h2>
        <p className="mt-2 text-muted-foreground">Most popular courses this month</p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {courses.slice(4, 9).map((c, i) => (
            <CourseCard key={c.id} course={c} index={i} />
          ))}
        </div>
      </div>
    </section>

    <InstructorSection />
    <TestimonialSection />
    <Footer />
  </div>
);

export default Index;
