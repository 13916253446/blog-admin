//  自定义loading
export function showLoading() {
  let dom = document.getElementById('_loading_wrapper');
  if (dom) {
    dom.style.display = 'block';
  }
}

//  隐藏loading
export function hideLoading() {
  let dom = document.getElementById('_loading_wrapper');
  if (dom) {
    dom.style.display = 'none';
  }
}

export default {
  //  自定义loading
  showLoading,
  //  隐藏loading
  hideLoading
};