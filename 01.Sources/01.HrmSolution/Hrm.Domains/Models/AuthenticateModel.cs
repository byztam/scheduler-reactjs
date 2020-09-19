using System;
using System.Collections.Generic;
using System.Text;

namespace Hrm.Domains.Models
{
    public class AuthenticateModel
    {
        public string UserName { get; set; }
        public string AccessToken { get; set; }
        public long ExpiresIn { get; set; }
    }
}
