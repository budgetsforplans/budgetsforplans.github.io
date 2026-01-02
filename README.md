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
   - Eye-catching introduction with call-to-action buttons
   - Screenshot placeholder for main app interface

2. **Overview**
   - Four key value propositions of Budgets For Plans
   - Visual cards highlighting main benefits

3. **User Scenario: "Meet Sarah"**
   - Complete 7-step walkthrough showing real-world usage
   - Demonstrates how a user manages finances with Budgets For Plans
   - Includes:
     - Creating a budget
     - Adding income and expenses
     - Setting savings goals
     - Tracking daily spending
     - Using charts and insights
     - Exporting reports
     - Managing multiple credit cards with Card Aliases
   - Results section showing Sarah's achievements

4. **Complete Features List**
   - **Core Features** (Free):
     - Plans & Budgets
     - Income & Expense Tracking
     - Smart Tags
     - Visual Charts
     - Entry Search
     - CSV Export
     - Data Import (including bulk import)
     - Multi-Currency Support
     - Card Billing Day
     - Archive Plans

   - **Privacy & Security**:
     - Biometric Protection (Face ID/Touch ID)
     - CloudKit Sync
     - Diagnostics Center

   - **Additional Platforms**:
     - Apple Watch App
     - Home Screen Widgets

5. **Premium Features**
   - **Insights & Goals** (One-time purchase):
     - Smart Cashflow & Bill Guard
     - Insights Feed
     - Goal Progress Tracking

   - **Reporting** (Subscription):
     - PDF Reports with custom branding
     - Excel Exports
     - Export Filters (date range, tags)
     - Custom header/footer images

   - **Advanced Tools** (Subscription):
     - Card Aliases - Track expenses by specific credit cards
     - Recurring Expenses - Create repeating bills with edit-all-future control
     - FX Conversion - Convert exports into another currency with a manual rate
     - Due by Card Summary - See totals owed on each card
     - Budget Notifications - Alerts for spending limits
     - Automation Hooks - Scheduled workflows for plan updates

   - **All Features Lifetime** (One-time purchase):
     - Unlocks Insights & Goals, Reporting, and Advanced Tools

6. **Download Section**
   - Call-to-action with feature checklist
   - App requirements
   - App Store badge placeholder

7. **Footer**
   - Navigation links
   - Copyright information

## 📸 Screenshot Placeholders

Throughout the website, you'll find placeholder boxes for screenshots marked with:
- 📱 emoji for full screenshots
- 📸 emoji for smaller feature screenshots

### Recommended Screenshots to Add:

1. **Hero Section**: Main dashboard showing plans and metrics
2. **Scenario Steps**:
   - Step 1: Create New Plan screen
   - Step 2: Entry list with tags
   - Step 3: Goal progress card
   - Step 4: Add entry form
   - Step 5: Charts view with metrics grid
   - Step 6: Export options screen
   - Step 7: Card alias management and due-by-card summary
3. **Feature Items**: Small screenshots for each feature
4. **Premium Features**:
   - Insights dashboard
   - Export/filter interface
   - Card alias list and due-by-card summary
5. **Download Section**: App Store badge

## 🚀 Deployment to GitHub Pages

### Option 1: Repository Root

1. Move files to root of your repository
2. Go to repository Settings → Pages
3. Select "Deploy from a branch"
4. Choose "main" branch and "/ (root)"
5. Save

### Option 2: Docs Folder

1. Rename `githubpage` folder to `docs`
2. Move to repository root
3. Go to repository Settings → Pages
4. Select "Deploy from a branch"
5. Choose "main" branch and "/docs"
6. Save

### Option 3: Keep as githubpage Folder

1. Go to repository Settings → Pages
2. Select "Deploy from a branch"
3. Choose "main" branch and "/githubpage"
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
    --font-primary: -apple-system, BlinkMacSystemFont, 'Segoe UI', ...;
}
```

### Adding Screenshots

1. Create an `images` folder in the githubpage directory
2. Add your screenshots
3. Replace placeholder divs in `index.html`:

```html
<!-- Before -->
<div class="screenshot-placeholder">
    <p>📱 App Screenshot</p>
</div>

<!-- After -->
<img src="images/dashboard.png" alt="Budgets For Plans Dashboard" />
```

### Updating Premium Pricing

Current StoreKit pricing:
- Insights & Goals: $4.98 one-time
- Reporting: $4.98/month or $39.98/year
- Advanced Tools: $4.98/month or $39.98/year
- Lifetime All Features: $99.98 one-time

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

### User Scenario - Sarah's Story

The scenario demonstrates:
1. **Relatable character**: Sarah, 28-year-old graphic designer
2. **Clear goal**: Save $3,000 for Japan vacation in 6 months
3. **Progressive steps**: Shows app usage from setup to results
4. **Real numbers**: Specific amounts and percentages
5. **Emotional payoff**: Success quote at the end

This structure helps potential users visualize themselves using the app.

### Feature Documentation

Features are organized by:
- **Category** (Core, Premium, Security, etc.)
- **Icon** for visual recognition
- **Title** and description
- **Screenshot placeholder** for visual proof

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
