import { routes } from "./routes";

export const diploms = [
  {
    title: "Квалификация - бакалавр по специальности «Психология»",
    src: "/assets/images/carousel/diploms/2.jpg",
    page: routes.psihologiya,
  },
  {
    title:
      "Квалификация - клинический психолог.",
    src: "/assets/images/carousel/diploms/3.jpg",
    page: routes.clinic_psy,
  },
  {
    title: "Когнитивно-поведенческая психотерапия в практике психолога",
    src: "/assets/images/carousel/diploms/4.jpg",
    page: routes.kpt,
  },
  {
    title:
      "Семейное и детское психологическое консультирование",
    src: "/assets/images/carousel/diploms/5.jpg",
    page: routes.family,
  },
  {
    title: "Метафорические ассоциативные карты как инструмент работы психолога",
    src: "/assets/images/carousel/diploms/6.jpg",
    page: routes.family,
  },
  {
    title:
      "Квалификация - консультант по коррекции веса и психологии пищевого поведения",
    src: "/assets/images/carousel/diploms/7.jpg",
    page: routes.eating_behavior,
  },
  {
    title: "Квалификация - фельдшер по специальности «Лечебное дело»",
    src: "/assets/images/carousel/diploms/1.jpg",
    page: routes.lechebnoe_delo,
  },
];

export const makePhotosArray = () => {
  const a = [];
  for (let index = 1; index < 25; index++) {
    a.push({
      title: index.toString(),
      src: `/assets/images/carousel/gallary/${index}.jpg`,
    });
  }
  return a;
};
