using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using MobileSt.Models;
using Newtonsoft.Json;
using Authentication;

namespace MobileSt.Controllers
{
    public class CategoryController : ApiController
    {
        [HttpGet]
        public IHttpActionResult GetProductOfCategory(int id)
        {
            List<PRODUCT> listProduct = new List<PRODUCT>();
            using (WEBDATAEntities data = new WEBDATAEntities())
            {
                listProduct = (from e in data.PRODUCT_CATEGORY
                               join f in data.PRODUCTs on e.PRODUCT_ID equals f.PRODUCT_ID
                               where e.CATEGORY_ID == id
                               select f).Take(10).ToList();
            }

            string json = JsonConvert.SerializeObject(listProduct);
            return Ok(json);
        }
    }
}