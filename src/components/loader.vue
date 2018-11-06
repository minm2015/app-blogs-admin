<template>
  <!-- Preloader -->
  <div class="loader-mask">
    <div class="loader">
      <div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'app-loader',
  mounted () {
    $('.loader').delay(500).fadeOut('slow')
    $('.loader-mask').delay('slow').fadeOut('slow')
  }
}
</script>
