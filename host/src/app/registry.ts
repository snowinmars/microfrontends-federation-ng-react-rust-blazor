export const registry = {
  childAngular: () => import('childAngular/web-components'),
  childReact: () => import('childReact/web-components'),
  childWasm: () => import('childWasm/web-components'),
  childBlazor: () => import('childBlazor/web-components'),
};
