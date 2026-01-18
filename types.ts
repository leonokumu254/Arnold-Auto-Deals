export enum CarCategory {
  LocallyUsed = "Locally Used",
  FreshlyImported = "Freshly Imported",
  SourcedOnRequest = "Sourced on Request"
}

export interface Car {
  id: string;
  make: string;
  model: string;
  year: number;
  category: string;
  price: string;
  main_image_url: string;
  interior_images_urls: string[]; // parsed from comma-separated string
  description: string;
  client_review: string; // Testimonial text
  client_name?: string; // Optional, derived or generic
}