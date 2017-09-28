<template>
  <div>index page</div>
</template>

<script>
  export default {
    created () {
      this.$api.get('topics', null, records => console.log(records))
    }
  }
</script>