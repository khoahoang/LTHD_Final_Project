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
    
    public partial class PRODUCT
    {
        public int PRODUCT_ID { get; set; }
        public string MODEL { get; set; }
        public Nullable<int> MANUFACTURE_ID { get; set; }
        public double PRICE { get; set; }
        public int QUANTITY { get; set; }
        public string MODEL_ID { get; set; }
        public string DESCRIPTION { get; set; }
        public string PRODUCT_IMG { get; set; }
        public Nullable<System.DateTime> DATE_ADD { get; set; }
        public Nullable<int> DELETED { get; set; }
    }
}
