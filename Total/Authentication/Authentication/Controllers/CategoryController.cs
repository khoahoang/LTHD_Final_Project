using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using MobileSt.Models;
using Newtonsoft.Json;
using Authentication;
using Authentication.Models;

namespace MobileSt.Controllers
{
    public class CategoryController : ApiController
    {
        #region Helper
        public HttpResponseMessage CreateResponse<T>(HttpStatusCode statusCode, T data)
        {
            return Request.CreateResponse(statusCode, data);
        }

        public HttpResponseMessage CreateResponse(HttpStatusCode httpStatusCode)
        {
            return Request.CreateResponse(httpStatusCode);
        }
        #endregion
        [HttpGet]
        public HttpResponseMessage GetProductOfCategory(int id)
        {
            List<ProductSModel> kq = new List<ProductSModel>();
            List<PRODUCT> listProduct = new List<PRODUCT>();
            CATEGORY cat = new CATEGORY();
            CATEGORY category = new CATEGORY();
            using (MobileStoreServiceEntities data = new MobileStoreServiceEntities())
            {
                listProduct = (from e in data.PRODUCT_CATEGORY
                               join f in data.PRODUCTs on e.PRODUCT_ID equals f.PRODUCT_ID
                               where e.CATEGORY_ID == id
                               select f).Take(10).ToList();

                cat = (from c in data.CATEGORies
                       where c.CATEGORY_ID == id
                       select c).FirstOrDefault();
            }

            foreach (var item in listProduct)
            {
                ProductSModel s = new ProductSModel();
                s.ID = item.PRODUCT_ID;
                s.Name = item.MODEL;
                s.Image = item.PRODUCT_IMG;
                s.Price = String.Format("{0:0,0}", item.PRICE);
                s.Category = cat.CATEGORY_NAME;

                kq.Add(s);
            }

            //string json = JsonConvert.SerializeObject(listProduct);
            return CreateResponse(HttpStatusCode.OK, kq);
        }
    }
}