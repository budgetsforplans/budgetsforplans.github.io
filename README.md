# Budgets For Plans GitHub Pages Website

This folder contains a complete static website for the Budgets For Plans iOS app, designed to be hosted on GitHub Pages.

## 📁 Contents

- **index.html** - Main website with all content, features, and user scenario
- **styles.css** - Complete styling with responsive design
- **script.js** - JavaScript for smooth scrolling and animations
- **README.md** - This file

## 🎨 Features of the Website

### Sections Included:

1. **Hero Section**
   - App positioning and primary call-to-action
   - Main dashboard screenshot

2. **Overview**
   - Value propositions covering plans, insights, reporting, sync and sharing, iPad, Siri, and privacy

3. **Guided Setup** (`#setup`)
   - Household, freelancer, travel, project, student, and custom setup paths
   - Template-aware plan avatars, starter categories, monthly budget suggestions, currency, and billing day

4. **On-Device Intelligence**
   - ML features such as digest insights, anomaly detection, and NLP auto-tagging

5. **iPad Features**
   - Adaptive sidebar layouts, equal-width landscape detail columns, multi-window, drag & drop, keyboard shortcuts, and calendar heat map

6. **User Scenarios**
   - Five real-world stories showing budgeting, reporting, travel, iPad workflows, and shared family planning

7. **Loans & Deposits** (`#loans`)
   - Mortgages, car loans, and fixed deposits tracked beside budget plans
   - Projections, amortization schedule, mortgage rate changes, tracked payments, what-if, and PDF report
   - Type grouping and the filter dock that appears once a list holds more than one kind

8. **Advanced Planning** (`#planning`)
   - Scenario Planner and Budget & Goal Health, each with an expandable walkthrough

9. **Complete Features List**
   - **Core Features** (Free):
     - Plans & Budgets
     - Mortgages, car loans, and fixed deposits with projections and status
     - Amortization schedule with mortgage rate changes
     - Tracked loan payments compared against the estimated schedule
     - Loan and deposit what-if comparisons
     - Financial item report with PDF export
     - Template-aware plan avatars and starter categories
     - Full plan report — every section, any period, free to read
     - Report scope controls (all time / 3 / 6 / 12 months / custom, category filter, household combine)
     - Entries & Tags
     - Quick Add one-line entry parsing
     - Category suggestion chips
     - Charts & Metrics
     - Search & Filters
     - CSV Import/Export (including bulk import)
     - Backup & restore (whole-plan file, with a review step before import)
     - Multi-currency plan settings
     - Billing day tracking
     - Archive plans
     - Siri & Shortcuts (five voice actions)
   - **On-Device Intelligence**:
     - Digest insights, NLP auto-tagging, and anomaly detection (tier-dependent)
   - **Insights & Goals** (One-time purchase):
     - Smart Cashflow & Bill Guard
     - Insights Feed
     - Goals & Milestones
     - Budget thresholds and monthly limits
   - **Report Exports** (Subscription):
     - Exports the period already on screen — the document cannot disagree with the report
     - PDF reports, balance sheet reports, Excel workbooks, and CSV
     - Filters and custom branding
     - Note: reading the report itself is free; this tier is only the export
   - **Advanced Tools** (Subscription):
     - Card aliases
     - Recurring expenses
     - Receipt scanning (single & batch, on-device OCR)
     - Bulk entry parser
     - FX entry & currency breakdown
     - Auto-tagging rules + NLP suggestions
     - Trends dashboard
     - Smart alerts & digests (inbox with per-digest and bulk delete)
     - Daily logging reminder
     - Scenario planner
     - Budget & goal health summaries
   - **Privacy & Security**:
     - Biometric protection
     - Diagnostics center
   - **Sync & Platforms**:
     - CloudKit sync and plan sharing
     - Apple Watch app
     - Home screen widgets for balances, budget progress, transactions, trends, categories, and a large plan calendar

9. **Premium Features**
   - Insights & Goals (one-time)
   - Reporting (subscription)
   - Advanced Tools (subscription)
   - All Features Lifetime (one-time, Family Sharing eligible)

10. **Technical Highlights**
   - NaturalLanguage, Core Data + CloudKit, Swift Concurrency, SwiftUI + Observation, WidgetKit, StoreKit 2

