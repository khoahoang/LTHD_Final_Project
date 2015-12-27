﻿using System;
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
            List<PRODUCT> listProduct = new List<PRODUCT>();
            using (MobileStoreServiceEntities data = new MobileStoreServiceEntities())
            {
                listProduct = (from e in data.PRODUCT_CATEGORY
                               join f in data.PRODUCTs on e.PRODUCT_ID equals f.PRODUCT_ID
                               where e.CATEGORY_ID == id
                               select f).Take(10).ToList();
            }

            //string json = JsonConvert.SerializeObject(listProduct);
            return CreateResponse(HttpStatusCode.OK, listProduct);
        }
    }
}