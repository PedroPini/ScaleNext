# ♻ ScaleNext - A fully integrated SaaS Boilerplate

A modern and highly scalable Next.js boilerplate with integrated authentication, payments, email functionality, and UI components — everything you need to jumpstart your SaaS application!

![image](https://github.com/user-attachments/assets/ac72588c-e441-4066-bc9c-198cd88700d0)


## ✨ Features

- **Next.js**: Fast, scalable, and SEO-friendly React framework for building web applications.
- **Stripe Integration**: Seamlessly integrated payment system using Stripe for subscriptions and one-time payments.
- **Resend for Emails**: Effortlessly handle transactional emails with [Resend](https://resend.com/), featuring React components for email templates.
- **Shadcn UI**: Beautifully designed, customizable, and accessible UI components built using Tailwind CSS.
- **Clerk for Authentication**: Robust and secure user authentication and session management via Clerk.
- **Supabase for Database**: Scalable and efficient backend-as-a-service with PostgreSQL databases, real-time data syncing, and authentication.
  
## 📦 Tech Stack

- **[Next.js](https://nextjs.org/)**: Server-side rendering, static site generation, API routes, and full-stack development with React.
- **[Stripe](https://stripe.com/)**: Payment processing with a fully customizable API for handling subscriptions and payments.
- **[Resend](https://resend.com/)**: Powerful email APIs and React-based email templates.
- **[Shadcn](https://shadcn.dev/)**: Pre-built UI components integrated with Tailwind CSS for a great developer experience.
- **[Clerk](https://clerk.dev/)**: Comprehensive user authentication and management solution.
- **[Supabase](https://supabase.com/)**: Real-time Postgres database with RESTful APIs, user authentication, and file storage.
- **[Fumadocs](https://fumadocs.vercel.app/)**: Fumadocs is the documentation framework with excellent UI and user experience

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

## 🎨 Customization

### UI with Shadcn

Shadcn's UI components are fully customizable with Tailwind CSS. You can easily extend, modify, and create new components to fit your application’s design requirements.

### Authentication with Clerk

Clerk makes it simple to manage user accounts, logins, and session states. For advanced use cases like role-based access control (RBAC) and team-based apps, Clerk provides additional functionalities right out of the box.

### Payments with Stripe

Stripe is configured to handle subscription and one-time payment models. Update your subscription plans or pricing by modifying the `pricing.js` file. Additionally, the boilerplate includes helper functions to manage customer billing information and subscriptions.

### Email with Resend

Resend provides a convenient way to manage transactional emails, such as welcome messages and payment confirmations. You can customize the email templates in the `/emails` directory.

### Supabase Database

Supabase is your powerful backend solution with a fully managed PostgreSQL database and real-time capabilities. Integrate new tables, views, and APIs to extend the functionality as your app grows.

### Fumadocs

Fumadocs is a mdx content generating for blog or documentation, you can either use mdx files or a cms(content management system)
