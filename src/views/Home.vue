<template>
<div class="main-block">
  <div class="flex-grid">
    <div v-for="person in persons" :key="person">
        <div class="person">
          <div class="pic">
            <img :src="person.photo" />
          </div>
          <h3 class="name">{{ person.name }}</h3>
          <span class="role">{{ person.role }}</span>
          <ul class="social">
            <li>
              <a :href="person.github" target="_blank"
                ><i class="fab fa-github"></i></a>
            </li>
            <li>
              <a :href="person.linkedin" target="_blank"
                ><i class="fab fa-linkedin-in"></i></a>
            </li>
            <li>
              <a :href="person.twitter" target="_blank"
                ><i class="fab fa-facebook"></i></a>
            </li>
          </ul>
        </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      persons: [
        {
          name: "Daniel",
          role: "Frontend Developer",
          github: "https://github.com/DanielCherman",
          linkedin: "https://www.linkedin.com/in/daniel-cherman-50486718a/",
          twitter: "https://twitter.com/?lang=ru",
          photo: require('../assets/daniel.jpeg')
        },
        {
          name: "Mykhail",
          role: "Fullstack Developer",
          github: "https://github.com",
          linkedin: "https://www.linkedin.com",
          twitter: "https://twitter.com/?lang=ru",
          photo: require('../assets/mykhail.jpeg')
        },
        {
          name: "Paul",
          role: "Junior Delletant",
          github: "https://github.com",
          linkedin: "https://www.linkedin.com",
          twitter: "https://twitter.com/?lang=ru",
          photo: require('../assets/paul.jpeg')
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.main-block{
  background: #59a5a5;
  height: 100vh;
}
.flex-grid{
  display: flex;
  padding-top: 50px;
  justify-content: space-around;
  flex-wrap: wrap;
}
.person {
  padding: 20px 15px 30px;
  margin-left: 10px;
  background: #fff;
  border-radius: 15px;
  height: 350px;
  width: 250px;
  text-align: center;
  margin-bottom: 10px;
}
.pic {
  display: inline-block;
  width: 60%;
  height: 43.5%;
  padding: 4px;
  margin-bottom: 25px;
  transition: all 0.5s ease 0s;
}
.person:hover .pic {
  background: #17bebb;
  border-radius: 50%;
}
.pic img {
  width: 99%;
  height: auto;
  border-radius: 50%;
}
.name {
  display: block;
  font-size: 20px;
  font-weight: 600;
  color: #2e282a;
  text-transform: uppercase;
  margin: 0 0 7px 0;
}
 .role {
  display: block;
  font-size: 15px;
  color: #17bebb;
  text-transform: capitalize;
  margin-bottom: 15px;
}
.social {
  padding: 0;
  margin: 0;
  list-style: none;
}
 .social li {
  display: inline-block;
  margin-right: 5px;
}
 .social li a {
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
.person:hover .social li a {
  background: #17bebb;
  color: #fff;
}
</style>
