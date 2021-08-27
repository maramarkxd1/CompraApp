import { createStore } from 'vuex'

export default createStore({
  state: {
    slider_index: 0,
  },
  mutations: {
    // mutationshow_slide(state){
    //   show_slide(index) {
    //     const slides = document.querySelectorAll('.slide');
    //     const dots = document.querySelectorAll('.dot-nav');
    //     if(index > slides.length) slider_index = 0;
    //     if(index < 0) slider_index = slides.length - 1;
    //     for (let i=0; i<slides.length; i++){
    //         slides[i].style.display = 'none';
    //         dots[i].classList.remove('active-dot');
    //     }
    //     slides[slider_index].style.display = 'block';
    //     dots[slider_index].classList.add('active-dot');
    // }
    // }
  },
  actions: {
    // actionshow_slide({commit}){
    //   commit('mutationshow_slide')
    // }
  },
  modules: {
  }
})
