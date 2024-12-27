export interface Claim {
  claimId: number;
  vendor: string;
  events: string;
  category: string;
  date: string; 
  amount: number;
  currency: string;
  description: string;
  receiptUrl: string;
  status: string;
}
