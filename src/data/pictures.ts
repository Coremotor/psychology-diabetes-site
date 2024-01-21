import {diplomsRoutes} from "./routes";

export const diploms = [
    {
        title: "Квалификация - бакалавр по специальности «Психология»",
        src: "/assets/images/diploms/psihologiya.jpg",
        page: diplomsRoutes.psihologiya,
    },
    {
        title:
            "Квалификация - клинический психолог, профессиональная переподготовка",
        src: "/assets/images/diploms/clinic_psy.jpg",
        page: diplomsRoutes.clinic_psy,
    },
    {
        title: "Когнитивно-поведенческая психотерапия в практике психолога",
        src: "/assets/images/diploms/kpt.jpg",
        page: diplomsRoutes.kpt,
    },
    // {
    //   title: "Семейное и детское психологическое консультирование",
    //   src: "/assets/images/diploms/family.jpg",
    //   page: diplomsRoutes.family,
    // },
    {
        title:
            "Квалификация - консультант по коррекции веса и психологии пищевого поведения",
        src: "/assets/images/diploms/eating-behavior.jpg",
        page: diplomsRoutes.eating_behavior,
    },
    {
        title: "Педагог дополнительного образования детей и взрослых",
        src: "/assets/images/diploms/teacher.jpg",
        page: diplomsRoutes.teacher,
    },
    {
        title: "Метафорические ассоциативные карты как инструмент работы психолога",
        src: "/assets/images/diploms/mac.jpg",
        page: diplomsRoutes.mac,
    },
    {
        title: "Квалификация - фельдшер по специальности «Лечебное дело»",
        src: "/assets/images/diploms/lechebnoe_delo_1.jpg",
        page: diplomsRoutes.lechebnoe_delo,
    },
];

export const makePhotosArray = () => {
    const a = [];
    for (let index = 1; index < 30; index++) {
        a.push({
            title: index.toString(),
            src: `/assets/images/gallery/${index}.jpg`,
        });
    }
    return a;
};

export const certificates = [
    {
        title:
            "Онлайн - тренинг: Психологическое консультирование с применением метафорических ассоциативных карт",
        src: "/assets/images/certificates/mac.jpg",
    },
    {
        title: "Онлайн - тренинг: Мир детских эмоций",
        src: "/assets/images/certificates/world_children_emotions.jpg",
    },
    {
        title: "Онлайн - тренинг: МАМА.ПАПА",
        src: "/assets/images/certificates/mother-father.jpg",
    },
    {
        title: "Онлайн - тренинг: АРХЕТИПЫ И ОТНОШЕНИЯ",
        src: "/assets/images/certificates/archetypes-relationships.jpg",
    },
];

export const reviews = [
    {src: "/assets/images/reviews/1.jpg"},
    {src: "/assets/images/reviews/2.jpg"},
    {src: "/assets/images/reviews/3.jpg"},
    {src: "/assets/images/reviews/4.jpg"},
    {src: "/assets/images/reviews/5.jpg"},
    {src: "/assets/images/reviews/6.jpg"},
    {src: "/assets/images/reviews/7.jpg"},
    {src: "/assets/images/reviews/8.jpg"},
    {src: "/assets/images/reviews/9.jpg"},
    {src: "/assets/images/reviews/10.jpg"},
];
