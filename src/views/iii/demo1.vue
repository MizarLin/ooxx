<template>
  <div class="animated fadeIn">
    <nav class="navbar">
      <a class="navbar-brand"><h4><b>我的個人資料</b></h4></a>
    </nav>

    <b-card no-body class="card-default">
      <b-card-body>

        <form>
          <!-- <div class="form-group row">
            <label for="" class="col-sm-2 col-form-label">我的頭像</label>
            <div class="col-sm-10 input-group">
              <input type="text" class="form-control" placeholder="請選擇圖片" aria-label="Recipient's username" aria-describedby="button-addon2">
              <div class="input-group-append">
                <button class="btn btn-outline-secondary" type="button" id="button-addon2">上傳圖片</button>
              </div>
            </div>
          </div> -->

          <div class="form-group row">
            <label for="inputName" class="col-sm-2 col-form-label">我的名字</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" id="inputName" placeholder="Name">
            </div>
          </div>

          <div class="form-group row">
            <label for="inputPhone" class="col-sm-2 col-form-label" pattern="09\d{2}\-?\d{3}\-?\d{3}">我的電話</label>
            <div class="col-sm-10">
              <input type="phone" class="form-control" id="inputPhone" placeholder="09xx-xxx-xxx">
            </div>
          </div>

          <div class="form-group row">
            <label for="inputOldPsw" class="col-sm-2 col-form-label" pattern="[a-zA-Z0-9]{8,}">舊的密碼</label>
            <div class="col-sm-10">
              <input type="password" class="form-control" id="inputOldPsw" placeholder="至少8位英數的密碼限制">
            </div>
          </div>

          <div class="form-group row">
            <label for="inputNewPsw1" class="col-sm-2 col-form-label" pattern="[a-zA-Z0-9]{8,}">新的密碼</label>
            <div class="col-sm-10">
              <input type="password" class="form-control" id="inputNewPsw1" placeholder="至少8位英數的密碼限制">
            </div>
          </div>

          <div class="form-group row">
            <label for="inputNewPsw2" class="col-sm-2 col-form-label" pattern="[a-zA-Z0-9]{8,}">再輸入一次新密碼</label>
            <div class="col-sm-10">
              <input type="password" class="form-control" id="inputNewPsw2" placeholder="至少8位英數的密碼限制">
            </div>
          </div>

          <div style="text-align: center">
            <button type="submit" class="btn btn-primary">確認修改</button>
          </div>
        </form>

      </b-card-body>
    </b-card>
  </div>
</template>
