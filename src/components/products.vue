<template>
  <div class="products">
    <div class="card-columns">
    <div class="card" style="width: 18rem;"  v-for="(product,i) in productoss" :key="product.ite">
        <img :src="product.img" class="card-img-top">
        <div class="card-body">
            <h5 class="card-title">{{product.name}}</h5>
            <p class="card-text">{{product.price}}</p>
            <!-- <router-link :to="{ name: 'product', params: { id: i }}" class="btn btn-outline-primary btn-block">ver mas</router-link> -->
            <button v-on:click="viewProducts(i)" type="button" class="btn btn-primary btn-block">Ver mas</button>
        </div>
    </div>
</div>
  </div>
</template>

<script>
import router from '../router' 
export default {
  name: 'Products',
  methods: {
    viewProducts:function(idx){
    console.log(idx);
    router.push({ name: 'product', params: { id: idx } })}
  },

  data(){return{productoss:[
        {
            name:'Portátil Huawei ',
            description:'Matebook 13',
            img:'/img/huawei.JPG',
            price:'3.379.900'
        },
        {
            name:'Portátil Asus ',
            description:'X409ma-bv155t',
            img:'/img/asus.JPG',
            price:'1.219.900'
        },
        {
            name:'Portatil Dell',
            description:'Inspiron 3493',
            img:'/img/dell.JPG',
            price:'1.899.900'
        },
        {
            name:'Portátil Hp',
            description:'255 G7 Amd Athlon',
            img:'/img/hp.JPG',
            price:'1.339.900'
        },
        {	
            name:'Portátil Acer',
            description:'34fr',
            img:'/img/acer.JPG',
            price:'1.759.900'
        },
        {
            name:'Lenovo Ideapad',
            description:'L340 I5 9300h',
            img:'/img/lenovo.JPG',
            price:'3.299.999'
        },
        {
            name:'Macbook',
            description:'Air 2020',
            img:'/img/makbuk.JPG',
            price:'4.394.000'
        }
    ]}}
     
    
}
</script>