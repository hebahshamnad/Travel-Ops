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
        public string type { get; set; }
        public string department { get; set; }
        public string address { get; set; }

        public string postalCode { get; set; }
        public string city { get; set; }
        public string country { get; set; }
        public EmergencyContact emergencyContact { get; set; }
        public Preference preference { get; set; }
        public class EmergencyContact
        {
            public string Name { get; set; }
            public string Relationship { get; set; }
            public string PhoneNumber { get; set; }
        }

        public class Preference
        {
            public bool email { get; set; }
            public bool sms { get; set; }
            public bool app { get; set; }
        }



    }
}
