declare module "*.vue" {
  import { DefineComponent } from "vue";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

interface Window {
  eventCenterForAppNameVite: any;
  __MICRO_APP_NAME__: string;
  __MICRO_APP_ENVIRONMENT__: string;
  __MICRO_APP_BASE_APPLICATION__: string;
}
