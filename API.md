# Quiz Master API Documentation

## Overview

This document describes the internal APIs and data structures used in the Quiz Master application.

---

## 📦 Data Structures

### Question
```typescript
interface Question {
  id: number;
  question: string;
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
  correct: string[]; // Array of correct option keys
  type: "single" | "multiple";
  explanation?: string;
}
```

**Example:**
```javascript
{
  id: 1,
  question: "When the Trunk port sends the data frame, how to dealt with?",
  options: {
    A: "When the VLAN ID is the same as the PVID of the port...",
    B: "When the VLAN ID is different from the PVID...",
    C: "When the VLAN ID is different...",
    D: "When the VLAN ID is different..."
  },
  correct: ["A"],
  type: "single",
  explanation: "Trunk ports handle VLAN tagging by removing the tag..."
}
```

### Quiz
```typescript
interface Quiz {
  id: string;                    // Unique identifier (timestamp)
  title: string;                 // Quiz title
  questions: Question[];         // Array of selected questions
  totalQuestions: number;        // Number of questions in quiz
  createdAt: Date;              // Creation timestamp
}
```

**Example:**
```javascript
{
  id: "1715432580123",
  title: "CCNA Network Fundamentals",
  questions: [ /* 20 Question objects */ ],
  totalQuestions: 20,
  createdAt: 2024-05-10T15:43:00.123Z
}
```

### User Answers
```typescript
interface UserAnswers {
  [questionIndex: number]: string[]; // Index -> Array of selected options
}
```

**Example:**
```javascript
{
  0: ["A"],           // Question 0: User selected A
  1: ["B", "C"],      // Question 1: User selected B and C
  2: ["D"],           // Question 2: User selected D
  3: []               // Question 3: No answer
}
```

### Quiz Result
```typescript
interface QuizResult {
  score: number;                     // Correct answers count
  percentage: number;                // Score as percentage
  totalQuestions: number;            // Total questions
  answers: UserAnswers;              // User's answers
  results: ResultDetail[];           // Detailed result per question
}

interface ResultDetail {
  index: number;
  question: Question;
  userAnswers: string[];
  isCorrect: boolean;
}
```

---

## 🔧 Store API

### Location
`/lib/store.ts`

### Functions

#### `getQuizzes(): Quiz[]`
Returns all created quizzes.
```typescript
const quizzes = getQuizzes();
```

#### `getQuiz(id: string): Quiz | undefined`
Returns a specific quiz by ID.
```typescript
const quiz = getQuiz("1715432580123");
```

#### `addQuiz(quiz: Quiz): void`
Adds a new quiz to the store.
```typescript
addQuiz({
  id: Date.now().toString(),
  title: "New Quiz",
  questions: [...],
  totalQuestions: 20,
  createdAt: new Date()
});
```

#### `deleteQuiz(id: string): void`
Deletes a quiz by ID.
```typescript
deleteQuiz("1715432580123");
```

#### `clearAllQuizzes(): void`
Clears all quizzes from the store.
```typescript
clearAllQuizzes();
```

---

## ❓ Question Bank

### Location
`/lib/questions.ts`

### Import
```typescript
import { questionsBank, Question } from '@/lib/questions';
```

### Properties
- **questionsBank**: Array of 30+ predefined questions
- **Length**: 30 questions (can be extended)
- **Types**: Single and multiple choice questions

### Accessing Questions
```typescript
// Get all questions
const allQuestions = questionsBank;

// Get specific question
const question = questionsBank[0];

// Get random questions
const random = questionsBank
  .sort(() => Math.random() - 0.5)
  .slice(0, 10); // Get 10 random questions
```

---

## 🔐 Authentication

### Location
`/app/admin/login/page.tsx`

### Method
Session Storage based authentication

### Implementation
```typescript
// Login
sessionStorage.setItem('adminAuth', 'true');

// Check authentication
const isAuth = sessionStorage.getItem('adminAuth') === 'true';

// Logout
sessionStorage.removeItem('adminAuth');
```

### Default Credentials
- **Username**: Not required
- **Password**: `admin123`

---

## 📄 Page Routes

### User Routes

#### `GET /`
Home page - displays list of all quizzes
- Component: `/app/page.tsx`
- Method: Client-side
- Data: Fetches from in-memory store

#### `GET /quiz/[id]`
Quiz taking interface
- Component: `/app/quiz/[id]/page.tsx`
- Parameter: `id` = Quiz ID
- State: Tracks current question and answers
- Features: Forward/backward navigation, answer changing

#### `GET /results/[id]`
Results and review page
- Component: `/app/results/[id]/page.tsx`
- Query Params: `answers` (JSON-stringified UserAnswers)
- Features: Score calculation, detailed feedback

### Admin Routes

#### `GET /admin/login`
Admin authentication page
- Component: `/app/admin/login/page.tsx`
- Method: Form submission
- Action: Sets session storage on successful auth

#### `GET /admin/dashboard`
Admin dashboard
- Component: `/app/admin/dashboard/page.tsx`
- Protected: Requires admin authentication
- Features: View quizzes, delete quizzes, create quiz button

