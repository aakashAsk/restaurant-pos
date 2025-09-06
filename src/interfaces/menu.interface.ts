export interface Menu {
  _id: string;
  title: string;
  description: string;
  type: string; // restrict to known values
  category: string; // ObjectId as string
  tags: string[];
  images: string[];
  customizationOptions: string[];
  price: number;
  createdAt: string; // ISO date string
}