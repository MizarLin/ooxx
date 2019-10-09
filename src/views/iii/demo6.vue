<template>
  <div class="animated fadeIn">
    <nav class="navbar">
      <a class="navbar-brand"><h4><b>開發者資料</b></h4></a>
    </nav>

    <b-card no-body class="card-default">
      <b-card-body>

        <form>

          <div class="form-group row">
            <label for="inputName" class="col-sm-2 col-form-label">名字</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" id="inputName" placeholder="Name">
            </div>
          </div>

          <div class="form-group row">
            <label for="inputUser" class="col-sm-2 col-form-label" pattern="^[A-Z]\d{9}$">身分證字號</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" id="inputUser" placeholder="請輸入身分證">
            </div>
          </div>

          <div class="form-group row">
            <label for="inputPhone" class="col-sm-2 col-form-label" pattern="09\d{2}\-?\d{3}\-?\d{3}">電話</label>
            <div class="col-sm-10">
              <input type="phone" class="form-control" id="inputPhone" placeholder="09xx-xxx-xxx">
            </div>
          </div>

          <div class="form-group row">
            <label for="inputEmail" class="col-sm-2 col-form-label" pattern="^.*@gmail\.com$">E-mail</label>
            <div class="col-sm-10">
              <input type="email" class="form-control" id="inputEmail" placeholder="xxx@gmail.com">
            </div>
          </div>
          
          <div class="form-group row">
            <label for="inputPsw" class="col-sm-2 col-form-label" pattern="[a-zA-Z0-9]{8,}">密碼</label>
            <div class="col-sm-10">
              <input type="password" class="form-control" id="inputPsw" placeholder="至少8位英數的密碼限制">
            </div>
          </div>

          <div style="text-align: center">
            <button type="submit" class="btn btn-primary">確認送出</button>
          </div>

        </form>

      </b-card-body>
    </b-card>
  </div>
</template>
