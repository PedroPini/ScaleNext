# ♻ ScaleNext - A fully integrated SaaS Boilerplate

![ScaleNext](https://github.com/user-attachments/assets/3f22d171-c5ae-42f1-87ce-b3364a1bb9b5)


A modern and highly scalable Next.js boilerplate with integrated authentication, payments, email functionality, and UI components — everything you need to jumpstart your SaaS application!

![image](https://github.com/user-attachments/assets/ac72588c-e441-4066-bc9c-198cd88700d0)


## ✨ Features

- **Next.js**: Fast, scalable, and SEO-friendly React framework for building web applications.
- **Stripe Integration**: Seamlessly integrated payment system using Stripe for subscriptions and one-time payments.
- **Resend for Emails**: Effortlessly handle transactional emails with [Resend](https://resend.com/), featuring React components for email templates.
- **Shadcn UI**: Beautifully designed, customizable, and accessible UI components built using Tailwind CSS.
- **Clerk for Authentication**: Robust and secure user authentication and session management via Clerk.
- **Supabase for Database**: Scalable and efficient backend-as-a-service with PostgreSQL databases, real-time data syncing, and authentication.
- **Fumadocs for Documentation or CMS**: Fumadocs is a mdx content generating for blog or documentation, you can either use mdx files or a cms(content management system)
  
## 📦 Tech Stack

- **[Next.js](https://nextjs.org/)**: Framework
- **[Stripe](https://stripe.com/)**: Payment
- **[Resend](https://resend.com/)**: Email
- **[Shadcn](https://shadcn.dev/)**: UI Library
- **[Clerk](https://clerk.dev/)**: Authentication
- **[Supabase](https://supabase.com/)**: Database
- **[Fumadocs](https://fumadocs.vercel.app/)**: Documentation

## 🚀 Getting Started

Follow these instructions to set up and run the project on your local machine.

### Prerequisites

Make sure you have the following installed:

- Node.js 18+
- Yarn or npm
- Stripe account
- Clerk account
- Supabase account
- Resend account

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-repo/your-boilerplate.git
    ```

2. Navigate to the project directory:

    ```bash
    cd your-boilerplate
    ```

3. Install the dependencies:

    ```bash
    yarn install
    # or
    npm install
    ```

4. Set up environment variables:

Create a `.env.local` file in the root directory and add the following:

    ```env
    # Next.js
    NEXT_PUBLIC_CLERK_FRONTEND_API=<your-clerk-frontend-api>

    # Clerk
    CLERK_API_KEY=<your-clerk-api-key>

    # Stripe
    STRIPE_SECRET_KEY=<your-stripe-secret-key>
    NEXT_PUBLIC_STRIPE_PUBLIC_KEY=<your-stripe-public-key>

    # Supabase
    NEXT_PUBLIC_SUPABASE_URL=<your-supabase-url>
    NEXT_PUBLIC_SUPABASE_ANON_KEY=<your-supabase-anon-key>

    # Resend
    RESEND_API_KEY=<your-resend-api-key>
    ```

### Running the App

Start the development server:

    ```bash
    yarn dev
    # or
    npm run dev
    ```

Visit [http://localhost:3000](http://localhost:3000) to view the application.

### Deployment

The boilerplate is fully optimized for deployment on platforms like Vercel. To deploy, simply push your code to GitHub and connect it to your Vercel account.


