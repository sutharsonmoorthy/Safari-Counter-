# 🐾 Safari Tracker

A sleek, responsive React application to track wildlife sightings in real-time. Whether you're on a game drive or monitoring a nature reserve, Safari Tracker helps you keep count of the majestic animals you encounter.



## ✨ Features

* **Individual Animal Cards**: Track sightings for Tigers, Elephants, Leopards, Bison, Deer, and Dholes.
* **Real-time Totals**: A global "Total Spotted" badge that updates automatically as you log sightings.
* **Smart UI States**: Visual feedback (border highlights and status text) when an animal is spotted.
* **Safety Logic**: Prevents negative sightings (counts cannot go below zero).
* **One-Click Reset**: Quickly clear all data to start a new tracking session.
* **Fully Responsive**: CSS Grid layout that adapts to mobile, tablet, and desktop screens.

## 🚀 Tech Stack

* **Frontend**: React.js
* **Styling**: Custom CSS3 (Flexbox/Grid)
* **State Management**: React Hooks (`useState`)

## 🛠️ Installation & Setup

1.  **Clone the repository**:
    ```bash
    git clone [https://github.com/your-username/safari-tracker.git](https://github.com/your-username/safari-tracker.git)
    ```

2.  **Navigate to the project folder**:
    ```bash
    cd safari-tracker
    ```

3.  **Install dependencies**:
    ```bash
    npm install
    ```

4.  **Start the development server**:
    ```bash
    npm start
    ```

## 📂 Project Structure

* `SafariTracker.js`: The main container component managing the global state.
* `AnimalCard.js`: A reusable component for displaying animal data and controls.
* `SafariTracker.css`: Custom styles including the dark theme and responsive grid.
* `/assets`: Contains high-quality imagery for the wildlife.

