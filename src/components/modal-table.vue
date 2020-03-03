
<template>
    <modal 
      name="example-adaptive"
      transition="nice-modal-fade"
      :min-width="200"
      :min-height="200"
      :delay="100"
      :adaptive="true">
    <div class="example-modal-content">
      {{text}}
    </div>
  </modal>
</template>
<script>
export default {
  name: 'Modal_Adaptive',
   props: ['text']
}
</script>