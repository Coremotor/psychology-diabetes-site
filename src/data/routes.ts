export const routes: {
  [key: string]: string;
} = {
  lechebnoe_delo: "/diploms/lechebnoe-delo/",
  psihologiya: "/diploms/psihologiya/",
  clinic_psy: "/diploms/clinic-psy/",
  kpt: "/diploms/kpt/",
  family: "/diploms/family/",
  mac: "/diploms/mac/",
  // eating_behavior: "/diploms/eating-behavior/",
  // tariffs: "/tariffs/",
};

export const routesList = () => {
  let arr: string[] = [];
  for (let key in routes) {
    const str = routes[key];
    arr.push(str);
  }
  return arr;
};
