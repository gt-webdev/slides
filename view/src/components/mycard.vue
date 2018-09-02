<template lang="pug">
v-layout
  v-flex(xs12 s12 md12 lg6 offset-lg3)
    v-card
      div(
        style="position:relative;z-index:2"
      )
        div(
          ref='asdf'
          style="width:20%;position:absolute;top:-1.2em;left:-8%"
          v-if="isNew"
          )
      v-img(:src="this.path+'/cover.gif'" aspect-ratio='4')
      v-card-title(primary-title='')
        div
          h3.headline.mb-0 
            span.title {{this.title}}&nbsp;&nbsp;&nbsp;
            span.subheading {{this.date}}
          div
            | {{this.desc}}
      v-card-actions
        v-btn(v-if="!comingSoon" color='primary' @click="gotopage") View
        //- v-btn(flat='' color='orange') Explore
        v-btn.coming-soon(v-else disabled) coming soon
    
</template>

<script>

import bodymovin from 'bodymovin'

export default {
    props: {
        title: String,
        desc: String,
        date: String,
        path: String,
        isNew: Boolean,
        comingSoon: Boolean
    },
    methods: {
        gotopage () {
            location.href = this.path
        }
    },
    mounted (){
      console.log(this.$refs)
       const animation = bodymovin.loadAnimation({
        container: this.$refs['asdf'],
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'assets/new_button.json'
        })

    }
}
</script>

<style scoped>
.coming-soon {
 

  background: repeating-linear-gradient(
      45deg,
    #f8db58,
    #e6ca50 10px,
    #fefefe 10px,
    #fefefe 20px
  );
  text-transform: uppercase;
  font-weight: 800;
  color:rgb(0, 0, 0);
  padding:.3em;

}


</style>
