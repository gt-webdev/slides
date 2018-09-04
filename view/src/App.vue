<template lang="pug">
 v-app
  v-toolbar(fixed='' app='' :clipped-left='clipped')
    v-toolbar-title
      a(
        href="/"
      )
        img(
          
          src="assets/logo.svg"
          style=`height:20px;`
          )
  v-content
    v-container()
      v-slide-y-transition(mode='out-in')
        //- v-layout(column='' align-center='') hello
        v-layout(wrap justify-space-around)

          mycard.mycard(
            v-for="(item,i) in items"
            :key="i"
            :title="item.title"
            :desc="item.desc"
            :date="item.date"
            :path="item.path"
            :isNew="item.isNew"
            :comingSoon="item.comingSoon"
          )
          
  v-footer(:fixed='fixed' app='')
    span &nbsp; gt-webdev &copy; 2018

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
        title: 'GT WebDev Slides',
        items: [
          {
            date: "8/28/18",
            title: "Cruising into Web Development",
            desc: "An intro into everything web development - Notes coming soon",
            path:'cruising-into-webdev'
          },
          {
            date: "9/4/18",
            title: "Animating Things like a pro",
            desc: `Learn how to create and use snazzy animations. We're talking someone looks at your work and says: "You've spent too much time on this."`,
            path: 'animating-things',
            isNew:true,
            comingSoon:false
          },
        ]
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

.v-toolbar {
  z-index: 10;
}
</style>

