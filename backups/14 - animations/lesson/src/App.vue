<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Animations</h1>
        <hr>
        <select v-model="alertAnimation" class="form-control">
          <option value="fade">Fade</option>
          <option value="slide">Slide</option>
        </select>
        <div class="btn btn-primary" @click="show = !show">Show Alert</div>
        <br><br>
        <transition name="fade">
          <div class="alert alert-info" v-if="show">This is some Info</div>
        </transition>
        <transition name="slide" type="animation">
          <!-- setting type to animation will finish this transition when the animation ends -->
          <div class="alert alert-info" v-if="show">This is some Info</div>
        </transition>
        <transition name="fade" appear>
          <!-- appear will do the animation even on the first load of the page -->
          <div class="alert alert-info" v-if="show">This is some Info</div>
        </transition>
        <transition  
          appear
          enter-active-class="animated bounce"
          leave-active-class="animated shake">
          <!-- enter-active-class="animated bounce" will use bounce from animatecss. same with leave-active-class -->
          <div class="alert alert-info" v-if="show">This is some Info</div>
        </transition>
        <transition :name="alertAnimation" mode="out-in">
          <!-- mode can be out-in or in-out and it is used to finish one animation before switching to the next one -->
          <div class="alert alert-info" v-if="show" key="info">This is some Info</div>
          <div class="alert alert-warning" v-else key="warning">This is some Warning</div>
          <!-- we have to add key that shows that those elements are different from each other, otherwise animation wouldn't work -->
        </transition>
        <hr>
        <!-- doing animations with JS -->
        <button class="btn btn-primary" @click="load = !load">Load / Remove Element</button>
        <br><br>
        <transition
          @before-enter="beforeEnter"
          @enter="enter"
          @after-enter="afterEnter"
          @enter-cancelled="enterCancelled"
          
          @before-leave="beforeLeave"
          @leave="leave"
          @after-leave="afterLeave"
          @leave-cancelled="leaveCancelled"
          :css="false">
          <!-- :css="false" tells it not to look for css classes because we aren't using them, which will speed up the load -->
          <div style="width: 300px; height: 100px; background-color: lightgreen;" v-if="load"></div>
        </transition>
        <hr>
        <button 
          class="btn btn-primary"
          @click="selectedComponent == 'app-success-alert' ? selectedComponent = 'app-danger-alert' 
            : selectedComponent = 'app-success-alert'">Toggle Components</button>
        <br><br>
        <transition name="fade" mode="out-in">
          <component :is="selectedComponent"></component>
        </transition>
        <hr>
        <button class="btn btn-primary" @click="addItem">Add Item</button>
        <br><br>
        <ul class="list-group">
        <transition-group name="slide">
          <li 
            class="list-group-item" 
            v-for="(number, index) in numbers" 
            :key="index"
            @click="removeItem(index)"
            style="cursor: pointer;">{{ number }}</li>
        </transition-group>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import DangerAlert from './DangerAlert.vue';
import SuccessAlert from './SuccessAlert.vue';
export default {
  data() {
    return {
      show: false,
      alertAnimation: 'fade',
      load: 'true',
      elementWidth: 100,
      selectedComponent: 'app-success-alert',
      numbers: [1, 2, 3, 4, 5]
    }
  },
  components: {
    appDangerAlert: DangerAlert,
    appSuccessAlert: SuccessAlert
  },
  /* eslint-disable no-unused-vars */
  methods: {
    beforeEnter(el) {
      console.log('beforeEnter');
      this.elementWidth = 100;
      el.style.width = this.elementWidth + 'px';
    },
    enter(el, done) {
      console.log('enter');
      let round = 1;
      const interval = setInterval(() => {
        el.style.width = (this.elementWidth + round * 10) + 'px';
        round++;
        if(round > 20) {
          clearInterval(interval);
          done();
        }
      }, 20);
    },
    afterEnter(el) {
      console.log('afterEnter');
    },
    enterCancelled(el) {
      console.log('enterCancelled');
    },
    beforeLeave(el) {
      console.log('beforeLeave');
      this.elementWidth = 300;
      el.style.width = this.elementWidth + 'px';
    },
    leave(el, done) {
      console.log('leave');
      let round = 1;
      const interval = setInterval(() => {
        el.style.width = (this.elementWidth - round * 10) + 'px';
        round++;
        if(round > 20) {
          clearInterval(interval);
          done();
        }
      }, 20);
    },
    afterLeave(el) {
      console.log('afterLeave');
    },
    leaveCancelled(el) {
      console.log('leaveCancelled');
    },
    /* eslint-enable no-unused-vars */
    addItem() {
      const pos = Math.floor(Math.random() * this.numbers.length);
      this.numbers.splice(pos, 0, this.numbers.length + 1);
    },
    removeItem(index) {
      this.numbers.splice(index, 1);
    }
  }
}
</script>

<style>
  .fade-enter {
    opacity: 0;
  }

  .fade-enter-active {
    transition: opacity 1s;
    /* opacity: 1; would be the default because .fade-enter will be overwritten */
  }

  .fade-leave {
    /* opacity: 1; also default */
  }

  .fade-leave-active {
    transition: opacity 1s;
    opacity: 0;
  }

  .slide-enter {
    /* transform: translateY(20px); not needed because we have keyframes */
    opacity: 0;
  }

  .slide-enter-active {
    animation: slide-in 1s ease-out forwards;
    transition: opacity .5s;
  }

  .slide-leave {

  }

  .slide-leave-active {
    animation: slide-out 1s ease-out forwards;
    transition: opacity 1s;
    opacity: 0;
    position: absolute;
  }

  .slide-move {
    transition: transform 1s;
  }

  @keyframes slide-in {
    from {
      transform: translateY(20px);
    }
    to {
      transform: translateY(0);
    }
  }

  @keyframes slide-out {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(20px);
    }
  }
</style>