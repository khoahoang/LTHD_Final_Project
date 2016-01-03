using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Authentication.Models;
using Authentication;
namespace Authentication.Controllers
{
    [RoutePrefix("api/Orders")]
    public class OrdersController : ApiController
    {
        [Authorize]
        [Route("")]
        public IHttpActionResult Get()
        {
            List<ORDER> OrderList = new List<ORDER>();
            using (MobileStoreServiceEntities data = new MobileStoreServiceEntities())
            {
                OrderList = (from e in data.ORDERS
                             select e).ToList();
            }
            return Ok(OrderList);
        }
        [Authorize]
        [Route("Submit")]
        public IHttpActionResult Submit(string data)
        {
            
            return Ok();
        }
    }

}
