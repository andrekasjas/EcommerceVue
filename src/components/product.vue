<template>
  <div class="product">
        <h1>{{productoss[id].name}} </h1>
        <div class="row">
            <div class="col-md-4">
                <img :src="productoss[id].img" class="img-fluid" :alt="productoss[id].name">
                <br><br>
                <h3>{{productoss[id].price}}</h3>
                <router-link to="/products" class="btn btn-outline-primary btn-block" >Regresar</router-link>
            </div>
            <div class="col-md-8">
                <h3>{{productoss[id].name}}</h3>
                <hr>
                <p>{{productoss[id].description}}</p>
            </div>
        </div>
  </div>
</template>

<script>
export default {
  name: 'Product',
  data(){return{id : this.$route.params.id, productoss:[
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
    ]}}}

</script>