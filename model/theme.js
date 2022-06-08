//业务对象
//重 精力时间
//theme banner spu sku address user

import { config } from "../config/config"
import { Http } from "../utils/http"

class Theme{
  static async getHomeLocationA(){
    return await Http.request({     //加了await，函数前一定要加async 
      url: `theme/by/names`,
      data: {
        names:'t-1'
      }
    })
  }  
}

export{
  Theme
}