import { useAppsStore } from '@@/app/stores/appsStore';

export const useCoachStore = defineStore('coachStore', () => {
  const appsStore = useAppsStore();

  return {
    // state

    // getters

    // actions

  }
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAppsStore, import.meta.hot))
}