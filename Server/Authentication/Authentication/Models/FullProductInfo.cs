using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Authentication.Models
{
    public class FullProductInfo
    {
        public PRODUCT product { get; set; }        
        public PRODUCT_DESCRIPTION description { get; set; }
        public List<ATTRIBUTE> attribute { get; set; }
    }
}