# Timer App Assignment

Welcome to the Timer App Assignment! This project is designed to evaluate your skills in React development, focusing on **UI implementation**, **code quality**, **state management**, and **best practices**. The project uses **React**, **Vite**, **Tailwind CSS**, and **Vitest** for testing.

---

## **Objective**
Your task is to improve and enhance an existing Timer App based on the following requirements. The app currently has a partially implemented timer system, and your goal is to address the listed issues and extend its functionality.

---

## **Tech Stack**
- **Frontend Framework**: React (with Vite for fast development)
- **Styling**: Tailwind CSS
- **Testing Framework**: Vitest (for unit and component testing)

---

## **Steps to Complete**

1. **Fork or Clone the Repository**
   - Fork or clone the repository to your local machine.
   - Set up the project using the provided instructions.

2. **Complete the Following Tasks:**

   1. **Match the UI:**
      - Ensure the app's UI matches the given **screenshots**.
      - <img width="250" alt="Screenshot 2024-12-03 at 8 30 53 PM" src="https://github.com/user-attachments/assets/59782304-c254-4d87-9fac-7f92c15bbc6f">
      - <img width="250" alt="Screenshot 2024-12-03 at 3 29 25 PM" src="https://github.com/user-attachments/assets/9bb429ff-cd78-4411-b222-9d947c3ae79b">
      - <img width="250" alt="Screenshot 2024-12-03 at 8 21 04 PM" src="https://github.com/user-attachments/assets/a26e8ec7-7e00-4964-8f61-651945f4bbd1">
      - <img width="250" alt="Screenshot 2024-12-03 at 8 21 30 PM" src="https://github.com/user-attachments/assets/a513a462-540f-45e7-8ac0-0890995ec82d">


   2. **Simultaneous Timers:**
      - Update the app to allow multiple timers to run simultaneously (currently, only one timer runs at a time).

   3. **Snack Bar Behavior:**
      - When a timer is completed:
        - A snack bar notification should display.
        - The notification sound should keep playing until the snack bar is dismissed.

   4. **Fix Snack Bar Console Error:**
      - Resolve the **console error** that occurs when the snack bar's **dismiss button** is clicked.

   5. **Extract Common Components:**
      - Extract the buttons in the **Add/Edit Timer Modal** as a **separate reusable component**.
      - Replace all instances of similar buttons in the app with this component.

   6. **Consolidate Modal Code:**
      - Refactor the code to use a **single modal component** for both adding and editing timers, eliminating duplication.

   7. **Validation Snack Bars:**
      - Currently, the **Submit button** is disabled when the form is invalid.
      - Show an **error snack bar** or notification when the form is submitted with invalid data.

   8. **Responsive Snack Bar Placement:**
      - For **desktop devices**: Display snack bars in the **top-right corner**.
      - For **mobile devices**: Display snack bars at the **bottom of the screen**.

   9. **Write Tests:**
      - Add **unit tests** for the `validation.ts` file to ensure all validation rules work as expected.
      - Write **component tests** for reusable components like `TimerItem` and `ModalButtons`.

   10. **Timer Persistence:**
       - Use **localStorage** to persist timers across page refreshes.

---

## **Project Setup**

1. Clone the repository:  
   ```bash
   git clone https://github.com/CW-Codewalnut/timer.git
   ```

2. Install dependencies:  
   ```bash
   npm install
   ```

3. Start the development server:  
   ```bash
   npm run dev
   ```

4. Run tests:  
   ```bash
   npm vitest
   ```

---

## **Evaluation Criteria**

You will be evaluated on the following points:

1. **UI Matching:**
   - The app's UI should match the provided screenshots.

2. **Code Quality:**
   - Clean, modular, and readable code.
   - Avoid code duplication and ensure reusable components are implemented.

3. **Functionality:**
   - Simultaneous timers, snack bar notifications, and localStorage persistence should work seamlessly.

