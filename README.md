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
    #NEXT
    NEXT_PUBLIC_BASE_URL=http://localhost:3000
    
    #CLERK
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
    CLERK_SECRET_KEY=your_clerk_secret_key
    CLERK_JWT_KEY=your_clerk_jwt_key
    
    #SUPABASE
    NEXT_PUBLIC_SUPABASE_URL=http://127.0.0.1:54321
    NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
    NEXT_PUBLIC_SUPABASE_KEY=your_supabase_key
    
    #STRIPE
    STRIPE_SECRET_KEY=your_stripe_secret_key
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
    STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
    
    #UPSTASH
    UPSTASH_REDIS_REST_URL=your_upstash_redis_rest_url
    UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_rest_token
    
    #EMAIL
    RESEND_API_KEY=your_resend_api_key
    MY_EMAIL=your_email@example.com
    LOCALHOST="127.0.0.1"
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

### Issues or FeedBack

If you encounter any issues or have feedback, feel free to open an issue or submit a pull request.


