<template>
  <div class="animated fadeIn">

    <div>

          <nav class="navbar">
            <a class="navbar-brand"><h4><b>待審核開發者</b></h4></a>
            <form class="form-inline">
              <input class="form-control mr-sm-2" type="search" placeholder="會員名字" aria-label="Search">
              <button class="btn btn-outline-success my-2 my-sm-0" type="submit">搜尋</button>
            </form>
          </nav>

    </div>

    <b-card no-body class="card-default" style="text-align: center">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">No.</th>
            <th scope="col">申請會員</th>
            <th scope="col">申請日期</th>
            <th scope="col">是否同意</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="event in events" :key="event.id">
            <td>{{event.id}}</td>
            <td>{{event.name}}</td>
            <td>{{event.twId}}</td>
            <td>
              <button type="button" class="btn btn-primary btn-sm">是</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <button type="button" class="btn btn-danger btn-sm">否</button>
            </td>
          </tr>
        </tbody>
      </table>
    </b-card>
  </div>
</template>
<script>
import EventService from '@/service/EventService.js'

export default {
    data() {
    return {
        events: []
    }
    },
    created() {
    EventService.getEvents()
        .then(response => {
        this.events = response.data
        console.log("data---",response.data);
        })
        .catch(error => {
        console.log('There was an error:', error.response)
        })
    }
}
</script>