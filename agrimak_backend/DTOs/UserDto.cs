﻿namespace agrimak.backend.DTOs
{
    public class UserDto
    {
        public string Email { get; set; }
        public string Password { get; set; }
        public string ConfirmPassword { get; set; }
        public string Role { get; set; } = "";
    }
}
