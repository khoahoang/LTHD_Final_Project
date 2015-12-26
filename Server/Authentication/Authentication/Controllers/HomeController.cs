using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Authentication.Models;
using Newtonsoft.Json;
using Authentication;
using MobileSt.Models;


namespace MobileSt.Controllers
{
    public class HomeController : ApiController
    {
        [HttpGet]
        public IHttpActionResult index()
        {

            List<ProductofCategory> pc = new List<ProductofCategory>();
            using (WEBDATAEntities data = new WEBDATAEntities())
            {
                List<CATEGORY> lst_cat = new List<CATEGORY>();
                lst_cat = (from e in data.CATEGORies
                           select e).ToList();
                foreach (var item in lst_cat)
                {
                    ProductofCategory temp = new ProductofCategory();
                    temp.category = item; int cat_id = temp.category.CATEGORY_ID;
                    temp.listProduct = (from e in data.PRODUCTs
                                        join f in data.PRODUCT_CATEGORY on e.PRODUCT_ID equals f.PRODUCT_ID
                                        where f.CATEGORY_ID == cat_id
                                        select e).Take(5).ToList();
                    pc.Add(temp);
                }
            }
            string json = JsonConvert.SerializeObject(pc);
            return Ok(json);
        }
    }


}
