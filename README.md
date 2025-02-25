# Backend Template - Hit Star ⭐

A modern TypeScript-based backend starter template with Express and MongoDB.

## 🚀 Tech Stack

- **Language:** TypeScript
- **Framework:** Express.js
- **Runtime:** Node.js
- **Database:** MongoDB
- **ODM:** Mongoose

## 📦 Features

- Pre-configured TypeScript setup
- MongoDB connection with Mongoose
- Environment variables support
- Basic Express server setup
- MVC folder structure
- Type safety with TypeScript
- Error handling middleware

## 🛠️ Project Structure

```
├── src/
│   ├── config/          # Configuration files
│   ├── controllers/     # Route controllers
│   ├── middlewares/     # Custom middlewares
│   ├── models/          # Database models
│   ├── routes/          # API routes
│   ├── types/           # TypeScript type definitions
│   ├── app.ts          # Express app setup
│   ├── constants.ts     # Application constants
│   └── index.ts        # Entry point
├── .env.example         # Example environment variables
├── .gitignore
├── package.json
└── tsconfig.json
```

## 🚦 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- MongoDB installed locally or a MongoDB Atlas account
- npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/backend-template.git
cd backend-template
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

```bash
cp .env.example .env
```

4. Update `.env` with your configuration:

```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/your-database
NODE_ENV=development
```

5. Start the development server:

```bash
npm run dev
```

## 📜 Available Scripts

````bash
 "build": "tsc -b",
 "start": "node dist/index.js",
 "dev": "npm run build && npm run start",
 "serve": "npm run build && nodemon dist/index.js"
 ```

## 🔒 Environment Variables

| Variable      | Description           | Default Value |
|---------------|-----------------------|---------------|
| PORT          | Server port           | 3000         |
| MONGODB_URI   | MongoDB connection URL| -            |

## Give it a star ⭐
- If you use this repo give it a star.

## 👏 Acknowledgments

- Express.js - Fast, unopinionated web framework for Node.js
- TypeScript - JavaScript with syntax for types
- Mongoose - MongoDB object modeling tool

