<template>
<div class="container">
    <div class="row">
        <div class="col-md-3 col-sm-6" >
            <div class="our-team" v-for(person in persons) :key="i">
                <div class="pic">
                    <img src="../assets/logo.png">
                </div>
                <h3 class="title">{{person.name}}</h3>
                <span class="post">{{person.role}}</span>
                <ul class="social">
                    <li><a href="#"><font-awesome-icon :icon="['fas', 'user-secret']" /></a></li>
                    <li><a href="#"><font-awesome-icon :icon="['fas', 'user-secret']" /></a></li>
                    <li><a href="#"><font-awesome-icon :icon="['fas', 'user-secret']" /></a></li>
                </ul>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
	data(){
		return {
			persons: [
				{
				name: "Daniel",
				role: "Frontend Developer",
				},
				{
				name: "Mykhail",
				role: "Fullstack Developer",
				},
				{
				name: "Ivan",
				role: "QA Engineer",
				}
				],
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.demo{ background: #262526; }
.our-team{
    padding: 20px 15px 30px;
    background: #fff;
    border-radius: 15px;
    text-align: center;
}
.our-team .pic{
    display: inline-block;
    width: 100%;
    height: 100%;
    background: #fff;
    padding: 10px;
    margin-bottom: 25px;
    transition: all 0.5s ease 0s;
}
.our-team:hover .pic{
    background: #17bebb;
    border-radius: 50%;
}
.pic img{
    width: 100%;
    height: auto;
    border-radius: 50%;
}
.our-team .title{
    display: block;
    font-size: 20px;
    font-weight: 600;
    color: #2e282a;
    text-transform: uppercase;
    margin: 0 0 7px 0;
}
.our-team .post{
    display: block;
    font-size: 15px;
    color: #17bebb;
    text-transform: capitalize;
    margin-bottom: 15px;
}
.our-team .social{
    padding: 0;
    margin: 0;
    list-style: none;
}
.our-team .social li{
    display: inline-block;
    margin-right: 5px;
}
.our-team .social li a{
    display: block;
    width: 30px;
    height: 30px;
    line-height: 30px;
    border-radius: 50%;
    font-size: 15px;
    color: #17bebb;
    border: 1px solid #17bebb;
    transition: all 0.5s ease 0s;
}
.our-team:hover .social li a{
  background: #17bebb;
  color: #fff;
}
</style>
