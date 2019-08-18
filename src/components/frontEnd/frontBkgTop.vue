<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <nav class="navbar navbar-light bg-primary">
      <router-link class="navbar-brand" to="/products">
        <i class="fas fa-user-tie" aria-hidden="true"></i>
        金仕曼 Gentleman Shop
      </router-link>

      <div class="dropdown ml-auto">
        <button
          class="btn btn-sm btn-cart"
          data-toggle="dropdown"
          data-flip="false"
          id="carmenu"
          @click="showcarORnot"
        >
          <i class="fa fa-shopping-cart text-dark fa-2x" aria-hidden="true"></i>
          <span class="badge badge-pill badge-danger">{{cartData.length}}</span>
          <span class="sr-only">unread messages</span>
        </button>
        <div
          class="dropdown-menu dropdown-menu-right p-3"
          style="min-width: 400px"
          data-offset="400"
          :class="{show:showcar}"
          aria-labelledby="carmenu"
        >
          <h6>已選擇商品</h6>
          <table class="table table-sm">
            <tbody>
              <tr v-for="item in cartData" :key="item.id">
                <td class="align-middle text-center">
                  <a
                    href="#removeModal"
                    class="text-muted"
                    data-toggle="modal"
                    @click.prevent="delCartItem(item.id)"
                  >
                    <i class="far fa-trash-alt"></i>
                  </a>
                </td>
                <td class="align-middle">{{item.product.title}}</td>
                <td class="align-middle">{{item.qty}} {{item.product.unit}}</td>
                <td class="align-middle text-right">${{item.total}}</td>
              </tr>
            </tbody>
          </table>
          <a href="#" class="btn btn-primary btn-block" @click.prevent="gotoCheckOut()">
            <i class="fa fa-cart-plus" aria-hidden="true"></i> 結帳去
          </a>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  props: ["cartData"],
  data() {
    return {
      isLoading: false,
      showcar: false
    };
  },

  methods: {
    delCartItem(id) {
      const api = `${process.env.APIPATH}/api/${process.env.COUSTOMPATH}/cart/${id}`;
      const vm = this;
      vm.isLoading = true;
      this.$http.delete(api).then(response => {
        console.log(response);
        this.$emit("afterRemove", id);
        vm.isLoading = false;
      });
    },
    showcarORnot() {
      this.showcar = !this.showcar;
    },
    gotoCheckOut() {
      const vm = this;
      console.log("gotoCheckOut");
      vm.$router.push(`/checkPage`);
    }
  }
};
</script>

