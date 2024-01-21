export const nextPage = (routesList: string[], pathname: string) => {
    const currentIndex = routesList.findIndex((route) => route === pathname);

    if (currentIndex === routesList.length - 1) return routesList[0];

    return routesList[currentIndex + 1];
};
