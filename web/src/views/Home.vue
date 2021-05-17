<template>
  <div class="main-block">
    <div v-if="loading">
      loading...
    </div>
    <div v-else>
      <div class="options">
        <input
          type="text"
          v-model="sortData"
          :placeholder="`Filter by ${sortParam}`"
          class="input-style"
        />
        <b-dropdown
          :text="`Sort By ${sortParam}`"
          variant="light"
          class="m-md-2"
        >
          <b-dropdown-item
            @click="sortParam = option"
            v-for="option in sortOptions"
            :key="option"
            variant="dark"
            class="m-md-2"
          >
            {{ option }}
          </b-dropdown-item>
        </b-dropdown>
      </div>
      <div class="flex-grid">
        <div
          v-for="person in list"
          :key="person.id"
          @click="modalShow = !modalShow"
          class="person"
        >
          <div class="pic">
            <img :src="person.avatarPhoto" />
          </div>
          <h3 class="name">{{ person.firstName }} {{person.lastName}}</h3>
          <p class="office">{{person.location}}</p>
          <ul class="social">
            <li>
              <a :href="person.github" target="_blank"
                ><i class="fab fa-github"></i
              ></a>
            </li>
            <li>
              <a :href="person.linkedin" target="_blank"
                ><i class="fab fa-linkedin-in"></i
              ></a>
            </li>
            <li>
              <a :href="person.twitter" target="_blank"
                ><i class="fab fa-facebook"></i
              ></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Employees",
  props: {
    msg: String,
    modalShow: false,
  },
  data() {
    return {
      sortData: "",
      loading: true,
      sortOptions: ["fullName", "location"],
      sortParam: "fullName",
      persons: [],
    };
  },
  async beforeMount() {
    await this.fetchData();
  },
  computed: {
    list() {
      return this.sortData.length
        ? this.persons.filter((elem) =>
            elem[this.sortParam].includes(this.sortData)
          )
        : this.persons.sort(this.sortBy(this.sortParam));
    },
  },
  methods: {
    sortBy: (key) => (d1, d2) =>
      d1[key].toLowerCase() > d2[key].toLowerCase() ? 1 : -1,
    async fetchData() {
      this.loading = true;
      const res = await fetch("http://localhost:3000", {
        headers: {
          Authorization:
            "api-key 14:2021-05-12:alicia.sjoberg@tretton37.com 84896b423c096a55e3b60bf07d6a9d58c16510a583af70d4e34dfa99aace1dd2",
        },
      });

      const data = await res.json();
      this.persons = data;
      this.loading = false;
    },
  },
};
</script>

<style scoped lang="scss">
.main-block {
  background: #59a5a5;
  height: 100%;
}
.flex-grid {
  display: flex;
  padding-top: 50px;
  justify-content: space-around;
  flex-wrap: wrap;
  max-width: 1400px;
  margin: auto;
}
.person {
  padding: 20px 15px 30px;
  margin-left: 10px;
  background: #fff;
  border-radius: 15px;
  height: 390px;
  width: 250px;
  text-align: center;
  margin-bottom: 10px;
}
.pic {
  display: inline-block;
  width: 60%;
  height: 50%;
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
  font-size: 25px;
  font-weight: 600;
  color: #2e282a;
  text-transform: uppercase;
  margin: 0 0 7px 0;
}
.office {
  display: block;
  font-size: 20px;
  color: #17bebb;
  text-transform: capitalize;
  margin-bottom: 25px;
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
.options{
  padding-top: 50px;
}
.input-style{
  width: 30%;
  height: 37px;
}
</style>
