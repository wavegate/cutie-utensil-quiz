# Cutie Utensil Quiz Frontend

A delightful personality quiz that reveals which kitchen utensil matches your personality! Built with React, TypeScript, and Tailwind CSS.

## Features

- Interactive chat-style quiz interface
- Beautiful, responsive design
- Real-time progress tracking
- Detailed personality results with compatibility
- Share results with friends
- Server-side quiz logic and calculations

## Architecture

This frontend is designed as a pure UI layer that connects to a FastAPI backend:

- **Frontend**: React + TypeScript + Tailwind CSS (UI only)
- **Backend**: FastAPI (quiz logic, calculations, data)
- **Communication**: REST API calls

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create a `.env.local` file in the root directory with:
```
VITE_API_URL=http://localhost:8000
```

3. Start the development server:
```bash
npm run dev
```

## Backend Connection

This frontend requires a FastAPI backend running on `http://localhost:8000` by default. The backend provides:

- Quiz questions and options
- Personality calculations
- Utensil matching logic
- Result generation

## API Endpoints

The frontend expects the following API endpoints:
- `GET /quiz/questions` - Get all quiz questions and options
- `POST /quiz/submit` - Submit quiz answers and receive personality results

## Development

- Built with Vite + React + TypeScript
- Uses shadcn/ui components
- Styled with Tailwind CSS
- State management with React hooks
- API communication with fetch

## Build

```bash
npm run build
```

## Project Structure

```
src/
├── components/          # React components
│   ├── ChatBot.tsx     # Quiz interface
│   ├── Results.tsx     # Results display
│   └── ui/             # shadcn/ui components
├── lib/
│   └── api.ts          # API communication
├── pages/              # Page components
└── utils/              # Utility functions
```

## Project info

**URL**: https://lovable.dev/projects/61938e6e-f748-473f-996e-a9da2661412d

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/61938e6e-f748-473f-996e-a9da2661412d) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/61938e6e-f748-473f-996e-a9da2661412d) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
