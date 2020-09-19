using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Hrm.Domains.Models;
using Hrm.Entities.AutoGenEntities.Models;
using Hrm.Entities.Database;
using Hrm.HttpServer.Provider;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;

namespace Hrm.HttpServer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthenticateController : BaseController
    {
        private readonly DatabaseContext _databaseContext;
        private IConfiguration _config;
        private readonly ILogger<WeatherForecastController> _logger;

        public AuthenticateController(ILogger<WeatherForecastController> logger, DatabaseContext databaseContext, 
            IConfiguration config)
        {
            _logger = logger;
            _databaseContext = databaseContext;
            _config = config;
        }

        [HttpPost]
        public async Task<IActionResult> Login(LoginModel model)
        {
            var usr = _databaseContext.LdapUsers.FirstOrDefault(x => x.UserName == model.UserName
                                                                     && x.Password == model.Password);
            if (usr != null)
            {
                var jwt = new JwtService(_config);
                var token = jwt.GenerateSecurityToken(usr);
                var resp = new AuthenticateModel
                {
                    UserName = model.UserName,
                    AccessToken = token
                };
                return Ok(resp);
            }

            return Ok(BadRequest());
        }
    }
}