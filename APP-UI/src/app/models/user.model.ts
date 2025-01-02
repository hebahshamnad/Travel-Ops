
export interface User {
  id:number;
  fullName: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  title: string;
  department: string;
  address: string;
  postalCode: string;
  city: string;
  country: string;
  emergencyContact: EmergencyContact;
  preference: Preference;
}

export interface EmergencyContact {
  name: string;
  relationship: string;
  phoneNumber: string;
}

export interface Preference {
  email: boolean;
  sms: boolean;
  app: boolean;
}