//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Authentication
{
    using System;
    using System.Collections.Generic;
    
    public partial class ORDER
    {
        public int ORDER_ID { get; set; }
        public int CUSTOMER_ID { get; set; }
        public System.DateTime ORDER_DATE { get; set; }
        public string NAME { get; set; }
        public string ADDRESS { get; set; }
        public string PHONE { get; set; }
        public int PAID { get; set; }
        public double TOTAL { get; set; }
        public Nullable<int> DELETED { get; set; }
    }
}
