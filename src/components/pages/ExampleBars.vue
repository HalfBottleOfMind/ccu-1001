<template>
  <div class="p-4">
    <Card title="card 1">
      <HeatBar class="w-full h-4" min=-40 max=120 low=20 high=60 current=-20 />
    </Card>
    <Card title="card 2">
      <HeatBar class="w-full h-4" min=-40 max=120 low=20 high=60 current=20 />
    </Card>
    <Card title="card 3">
      <HeatBar class="w-full h-4" min=-40 max=120 low=20 high=60 current=21 />
    </Card>
    <Card title="card 4">
      <HeatBar class="w-full h-4" min=-40 max=120 low=20 high=60 current=30 />
    </Card>
    <Card title="card 5">
      <HeatBar class="w-full h-4" min=-40 max=120 low=20 high=60 current=40 />
    </Card>
    <Card title="card 6">
      <HeatBar class="w-full h-4" min=-40 max=120 low=20 high=60 current=50 />
    </Card>
    <Card title="card 7">
      <HeatBar class="w-full h-4" min=-40 max=120 low=20 high=60 current=59 />
    </Card>
    <Card title="card 8">
      <HeatBar class="w-full h-4" min=-40 max=120 low=20 high=60 current=60 />
    </Card>
    <Card title="card 7">
      <HeatBar class="w-full h-4" min=-40 max=120 low=20 high=60 current=61 />
    </Card>
    <Card title="card 8">
      <HeatBar class="w-1/4 h-4" min=-40 max=120 low=20 high=60 current=40 />
    </Card>
    <Card title="card 9">
      <HeatBar class="w-1/2 h-4" min=-40 max=120 low=20 high=60 current=40 />
    </Card>
    <Card title="card 10">
      <HeatBar class="w-3/4 h-4" min=-40 max=120 low=20 high=60 current=40 />
    </Card>
    <Card title="card 11">
      <HeatBar class="w-3/4 h-4" min=-40 max=120 low=20 high=60 current=40 hideLabels=true />
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
