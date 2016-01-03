﻿using System;
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
        public HttpResponseMessage index()
        {

            List<ProductofCategory> pc = new List<ProductofCategory>();
            using (MobileStoreServiceEntities data = new MobileStoreServiceEntities())
            {
                List<CATEGORY> lst_cat = new List<CATEGORY>();
                lst_cat = (from e in data.CATEGORies
                           select e).ToList();
                foreach (var item in lst_cat)
                {
                    ProductofCategory temp = new ProductofCategory();
                    temp.category = item; 
                    int cat_id = temp.category.CATEGORY_ID;

                    List<PRODUCT> listProduct = new List<PRODUCT>();
                    listProduct = (from e in data.PRODUCTs
                                        join f in data.PRODUCT_CATEGORY on e.PRODUCT_ID equals f.PRODUCT_ID
                                        where f.CATEGORY_ID == cat_id
                                        select e).Take(5).ToList();

                    foreach (var item2 in listProduct)
                    {
                        ProductSModel s = new ProductSModel();
                        s.ID = item2.PRODUCT_ID;
                        s.Image = item2.PRODUCT_IMG;
                        s.Name = item2.MODEL;
                        s.Price = String.Format("{0: 0,0}", item2.PRICE);
                        s.Category = temp.category.CATEGORY_NAME;

                        temp.ListProduct.Add(s);
                    }

                    pc.Add(temp);
                }
            }
            //string json = JsonConvert.SerializeObject(pc);
            return CreateResponse(HttpStatusCode.OK, pc);
        }
    }
}
