<template>
  <div>
    <span class="d1">显示</span>
    <div class="d2" style="display:none;">蝶粉蜂黄开个几号大概</div>
  </div>
</template>
<script>
export default {
  mounted() {
    $('.d1').hover(()=>{
      $('.d2').toggle();
    })
  },
}
</script>
