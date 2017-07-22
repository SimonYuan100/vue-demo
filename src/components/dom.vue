<template>
  <div class="dom">
    <p>组件树访问</p>
    <ul>
      <li v-for='node in tree'>{{node}}</li>
    </ul>
    <p>DOM访问</p>
    <ul>
      <li v-for='dom in doms'>{{dom}}</li>
    </ul>
    <p>数据访问</p>
    <ul>
      <li v-for='s in ds'>{{s}}</li>
    </ul>
    <p>event--触发： $dispatch $broadcast $emit</p>
    <p>event--监听： $on $once</p>
    <p>event--删除： $off</p>

  </div>
</template>

<script>
  export default{
    name: 'dom',
    data () {
      return {
        tree: [
          '$parent--当前实例父实例',
          '$root--组件根实例',
          '$children--直接子组件',
          '$refs--v-ref指令的子组件'
        ],
        doms: ['$el', '$els'],
        ds: ['$data', '$options']
      };
    }
  };
</script>
<style sass scoped>
  .dom{
    background: #ggg;
  }
</style>
