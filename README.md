# ⚡ CircuitMind AI

**CircuitMind AI** is a premium, AI-powered assistant and circuit generator built for electrical and electronic engineering (EEE), robotics, and IoT students. It allows students and makers to design circuits, optimize embedded source code, explore detailed component libraries, and build projects in seconds using native AI integration.

---

## 🌟 Key Features

*   **Custom Schematic Vector Branding**: Recreated and designed vector schematics as clean logo elements integrated natively in dark and light modes.
*   **🌓 Dark / Light Theme Toggle**: Seamless interface toggling between dark-first and light modes, with theme preferences saved in `localStorage` and page flash prevention.
*   **⬆️ Scroll to Top Option**: A sleek, floating circular back-to-top button that fades in automatically when scrolling.
*   **🤖 Native Gemini AI Integration**: Connected directly to the Google Gemini API to generate pin layouts, Arduino code, wiring schematics, and BOMs in real-time.
*   **📄 High-Quality Vector PDF Exports**: Complete markdown compile utility that turns AI assistant chats, schematic outputs, and templates into clean, printable vector PDF files.
*   **🛠️ Developer Bypass Auth**: Integrated authentication bypass mode allowing instant local and production exploration without active database sessions.
*   **👤 Editable Student Profiles**: Customizable user metadata fields (Display Name, Field of Study, Bio, Favorite MCU) saved to Supabase auth logs and falling back to `localStorage`.

---

## 🛠️ Technology Stack

*   **Framework**: [TanStack Start](https://tanstack.com/router/v1/docs/start/overview) (React, Vite, Nitro Server-Side Rendering)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
*   **Database & Auth**: [Supabase](https://supabase.com/)
*   **AI Engine**: [Google Gemini API](https://ai.google.dev/)
*   **Component Styling**: [Shadcn UI](https://ui.shadcn.com/) & Radix Primitives

---

## 💻 Getting Started Locally

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed (v18+ recommended).

### 2. Clone the Repository
```bash
git clone https://github.com/dev-ahanaf/circuitmind-ai.git
cd circuitmind-ai
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Configure Environment Variables
Create a `.env` file in the root directory:
```env
# Supabase Configuration
VITE_SUPABASE_URL="https://eqysjuqfkgemrrpbdgjh.supabase.co"
VITE_SUPABASE_PUBLISHABLE_KEY="your_supabase_anon_key"

# Google Gemini API
GEMINI_API_KEY="your_google_gemini_api_key"
```

### 5. Run the Local Development Server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:8080`.

### 6. Build for Production
```bash
npm run build
```

---

## 🚀 Deploying to Vercel

Since the project uses TanStack Start, it builds as a full SSR application. Vercel will automatically detect the build parameters.

1. Go to your **Vercel Settings ➜ Environment Variables**.
2. Add the following environment keys:
    *   `VITE_SUPABASE_URL` ➜ `https://eqysjuqfkgemrrpbdgjh.supabase.co`
    *   `VITE_SUPABASE_PUBLISHABLE_KEY` ➜ `your_supabase_anon_key`
    *   `GEMINI_API_KEY` ➜ `your_google_gemini_api_key`
3. Trigger a **Redeploy** on the Vercel dashboard.

---

## 👤 Credits

*   Developed by **[Ahanaf](https://github.com/dev-ahanaf)**
*   Built for engineering students and electronics enthusiasts.

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
