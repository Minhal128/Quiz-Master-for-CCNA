# Customization Guide - Quiz Master

This guide explains how to customize various aspects of the Quiz Master application.

---

## 🎨 Styling & Appearance

### Change Color Scheme

The application uses Tailwind CSS with a light blue theme. To customize:

#### Primary Color (Blue)
Find and replace `blue-600` with your preferred color:
- `text-blue-600` → `text-green-600`
- `bg-blue-600` → `bg-green-600`
- `border-blue-200` → `border-green-200`

Search in these files:
- `/app/page.tsx` (home page)
- `/app/quiz/[id]/page.tsx` (quiz page)
- `/app/results/[id]/page.tsx` (results page)
- `/app/admin/**/*.tsx` (admin pages)

#### Success Color (Green)
- `/app/admin/create/page.tsx` - Quiz creation button
- `/app/results/[id]/page.tsx` - Correct answers

Change `green-600` to your preferred color.

#### Error Color (Red)
- `/app/results/[id]/page.tsx` - Incorrect answers

Change `red-600` to your preferred color.

### Modify Fonts

The default font is `font-sans`. To change:

1. Edit `/app/layout.tsx`
2. Modify the font imports:
```typescript
import { YourFont } from 'next/font/google'

const _yourFont = YourFont({ subsets: ['latin'] })
```

3. Update `tailwind.config.ts`:
```typescript
extend: {
  fontFamily: {
    sans: ['var(--font-your-font)'],
  }
}
```

### Background Colors

Default: White (`bg-white`) with blue gradient (`bg-gradient-to-b from-blue-50 to-white`)

To change:
1. Edit background classes in component files
2. Replace `bg-white` with your color
3. Modify gradient in `bg-gradient-to-b from-blue-50 to-white`

---

## ❓ Add/Modify Questions

### Add New Questions to Bank

Edit `/lib/questions.ts`:

```typescript
export const questionsBank: Question[] = [
  // ... existing questions (30 total)
  
  // Add your new question
  {
    id: 31,
    question: "What is your question here?",
    options: {
      A: "First option",
      B: "Second option",
      C: "Third option",
      D: "Fourth option"
    },
    correct: ["A"],           // For single choice
    // correct: ["B", "C"],   // For multiple choice
    type: "single",           // "single" or "multiple"
    explanation: "Explain why this answer is correct..."
  },
  {
    id: 32,
    question: "Another question?",
    options: {
      A: "Option 1",
      B: "Option 2",
      C: "Option 3",
      D: "Option 4"
    },
    correct: ["A", "C"],      // Multiple correct answers
    type: "multiple",
    explanation: "This is a multiple choice question..."
  }
];
```

### Question Structure

```typescript
interface Question {
  id: number;                          // Unique number
  question: string;                    // Question text
  options: {                          // Exactly 4 options
    A: string;
    B: string;
    C: string;
    D: string;
  };
  correct: string[];                  // Array of correct option keys
  type: "single" | "multiple";        // Question type
  explanation?: string;               // Optional explanation
}
```

### Tips for Good Questions

1. **Clear Language**: Write questions that are easy to understand
2. **Distinct Options**: Make options clearly different
3. **Single Focus**: Each question should test one concept
4. **Plausible Distractors**: Wrong answers should be plausible
5. **Explanations**: Always include explanations for learning value

---

## 🔐 Authentication

### Change Admin Password

Edit `/app/admin/login/page.tsx`:

```typescript
const ADMIN_PASSWORD = 'admin123';  // ← Change this
```

Change to:
```typescript
const ADMIN_PASSWORD = 'your-new-password';
```

### Implement Real Authentication

Replace the current session storage approach with NextAuth:

1. Install NextAuth:
```bash
pnpm add next-auth
```

2. Create auth configuration in `/app/api/auth/[...nextauth]/route.ts`
3. Update login page to use NextAuth
4. Update dashboard to check NextAuth session

---

## 📝 Quiz Settings

### Change Maximum Questions

Currently: 30 questions maximum

To increase:
1. Add more questions to `/lib/questions.ts`
2. The maximum will automatically increase

To limit questions:
1. Set a maximum in `/app/admin/create/page.tsx`:
```typescript
const maxAvailableQuestions = 20; // Change from questionsBank.length
```

### Change Question Presets

Edit `/app/admin/create/page.tsx`:

```typescript
{[5, 10, 15, 20, 30].map(preset => (
  // [5, 10, 15, 20, 30] are the presets
  // Change to [3, 6, 12, 25, 50] for different presets
))}
```

### Disable Question Randomization

To always use the same questions in order:

Edit `/app/admin/create/page.tsx`:

```typescript
// Change this function:
const getRandomQuestions = (count: number) => {
  return questionsBank.slice(0, count);  // Sequential instead of random
};
```

---

## 🎯 Quiz Behavior

### Require All Questions to be Answered

Edit `/app/quiz/[id]/page.tsx`:

```typescript
// Before submission, check:
const allAnswered = quiz.questions.every((_, idx) => 
  answers[idx] && answers[idx].length > 0
);

if (!allAnswered) {
  alert('Please answer all questions before submitting');
  return;
}
```

### Add Quiz Timer

Edit `/app/quiz/[id]/page.tsx`:

