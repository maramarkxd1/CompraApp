<template>
  <div class="navbar">
    <div class="navbar_Menu container">
      <div class="navbar_Left">
        <img class="navbar_Logo" src="@/assets/logoN.png" />
      </div>
      <div class="navbar_Midle">
        <input
          class="navbar_Search"
          type="text"
          placeholder="Buscar Producto"
        />
        <img class="navbar_Lupa" src="@/assets/lupaa.png" />
      </div>
      <div class="navbar_MidleResponse">
        <img class="navbar_IconLupa" src="@/assets/lupaa.png" />
      </div>
      <div class="navbar_Right">
        <img class="navbar_Car" src="@/assets/carritoN.png" />
        <img class="navbar_Ham" src="@/assets/menuN.png" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheNavbar'
}
</script>

<style lang="scss" scoped>
.navbar {
  width: 100%;
  height: 80px;
  background-color: $color-michi;
  &_Menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &_Left {
    position: relative;
  }
  &_Logo {
    height: 80px;
    widows: 80px;
    cursor: pointer;
  }
  &_Logo:hover {
    background-color: white;
    border-radius: 10px;
  }
  &_Midle {
    width: 600px;
    height: 50px;
    background-color: white;
    border-radius: 15px;
    position: relative;

    @include mq-md {
      width: 100%;
    }
    @include mq-sm {
      display: none;
    }
  }
  &_MidleResponse {
    display: none;
    @include mq-sm {
      display: block;
    }
  }
  &_IconLupa {
    padding: 15px;
  }
  &_IconLupa:hover {
    background-color: white;
    border-radius: 10px;
  }
  &_Search {
    width: 90%;
    height: 50%;
    border: none;
    outline: none;
    position: absolute;
    left: 30px;
    top: 13px;
    opacity: 0.5;

    @include mq-md {
      width: 70%;
    }
    // @include mq-sm {
    //     left: 15px;
    // }
  }
  &_Lupa {
    position: absolute;
    cursor: pointer;
    top: 10px;
    right: 18px;

    // @include mq-sm {
    //     width: 25px;
    //     height: 25px;
    //     top: 13px;
    //     right: 13px;
    // }
  }
  &_Right {
    display: inherit;
  }
  &_Car {
    padding: 15px;
    cursor: pointer;
  }
  &_Car:hover {
    background-color: white;
    border-radius: 10px;
  }
  &_Ham {
    padding: 15px;
    cursor: pointer;
  }
  &_Ham:hover {
    background-color: white;
    border-radius: 10px;
  }
}
</style>
