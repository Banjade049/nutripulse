# 🥗 NutriPulse — AI Nutrition & Calorie Tracker

> **Shortcut Context File**: Reference this anytime by typing `@nutripulse` or `@nutripulse.md`.

---

## 📌 Project Overview
- **Name**: **NutriPulse**
- **Local Directory**: [`/home/samrat/nutripulse/`](file:///home/samrat/nutripulse/)
- **Local Preview Server**: [http://localhost:5070/](http://localhost:5070/)
- **Mobile Wi-Fi Preview**: `http://192.168.1.127:5070/`
- **Sync Bridge API**: `http://localhost:5052/api/sync` (Status: `http://localhost:5052/api/status`)
- **GitHub Target**: `git@github.com:Banjade049/nutripulse.git`
- **GitHub Pages Target**: `https://Banjade049.github.io/nutripulse/`

---

## 🌟 Key Features
1. **🍎 Apple Health Style Concentric Macro Rings**:
   - Calorie Outer Ring (Coral `#f43f5e`)
   - Protein Middle Ring (Electric Cyan `#06b6d4`)
   - Carbs Inner Ring (Neon Green `#22c55e`)
   - Fat Bar (Gold `#f59e0b`)
2. **📅 Date Navigator**:
   - Seamlessly switch between dates (`‹ Previous Day | Today | Next Day ›`)
   - View history and past logs without losing data
3. **💧 Water Hydration Tracker**:
   - Real-time hydration progress bar towards daily goal (e.g. 2,500 ml)
   - Quick log buttons: `+250ml 🥛`, `+500ml 🍶`, `-250ml`, and reset
4. **🇳🇵 45+ Authentic Nepali & Fitness Food Database**:
   - **Nepali Staples**: Dal Bhat Tarkari, Dal Bhat + Chicken Masu, Khasi ko Masu, Buff Curry, Fish Curry, Steamed/C-Momo, Chowmein, Sukha Roti, Roti with Ghee, Puri Tarkari, Samosa, Sel Roti, Doodh/Kalo Chiya, Khaja Set, Bhatmas Sadeko, Boiled Chana, Dahi, Sukuti Sadeko, Kwati, Khichdi, Aalu Dum.
   - **High-Protein Staples**: Boiled Eggs (1x, 2x), Omelette, Chicken Breast (100g, 200g), Whey Protein, Paneer, Soya Chunks, Greek Yogurt, Canned Tuna, Oats with Milk, Peanut Butter, Bananas, Apples, Almonds, Rice.
5. **✏️ Custom Food Creator & ⚡ Quick Add**:
   - Custom Food Creator: Save user's own recipes/dishes with custom macros and portion size.
   - Quick Add: Direct manual calorie/protein/carbs/fat logger without needing to name a recipe.
6. **🤖 Supercharged AI Nutrition Coach**:
   - Dynamic live advice card tailored to remaining calories & protein shortfall.
   - Natural Language Logging: type *"Add 2 boiled eggs to breakfast"* or *"Log chicken momo for dinner"*, and the AI logs it directly into your diary!
   - Optional Google Gemini API key support in Profile Settings.
7. **🔄 No-Premium MyFitnessPal Sync**:
   - Reads active Zen Browser session cookies from `/home/samrat/.config/zen/*release*/cookies.sqlite`.
   - Queues meals on phone; 1-click sync pushes entries into your real MyFitnessPal account without paying for Premium.
8. **⚙️ Profile & TDEE Calculator**:
   - Calculates daily calorie & macro targets dynamically using Mifflin-St Jeor formula (Cut / Maintain / Bulk).

---

## 📁 Key Files
- [`index.html`](file:///home/samrat/nutripulse/index.html) — Core single-page PWA application
- [`mfp_sync.py`](file:///home/samrat/nutripulse/mfp_sync.py) — Python sync bridge & Zen cookie parser
- [`sw.js`](file:///home/samrat/nutripulse/sw.js) — Service worker (v2) for offline use
- [`manifest.json`](file:///home/samrat/nutripulse/manifest.json) — PWA manifest
- [`apple-touch-icon.png`](file:///home/samrat/nutripulse/apple-touch-icon.png) — iOS Home Screen icon
