# Ahoum Sessions Marketplace

This is a full-stack Sessions Marketplace web application.

## Tech Stack
- Frontend: Next.js 14, TailwindCSS, TypeScript
- Backend: Django 4.2, Django REST Framework
- Database: PostgreSQL 15
- Infrastructure: Docker, Docker Compose, Nginx

## Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <repo-url>
   cd ahoum-sessions-marketplace
   ```

2. **Environment Variables**
   - Copy the `.env.example` to `.env` if needed, or just let docker-compose use `.env.example` directly (already configured in `docker-compose.yml` for this demo).
   - If you want custom secrets:
     ```bash
     cp .env.example .env
     ```

3. **Start the System**
   Run the following command to build and start all containers:
   ```bash
   docker-compose up --build
   ```
   - Frontend is available at `http://localhost:3000` or `http://localhost/` (via Nginx)
   - Backend API is available at `http://localhost/api/` (via Nginx)

## OAuth Client Setup
To use Google and GitHub OAuth:
1. Go to the respective developer consoles.
2. Create an OAuth app.
3. Set the authorized redirect URI to `http://localhost/accounts/google/login/callback/` (for Google) or equivalent for GitHub.
4. Update `GOOGLE_CLIENT_ID` and `GITHUB_CLIENT_ID` in `.env`.

## Demo Flow
- Navigate to `http://localhost/` to view the homepage.
- (TBD: More features will be added in upcoming stages).
