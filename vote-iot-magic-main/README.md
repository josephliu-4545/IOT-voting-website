# Smart Vote Hub

Readme 
# IoT Vote — Smart Voting Platform

A real-time IoT voting website built with **Vite + React**. Connect IoT devices, cast votes, and monitor results through live analytics.

---

## 🚀 Getting Started

```bash

npm install      # Install dependencies

npm run dev      # Start dev server → http://localhost:5173

npm run build    # Production build

npm run preview  # Preview production build locally

```

---

## 📦 Libraries

| Library | Purpose |

|---|---|

| `react-router-dom` | Multi-page navigation |

| `axios` | HTTP / API calls to IoT backend |

| `recharts` | Charts & data visualization |

---

## 📁 Folder Structure

```

IOT frontend/

├── index.html            ← Single HTML page React mounts into

├── package.json          ← Dependencies & npm scripts

├── vite.config.js        ← Vite build settings

├── .gitignore            ← Files excluded from Git

│

├── public/               ← Static assets served as-is (favicons, etc.)

│

└── src/                  ← ⭐ Main working directory

    ├── main.jsx          ← App entry point – mounts React into index.html

    ├── index.css         ← Global styles & design tokens (colors, fonts, spacing)

    ├── App.jsx           ← Root component: Router + Navbar + Footer layout

    ├── App.css           ← Styles for Navbar, Hero, Cards, Footer

    │

    ├── components/       ← Reusable UI pieces used across multiple pages

    │   ├── Navbar.jsx    ← Top navigation bar

    │   └── Footer.jsx    ← Bottom footer

    │

    ├── pages/            ← One file per screen/route in the app

    │   └── Home.jsx      ← Homepage (Hero + Stats + Features)

    │

    └── assets/           ← Images, SVGs, icons bundled by Vite

```

### Key Rule

- **`components/`** → reusable pieces (navbar, buttons, cards — used on many pages)

- **`pages/`** → full screens (Home, Dashboard, Login — one per route)

- **`index.css`** → global rules & design tokens

- **`App.css`** → styles tied to specific components

---

## 🎨 Design

- **Color palette**: Indigo primary (`#4f63ff`) + teal accent (`#00c896`)

- **Typography**: Inter (Google Fonts)

- **Features**: Glassmorphism navbar, animated hero, hover-lift cards, fully responsive

---

## 🔗 Repository

[https://github.com/josephliu-4545/IOT-voting-website](https://github.com/josephliu-4545/IOT-voting-website)

ဒီပထမပုံနဲ့ ဒုတိယပုံကအတူတူပါပဲ ပထမပုံမှာက innovation, design, functionality, impoct တွေပါတယ် အာ့ထဲမှာပါတဲ့ drop down လေးကိုဆွဲချလိုက်ရင် ဒုတိယပုံကလို group လေးတွေပေါ်မယ် အာ့တာကို အကုန်ထည့်ပေးပါ innovation, design, functionality, impoct အကုန်လုံးမှာ drop down ဆွဲရင် group ပေါ်အောင်ထည့်ပေးပါ logo ကိုလဲအခုပေးထားတဲ့ logo သုံးပေးပါဘcolor code ကို #0E5A8E သုံးပေးပါသူပေးထားတဲ့အတိုင်းအတိအကျရေးပေးပါ ရေးရမဲ့ language က react, နဲ့ tailwind css သုံးပီးရေးပေးပါ
ဒီ ပေးထားတဲ့ zip file က backend file လို့သိရတယ် အာ့တာနဲ့ချိတ်ပီးတော့ရေးပေးပါ 

Readme ကပါတဲ့ description လေးတွေပါဖတ်ပီးရေးပေးပါ

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/d968c102-18d2-4804-a81e-fb0c6f9bb7d9).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
