<template>
    <div class="search" >
        <div v-for="(product) in productoss" :key="product.ite">
            <div v-if="((product.name).toLowerCase()).includes(concepts.toLowerCase())">
            <h1 >{{product.name}}</h1>
            <div class="row">
                <div class="col-md-4">
                    <img :src="product.img" class="img-fluid" :alt="product.name">
                    <br><br>
                    <h3>{{product.price}}</h3>
                    <router-link to="/products" class="btn btn-outline-primary btn-block" >Regresar</router-link>
                </div>
                <div class="col-md-8">
                    <h3>{{product.name}}</h3>
                    <hr>
                    <p>{{product.description}}</p>
                </div>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Search',
  data(){return{
      concepts:this.$route.params.concept,
    productoss:[
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