using DepoiTItems;
using DepoiTWeb.ViewModels;
using Logger;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace DepoiTWeb.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    public class AuthenticateController : Controller
    {
        private readonly UserManager<User> _userManager;
        private readonly SignInManager<User> _signInManager;
        private readonly IConfiguration _config;
        private readonly ILogger _logger;

        public AuthenticateController(
            UserManager<User> userManager,
            SignInManager<User> signInManager,
            IConfiguration config,
            ILogger logger)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _config = config;
            _logger = logger;
        }

        [Route("login")]
        [HttpPost]
        [AllowAnonymous]
        public IActionResult Login([FromBody] UserModel userModel)
        {
            if (this.User.Identity.IsAuthenticated)
            {
                return BadRequest($"Already logged in");
            }

            var result = _signInManager.PasswordSignInAsync(userModel.Name, userModel.Password, userModel.RememberMeFlag, lockoutOnFailure: false).Result;

            if (result.Succeeded)
            {
                return Ok();
            }
            else
            {
                return BadRequest($"Check User name and password and try again");
            }
        }

        [Route("logout")]
        [HttpGet]
        public IActionResult LogOut()
        {
            _signInManager.SignOutAsync();
            return Ok();
        }

        [Route("createtoken")]
        [HttpPost]
        [AllowAnonymous]
        public IActionResult CreateToken([FromBody] UserModel userModel)
        {
            var user = _userManager.FindByNameAsync(userModel.Name).Result;

            if (user != null)
            {
                var result = _signInManager.CheckPasswordSignInAsync(user, userModel.Password, lockoutOnFailure: false).Result;

                if (result.Succeeded)
                {
                    var claims = new[]
                    {
                        new Claim(JwtRegisteredClaimNames.Sub, user.Email),
                        new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                        new Claim(JwtRegisteredClaimNames.UniqueName, user.Name),
                        new Claim(JwtRegisteredClaimNames.NameId, user.Id.ToString()),
                    };

                    var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Token:Key"]));
                    var credentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

                    var token = new JwtSecurityToken(_config["Token:Issuer"], _config["Token:Audience"], claims, signingCredentials: credentials, expires: DateTime.Now.AddHours(1));

                    return Created(string.Empty, new 
                    {
                        token = new JwtSecurityTokenHandler().WriteToken(token),
                        expiration = token.ValidTo
                    });
                }
            }

            return BadRequest($"Check User name and password and try again");
        }

    }
}
