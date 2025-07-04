export interface User {
  uid: string;
  email: string;
  displayName?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  category: string;
  contact: string;
  price?: string;
  location?: string;
  timestamp: Date;
  userId: string;
  userEmail: string;
}

export type ServiceCategory = 
  | 'tutoring'
  | 'books'
  | 'furniture'
  | 'electronics'
  | 'roommate'
  | 'resume'
  | 'coding'
  | 'other';

export const SERVICE_CATEGORIES: { value: ServiceCategory; label: string }[] = [
  { value: 'tutoring', label: 'Tutoring & Academic Help' },
  { value: 'books', label: 'Books & Study Materials' },
  { value: 'furniture', label: 'Furniture & Household' },
  { value: 'electronics', label: 'Electronics & Tech' },
  { value: 'roommate', label: 'Roommate & Housing' },
  { value: 'resume', label: 'Resume & Career Services' },
  { value: 'coding', label: 'Programming & Development' },
  { value: 'other', label: 'Other Services' },
];