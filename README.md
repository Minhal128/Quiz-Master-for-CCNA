# Quiz Master - Next.js Quiz Application

A comprehensive, full-featured quiz application built with Next.js App Router, featuring admin panel for quiz creation with random question selection, user-friendly quiz interface, and detailed results review.

## ✨ Features

### 🏠 User Side
- **Quiz List**: Browse all available quizzes on the home page
- **Quiz Taking**: Answer questions one by one with smooth navigation
- **Forward/Backward Navigation**: Move between questions freely
- **Change Answers**: Modify answers before submission
- **No Feedback During Quiz**: Users don't see correct/incorrect feedback while taking the quiz
- **Results Page**: Comprehensive results showing:
  - Total score and percentage
  - Correct/Incorrect counts
  - Full question review with selected answers, correct answers, and explanations
  - Visual feedback (green for correct, red for incorrect)
- **Retake Quiz**: Users can retake quizzes to improve their score

### 🔐 Admin Side
- **Admin Login**: Simple password-protected admin panel (password: `admin123`)
- **Quiz Creation**: Create new quizzes with a user-friendly form
- **Random Question Selection**: Specify number of questions, and random questions are automatically selected from the question bank
- **Question Bank**: Pre-loaded with 30 networking/CCNA questions
- **Quiz Management**: View, preview, and delete quizzes
- **Session-Based Auth**: Secure session storage for admin authentication

## 🎯 How It Works

### User Flow
1. User visits homepage and sees available quizzes
2. Clicks on a quiz to start
3. Answers questions one by one (can navigate forward/backward)
4. Can change answers at any time
5. Submits quiz when complete
6. Views detailed results with explanations

### Admin Flow
1. Admin logs in at `/admin/login` with password `admin123`
2. Goes to dashboard to view existing quizzes
3. Clicks "Create Quiz" button
4. Enters quiz title and selects number of questions (1-30)
5. Random questions are automatically selected from the bank
6. Quiz is saved and available for users immediately

## 🛠 Tech Stack

- **Framework**: Next.js 16.2.4 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Hooks (useState, useContext)
- **Storage**: In-memory store (no database required)
- **Hosting**: Ready for Vercel deployment

## 📁 Project Structure

```
/app
  /page.tsx                          # Home page - Quiz list
  /quiz/[id]/page.tsx               # Quiz taking page
  /results/[id]/page.tsx            # Results page
  /admin
    /login/page.tsx                 # Admin login page
    /dashboard/page.tsx             # Admin dashboard
    /create/page.tsx                # Create new quiz page
  /layout.tsx                        # Root layout
  /globals.css                       # Global styles

/lib
  /questions.ts                      # Question bank with 30+ questions
  /store.ts                          # In-memory quiz store

/components
  # UI components from shadcn/ui (pre-installed)
```

## 🚀 Getting Started

### Installation
```bash
# Clone the project
git clone <repo-url>
cd v0-project

# Install dependencies (already included)
pnpm install

# Start development server
pnpm dev
```

Visit `http://localhost:3000` in your browser.

## 📖 Usage

### Create a Quiz
1. Go to `http://localhost:3000/admin/login`
2. Enter password: `admin123`
3. Click "Create Quiz"
4. Enter quiz title (e.g., "CCNA Network Fundamentals")
5. Select number of questions:
   - Use the slider or number input
   - Use quick presets (5, 10, 15, 20, 30)
   - The percentage shows (questions / total available)
6. Review selected questions
7. Click "Create Quiz"

### Take a Quiz
1. Go to home page
2. Click on any available quiz
3. Answer questions (single or multiple choice)
4. Use Previous/Next buttons or quick navigation buttons
5. Change answers anytime before submitting
6. Click "Submit Quiz" on the last question

### View Results
1. After submission, you're taken to the results page
2. See your overall score and breakdown
3. Click on questions to expand and see:
   - Your answer(s)
   - Correct answer(s)
   - Explanation
4. Click "Retake Quiz" to try again

## 🔑 Key Features Explained

### Random Question Selection
- Admin specifies how many questions they want (e.g., 60 out of 30 available = 100%)
- System randomly selects that many unique questions from the question bank
- Each quiz creation results in a different random set

### Question Types
- **Single Answer**: Multiple choice with one correct answer
- **Multiple Answers**: Questions where multiple options can be correct

### In-Memory Storage
- Quizzes are stored in memory (lost on server restart)
- Perfect for demo/testing purposes
- Can be easily upgraded to a database (MongoDB, Prisma, etc.)

## 🎨 Design

### Light Color Theme
- Clean, professional appearance
- Blue as primary color (#3B82F6)
- Gray neutrals for text and borders
- Green for success states
- Red for errors/incorrect answers
- Responsive design for mobile, tablet, desktop

### Accessibility
- Semantic HTML elements
- Proper form labels and inputs
- Screen reader friendly
- Keyboard navigation support

## 🔄 State Management

The application uses React Hooks for state management:
- `useState` for local component state
- Context-style in-memory store in `/lib/store.ts`
- Session storage for admin authentication

## 🔐 Authentication

Simple session-based authentication:
- Admin password: `admin123`
- Stored in `sessionStorage` after login
- Cleared on logout
- **Note**: This is for demo purposes; in production, use proper authentication (NextAuth, Auth0, etc.)

## 📊 Question Bank

The question bank includes 30 networking/CCNA-related questions covering:
- VLAN configuration
- STP (Spanning Tree Protocol)
- OSPF routing
- IPv6 and IPv4
- ACLs and network security
- SNMP and device management
- And more...

Each question includes:
- Question text
- 4 options (A, B, C, D)
- Correct answer(s)
- Question type (single or multiple)
- Explanation

## 🚀 Deployment

This app is ready to deploy to Vercel:

```bash
# Deploy to Vercel
vercel deploy
```

Or connect your GitHub repository to Vercel for automatic deployments.

## 🛣 Future Enhancements

- [ ] Database integration (MongoDB, PostgreSQL, Supabase)
- [ ] Real user authentication (Auth.js, NextAuth)
- [ ] Quiz timer and auto-submission
- [ ] Student analytics and progress tracking
- [ ] Admin analytics dashboard
- [ ] Quiz categories and difficulty levels
- [ ] Export quiz results as PDF
- [ ] Multi-language support
- [ ] Dark mode
- [ ] Image/media support in questions

## 📝 Notes

- All data is stored in memory and will be lost when the server restarts
- The admin password should be changed in production
- Consider upgrading to a database for persistence
- This is a demo application - add proper security measures before production use

## 📄 License

This project is created with v0.app

---

**Happy Learning! 📚**