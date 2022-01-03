<template>
  <div class="bg-white" style="text-align: center">
    <h1 class="font-display">{{ timestamp }}</h1>
  </div>
</template>

<script>
export default {
  name: "CurrentTime",
  data() {
    return {
      timestamp: "",
    };
  },
  created() {
    this.getNow();
    setInterval(this.getNow, 1000);
  },
  methods: {
    getNow() {
      const today = new Date();
      const date =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();
      const time =
        today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      const dateTime = date + " " + time;
      this.timestamp = dateTime;
    },
  },
};
</script>
