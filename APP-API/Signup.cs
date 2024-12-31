namespace APP_API;

public class Signup
{
    public int Id { get; set; }    
    public string Name { get; set; }     
    public string Email { get; set; }   
    public string Department { get; set; }   
    public string Branch { get; set; }    
    public string Manager { get; set; }    
    public string EventType { get; set; }      
    public string Purpose { get; set; }   
    public DateTime Date { get; set; }    
    public string Location { get; set; }    
    public string Organizer { get; set; }    
    public string Mode { get; set; }  

    public decimal RegistrationCost { get; set; }
    public decimal TravelCost { get; set; }

    public decimal HotelCost { get; set; }

    public decimal MiscCost { get; set; }

    public string Description { get; set; }
    public string Status { get; set; }

    public DateTime GenDate { get; set; }




}