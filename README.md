# 🥗 NutriPulse — AI Nutrition & Calorie Tracker

> **Shortcut Context File**: You can reference this anytime by typing `@nutripulse` or `@nutripulse.md`.

---

## 📌 Project Overview
- **Name**: **NutriPulse**
- **Local Directory**: [`/home/samrat/nutripulse/`](file:///home/samrat/nutripulse/)
- **Local Preview Server**: [http://localhost:5070/](http://localhost:5070/)
- **Sync Bridge API**: `http://localhost:5052/api/sync`
- **GitHub Target**: `git@github.com:Banjade049/nutripulse.git`
- **GitHub Pages Target**: `https://Banjade049.github.io/nutripulse/`

---

## 🌟 Key Features
1. **🍎 Apple Health Style Animated Rings**:
   - Calorie Ring (Coral `#f43f5e`)
   - Protein Ring (Electric Cyan `#06b6d4`)
   - Carbs Ring (Neon Green `#22c55e`)
   - Fat Bar (Gold `#f59e0b`)
2. **🇳🇵 Extensive Nepali Food Library (40+ items)**:
   - Dal Bhat Tarkari (standard & chicken masu)
   - Chicken/Buff/Veg Momo (Steamed & C-Momo)
   - Chowmein, Sukha Roti, Puri Tarkari, Samosa, Sel Roti
   - Doodh Chiya & Kalo Chiya
   - Newari Khaja Set, Bhatmas Sadeko, Chana Boiled, Dahi
3. **🏋️ Fitness Staples**:
   - Boiled Eggs (1x, 2x), Omelette, Chicken Breast (100g, 200g grilled)
   - Whey Protein, Paneer, Oats with Milk, Peanut Butter, White/Brown Rice, Fruits
4. **🤖 Hybrid AI Nutritionist**:
   - Dynamic live advice card: remaining calories, protein shortfall alert, dinner recommendation.
   - Interactive Chat Drawer: answers queries (*"Aja dinner ma k kham?"*, *"Protein kasari pura garne?"*).
5. **🔄 No-Premium MyFitnessPal Sync**:
   - Uses active Zen Browser session cookies from `/home/samrat/.config/zen/*release*/cookies.sqlite`.
   - Queues meals on phone; 1-click sync pushes entries into your real MyFitnessPal account without paying for Premium.
6. **⚙️ Profile & TDEE Calculator**:
   - Height, Weight, Age, Activity level, and Goal (Cut / Maintain / Bulk) recalculate daily targets dynamically using Mifflin-St Jeor formula.

---

## 📁 Key Files
- [`index.html`](file:///home/samrat/nutripulse/index.html) — Core single-page PWA application
- [`mfp_sync.py`](file:///home/samrat/nutripulse/mfp_sync.py) — Python sync bridge & Zen cookie parser
- [`sw.js`](file:///home/samrat/nutripulse/sw.js) — Service worker for offline use
- [`manifest.json`](file:///home/samrat/nutripulse/manifest.json) — PWA manifest
- [`apple-touch-icon.png`](file:///home/samrat/nutripulse/apple-touch-icon.png) — iOS Home Screen icon
