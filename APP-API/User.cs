namespace APP_API
{
    public class User
    {
        public int Id { get; set; }

        public string fullName { get; set; }
        public string firstName { get; set; }
        public string lastName { get; set; }
        public string email { get; set; }
        public string phone { get; set; }
        public string title { get; set; }
        public string department { get; set; }
        public string address { get; set; }

        public string postalCode { get; set; }
        public string city { get; set; }
        public string country { get; set; }
        public EmergencyContact emergencyContact { get; set; }
        public NotificationPreferences notificationPreferences { get; set; }
        public class EmergencyContact
        {
            public string Name { get; set; }
            public string Relationship { get; set; }
            public string PhoneNumber { get; set; }
        }

        public class NotificationPreferences
        {
            public bool EmailNotifications { get; set; }
            public bool SmsNotifications { get; set; }
            public bool AppNotifications { get; set; }
        }



    }
}
