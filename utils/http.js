import { config } from "../config/config";
import { promisic } from "./util";

class Http{
  static async request({   //async始终返回promisic
      url, 
      data, 
      method = 'GET'
    }){  //对象式传参
      const res = await promisic(wx.request)({
        url:`${config.apiBaseUrl}${url}`,
        data,
        method,
        header:{
          appkey: config.appkey
        },
      })
      return res.data
    }
  }

export{
  Http
}