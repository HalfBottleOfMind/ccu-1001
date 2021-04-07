<template>
  <div class="pr-8">
    <div class="h-full text-white relative pl-8" :class="{ 'mt-8': !hideLabels }">
      <div v-if="!hideLabels">
        <span class="absolute -top-7 px-1 rounded-full left-0">{{min}}</span>
        <span class="absolute -top-7 px-1 rounded-full left-full">{{max}}</span>
        <span class="absolute -top-7 px-1 rounded-full left-2/20" :class="lowPositionClass" >{{low}}</span>
        <span class="absolute -top-7 px-1 rounded-full left-18/20" :class="highPositionClass" >{{high}}</span>
        <span class="bg-main rounded-full text-black px-1 absolute -top-7" :class="currentPositionClass" >{{current}}</span>
      </div>
      <div ref="bar" class="w-full h-full bg-gradient-to-r from-bars-heat-cold via-bars-heat-middle to-bars-heat-hot" />
    </div>
  </div>
</template>

<script>
import {computed, ref} from "vue";

export default {
  name: "Bar",
  props: {
    min: {
      type: Number,
      required: true,
    },
    max: {
      type: Number,
      required: true,
    },
    low: {
      type: Number,
      required: true,
    },
    high: {
      type: Number,
      required: true,
    },
    current: {
      type: Number,
      required: true,
    },
    hideLabels: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const bar = ref(null)

    const currentPositionClass = computed(() => {
      if (Number(props.current) < Number(props.low)) {
        return 'left-1/20'
      }
      if (Number(props.current) === Number(props.low)) {
        return 'left-2/20'
      }
      if (Number(props.current) === Number(props.high)) {
        return 'left-18/20'
      }
      if (Number(props.current) > Number(props.high)) {
        return 'left-19/20'
      }

      let percent = (props.current - props.low) / (props.high - props.low)

      if (percent < 0.0666) return 'left-3/20'
      if (percent > 0.0666 && percent <= 0.1333) return 'left-4/20'
      if (percent > 0.1333 && percent <= 0.2) return 'left-1/4'
      if (percent > 0.2 && percent <= 0.2666) return 'left-6/20'
      if (percent > 0.2666 && percent <= 0.3333) return 'left-7/20'
      if (percent > 0.3333 && percent <= 0.4) return 'left-8/20'
      if (percent > 0.4 && percent <= 0.4666) return 'left-9/20'
      if (percent > 0.4666 && percent <= 0.5333) return 'left-1/2'
      if (percent > 0.5333 && percent <= 0.6) return 'left-11/20'
      if (percent > 0.6 && percent <= 0.6666) return 'left-12/20'
      if (percent > 0.6666 && percent <= 0.7333) return 'left-13/20'
      if (percent > 0.7333 && percent <= 0.8) return 'left-14/20'
      if (percent > 0.8 && percent <= 0.8666) return 'left-3/4'
      if (percent > 0.8666 && percent <= 0.9333) return 'left-16/20'
      if (percent > 0.9333 && percent < 1) return 'left-17/20'

      return 'left-1/2'
    })


    return {
      bar,
      currentPositionClass,
    }
  }
}
</script>
