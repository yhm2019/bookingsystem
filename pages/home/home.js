// pages/home/home.js
//js 业务逻辑/数据绑定

import { Activity } from "../../model/activity"
import { Banner } from "../../model/banner"
import { Category } from "../../model/category"
import { Theme } from "../../model/theme"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    themeA:null,
    bannerB:null,
    grid:[],
    activityD:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function(options){
      this.initAllData()
  },

   /**
   * 初始化所有数据
   */
  async initAllData(){
    const themeA = await Theme.getHomeLocationA()
    const bannerB = await Banner.getHomeLocationB()
    const gridC = await Category.getHomeLocationC()
    const activityD = await Activity.getHomeLocationD()
    this.setData({
      themeA:themeA[0],
      bannerB,
      gridC,
      activityD
    })
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})