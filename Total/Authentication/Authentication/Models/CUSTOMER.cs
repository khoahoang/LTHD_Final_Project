//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Authentication.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class CUSTOMER
    {
        public int CUSTOMER_ID { get; set; }
        public string FIRST_NAME { get; set; }
        public string LAST_NAME { get; set; }
        public string ADDRESS { get; set; }
        public string PHONE { get; set; }
        public string EMAIL { get; set; }
        public string PASSWORD { get; set; }
        public string ACTIVE { get; set; }
        public string USERNAME { get; set; }
        public string RESET_PASSWORD { get; set; }
        public Nullable<System.DateTime> DATE_REQUEST { get; set; }
    }
}