```typescript
const [timeLeft, setTimeLeft] = useState(300); // 5 minutes

useEffect(() => {
  if (timeLeft <= 0) {
    handleSubmit(); // Auto-submit
    return;
  }
  
  const timer = setInterval(() => {
    setTimeLeft(t => t - 1);
  }, 1000);
  
  return () => clearInterval(timer);
}, [timeLeft]);
```

### Show Feedback During Quiz

Remove this check in `/app/quiz/[id]/page.tsx`:
```typescript
// This prevents showing feedback during quiz
// Remove or modify to show feedback
```

### Hide Explanations in Results

Edit `/app/results/[id]/page.tsx`:

```typescript
{result.question.explanation && (
  <div className="bg-blue-50 border border-blue-200 rounded p-4">
    {/* Remove or comment this entire block */}
  </div>
)}
```

---

## 🏠 Branding

### Change Page Titles

Edit `/app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: 'Quiz Master - Learn & Test',  // ← Change this
  description: 'A comprehensive quiz platform...',  // ← And this
};
```

### Change App Name

1. Update title in all pages:
   - `/app/page.tsx` → Home page title
   - `/app/layout.tsx` → Metadata
   - Admin pages

2. Update in files:
```typescript
<h1 className="text-4xl font-bold">Quiz Master</h1>
// Change to:
<h1 className="text-4xl font-bold">Your App Name</h1>
```

### Change Welcome Message

Edit `/app/page.tsx`:

```typescript
<h1 className="text-4xl font-bold text-gray-900">Quiz Master</h1>
<p className="text-gray-600 mt-2">Test your knowledge across various topics</p>
// Change the text above
```

---

## 📊 Dashboard Customization

### Add Quiz Categories

1. Modify `Quiz` interface in `/lib/store.ts`:
```typescript
interface Quiz {
  id: string;
  title: string;
  category: string;  // Add this
  questions: Question[];
  totalQuestions: number;
  createdAt: Date;
}
```

2. Update quiz creation form in `/app/admin/create/page.tsx`:
```typescript
const [category, setCategory] = useState('');

// Add input for category
```

### Hide Admin Link

Edit `/app/page.tsx`:

```typescript
<Link href="/admin/login">
  <button>Admin Panel</button>
</Link>
// Remove or hide this link
```

---

## 🚀 Performance Customizations

### Lazy Load Questions

Instead of loading all 30 questions upfront:

```typescript
// Load questions on demand
const [questionsLoaded, setQuestionsLoaded] = useState(false);

useEffect(() => {
  const loadQuestions = async () => {
    // Simulate loading delay
    await new Promise(resolve => setTimeout(resolve, 500));
    setQuestionsLoaded(true);
  };
  loadQuestions();
}, []);
```

### Pagination in Results

Show results one question at a time instead of all:

```typescript
const [currentResultIndex, setCurrentResultIndex] = useState(0);

// Display one result
const currentResult = results[currentResultIndex];
```

---

## 🔧 Advanced Customizations

### Add Quiz Categories to Backend

Extend the store:

```typescript
// /lib/store.ts
interface QuizCategory {
  id: string;
  name: string;
  description: string;
}

let categories: QuizCategory[] = [
  { id: '1', name: 'Networking', description: 'Network basics' },
  { id: '2', name: 'Security', description: 'Security concepts' }
];

export function getCategories() {
  return categories;
}
```

### Add Quiz Difficulty Levels

```typescript
interface Quiz {
  id: string;
  title: string;
  difficulty: 'easy' | 'medium' | 'hard';  // Add this
  questions: Question[];
  totalQuestions: number;
  createdAt: Date;
}
```

### Add Pass/Fail Score

Create helper function:

```typescript
function getPassStatus(percentage: number, passingScore: number = 70) {
  return percentage >= passingScore ? 'PASS' : 'FAIL';
}
```

---

## 📱 Mobile Customization

### Adjust Button Sizes for Mobile

Edit component classes:

```typescript
// Instead of:
<button className="px-6 py-2">Click</button>

// Use responsive:
<button className="px-3 py-2 md:px-6 md:py-2">Click</button>
```

### Stack Buttons on Mobile

```typescript
// Instead of:
<div className="flex gap-4">

// Use:
<div className="flex flex-col md:flex-row gap-4">
```

---

## 🧪 Testing Customizations

After making changes, test:

1. **Homepage**: Verify layout and styling
2. **Quiz Page**: Test navigation, answer selection
3. **Results Page**: Check score calculation and display
4. **Admin Panel**: Verify authentication and quiz creation
5. **Mobile**: Test on small screens

---

## 💾 Database Upgrade

To upgrade from in-memory to database:

1. Install database client:
```bash
pnpm add @supabase/supabase-js
```

2. Update `/lib/store.ts` to use database queries instead of in-memory

3. Update components to use async/await for database calls

See `/API.md` for recommended implementation pattern.

---

## 🐛 Debugging

Enable debug logs:

```typescript
// Add to any component:
console.log('[Quiz]', 'Current index:', currentIndex);
console.log('[Results]', 'Score:', correctCount);
```

Check browser console for issues.

---

## 📚 Additional Resources

- **Tailwind CSS**: https://tailwindcss.com/docs
- **Next.js**: https://nextjs.org/docs
- **React Hooks**: https://react.dev/reference/react
- **TypeScript**: https://www.typescriptlang.org/docs/

---

**Happy Customizing! 🚀**
