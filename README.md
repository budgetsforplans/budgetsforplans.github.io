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
   - Six value propositions covering plans, insights, reporting, sync, and iPad

3. **On-Device Intelligence**
   - ML features such as digest insights, anomaly detection, and NLP auto-tagging

4. **iPad Features**
   - Split view layouts, multi-window, drag & drop, keyboard shortcuts, and calendar heat map

5. **User Scenarios**
   - Five real-world stories showing budgeting, reporting, travel, iPad workflows, and family planning

6. **Complete Features List**
   - **Core Features** (Free):
     - Plans & Budgets
     - Entries & Tags
     - Charts & Metrics
     - Search & Filters
     - CSV Import/Export (including bulk import)
     - Multi-currency plan settings
     - Billing day tracking
     - Archive plans
   - **On-Device Intelligence**:
     - Digest insights, NLP auto-tagging, and anomaly detection (tier-dependent)
   - **Insights & Goals** (One-time purchase):
     - Smart Cashflow & Bill Guard
     - Insights Feed
     - Goals & Milestones
     - Budget thresholds and monthly limits
   - **Reporting** (Subscription):
     - Balance sheet reports
     - PDF & Excel exports
     - Filters and custom branding
   - **Advanced Tools** (Subscription):
     - Card aliases
     - Recurring expenses
     - FX entry & currency breakdown
     - Auto-tagging rules + NLP suggestions
     - Trends dashboard
     - Smart alerts & digests
   - **Privacy & Security**:
     - Biometric protection
     - Diagnostics center
   - **Sync & Platforms**:
     - CloudKit sync
     - Apple Watch app
     - Home screen widgets

7. **Premium Features**
   - Insights & Goals (one-time)
   - Reporting (subscription)
   - Advanced Tools (subscription)
   - All Features Lifetime (one-time, Family Sharing eligible)

8. **Technical Highlights**
   - NaturalLanguage, Core Data + CloudKit, Swift Concurrency, SwiftUI + Observation, WidgetKit, StoreKit 2

9. **Download Section**
   - Feature checklist, requirements, App Store badge

10. **Privacy**
   - On-device ML with optional iCloud sync

11. **Footer**
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
    --primary-color: #007AFF;     /* Main brand color */
    --secondary-color: #5856D6;   /* Accent color */
    --success-color: #34C759;     /* Success states */
    --warning-color: #FF9500;     /* Warnings */
    --error-color: #FF3B30;       /* Errors */
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
5. **Jordan**: Sync, widgets, and secure access

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
