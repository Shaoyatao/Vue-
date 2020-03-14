/*
直接更新state的多个方法的对象
 */

import Vue from 'vue'
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USER_INFO,
  RESET_USER_INFO,
  RECIVE_SHOP_GOODS,
  RECIVE_SHOP_INFO,
  RECIVE_SHOP_RATINGS,
} from './mutation-types'

export default {
  [RECEIVE_ADDRESS](state, {address}) {
    state.address = address
  },

  [RECEIVE_CATEGORYS](state, {categorys}) {
    state.categorys = categorys
  },

  [RECEIVE_SHOPS](state, {shops}) {
    state.shops = shops
  },
  // [RECEIVE_USER_INFO](state,payload){
  [RECEIVE_USER_INFO](state, {userInfo}) {
    // console.log(payload)
    state.userInfo = userInfo
    // state.userInfo = payload.user
  },
  [RESET_USER_INFO](state) {
    state.userInfo = {}
  },
  [RECIVE_SHOP_GOODS](state, {goods}) {
    state.goods = goods
  },
  [RECIVE_SHOP_INFO](state, {info}) {
    state.info = info
  },
  [RECIVE_SHOP_RATINGS](state, {ratings}) {
    state.ratings = ratings
  },
}