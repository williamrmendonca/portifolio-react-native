const categories = [
    {
        id: 0,
        title: "Mobile Design",
        thumbnail: require("../assets/images/bg_1.png")
    },
    {
        id: 1,
        title: "Modelagem 3D",
        thumbnail: require("../assets/images/bg_2.png")
    },
    {
        id: 2,
        title: "Web Designing",
        thumbnail: require("../assets/images/bg_3.png")
    },
    {
        id: 3,
        title: "Ilustração",
        thumbnail: require("../assets/images/bg_4.png")
    },
    {
        id: 4,
        title: "Desenho",
        thumbnail: require("../assets/images/bg_5.png")
    },
    {
        id: 5,
        title: "Animação",
        thumbnail: require("../assets/images/bg_6.png")
    }
]

const courses_list_1 = [
    {
        id: 0,
        title: "Curso de Design Gráfico",
        duration: "2h 30m",
        thumbnail: require("../assets/images/thumbnail_1.png")
    },
    {
        id: 1,
        title: "Aprenda a discursar como um profissional",
        duration: "1h 30m",
        thumbnail: require("../assets/images/thumbnail_2.png")
    }
]

const courses_list_2 = [
    {
        id: 0,
        title: "Curso de UI/UX do iniciante ao avançado",
        duration: "2h 30m",
        instructor: "Will Mendonça",
        ratings: 4.9,
        price: 75,
        is_favourite: true,
        thumbnail: require("../assets/images/thumbnail_1.png")
    },
    {
        id: 1,
        title: "Curso de UI/UX do iniciante ao avançado",
        duration: "2h 30m",
        instructor: "Will Mendonça",
        ratings: 4.9,
        price: 75,
        is_favourite: false,
        thumbnail: require("../assets/images/thumbnail_2.png")
    },
    {
        id: 2,
        title: "Curso de UI/UX do iniciante ao avançado",
        duration: "2h 30m",
        instructor: "Will Mendonça",
        ratings: 4.9,
        price: 75,
        is_favourite: true,
        thumbnail: require("../assets/images/thumbnail_3.png")
    },
    {
        id: 3,
        title: "Curso de UI/UX do iniciante ao avançado",
        duration: "2h 30m",
        instructor: "Will Mendonça",
        ratings: 4.9,
        price: 75,
        is_favourite: false,
        thumbnail: require("../assets/images/thumbnail_4.png")
    },
    {
        id: 4,
        title: "Curso de UI/UX do iniciante ao avançado",
        duration: "2h 30m",
        instructor: "Will Mendonça",
        ratings: 4.9,
        price: 75,
        is_favourite: false,
        thumbnail: require("../assets/images/thumbnail_4.png")
    },
    {
        id: 5,
        title: "Curso de UI/UX do iniciante ao avançado",
        duration: "2h 30m",
        instructor: "Will Mendonça",
        ratings: 4.9,
        price: 75,
        is_favourite: false,
        thumbnail: require("../assets/images/thumbnail_4.png")
    }
]

const top_searches = [
    {
        id: 0,
        label: "Protótipo"
    },
    {
        id: 1,
        label: "Modelagem"
    },
    {
        id: 2,
        label: "UI/UX"
    },
    {
        id: 3,
        label: "Web"
    },
    {
        id: 4,
        label: "Mobile"
    },
    {
        id: 5,
        label: "Animação"
    },
]

export default {
    categories,
    courses_list_1,
    courses_list_2,
    top_searches
}