# ⚡ CircuitMind AI

**CircuitMind AI** is an advanced, AI-powered EDA workspace and schematic generator designed for Electrical and Electronic Engineering (EEE), robotics, and IoT students. It enables users to describe a project idea and instantly get complete wiring connections, Arduino/MCU starter code, a Bill of Materials (BOM), step-by-step assembly guides, and interactive visual schematic previews.

---

## 🌟 Key Features

*   **🤖 Multi-LLM API Gateway**: Connected to **Google Gemini** (1.5/2.0/2.5) with fallbacks to **Groq API** (Llama 3.3 70B) to guarantee high-speed, reliable generation.
*   **🔌 Interactive Schematic Workspace**: Renders real-time visual circuit diagrams in a dedicated CAD-like canvas interface matching your designed components and connections.
*   **🌓 Sleek Dark & Light Themes**: Tailored theme config utilizing native Tailwind CSS styling with theme preferences saved locally to prevent screen flash.
*   **📄 Professional PDF Reports**: Compile and export complete project writeups (code, connections, safety tips, BOM, and overview) into clean, printable vector PDF files.
*   **🛠️ Developer Bypass Auth**: Integrated sandbox login bypass mode to explore all features instantly without requiring database sessions in local development.
*   **👤 Student Profiles**: Custom student metadata fields (Display Name, Field of Study, Bio, Favorite MCU) saved securely to Supabase.
*   **🔄 BOM Cost & Power Optimizer**: Analyze your Bill of Materials to suggest lower-cost alternative parts, lower-power configurations, and cleaner wire routings.

---

## 🛠️ Technology Stack

*   **Framework**: [TanStack Start](https://tanstack.com/router/v1/docs/start/overview) (React 19, Vite, Nitro Server-Side Rendering)
*   **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
*   **Database & Auth**: [Supabase](https://supabase.com/)
*   **Build Preset**: [Nitro](https://nitro.build/) configured with the `vercel` preset for zero-config edge routing
*   **UI Components**: [Shadcn UI](https://ui.shadcn.com/) & Radix Primitives

---

## 💻 Getting Started Locally

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed (v20+ recommended) and `npm` or `bun`.

### 2. Clone the Repository
```bash
git clone https://github.com/dev-ahanaf/circuitmind-ai.git
cd circuitmind-ai
```

### 3. Install Dependencies
```bash
npm install
# or if you prefer bun
bun install
```

### 4. Configure Environment Variables
Create a `.env` file in the root directory and add the following keys:

```env
# Supabase Database Credentials
SUPABASE_PROJECT_ID="icemznltmednczaivlcr"
SUPABASE_PUBLISHABLE_KEY="your_supabase_anon_key"
SUPABASE_URL="https://icemznltmednczaivlcr.supabase.co"
VITE_SUPABASE_PROJECT_ID="icemznltmednczaivlcr"
VITE_SUPABASE_PUBLISHABLE_KEY="your_supabase_anon_key"
VITE_SUPABASE_URL="https://icemznltmednczaivlcr.supabase.co"

# AI Model APIs (Setup at least one key for live generation)
GEMINI_API_KEY="your_google_gemini_api_key"
GROQ_API_KEY="your_groq_api_key"
```

### 5. Run the Local Development Server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:3000`.

### 6. Build for Production
```bash
npm run build
```

---

## 🗄️ Supabase Configuration & Migrations

If you are setting up your own Supabase project:

### 1. Link and Apply Migrations
Make sure you have the Supabase CLI installed, then link and push the database schemas:
```bash
npx supabase login
npx supabase link --project-ref your_project_id
npx supabase db push
```

### 2. Enable Google Sign-In
To enable Google Login on your new Supabase project:
1. Open the [Supabase Auth Providers Console](https://supabase.com/dashboard/project/your_project_id/auth/providers).
2. Expand the **Google** provider and toggle it **ON**.
3. Create OAuth Client Credentials in the [Google Cloud Console](https://console.cloud.google.com/) as a **Web application**.
4. Add the redirect URI (copied from Supabase settings page) to Google's **Authorized Redirect URIs** list.
5. Copy your Google **Client ID** and **Client Secret** back to Supabase settings and click **Save**.

---

## 🚀 Deploying to Vercel

Since the project uses TanStack Start, it builds as a full Server-Side Rendered (SSR) application. The `vite.config.ts` compiles the application using the Nitro `vercel` preset.

1. Go to your **Vercel Settings ➜ Environment Variables**.
2. Add the following environment keys:
    *   `VITE_SUPABASE_URL` ➜ `https://icemznltmednczaivlcr.supabase.co`
    *   `VITE_SUPABASE_PUBLISHABLE_KEY` ➜ `your_supabase_anon_key`
    *   `GEMINI_API_KEY` ➜ `your_google_gemini_api_key`
    *   `GROQ_API_KEY` ➜ `your_groq_api_key`
3. Trigger a **Redeploy** on the Vercel dashboard.

---

## 👤 Credits

*   Developed by **[Ahanaf](https://github.com/dev-ahanaf)**
*   Built for engineering students and electronics enthusiasts.

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
