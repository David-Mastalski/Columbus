# Product Listing Page – Recruitment Task

This project is a solution for a Junior Frontend Developer recruitment assignment.  
It implements a product listing page with a cart system and simulated asynchronous data handling.

---

## Tech Stack

- Next.js (App Router)
- TypeScript
- React Context
- useReducer
- CSS Modules

---

## Features

### Product Listing
- Displays a list of products fetched from a provided REST API schema
- Each product includes:
  - image
  - title
  - description
  - brand
  - price
  - promotion / discount (if available)
  - calculated discounted price

### Cart System
- Global cart state managed with Context + useReducer
- Add-to-cart functionality
- Cart badge counter in header
- Fake async request simulating server delay before updating state

---

## Installation

```bash
git clone https://github.com/David-Mastalski/Columbus.git
cd Columbus
```
```bash
npm install
```
```bash
npm run dev
```
