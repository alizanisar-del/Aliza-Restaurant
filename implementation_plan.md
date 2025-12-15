# Implementation Plan: TASTE HEAVENS Website

## 1. Goal
Create a modern, responsive, and visually stunning restaurant website named "TASTE HEAVENS". The design will focus on elegance, smooth animations, and a seamless user experience.

## 2. Design System
- **Color Palette**:
    - Primary: #1a1a1a (Rich Black - Backgrounds)
    - Secondary: #d4af37 (Metallic Gold - Accents, Buttons)
    - Text: #f8f8f8 (Off-White - Main Text)
    - Highlight: #e74c3c (Subtle Red - Call to Actions/Sale)
- **Typography**:
    - Headings: 'Playfair Display', serif (Elegant, premium).
    - Body: 'Outfit' or 'Poppins', sans-serif (Clean, modern).
- **Visuals**:
    - Glassmorphism for cards.
    - Parallax scrolling effects.
    - Smooth hover transitions (scale, shadow).

## 3. Structure
### Files
- `index.html`: Single page application structure.
- `style.css`: All styles including media queries.
- `script.js`: Cart functionality, mobile menu, scroll animations.

### Sections
1.  **Header/Nav**: Transparent with blur effect, sticky on scroll. Links to sections. Cart icon with counter.
2.  **Hero Section**: Full-screen background image (generated), large playful text ("Taste the Divine"), "Order Now" button.
3.  **Special Offers**: 3-4 cards highlighting best deals.
4.  **Menu/Products**: Grid of 12 items.
    - Categories: Starters, Main Course, Desserts, Drinks.
    - Each card: Image, Title, Description, Price, "Add to Cart" button.
5.  **Soon Arriving**: 3 blurred/teaser cards with "Coming Soon" styling.
6.  **Customer Reviews**: Carousel or grid of testimonials.
7.  **Contact Us**: Functional looking form, address, map placeholder.
8.  **Footer**: Social icons, quick links, newsletter.

## 4. Asset Generation Plan
I will generate unique images for:
- Hero Background (Luxurious dark food setup).
- Special Offers (Burger/Pizza/Pasta high res).
- Product Placeholders (I will generate 4-5 diverse food images to distribute across the 12 items to save time, or unique ones if possible).
- About/Interior shot.

## 5. Development Steps
1.  **Scaffold**: Create files.
2.  **HTML Structure**: Build the skeleton.
3.  **Styles**: Apply the color palette and typography. Implement grid/flex layouts.
4.  **JavaScipt**: Add interactivity (Cart count, animation observers).
5.  **Images**: Generate and place images.
6.  **Polishing**: Check responsiveness and animations.
