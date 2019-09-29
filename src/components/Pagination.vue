<template>
  <div>
    <ul class="pagination">
      <li>
        <a href='#' @click="setPage(pagination.page-1)" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li v-for="i in pagination.totalPages" :key="i.page" @click="setPage(i)">
        <a href='#'
          v-bind:class="{'active':pagination.page === i}"
          @click="fetchUsers(i)">
          {{ i }}
        </a>
      </li>
      <li>
        <a href='#' @click="setPage(pagination.page+1)" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    data() {
      return {
        pagination: {
          page: 1,
          perPage: 4,
          totalPages: 3,
        }
      };
    },
    methods: {
      fetchUsers(page = 1) {
        this.pagination.page = page
        this.$store.dispatch('paginateUsers', this.pagination)
      },
      setPage: function(index) {
        if (index > 0 && index <= this.pagination.totalPages) {
          this.pagination.page = index
          this.fetchUsers(this.pagination.page)
        }
      }
    }
  }
</script>

<style lang="scss">
  .pagination {
    display: inline-block;
    padding-left: 0;
    margin: 20px 0;
    border-radius: 4px;
    li {
      display: inline;
      a {
        position: relative;
        float: left;
        padding: 6px 12px;
        margin-left: -1px;
        line-height: 1.42857143;
        color: #27845d;
        text-decoration: none;
        background-color: #fff;
        border: 1px solid #ddd;

        &.active {
          z-index: 3;
          color: #fff;
          cursor: default;
          background-color: #27845d;
          border-color: #27845d;
        }
      }
      &:first-child > a {
        margin-left: 0;
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
      }
      &:last-child > a {
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
      }
    }
  }
</style>