#### `GET /admin/create`
Create new quiz page
- Component: `/app/admin/create/page.tsx`
- Protected: Requires admin authentication
- Features: 
  - Quiz title input
  - Question count selection
  - Random question selection
  - Preview selected questions

---

## 🎯 Quiz Creation Flow

```
1. Admin goes to /admin/create
2. Enters quiz title
3. Selects number of questions (1-30)
4. System calculates: percentage = (selected / 30) * 100
5. Random questions are selected from questionsBank
6. Quiz object is created with:
   - Unique ID (timestamp)
   - Title
   - Selected questions array
   - Total questions count
7. Quiz is saved to store via addQuiz()
8. User is redirected to /admin/dashboard
```

---

## 🎮 Quiz Taking Flow

```
1. User selects quiz from homepage
2. Goes to /quiz/[id]
3. Component loads quiz from store
4. Shows first question
5. User selects answer(s)
6. User can:
   - Navigate to other questions
   - Change answers
   - Use quick navigation buttons
7. On last question, submits quiz
8. Redirected to /results/[id] with answers in query params
```

---

## 📊 Results Calculation

### Score Calculation
```typescript
let correctCount = 0;

quiz.questions.forEach((question, index) => {
  const userAnswers = answers[index] || [];
  
  const isCorrect = 
    userAnswers.length > 0 &&
    userAnswers.length === question.correct.length &&
    userAnswers.every(a => question.correct.includes(a)) &&
    question.correct.every(c => userAnswers.includes(c));
    
  if (isCorrect) correctCount++;
});

const percentage = Math.round((correctCount / quiz.questions.length) * 100);
```

### Result Details
For each question, determine:
- Whether user's answer matches correct answer(s)
- Display user's selected answer(s)
- Display correct answer(s)
- Show explanation

---

## 🔄 State Management

### Component Level
Uses React `useState` for:
- Current quiz index
- User answers
- Loading states
- Expanded question details

### Application Level
Uses in-memory store for:
- Quiz list
- Quiz details
- Question bank

### Session Level
Uses `sessionStorage` for:
- Admin authentication status

---

## 🚀 Data Flow Diagram

```
Home Page
  ↓
Quiz Selection
  ↓
Quiz Page
  ├─ Load quiz from store
  ├─ Display question
  ├─ Handle answers
  └─ Navigate between questions
  ↓
Submit Quiz
  ↓
Results Page
  ├─ Fetch quiz from store
  ├─ Parse user answers from query
  ├─ Calculate score
  └─ Display results
```

---

## 💾 Persistence

### Current Implementation
- In-memory store (temporary)
- Lost on server restart
- Session storage (admin auth)

### Recommended Upgrade
```typescript
// Replace store with database calls
import { supabase } from '@/lib/supabase';

// Get quizzes from Supabase
const { data: quizzes } = await supabase
  .from('quizzes')
  .select('*');

// Create quiz
const { data: newQuiz } = await supabase
  .from('quizzes')
  .insert([...]);
```

---

## 🛡️ Security Considerations

### Current Implementation
- Simple password authentication (demo only)
- Session storage (not secure for production)

### Recommended Production Setup
1. Use NextAuth.js or Auth.js
2. Implement database authentication
3. Use HTTP-only cookies for sessions
4. Implement role-based access control
5. Add input validation and sanitization
6. Implement CSRF protection

---

## 📈 Performance Optimization

### Current Approach
- All questions stored in memory
- No pagination needed (30 questions)
- Client-side filtering and selection

### For Larger Scale
- Implement database pagination
- Lazy load questions
- Cache frequently accessed quizzes
- Implement CDN for static assets

---

## 🧪 Testing Endpoints

### Test Quiz Creation
```bash
# Visit admin login
http://localhost:3000/admin/login

# Login with password: admin123
# Click "Create Quiz"
# Select 10 questions
# Quiz is created
```

### Test Quiz Taking
```bash
# Homepage shows created quiz
http://localhost:3000

# Click quiz to start
# Answer questions
# Submit and view results
```

---

## 📝 Integration Examples

### Add Question to Bank
```typescript
// In /lib/questions.ts
export const questionsBank: Question[] = [
  // ... existing questions
  {
    id: 31,
    question: "New question?",
    options: {
      A: "Option A",
      B: "Option B",
      C: "Option C",
      D: "Option D"
    },
    correct: ["A"],
    type: "single",
    explanation: "Explanation here"
  }
];
```

### Get Random Questions
```typescript
function getRandomQuestions(count: number) {
  const shuffled = [...questionsBank].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}
```

---

## 🔗 Related Files

- `/lib/questions.ts` - Question definitions
- `/lib/store.ts` - Quiz storage API
- `/app/quiz/[id]/page.tsx` - Quiz interface
- `/app/results/[id]/page.tsx` - Results display
- `/app/admin/create/page.tsx` - Quiz creation

---

This documentation covers all APIs, data structures, and internal operations of the Quiz Master application.
