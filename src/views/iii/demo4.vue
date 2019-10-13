<template>
  <div class="animated fadeIn">

    <div>

          <nav class="navbar">
            <a class="navbar-brand"><h4><b>會員管理</b></h4></a>
            <form class="form-inline">
              <input class="form-control mr-sm-2" type="search" placeholder="會員名字" aria-label="Search" v-model="keyword">
              <!-- <button class="btn btn-outline-success my-2 my-sm-0" type="submit">搜尋</button> -->
            </form>
          </nav>

    </div>

    <b-card no-body class="card-default" style="text-align: center">
      <table class="table"  style="table-layout:fixed;">
        <thead>
          <tr>
            <th scope="col">No.</th>
            <th scope="col">會員名稱</th>
            <th scope="col">電話</th>
            <th scope="col">E-mail</th>
            <th scope="col">是否為開發者</th>
            <th scope="col">停權</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(event,index) in search(keyword)" v-bind:key="event.id">
            <td>{{index+1}}</td>
            <td>{{event.name}}</td>
            <td>{{event.phone}}</td>
            <td>{{event.email}}</td>
            <td>{{event.level}}</td>
            <td>
              <button type="button" class="btn btn-primary btn-sm">是</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <button type="button" class="btn btn-danger btn-sm">否</button>
            </td>
          </tr>
        </tbody>
      </table>
      <!-- </b-card-body> -->
    </b-card>
  </div>
</template>
<script>
import EventService from '@/service/EventService.js'

export default {
  data() {
    return {
      keyword: "",
      events: []
    };
  },
  created() {
    EventService.memberManage()
      .then(response => {
        this.events = response.data;
        // console.log("data---", response.data);
      })
      .catch(error => {
        console.log("There was an error:", error.response);
      });
  },
  methods: {
    search(keyword) {
      var newList = [];
      this.events.forEach(event => {
        if (event.name.indexOf(keyword) != -1) {
          newList.push(event);
        }
      });
      return newList;
    }
  }
}
</script>