11. **Download Section**
   - Feature checklist, requirements, App Store badge

12. **Privacy**
   - On-device ML with optional iCloud sync and plan sharing through Apple's native CloudKit controls

13. **Footer**
   - Navigation and support links

## 📸 Screenshots and Images

All screenshots live in `ghpage/images`. Replace them with updated captures as the app evolves.

### Key Assets:

1. **Hero**: `screenshot-hero-dashboard.png`
2. **Scenarios**: `scenario-*.png` (Sarah, Maya, Leo, Alex, Jordan stories)
3. **Features**: `feature-*.png` (entries, charts, insights, reporting, alerts, etc.)
4. **iPad**: `ipad-*.png` (split view, charts, drag & drop, multi-window)
5. **Branding**: `app-icon.png`

## 🚀 Deployment to GitHub Pages

### Option 1: Repository Root

1. Move files to root of your repository
2. Go to repository Settings → Pages
3. Select "Deploy from a branch"
4. Choose "main" branch and "/ (root)"
5. Save

### Option 2: Docs Folder

1. Rename `ghpage` folder to `docs`
2. Move to repository root
3. Go to repository Settings → Pages
4. Select "Deploy from a branch"
5. Choose "main" branch and "/docs"
6. Save

### Option 3: Keep as ghpage Folder

1. Go to repository Settings → Pages
2. Select "Deploy from a branch"
3. Choose "main" branch and "/ghpage"
4. Save

Your site will be available at: `https://[username].github.io/[repository-name]/`

## 🎨 Customization Guide

### Colors

Edit the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #0EA5E9;     /* Main brand color */
    --secondary-color: #14B8A6;   /* Accent color */
    --success-color: #22C55E;     /* Success states */
    --warning-color: #F97316;     /* Warnings */
    --error-color: #EF4444;       /* Errors */
}
```

### Typography

Change the font family:

```css
:root {
    --font-primary: system-ui, -apple-system, 'Segoe UI', ...;
}
```

### Updating Screenshots

1. Replace assets in `ghpage/images`
2. Update the corresponding `img` tags in `ghpage/index.html` to point at the new filenames and alt text

### Updating Premium Pricing

Pricing is set in App Store Connect and varies by region. If you choose to show pricing on the website, update the values in `ghpage/index.html` to match the current StoreKit display prices.

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (< 768px)

## ✨ Interactive Features

The website includes:
- Smooth scroll navigation
- Fade-in animations on scroll
- Hover effects on cards and buttons
- Scroll progress indicator
- Mobile menu (automatically appears on small screens)
- Sticky navigation bar

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS Grid and Flexbox
- **Vanilla JavaScript** - No dependencies required
- **CSS Variables** - Easy customization
- **Intersection Observer API** - Scroll animations

## 📝 Content Structure

### User Scenarios

The scenarios demonstrate:
1. **Sarah**: Annual budgeting, entries, insights, and goals
2. **Maya**: Reporting exports, filters, and branded PDFs
3. **Leo**: Travel with FX entries, auto-tagging, and trends
4. **Alex**: iPad workflows, drag & drop, and multi-window
5. **Jordan**: Sync, shared household plans, widgets, and secure access

This structure helps potential users visualize how the app adapts to different needs.

### Feature Documentation

Features are organized by:
- **Category** (Core, Premium, Security, etc.)
- **Icon** for visual recognition
- **Title** and description
- **Screenshot** for visual proof

## 🎯 Best Practices Implemented

1. **SEO-friendly** semantic HTML
2. **Accessibility** considerations (alt text, labels, etc.)
3. **Performance** optimized (no heavy frameworks)
4. **Mobile-first** responsive design
5. **Clean code** with comments
6. **Modern design** following Apple HIG principles

## 📄 License

This website template is part of the Budgets For Plans project.

## 🤝 Contributing

To update the website:

1. Edit `index.html` for content changes
2. Edit `styles.css` for design changes
3. Edit `script.js` for functionality changes
4. Test locally by opening `index.html` in a browser
5. Commit and push to see changes on GitHub Pages

## 📞 Support

For questions about the website or Budgets For Plans app, please refer to the main repository documentation.

---

**Ready to publish?** Just deploy to GitHub Pages and share your app with the world! 🚀
