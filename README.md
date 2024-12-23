# Event Calendar Application

## Summary of Features

This is a **Dynamic Event Calendar Application** built with **React.js**. The application allows users to:

1. **View Calendar**:
    - Display a calendar grid of the current month with proper day alignment.
    - Switch between months using "Previous" and "Next" buttons.

2. **Event Management**:
    - **Add, edit, or delete events** on any specific day.
    - Each event includes:
        - Event name
        - Start time and end time
        - Optional description.

3. **Event List**:
    - View all events for the selected day in a modal or side panel.
    - View all events for the current month.

4. **Features**:
    - Events persist between page refreshes using **localStorage**.
    - Automatically handles month transitions and prevent event overlap.
    - Event filtering is available by keyword.
    - User-friendly UI, with **shadcn** components for a clean and modern look.

5. **Optional Features** (Bonus):
    - **Drag-and-drop functionality** to reschedule events.
    - Color-coded events by type (work, personal, etc.).
    - Export event list as **JSON** or **CSV**.

## Getting Started

To get this project up and running locally, follow these instructions:

### Prerequisites

- **Node.js** and **npm** (Node Package Manager) must be installed.

   To install **Node.js** and **npm**, visit the official website: https://nodejs.org/

### Installing and Running the App Locally

1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/tanyatwinkle/event-calendar.git
