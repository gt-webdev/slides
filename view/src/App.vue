<template lang="pug">
 v-app
  v-toolbar(fixed='' app='' :clipped-left='clipped')
    v-toolbar-title(v-text='title')
  v-content
    v-container()
      v-slide-y-transition(mode='out-in')
        //- v-layout(column='' align-center='') hello
        v-layout(wrap)
          mycard.mycard(
            :title="'8-28-18 Cruising into Web Development'"
            :desc=`'An intro into everything web development - Notes coming soon'`
            :path="'cruising-into-webdev'"
          )
          
  v-footer(:fixed='fixed' app='')
    span &copy; 2018

</template>

<script>
import mycard from './components/mycard'

  export default {
    data () {
      return {
        clipped: false,
        drawer: true,
        fixed: false,
        items: [
          { icon: 'bubble_chart', title: 'Inspire' }
        ],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'GT WebDev Slides'
      }
    },
    components: {
      mycard
    }
  }
</script>

<style>
.mycard {
  margin: .4em;
}
</style>

