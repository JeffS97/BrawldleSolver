# Brawldle Solver

Brawldle Solver is a simple web application built with Next.js that allows users to solve the daily Brawldle puzzle. The app fetches data from the Brawlhalla CMS, calculates the answer based on the current date, and displays the correct Brawlhalla legend for that day.

### Features:
- **Brawldle Solver**: The app calculates the answer for the daily Brawldle puzzle based on today's date and displays the corresponding legend's name.
- **Responsive Design**: The app is designed to work on all screen sizes, with a mobile-friendly interface.

## Technologies Used:
- **Next.js**: A React-based framework for building server-side rendered web applications.
- **React**: JavaScript library for building user interfaces.
- **CSS Modules**: For component-scoped styles and easy theming.
- **GraphQL**: To fetch data from the Brawlhalla CMS API for the legend names.

## Installation and Setup

Follow these steps to set up the project locally:

### 1. Clone the Repository

First, clone this repository to your local machine:

```bash
git clone https://github.com/your-username/brawldle-solver.git
```
### 2. Install Dependencies

Navigate into the project folder and install the necessary dependencies:
```bash
cd brawldle-solver
npm install
```

### 3. Running the Development Server

To start the development server, run the following command:
```bash
npm run dev
```

This will start the app on http://localhost:3000.
### 4. Build and Deploy

To build the project for production, use the following command:
```bash
npm run build
```

After building, you can deploy the app using services like Vercel, Netlify, or any other platform that supports Next.js.
### Usage

Once the application is running, navigate to http://localhost:3000 in your browser. You'll see a box with the title Brawldle Solver. Here's how to use it:

    1. Click the "Solve Today's Brawldle" button.
    2. The app will show a loading spinner while the solution is being calculated.
    3. Once the answer is ready, the name of the Brawlhalla legend for the day will appear below the button, with the text "Today's Answer:" displayed above the solution.
    4. The button will disappear after the answer is shown.

### Customization

   - Favicon: You can change the browser tab icon (favicon) by replacing the favicon.png file in the /public folder with your custom image.
   - Design: Modify the styles/Home.module.css file for styling adjustments, such as background colors, text styles, and layout changes.
   - Logic: The solution logic is contained within the getBrawldleAnswer function in pages.tsx. You can replace it with your custom logic if needed.

Folder Structure
```bash
/  # Root directory
├── /app              # Main application files
│   ├── layout.tsx    # Layout component
│   ├── page.tsx      # Home page with Brawldle Solver functionality
│   └── globals.css   # Global CSS
├── /components       # React components
│   ├── Rectangle.js  # Component for the main Brawldle Solver box
│   ├── Footer.js     # Footer component
│   └── Spinner.js    # Spinner component for loading state
└── /public           # Public assets
    ├── favicon.png   # Favicon image for the browser tab
    └── /images       # Any other images (optional)
```

### Acknowledgments

    The Brawlhalla CMS API for providing the legend data.
    The Next.js team for building an excellent framework that makes server-side rendering simple.
    CSS for styling components in a modular way.
