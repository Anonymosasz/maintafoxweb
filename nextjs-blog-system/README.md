# Next.js Blog System

This project is a complete user-driven blog system built with Next.js 14. It includes features such as authentication, an admin dashboard for moderation, and SEO optimization.

## Key Features

- **Authentication**: Users can register and log in using email and OAuth options. The system supports different roles including admin, author, and reader.
  
- **Blog System**: 
  - Dynamic routing for individual blog posts.
  - Admin dashboard for managing posts and users.
  - Blog editor for creating and editing posts.

- **SEO Optimization**: 
  - Metadata management for better search engine visibility.
  - Open Graph tags for social media sharing.
  - JSON-LD structured data for enhanced search results.
  - Performance optimizations for faster loading times.

- **Testing**: 
  - Unit tests using Jest.
  - Component tests with React Testing Library.
  - End-to-end tests with Playwright.

- **Deployment**: 
  - Configured with GitHub Actions for continuous integration and deployment.
  - Deployed on Vercel for easy hosting and scalability.

## Getting Started

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/nextjs-blog-system.git
   cd nextjs-blog-system
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**:
   Copy the example environment variables file and fill in your details:
   ```bash
   cp .env.local.example .env.local
   ```

4. **Run the Development Server**:
   ```bash
   npm run dev
   ```

5. **Open Your Browser**:
   Navigate to `http://localhost:3000` to view the application.

## Folder Structure

- **app/**: Contains the main application files including pages and API routes.
- **components/**: Reusable components for authentication, blog, admin, and layout.
- **lib/**: Utility functions for authentication and database operations.
- **types/**: TypeScript types used throughout the application.
- **contexts/**: Context API for managing authentication state.
- **hooks/**: Custom hooks for authentication logic.
- **middleware.ts**: Middleware for handling authentication and authorization.
- **next.config.js**: Configuration settings for the Next.js application.
- **tailwind.config.ts**: Configuration for TailwindCSS.
- **tsconfig.json**: TypeScript configuration file.
- **package.json**: Lists dependencies and scripts for the project.
- **.env.local.example**: Example environment variables file.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or features you would like to see.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.