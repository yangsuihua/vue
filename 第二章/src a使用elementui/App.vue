<template>
  <div>
    <yangsuihua-row>
  <yangsuihua-button>默认按钮</yangsuihua-button>
  <yangsuihua-button type="primary">主要按钮</yangsuihua-button>
  <yangsuihua-button type="success">成功按钮</yangsuihua-button>
  <yangsuihua-button type="info">信息按钮</yangsuihua-button>
  <yangsuihua-button type="warning">警告按钮</yangsuihua-button>
  <yangsuihua-button type="danger">危险按钮</yangsuihua-button>
</yangsuihua-row>

<yangsuihua-row>
  <yangsuihua-button plain>朴素按钮</yangsuihua-button>
  <yangsuihua-button type="primary" plain>主要按钮</yangsuihua-button>
  <yangsuihua-button type="success" plain>成功按钮</yangsuihua-button>
  <yangsuihua-button type="info" plain>信息按钮</yangsuihua-button>
  <yangsuihua-button type="warning" plain>警告按钮</yangsuihua-button>
  <yangsuihua-button type="danger" plain>危险按钮</yangsuihua-button>
</yangsuihua-row>

<yangsuihua-row>
  <yangsuihua-button round>圆角按钮</yangsuihua-button>
  <yangsuihua-button type="primary" round>主要按钮</yangsuihua-button>
  <yangsuihua-button type="success" round>成功按钮</yangsuihua-button>
  <yangsuihua-button type="info" round>信息按钮</yangsuihua-button>
  <yangsuihua-button type="warning" round>警告按钮</yangsuihua-button>
  <yangsuihua-button type="danger" round>危险按钮</yangsuihua-button>
</yangsuihua-row>

<yangsuihua-row>
  <yangsuihua-button icon="el-icon-search" circle></yangsuihua-button>
  <yangsuihua-button type="primary" icon="el-icon-edit" circle></yangsuihua-button>
  <yangsuihua-button type="success" icon="el-icon-check" circle></yangsuihua-button>
  <yangsuihua-button type="info" icon="el-icon-message" circle></yangsuihua-button>
  <yangsuihua-button type="warning" icon="el-icon-star-off" circle></yangsuihua-button>
  <yangsuihua-button type="danger" icon="el-icon-delete" circle></yangsuihua-button>
</yangsuihua-row>
<hr>
<hr>
<hr>
<hr>
<hr>
<div class="block">
    <span class="demonstration">默认</span>
    <yangsuihua-picker
      v-model="value1"
      type="date"
      placeholder="选择日期">
    </yangsuihua-picker>
  </div>
  <div class="block">
    <span class="demonstration">带快捷选项</span>
    <yangsuihua-picker
      v-model="value2"
      align="right"
      type="date"
      placeholder="选择日期"
      :picker-options="pickerOptions">
    </yangsuihua-picker>
  </div>
  </div>
</template>

<script>
export default {
name:'App',  data() {
      return {
        pickerOptions: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        value1: '',
        value2: '',
      };
    }
  };
</script>

<style>

</style>