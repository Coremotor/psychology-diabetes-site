export const diplomsRoutes: {
  [key: string]: string;
} = {
  lechebnoe_delo: "/diploms/lechebnoe-delo/",
  psihologiya: "/diploms/psihologiya/",
  clinic_psy: "/diploms/clinic-psy/",
  kpt: "/diploms/kpt/",
  family: "/diploms/family/",
  mac: "/diploms/mac/",
  eating_behavior: "/diploms/eating-behavior/",
  teacher: "/diploms/teacher/",
};

export const certificatesRoutes: {
  [key: string]: string;
} = {
  worldChildrenEmotions: "/certificates/world-children-emotions/",
  motherFather: "/certificates/mother-father/",
  archetypesRelationships: "/certificates/archetypes-relationships/",
};

export const routesList = (routes: { [key: string]: string }) => {
  let arr: string[] = [];
  for (let key in routes) {
    const str = routes[key];
    arr.push(str);
  }
  return arr;
};
