import { Link } from "react-router-dom";
import { BookOpen } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border bg-card">
    <div className="container mx-auto px-4 py-12">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link to="/" className="flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-primary" />
            <span className="font-heading text-lg font-bold text-foreground">SkillForge Academy</span>
          </Link>
          <p className="mt-3 text-sm text-muted-foreground">Empowering learners worldwide with industry-leading courses from top instructors.</p>
        </div>
        <div>
          <h4 className="font-heading text-sm font-semibold text-foreground">Company</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-primary">About Us</Link></li>
            <li><Link to="/" className="hover:text-primary">Careers</Link></li>
            <li><Link to="/" className="hover:text-primary">Blog</Link></li>
            <li><Link to="/" className="hover:text-primary">Press</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-heading text-sm font-semibold text-foreground">Resources</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/courses" className="hover:text-primary">All Courses</Link></li>
            <li><Link to="/instructor" className="hover:text-primary">Teach on SkillForge</Link></li>
            <li><Link to="/" className="hover:text-primary">Help Center</Link></li>
            <li><Link to="/" className="hover:text-primary">Affiliate Program</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-heading text-sm font-semibold text-foreground">Legal</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-primary">Terms of Service</Link></li>
            <li><Link to="/" className="hover:text-primary">Privacy Policy</Link></li>
            <li><Link to="/" className="hover:text-primary">Cookie Policy</Link></li>
            <li><Link to="/" className="hover:text-primary">Refund Policy</Link></li>
          </ul>
        </div>
      </div>
      <div className="mt-10 border-t border-border pt-6 text-center text-sm text-muted-foreground">
        © 2026 SkillForge Academy. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
