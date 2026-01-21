import Papa from 'papaparse';
import { Car } from '../types';

/**
 * GOOGLE SHEET SETUP INSTRUCTIONS:
 * 1. Create a new Google Sheet.
 * 2. Add the following headers in Row 1 (exact spelling):
 *    - id
 *    - make
 *    - model
 *    - year
 *    - category  (Values must contain: "Locally Used", "Import", or "Sourced")
 *    - price (e.g. "1500000" or "KES 1,500,000")
 *    - main_image_url
 *    - interior_images_urls (comma separated links, e.g. "link1.jpg, link2.jpg")
 *    - description
 *    - client_review
 * 3. Fill in your data.
 * 4. Go to File -> Share -> Publish to web.
 * 5. Select "Entire Document" and "Comma-separated values (.csv)".
 * 6. Copy the link generated and paste it into the SHEET_URL constant below.
 */

// Placeholder URL - REPLACE THIS WITH YOUR REAL PUBLISHED CSV URL
const SHEET_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR_placeholder_fake_id/pub?output=csv';

// Fallback data for demonstration purposes if the sheet URL is invalid/empty
const MOCK_DATA = [
  {
    id: '1',
    make: 'Mercedes',
    model: 'B180 W247 ',
    year: '2019',
    category: 'Freshly Imported',
    price: 'KES 3,000,000',
    main_image_url: '/Images/Mercedes/1.jpeg',
    interior_images_urls: '/Images/Mercedes/2.jpeg,/Images/Mercedes/3.jpeg,/Images/Mercedes/4.jpeg,/Images/Mercedes/5.jpeg,/Images/Mercedes/6.jpeg,/Images/Mercedes/7.jpeg,/Images/Mercedes/8.jpeg,/Images/Mercedes/9.jpeg,/Images/Mercedes/10.jpeg,/Images/Mercedes/11.jpeg', 
    description: '2019 Mercedes Benz B180 W247 series, Pearl Exterior, SUNROOF, Front bucket seats,1300cc turbo petrol engine,Leather upholstery, Diamond front grill, 5 Spoke AMG style alloy rims,MBUX Infotainment System with Voice command,Digital instrument cluster,Active brake assist, Lane departure warning, Blindspot monitoring, Front heated seats, Drivers memory seat, Multifunctional steering wheel controls,Ambient lighting, Apple carplay and Android Auto,All round parking sensors, Reverse camera with 360° view, 72k mileage,Wireless Charging, Burmester surround sound system with rear subwoofer,',
    client_review: 'Arnold got me this Corolla in 2 days. Best price in town!'
  },
  {
    id: '2',
    make: 'BMW',
    model: 'X5',
    year: '2022',
    category: 'Freshly Imported',
    price: 'KES 7,200,000',
    main_image_url: 'https://picsum.photos/id/133/600/400',
    interior_images_urls: 'https://picsum.photos/id/134/600/400',
    description: 'Luxury SUV with panoramic roof and leather interior. Imported from Japan.',
    client_review: 'The import process was smooth. The X5 is cleaner than I expected.'
  },
  {
    id: '3',
    make: 'Mercedes',
    model: 'G-Wagon',
    year: '2023',
    category: 'Sourced on Request',
    price: 'KES 25,000,000',
    main_image_url: 'https://picsum.photos/id/183/600/400',
    interior_images_urls: '',
    description: 'Special order vehicle sourced directly from Germany per client specs.',
    client_review: 'I dreamt of a G-Wagon, and Arnold made it happen. Professional service.'
  },
    {
    id: '4',
    make: 'Honda',
    model: 'Fit',
    year: '2015',
    category: 'Locally Used',
    price: 'KES 950,000',
    main_image_url: 'https://picsum.photos/id/146/600/400',
    interior_images_urls: '',
    description: 'Great city car, very spacious for its size.',
    client_review: ''
  }
];

export const fetchInventory = async (): Promise<Car[]> => {
  return new Promise((resolve) => {
    // If the URL contains 'placeholder', we return mock data to prevent app crash for the user
    if (SHEET_URL.includes('placeholder')) {
      console.warn("Using Mock Data. Please update SHEET_URL in services/sheetService.ts");
      const processedMock = processRawData(MOCK_DATA);
      resolve(processedMock);
      return;
    }

    Papa.parse(SHEET_URL, {
      download: true,
      header: true,
      complete: (results) => {
        const data = processRawData(results.data);
        resolve(data);
      },
      error: (error) => {
        console.error("Error fetching sheet:", error);
        resolve([]);
      }
    });
  });
};

const processRawData = (data: any[]): Car[] => {
  return data
    .filter((row: any) => row.make && row.model) // Basic validation
    .map((row: any) => ({
      id: row.id || Math.random().toString(36).substr(2, 9),
      make: row.make,
      model: row.model,
      year: parseInt(row.year) || new Date().getFullYear(),
      category: normalizeCategory(row.category),
      price: formatPrice(row.price),
      main_image_url: row.main_image_url || `https://picsum.photos/seed/${row.model}/600/400`,
      interior_images_urls: row.interior_images_urls 
        ? row.interior_images_urls.split(',').map((url: string) => url.trim()) 
        : [],
      description: row.description || 'No description available.',
      client_review: row.client_review || ''
    }));
};

// Helper to format price to KES if it's just a number
const formatPrice = (val: string): string => {
  if (!val) return 'Contact for Price';
  // Check if it already has currency text (assumes if letters exist, it's pre-formatted)
  if (/[a-zA-Z]/.test(val)) return val;
  
  // Try to parse as number
  const num = parseFloat(val.replace(/,/g, '').replace(/ /g, ''));
  if (isNaN(num)) return val;
  
  return `KES ${num.toLocaleString()}`;
};

// Helper to map sheet values to strict categories
const normalizeCategory = (val: string): string => {
  if (!val) return 'Locally Used';
  const lower = val.toLowerCase();
  if (lower.includes('import')) return 'Freshly Imported';
  if (lower.includes('source')) return 'Sourced on Request';
  return 'Locally Used';
};