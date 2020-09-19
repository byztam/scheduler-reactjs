using System;
using System.Collections.Generic;

namespace Hrm.Entities.AutoGenEntities.Models
{
    public partial class LdapUsers
    {
        public long UserId { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public DateTime CreatedDate { get; set; }
        public string CreatedBy { get; set; }
        public DateTime ModifiedDate { get; set; }
        public string ModifiedBy { get; set; }
    }
}
