<template lang="pug">
v-layout
  v-flex(xs12 s12 md12)
    v-card
      v-img(:src="this.path+'/cover.png'" aspect-ratio='2.75')
      v-card-title(primary-title='')
        div
          h3.headline.mb-0 {{this.title}}
          div
            | {{this.desc}}
      v-card-actions
        v-btn(flat='' color='orange' @click="gotopage") View
        //- v-btn(flat='' color='orange') Explore
</template>

<script>
export default {
    props: {
        title: String,
        desc: String,
        path: String,
    },
    methods: {
        gotopage () {
            location.href = this.path
        }
    }
}
</script>
