<template>
  <div class="p-4">
    <Card title="bar 1">
      <HeatBar class="w-full h-4" min=-40 max=120 low=20 high=60 current=-20 />
    </Card>
    <Card title="bar 2">
      <HeatBar class="w-full h-4" min=-40 max=120 low=20 high=60 current=20 />
    </Card>
    <Card title="bar 3">
      <HeatBar class="w-full h-4" min=-40 max=120 low=20 high=60 current=21 />
    </Card>
    <Card title="bar 4">
      <HeatBar class="w-full h-4" min=-40 max=120 low=20 high=60 current=30 />
    </Card>
    <Card title="bar 5">
      <HeatBar class="w-full h-4" min=-40 max=120 low=20 high=60 current=40 />
    </Card>
    <Card title="bar 6">
      <HeatBar class="w-full h-4" min=-40 max=120 low=20 high=60 current=50 />
    </Card>
    <Card title="bar 7">
      <HeatBar class="w-full h-4" min=-40 max=120 low=20 high=60 current=59 />
    </Card>
    <Card title="bar 8">
      <HeatBar class="w-full h-4" min=-40 max=120 low=20 high=60 current=60 />
    </Card>
    <Card title="bar 7">
      <HeatBar class="w-full h-4" min=-40 max=120 low=20 high=60 current=61 />
    </Card>
    <Card title="bar 8">
      <HeatBar class="w-1/4 h-4" min=-40 max=120 low=20 high=60 current=40 />
    </Card>
    <Card title="bar 9">
      <HeatBar class="w-1/2 h-4" min=-40 max=120 low=20 high=60 current=40 />
    </Card>
    <Card title="bar 10">
      <HeatBar class="w-3/4 h-4" min=-40 max=120 low=20 high=60 current=40 />
    </Card>
  </div>
</template>

<script>
import HeatBar from "@/components/visualize/HeatBar";
import Card from "@/components/Card";
export default {
  name: "ExampleBars",
  components: {Card, HeatBar}
}
</script>
