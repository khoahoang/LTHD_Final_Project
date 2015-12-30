using Authentication;
using Authentication.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MobileSt.Models
{
    public class ProductofCategory
    {
        public CATEGORY category { get; set; }

        private List<ProductSModel> _listProduct = new List<ProductSModel>();

        public List<ProductSModel> ListProduct
        {
            get { return _listProduct; }
            set { _listProduct = value; }
        }
    }
}