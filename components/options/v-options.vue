<template>
  <div>
    <VPageHeader
      :title="pageTitle"
      :color="headerColor"
      @toggle="toggleMenu"
    />
    <VOptionsMenu :show-menu="showMenu" />
    <div class="options--view">
      <RouterView />
    </div>
  </div>
</template>

<script>
import VOptionsMenu from 'components/options/v-options-menu';
import VPageHeader from 'components/v-page-header';
import { mapState } from 'vuex';

export default {
  components: {
    VOptionsMenu,
    VPageHeader
  },
  data () {
    return {
      showMenu: false
    };
  },
  computed: {
    ...mapState({
      services: 'services',
      service (state) {
        return state.services.find((service) => service.optionsPath === this.$route.path);
      }
    }),
    headerColor () {
      if (this.service) {
        return this.service.color;
      }
      return '#03a9f4';
    },
    pageTitle () {
      if (this.service) {
        return this.service.name;
      } else if (this.$route.path === '/support') {
        return 'Support';
      } else {
        return '';
      }
    }
  },

  methods: {
    toggleMenu () {
      this.showMenu = !this.showMenu;
    }
  }
};
</script>

<style src="css/options/v-options.scss"></style>
