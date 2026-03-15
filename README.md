# Lumi Nails Beauty Frontend

Lumi Nails Beauty Frontend is a modern Next.js 15 marketing website and dashboard UI for a beauty salon brand. The project combines a customer-facing website with service discovery, gallery browsing, contact and booking flows, plus an internal admin dashboard for viewing salon metrics, bookings, staff, blog, gallery, testimonials, and service management screens.

## Project Overview

This project is built as a frontend-first experience for a salon or beauty business. It includes:

- A public website with branded landing pages and marketing sections
- A services experience powered by structured JSON data
- Booking and contact forms built with React Hook Form
- A gallery with category filters and transformation comparisons
- A dashboard area with KPI cards, charts, tables, and management views
- Reusable UI primitives and design components for consistent styling

At the moment, the application behaves primarily as a polished frontend prototype. Forms currently log submitted values to the console, and dashboard data is mostly static/mock data rather than connected to a backend API.

## Core Features

### Public Website

- Home page with hero, about, services, gallery, testimonials, booking CTA, and blog preview sections
- About page with brand story, welcome content, and team showcase
- Services page with accordion-style service categories sourced from `data/services.json`
- Gallery page with filterable image grid and before/after transformation section
- Blog page with featured/latest posts and category browsing UI
- Contact page with contact form, business details, and interactive Leaflet map
- FAQ page for common customer questions
- Schedule booking page with appointment form and salon details

### Dashboard UI

- Summary metrics for earnings, bookings, and customers
- Revenue analytics chart using ApexCharts
- Popular services and staff performance widgets
- Table/list-based views for bookings and customers
- Dedicated management routes for blog, gallery, services, staff, testimonials, report, settings, and help

## Tech Stack

- Next.js 15 with App Router
- React 19
- TypeScript
- Tailwind CSS 4
- Radix UI primitives
- React Hook Form
- TanStack React Table
- ApexCharts and React ApexCharts
- React Leaflet with Leaflet maps
- Lucide React and React Icons

## Route Map

### Public Routes

- `/` home page
- `/about-us`
- `/appointment`
- `/blog`
- `/contact`
- `/faqs`
- `/gallery`
- `/schedule-booking`
- `/services`
- `/Testimonials`

### Dashboard Routes

- `/dashboard`
- `/dashboard/blog`
- `/dashboard/bookings`
- `/dashboard/customers`
- `/dashboard/gallery`
- `/dashboard/help`
- `/dashboard/report`
- `/dashboard/services`
- `/dashboard/settings`
- `/dashboard/staff`
- `/dashboard/testimonials`

## Project Structure

```text
app/
	(Client)/            Public-facing pages and layout
	(Dashboard)/         Dashboard pages and admin layout
components/
	Features/            Page-level feature sections for the public site
	Dashboard/           Dashboard widgets, tables, and admin UI
	Reusable/            Shared section components and forms
	Shared/              Navbar and footer
	ui/                  UI primitives and reusable base components
data/
	services.json        Service categories, pricing, and variation data
lib/
	utils.ts             Utility helpers
	formatters.ts        Formatting helpers
public/
	Images/              Static images used across the website and dashboard
```

## Local Development

### Prerequisites

- Node.js 18 or newer
- npm

### Install Dependencies

```bash
npm install
```

### Run the Development Server

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

### Production Build

```bash
npm run build
npm start
```

## Available Scripts

- `npm run dev` starts the local development server
- `npm run build` creates the production build
- `npm start` runs the production server after a successful build

## Data and Content Notes

- Service content is driven by `data/services.json`
- Many dashboard views currently use mock or static UI data
- Booking and contact forms are presentational and currently submit to `console.log`
- Static assets are served from `public/Images`

## Recommended Next Steps

If this project is moving toward production, the most valuable next improvements would be:

1. Connect forms to a real backend or email workflow
2. Replace dashboard mock data with API-driven data
3. Add authentication and route protection for dashboard pages
4. Improve SEO metadata in the root layout
5. Add linting, formatting, and test scripts
6. Add environment-based configuration for contact details and social links

## Status

The project builds successfully with `npm run build` and is in a strong state for frontend presentation, portfolio use, UI iteration, and backend integration work.
