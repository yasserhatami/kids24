<template>
  <div>
    <v-container  fluid="">
      <v-row cols="12">
        <div class="d-flex justify-center align-center w-100 wrapper">
          <slot />
        </div>
      </v-row>
    </v-container>
  </div>
</template>

<script>
</script>

<style scoped>
  .wrapper{
    height: 98vh;
    background-image: url('/images/authbg1.png'),url('/images/authbg2.png');
    background-position: left top, right bottom;
    background-repeat: no-repeat;
  }
</style>