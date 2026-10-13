import type { Metadata } from 'next';
import './globals.css';
import './logo.css';
import './header-hero.css';
import './services-showcase.css';
import './project-management.css';
import './client-work.css';
import './projects-craftsmanship.css';
import './final-sections.css';
import './benefit-icons.css';
import './contact-refinement.css';
import './service-pages.css';
import './services-overview.css';
import './services-number-hide.css';
import './projects-gallery.css';
import './section-break.css';
import './footer-credit.css';
export const metadata: Metadata = { title: { default: 'LJM Bespoke Interiors', template: '%s | LJM Bespoke Interiors' }, description: 'Luxury bespoke interiors, designed, supplied and installed with meticulous craftsmanship.', openGraph: { title: 'LJM Bespoke Interiors', description: 'Exceptional interiors, tailored to your lifestyle.' } };
export default function Layout({children}:{children:React.ReactNode}) { return <html lang="en"><body>{children}</body></html> }
