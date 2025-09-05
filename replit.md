# Overview

This is a personal portfolio website for Aryan Bhatnagar, a Data Analyst and BI Developer. The application showcases professional experience, skills, projects, certifications, and provides a contact form for potential clients or employers. Built as a full-stack web application with a modern React frontend and Express backend, it demonstrates expertise in data visualization and business intelligence through an interactive, responsive design.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development patterns
- **Routing**: Wouter for lightweight client-side routing
- **UI Framework**: Shadcn/ui components built on Radix UI primitives for accessible, customizable components
- **Styling**: Tailwind CSS with CSS variables for theming and responsive design
- **State Management**: TanStack Query (React Query) for server state management and caching
- **Form Handling**: React Hook Form with Zod validation for type-safe form validation
- **Build Tool**: Vite for fast development and optimized production builds

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API endpoints with JSON responses
- **Error Handling**: Centralized error handling middleware with proper HTTP status codes
- **Request Logging**: Custom middleware for API request logging and performance monitoring

## Data Storage
- **ORM**: Drizzle ORM for type-safe database queries and schema management
- **Database**: PostgreSQL (configured via DATABASE_URL environment variable)
- **Schema**: Centralized schema definitions in shared directory for type consistency
- **Migrations**: Drizzle Kit for database migrations and schema evolution
- **Development Storage**: In-memory storage implementation for development/testing

## Authentication & Security
- **Input Validation**: Zod schemas for runtime type checking and validation
- **CORS**: Configured for secure cross-origin requests
- **Environment Variables**: Secure configuration management for sensitive data
- **Form Security**: Protected contact form with server-side validation

## Development & Build Pipeline
- **Development Server**: Vite dev server with HMR for frontend, tsx for backend hot reload
- **Production Build**: Vite build for frontend static assets, esbuild for backend bundling
- **Type Checking**: TypeScript compiler for static type analysis
- **Code Quality**: Consistent code formatting and linting setup

# External Dependencies

## Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, React Router (Wouter), React Hook Form
- **UI Component Library**: Radix UI primitives for accessible components
- **Styling**: Tailwind CSS, class-variance-authority for component variants
- **Icons**: Lucide React for consistent iconography

## Backend Dependencies
- **Express.js**: Web framework for API endpoints
- **Database**: Drizzle ORM, @neondatabase/serverless for PostgreSQL connection
- **Email**: Nodemailer for contact form email notifications
- **Session Management**: connect-pg-simple for PostgreSQL session storage

## Development Tools
- **Build Tools**: Vite, esbuild for fast builds and bundling
- **TypeScript**: Full TypeScript support for type safety
- **Development**: tsx for TypeScript execution, Replit-specific plugins

## Third-party Services
- **Database Hosting**: Neon Database (serverless PostgreSQL)
- **Email Service**: Gmail SMTP for contact form notifications
- **Image Assets**: Unsplash for professional stock photography
- **Fonts**: Google Fonts (Inter) for typography

## Validation & Utilities
- **Schema Validation**: Zod for runtime type checking
- **Date Handling**: date-fns for date manipulation and formatting
- **Utility Libraries**: clsx, tailwind-merge for conditional styling
- **State Management**: TanStack Query for server state and caching