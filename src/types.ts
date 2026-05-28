export type Page = 'home' | 'about' | 'hire' | 'careers' | 'contact';

export interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  category: 'Benched' | 'Active' | 'Support';
}
