
export interface User {
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
  notificationPreferences: NotificationPreferences;
}

export interface EmergencyContact {
  name: string;
  relationship: string;
  phoneNumber: string;
}

export interface NotificationPreferences {
  emailNotifications: boolean;
  smsNotifications: boolean;
  appNotifications: boolean;
}