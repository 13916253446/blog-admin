import axios from 'axios';
import { apiAddress as baseURL } from '@/tools/constants/index.js';
import { Message } from 'element-ui';
import { stringify } from '@/tools/utils/common.js';
import { showLoading, hideLoading } from '@/tools/utils/index.js';

// 创建根实例
const instance = axios.create({
  baseURL,
  withCredentials: true,
  timeout: 15000
});

let ajaxloaded = true;
instance.interceptors.request.use(config => {
  ajaxloaded = false;
  config.headers = {
    'Content-Type': 'application/x-www-form-urlencoded'
  };
  return config;
}, error => {
  return Promise.reject(error);
});

//  创建响应拦截器
instance.interceptors.response.use(response => {
  ajaxloaded = true;
  hideLoading();
  let { data: { isSuccess, msg: message, result }} = response;
  if (!isSuccess) {
    Message({
      message,
      type: 'error'
    });
    return Promise.reject(message);
  } else {
    return result;
  }
}, error => {
  let { message = '' } = error || {};
  ajaxloaded = true;
  hideLoading();
  Message({
    message,
    type: 'error'
  });
  return Promise.reject(error);
});

export let get = (type, params = {}) => {
  let timer = setTimeout(() => {
    clearTimeout(timer);
    !ajaxloaded && showLoading();
  }, 500);
  return instance.get(type,
    {
      params
    }
  );
};

export let post = (type = '', params = {}) => {
  showLoading();
  return instance({
    method: 'post',
    url: type,
    data: stringify(params)
  });
};

export default {
  get,
  post
};