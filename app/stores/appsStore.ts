import fs from 'fs';

export const useAppsStore = defineStore('appStore', () => {
  const config = useRuntimeConfig();
  const apps = ref(['site'].concat(config.public.apps));
  const apps2 = ref(config.public.apps2);
  const menu = ref({});
  const siteMenu = ref([]);
  const menusLoaded = ref(false);

  const loadMenu = async () => {
    import(`./../data/menus.json`).then((comboMenu) => {
      siteMenu.value = comboMenu.default;
    });
  }

  const getMenu = () => {
    const activeApp = getCurrentApp();
    const myMenu = [];
    const copyMenu = JSON.parse(JSON.stringify(siteMenu.value));
    copyMenu.forEach((item) => {
      if (item.show.includes(activeApp)) {
        item.children = item.children.filter((child) => {
          console.log(child.show.includes(activeApp), child.show);
          return child.show.includes(activeApp)
        });
        myMenu.push(item);
      }
    });

    return myMenu;
  };

  const getCurrentApp = () => {
    const router = useRouter();
    const activeRoute = router.currentRoute.value.name;
    let currentApp = "site";
    apps.value.forEach((app) => {
      if (activeRoute?.toString().search(app) === 0) {
        currentApp = app;
      }
    });
    return currentApp;
  }

  loadMenu();

  return {
    // state
    apps,
    menu,
    siteMenu,

    // getters
    getCurrentApp,
    getMenu,

    // actions
  }
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAppsStore, import.meta.hot))
}