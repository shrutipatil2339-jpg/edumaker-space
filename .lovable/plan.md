

# SkillForge Academy — Online Learning Platform

## Phase 1: Frontend UI (Current Focus)
Build all pages with mock data, professional Udemy-style design with purple/blue accents, dark/light mode toggle, and full responsiveness.

### Navigation Bar
- Logo ("SkillForge Academy"), search bar, categories dropdown, "Become an Instructor" link, Login/Signup buttons
- User profile dropdown (mock logged-in state toggle)

### Homepage
1. **Hero section** — bold CTA promoting online learning with gradient background
2. **Featured courses** — horizontal carousel of course cards
3. **Trending courses** — grid of course cards
4. **Popular categories** — icon grid (Programming, Design, Data Science, Cloud, AI/ML, DevOps, Cybersecurity, UI/UX)
5. **Top instructors** — avatar cards with stats
6. **Student testimonials** — carousel with quotes
7. **Footer** — links, social media icons, newsletter signup

### Course Cards
- Thumbnail, title, instructor, star rating, student count, original price (struck through), discount price in ₹, "Enroll" button
- Shadow + hover scale effect
- 10 pre-populated courses with the prices specified

### Course Marketplace Page (`/courses`)
- Grid layout with filter sidebar (category, rating, price range)
- Search and sort functionality
- Pagination

### Course Detail Page (`/courses/:id`)
- Hero with title, instructor, rating, student count
- Tabbed content: Overview, Curriculum (expandable sections/lessons), Reviews
- Sidebar with price, enroll button, course stats (duration, lessons, level)
- Instructor profile card

### Learning Page (`/learn/:courseId`)
- YouTube/Vimeo embedded video player (mock URLs)
- Sidebar with lesson list grouped by section
- Mark lessons as completed, progress bar
- Next/Previous lesson navigation

### Auth Pages
- `/login` and `/signup` with clean form design
- Mock auth flow (no backend yet)

### Student Dashboard (`/dashboard`)
- Enrolled courses with progress bars
- Wishlist tab
- Profile settings

### Instructor Dashboard (`/instructor`)
- Course management (list, create course form)
- Revenue analytics cards (mock data)
- Student enrollment stats

### Admin Dashboard (`/admin`)
- User management table
- Course management table
- Platform analytics cards

### Dark/Light Mode
- Toggle in navbar using next-themes
- Purple/blue accent color scheme consistent in both modes

## Phase 2: Backend (Future)
- Lovable Cloud for database (users, courses, lessons, sections, enrollments, reviews, categories, certificates)
- Supabase Auth for signup/login
- User roles table (student, instructor, admin)
- Stripe integration for course purchases
- Supabase Storage for course thumbnails
- YouTube/Vimeo embed URLs stored per lesson
- Certificate generation (PDF)

