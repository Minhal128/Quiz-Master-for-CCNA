# Quick Start Guide - Quiz Master

## 🎯 5-Minute Setup

### Step 1: Start the Server
```bash
pnpm dev
```
Server will run at `http://localhost:3000`

### Step 2: Create Your First Quiz

1. **Go to Admin Panel**
   - Click "Admin Panel" button on homepage
   - Or navigate to: `http://localhost:3000/admin/login`

2. **Login**
   - Password: `admin123`

3. **Create Quiz**
   - Click "Create Quiz" button
   - Enter quiz title: "My First Quiz"
   - Select number of questions: `10`
   - Review selected questions
   - Click "Create Quiz"

### Step 3: Take the Quiz

1. Go back to homepage: `http://localhost:3000`
2. Click on "My First Quiz"
3. Answer all questions
4. Click "Submit Quiz"
5. View your results

---

## 📚 Common Tasks

### I want to create a quiz with 20 questions (66%)
1. Go to `/admin/login`
2. Login with `admin123`
3. Click "Create Quiz"
4. Enter quiz title
5. Set number to `20` using the slider or input
6. See "66%" displayed
7. Click "Create Quiz"

### I want to add more questions to the bank
1. Edit `/lib/questions.ts`
2. Add new questions to the `questionsBank` array
3. Each question needs:
   ```typescript
   {
     id: 31,
     question: "Your question?",
     options: {
       A: "Option A",
       B: "Option B", 
       C: "Option C",
       D: "Option D"
     },
     correct: ["A"], // or ["B", "C"] for multiple
     type: "single", // or "multiple"
     explanation: "Why this is correct..."
   }
   ```

### I want to change the admin password
1. Edit `/app/admin/login/page.tsx`
2. Find: `const ADMIN_PASSWORD = 'admin123';`
3. Change to your password
4. Save and refresh

### I want to delete a quiz
1. Go to admin dashboard
2. Find the quiz in the table
3. Click "Delete" button
4. Confirm deletion

---

## 🔍 Site Navigation

| Page | URL | Purpose |
|------|-----|---------|
| Home | `/` | View all quizzes |
| Quiz | `/quiz/[id]` | Take a quiz |
| Results | `/results/[id]` | View results |
| Admin Login | `/admin/login` | Admin authentication |
| Admin Dashboard | `/admin/dashboard` | Manage quizzes |
| Create Quiz | `/admin/create` | Create new quiz |

---

## 💡 Pro Tips

1. **Random Selection**: Each time you create a quiz with the same number of questions, you'll get a different random set
2. **No Refresh**: Progress is kept in browser memory - don't refresh while taking quiz
3. **Flexible Navigation**: Jump to any question using the numbered buttons at bottom of quiz page
4. **Change Answers**: You can go back and change your answer to any question anytime
5. **Better Results**: Questions show as "green highlighted" if answered during quick navigation

---

## ⚠️ Important Notes

- ✅ All data is stored IN-MEMORY (no database)
- ✅ Data is LOST when you refresh/restart the server
- ✅ Good for demos and testing
- ⚠️ NOT suitable for production without database

---

## 🎨 Customization

### Change Colors
Edit `/app/globals.css` to modify the theme colors

### Change Question Bank
Edit `/lib/questions.ts` to add/remove/modify questions

### Change Quiz Rules
Edit the quiz page (`/app/quiz/[id]/page.tsx`) to:
- Add a timer
- Require all questions to be answered
- Change navigation rules

---

## 🚀 Next Steps

1. ✅ Create a quiz with 10 questions
2. ✅ Take the quiz
3. ✅ View results
4. ✅ Go to admin and create another quiz
5. ✅ Add custom questions to the question bank
6. 🎯 Deploy to Vercel!

---

## 📞 Need Help?

- Check `README.md` for full documentation
- Review code comments in source files
- Look at example quiz creation in this guide

**Happy Quizzing! 🎉**