4. **State Management:**
   - Effective use of React hooks or Context API for managing state.

5. **Testing:**
   - Comprehensive unit and component tests, especially for validation logic and reusable components.

6. **Error Handling:**
   - Resolve the existing snack bar console error and provide meaningful feedback to users for invalid forms.

7. **Responsiveness:**
   - Snack bar placement should adapt based on device type (desktop vs. mobile).

8. **Commit Messages:**
   - Follow **conventional commit standards** (e.g., `feat:`, `fix:`, `refactor:`).

---

## **Deliverables**

1. A **GitHub repository link** to your completed project (forked from the original repo).  
2. Include a `README.md` describing:  
   - Steps to run your project.  
   - Any additional changes or enhancements you made.  

---

## **Time Constraint**

You are expected to complete this assignment in **4 hours** of focused effort.  

---

## **Contact**

If you have any questions or issues, feel free to reach out via the provided contact channels in the repository.

Good luck! 🚀

still you can run these in same way like npm run dev

1. Allow Multiple Timers to Run Simultaneously
Updates Required:

    Modify the state management to store multiple timers.
    Update the timer logic to allow multiple setInterval instances.
    Ensure the UI updates correctly for each active timer.

Files to Update:

    TimerContext.tsx  useState in the component managing timers.
    TimerItem.tsx to reflect multiple running timers.

2. Update Snack Bar Behavior
Updates Required:

    Modify the snack bar component to display a notification when a timer ends.
    Ensure the sound plays and stops only when the snack bar is dismissed.
    Handle event listeners for dismissing the snack bar.

Files to Update:

    Snackbar.tsx (or wherever snack bars are handled).
    TimerItem.tsx (to trigger snack bar on completion).

3. Fix Snack Bar Console Error
Updates Required:

    Investigate and fix state updates after unmount.
    Ensure that clicking dismiss doesn’t trigger a missing reference error.
    Use useEffect cleanup if needed.

Files to Update:

    Snackbar.tsx
    App.tsx or wherever snack bars are triggered

4. Extract Common Buttons as a Reusable Component
Updates Required:

    Create a ModalButtons.tsx component.
    Replace all similar buttons with this reusable component.
    Pass props like onClick, label, variant, etc.

Files to Update:

    ModalButtons.tsx (new file).
    AddTimerModal.tsx and EditTimerModal.tsx (replace buttons).

5. Consolidate Modals for Add/Edit Timer
Updates Required:

    Merge AddTimerModal.tsx and EditTimerModal.tsx into a single component (TimerModal.tsx).
    Use props like mode (add or edit) to differentiate.
    Remove redundant modal code.

Files to Update:

    TimerModal.tsx (new file).
    Remove AddTimerModal.tsx and EditTimerModal.tsx.

6. Show Validation Snack Bars
Updates Required:

    Remove disabled from Submit button when form is invalid.
    Show an error snack bar instead when submission fails.
    Validate inside the submit handler.

Files to Update:

    TimerModal.tsx (form validation logic).
    Snackbar.tsx (to handle validation errors).

7. Responsive Snack Bar Placement
Updates Required:

    Use window.innerWidth or CSS media queries to adjust placement.
    Show snack bars top-right on desktop and bottom on mobile.

Files to Update:

    Snackbar.tsx (CSS updates).

8. Write Tests
Updates Required:

    Validation Tests (validation.ts): Ensure all validation rules work.
    Component Tests (TimerItem.tsx, ModalButtons.tsx): Verify rendering and user interactions.

Files to Update:

    __tests__/validation.test.ts (new file).
    __tests__/TimerItem.test.tsx (new file).
    __tests__/ModalButtons.test.tsx (new file).

9. Persist Timers Across Refresh
Updates Required:

    Save timers in localStorage on update.
    Retrieve timers from localStorage on app load.
    Ensure that timers resume properly.

Files to Update:

    TimerContext.tsx or the component managing timers.