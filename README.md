# 📚 Study Planner

A lightweight, intuitive web application designed to help students organize their study tasks efficiently. Plan your day with a clean, distraction-free interface.

## 📋 Features

- **Add Tasks**: Quickly add study tasks to your daily plan
- **Mark Complete**: Check off tasks as you complete them with visual feedback (strikethrough)
- **Delete Tasks**: Remove tasks you no longer need
- **Persistent Storage**: All tasks are saved to your browser's local storage, so your plan persists between sessions
- **Accessible Design**: Built with accessibility in mind, including ARIA labels and keyboard navigation
- **Responsive Layout**: Works seamlessly on desktop and mobile devices
- **Clean UI**: Modern, gradient design with a focus on usability

## 🎯 How to Use

1. **Open the Application**: Open `index.html` in any modern web browser
2. **Add a Task**: Type your study task in the input field and click "Add Task" or press Enter
3. **Complete a Task**: Click the checkbox next to a task to mark it as complete (the task text will appear crossed out)
4. **Delete a Task**: Click the ✖ button to remove a task from your list
5. **Your Tasks Persist**: Close the browser and come back later—your tasks will still be there!

## 🛠️ Technical Stack

- **HTML5**: Semantic markup with ARIA labels for accessibility
- **CSS3**: Modern styling with CSS variables, flexbox layout, and responsive design
- **Vanilla JavaScript**: Pure JavaScript (no dependencies) for task management and DOM manipulation

## 📁 Project Structure

```
Study Planner Web App/
├── index.html      # Main HTML file with form and task list container
├── script.js       # JavaScript logic for task management and display
├── style.css       # Styling and responsive design
└── README.md       # This file
```

## 📖 File Descriptions

### index.html

- Contains the page structure with a header, input form, and task list
- Imports `style.css` for styling and `script.js` for functionality
- Uses semantic HTML with proper accessibility attributes

### script.js

- **addTask()**: Adds a new task to the list and local storage
- **toggleTask()**: Marks a task as complete or incomplete
- **deleteTask()**: Removes a task from the list
- **displayTasks()**: Renders all tasks from local storage to the DOM
- Includes keyboard support (Enter key to mark complete)
- Auto-focuses input field after adding a task

### style.css

- **Design Variables**: Uses CSS custom properties for colors and spacing
- **Theme**: Soft blue gradient background with white card interface
- **Color Scheme**:
  - Primary accent: Green (#3aa35b)
  - Background: Gradient from light blue to white
  - Muted text: Gray (#6b7280)
- **Responsive**: Adapts layout for screens smaller than 420px
- **Interactive States**: Focus states for inputs, hover effects for buttons

## 🎨 Color Palette

| Element       | Color                                | Purpose                         |
| ------------- | ------------------------------------ | ------------------------------- |
| Background    | Linear gradient (#e9f3ff to #f7fbff) | Soft, calming backdrop          |
| Card          | White (#ffffff)                      | Main content area               |
| Accent        | Green (#3aa35b)                      | Add button, primary action      |
| Muted         | Gray (#6b7280)                       | Secondary text, disabled states |
| Delete Button | Light red (#eccbcb, #d64545)         | Destructive action              |

## 💾 Data Storage

Tasks are stored in browser **localStorage** with the key `"tasks"`. Each task is stored as a JSON object:

```javascript
{
  text: "Study JavaScript",
  completed: false
}
```

## 🌐 Browser Compatibility

Works on all modern browsers that support:

- HTML5
- CSS3 (Flexbox, Grid)
- ES6 JavaScript
- localStorage API

## 🚀 Getting Started

1. Clone or download the project
2. Open `index.html` in your web browser
3. Start adding your study tasks!

## 🔄 Local Development

No build tools or dependencies required! Simply:

- Edit the `.html`, `.css`, or `.js` files in any text editor
- Refresh your browser to see changes
- Use browser DevTools for debugging (F12)

## ✨ Accessibility Features

- ARIA labels for screen readers
- Keyboard navigation (Enter key support)
- Semantic HTML structure
- Focus states for interactive elements
- High contrast text

## 📝 Future Enhancement Ideas

- Drag-and-drop task reordering
- Task categories/subjects
- Due dates and reminders
- Time tracking for study sessions
- Dark mode toggle
- Export/import tasks
- Task priority levels

## 📄 License

This project is open source and available for personal and educational use.

---

**Happy studying!** 📖✏️
