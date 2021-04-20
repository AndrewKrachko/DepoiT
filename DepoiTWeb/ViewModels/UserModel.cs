using System.ComponentModel.DataAnnotations;

namespace DepoiTWeb.ViewModels
{
    public class UserModel
    {
        [Required]
        public string Name { get; set; }
        [Required]
        public string Password { get; set; }
        public string ConfirmPassword { get; set; }
        public bool RememberMeFlag { get; set; }
    }
}
