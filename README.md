# 🔐 Next-Auth with Clerk

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-15.0-black?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript&logoColor=white)
![Clerk](https://img.shields.io/badge/Clerk-Auth-purple?style=for-the-badge&logo=clerk&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

**A modern, secure, and beautiful authentication system built with Next.js 15 and Clerk**

[🚀 Live Demo](https://your-demo-link.vercel.app) • [📖 Documentation](https://clerk.com/docs) • [🐛 Report Bug](https://github.com/JScoder4005/Next-auth/issues) • [✨ Request Feature](https://github.com/JScoder4005/Next-auth/issues)

</div>

---

## 🌟 Features

<div align="center">

|     🔐 **Secure Authentication**      |      ⚡ **Lightning Fast**       |          🎨 **Modern Design**          |
| :-----------------------------------: | :------------------------------: | :------------------------------------: |
| Industry-standard security with Clerk | Built with Next.js 15 App Router | Clean, responsive UI with Tailwind CSS |

|  📱 **Responsive**   |      🌙 **Dark Mode**       |    🎯 **Type Safe**     |
| :------------------: | :-------------------------: | :---------------------: |
| Works on all devices | Beautiful dark/light themes | Full TypeScript support |

</div>

### ✨ Key Capabilities

- 🔑 **Multiple Sign-in Methods**: Email, Google, Apple, GitHub, and more
- 🛡️ **Security First**: MFA, session management, and secure tokens
- 🎨 **Fully Customizable**: Extensive theming and styling options
- 📱 **Mobile Ready**: Responsive design with touch-friendly interfaces
- ⚡ **Performance Optimized**: Built with Next.js 15 and React 18
- 🔗 **Deep Integration**: Seamless user management and analytics
- 🌐 **Internationalization**: Multi-language support ready
- 🚀 **Production Ready**: Scalable architecture with best practices

---

## 🛠️ Tech Stack

<table>
<tr>
<td align="center" width="96">
<img src="https://skillicons.dev/icons?i=nextjs" width="48" height="48" alt="Next.js" />
<br>Next.js 15
</td>
<td align="center" width="96">
<img src="https://skillicons.dev/icons?i=typescript" width="48" height="48" alt="TypeScript" />
<br>TypeScript
</td>
<td align="center" width="96">
<img src="https://skillicons.dev/icons?i=react" width="48" height="48" alt="React" />
<br>React 18
</td>
<td align="center" width="96">
<img src="https://skillicons.dev/icons?i=tailwind" width="48" height="48" alt="Tailwind" />
<br>Tailwind CSS
</td>
<td align="center" width="96">
<img src="https://avatars.githubusercontent.com/u/49538330?s=200&v=4" width="48" height="48" alt="Clerk" />
<br>Clerk
</td>
</tr>
</table>

### Architecture

- **Frontend**: Next.js 15 with App Router
- **Authentication**: Clerk for user management
- **Styling**: Tailwind CSS with custom components
- **Type Safety**: TypeScript throughout
- **State Management**: React hooks and Clerk's built-in state
- **Deployment**: Vercel (recommended) or any Node.js hosting

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn
- A Clerk account ([sign up here](https://clerk.com))

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/JScoder4005/Next-auth.git
   cd Next-auth
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env.local
   ```

   Add your Clerk keys to `.env.local`:

   ```env
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_your_key_here
   CLERK_SECRET_KEY=sk_test_your_key_here

   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
   NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/dashboard
   NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/dashboard
   ```

4. **Run the development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

```
src/
├── app/                          # Next.js App Router
│   ├── (auth)/                  # Auth route group
│   │   ├── sign-in/[[...sign-in]]/page.tsx
│   │   └── sign-up/[[...sign-up]]/page.tsx
│   ├── dashboard/page.tsx       # Protected dashboard
│   ├── layout.tsx              # Root layout
│   ├── page.tsx               # Landing page
│   └── globals.css           # Global styles
├── components/               # Shared components
│   ├── ui/                  # UI primitives
│   │   └── card.tsx
│   └── layout/             # Layout components
│       ├── navbar.tsx
│       └── main-layout.tsx
├── features/              # Feature-based modules
│   ├── auth/             # Authentication features
│   │   └── components/
│   ├── dashboard/       # Dashboard features
│   │   └── components/
│   └── landing/        # Landing page features
│       └── components/
├── lib/                # Utilities and configurations
└── middleware.ts      # Route protection middleware
```

---

## 🎨 Screenshots

<div align="center">

### 🌅 Landing Page

![Landing Page](https://via.placeholder.com/800x400/4F46E5/FFFFFF?text=Beautiful+Landing+Page)

### 🔐 Authentication

<table>
<tr>
<td width="50%">

**Sign In**
![Sign In](https://via.placeholder.com/400x500/3B82F6/FFFFFF?text=Sign+In+Page)

</td>
<td width="50%">

**Sign Up**
![Sign Up](https://via.placeholder.com/400x500/10B981/FFFFFF?text=Sign+Up+Page)

</td>
</tr>
</table>

### 📊 Dashboard

![Dashboard](https://via.placeholder.com/800x400/8B5CF6/FFFFFF?text=User+Dashboard)

</div>

---

## ⚙️ Configuration

### Clerk Setup

1. **Create a Clerk Application**

   - Go to [Clerk Dashboard](https://dashboard.clerk.com)
   - Create a new application
   - Choose your preferred sign-in methods

2. **Configure Authentication**

   ```typescript
   // Example: Enable social providers
   const clerkConfig = {
     socialProviders: ["google", "github", "apple"],
     enableMFA: true,
     sessionTimeout: "7d",
   };
   ```

3. **Customize Appearance**
   ```typescript
   // Custom theme example
   const appearance = {
     elements: {
       formButtonPrimary: "bg-blue-600 hover:bg-blue-700",
       card: "shadow-2xl rounded-2xl",
     },
   };
   ```

### Environment Variables

| Variable                                          | Description           | Required |
| ------------------------------------------------- | --------------------- | -------- |
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`               | Clerk publishable key | ✅       |
| `CLERK_SECRET_KEY`                                | Clerk secret key      | ✅       |
| `NEXT_PUBLIC_CLERK_SIGN_IN_URL`                   | Sign-in page URL      | ✅       |
| `NEXT_PUBLIC_CLERK_SIGN_UP_URL`                   | Sign-up page URL      | ✅       |
| `NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL` | Post sign-in redirect | ✅       |
| `NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL` | Post sign-up redirect | ✅       |

---

## 🎨 Customization

### Theming

The app supports extensive theming options:

```typescript
// Custom theme examples
export const themes = {
  corporate: {
    primary: "#1e40af",
    background: "#ffffff",
    text: "#1f2937",
  },
  neon: {
    primary: "#00ffff",
    background: "#000000",
    text: "#ffffff",
  },
  minimal: {
    primary: "#000000",
    background: "#ffffff",
    text: "#374151",
  },
};
```

### Component Styling

```typescript
// Example: Custom sign-in component
<SignIn
  appearance={{
    elements: {
      card: "backdrop-blur-md bg-white/20 rounded-2xl",
      formButtonPrimary: "bg-gradient-to-r from-purple-500 to-pink-500",
    },
  }}
/>
```

### Adding New Features

1. Create feature folder in `src/features/`
2. Add components in `components/` subdirectory
3. Export from feature index
4. Import in your pages

---

## 🚀 Deployment

### Vercel (Recommended)

1. **Deploy to Vercel**

   ```bash
   npx vercel
   ```

2. **Add environment variables** in Vercel dashboard

3. **Configure domains** and SSL

### Other Platforms

<details>
<summary>Netlify</summary>

```bash
npm run build
npm run export
# Deploy dist folder to Netlify
```

</details>

<details>
<summary>Docker</summary>

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

</details>

---

## 📖 Usage Examples

### Basic Authentication Check

```typescript
import { auth } from "@clerk/nextjs/server";

export default async function ProtectedPage() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  return <div>Protected content</div>;
}
```

### User Information

```typescript
import { useUser } from "@clerk/nextjs";

export function UserProfile() {
  const { user } = useUser();

  return (
    <div>
      <h1>Welcome, {user?.firstName}!</h1>
      <p>{user?.emailAddresses[0]?.emailAddress}</p>
    </div>
  );
}
```

### Custom Sign Out

```typescript
import { useClerk } from "@clerk/nextjs";

export function SignOutButton() {
  const { signOut } = useClerk();

  return <button onClick={() => signOut()}>Sign Out</button>;
}
```

---

## 🧪 Testing

Run the test suite:

```bash
# Unit tests
npm run test

# E2E tests
npm run test:e2e

# Test coverage
npm run test:coverage
```

---

## 🤝 Contributing

We love contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Setup

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes
4. Run tests: `npm test`
5. Commit: `git commit -m 'Add amazing feature'`
6. Push: `git push origin feature/amazing-feature`
7. Open a Pull Request

### Code Style

- Use TypeScript for all new code
- Follow the existing code style
- Add tests for new features
- Update documentation as needed

---

## 📋 Roadmap

- [ ] 🌐 Internationalization (i18n)
- [ ] 📱 React Native version
- [ ] 🔐 Advanced MFA options
- [ ] 📊 Analytics dashboard
- [ ] 🎨 More theme presets
- [ ] 🤖 AI-powered user insights
- [ ] 🔗 Social login providers expansion
- [ ] 📧 Advanced email templates

---

## 🙏 Acknowledgments

- [Clerk](https://clerk.com) for the amazing authentication platform
- [Next.js](https://nextjs.org) team for the incredible framework
- [Tailwind CSS](https://tailwindcss.com) for the utility-first CSS framework
- [Vercel](https://vercel.com) for the deployment platform

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🆘 Support

- 📧 Email: [itsmeeleven.1@gmail.com](mailto:your-email@example.com)
- 🐛 Issues: [GitHub Issues](https://github.com/JScoder4005/Next-auth/issues)
- 📖 Docs: [Clerk Documentation](https://clerk.com/docs)

---

<div align="center">

**⭐ If you found this project helpful, please give it a star!**

Made with ❤️ by [JScoder4005](https://github.com/JScoder4005)

[⬆ Back to Top](#-next-auth-with-clerk)

</div>
