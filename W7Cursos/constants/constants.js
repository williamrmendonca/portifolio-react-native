const register_options = [
    {
        id: 0,
        label: "ESTUDANTE"
    },
    {
        id: 1,
        label: "INSTRUTOR"
    }
]

const walkthrough = [
    {
        id: 0,
        title: "Encontre vários cursos online",
        sub_title: "Todos os tipos de cursos educacionais e profissionais disponíveis online.",
        image: require("../assets/images/work.png")
    },
    {
        id: 1,
        title: "Encontre vários cursos online",
        sub_title: "Todos os tipos de cursos educacionais e profissionais disponíveis online.",
        image: require("../assets/images/work.png")
    },
    {
        id: 2,
        title: "Encontre vários cursos online",
        sub_title: "Todos os tipos de cursos educacionais e profissionais disponíveis online.",
        image: require("../assets/images/work.png")
    },
]

const categories = [
    {
        id: 0,
        label: "Mobile Design",
        icon: require("../assets/icons/mobile.png")
    },
    {
        id: 1,
        label: "Modelagem 3D",
        icon: require("../assets/icons/model_3d.png")
    },
    {
        id: 2,
        label: "Web Designing",
        icon: require("../assets/icons/web_design.png")
    },
    {
        id: 3,
        label: "Ilustração",
        icon: require("../assets/icons/illustration.png")
    },
    {
        id: 4,
        label: "Desenho",
        icon: require("../assets/icons/drawing.png")
    },
    {
        id: 5,
        label: "Animação",
        icon: require("../assets/icons/animation.png")
    },
    {
        id: 6,
        label: "Educação",
        icon: require("../assets/icons/education.png")
    },
    {
        id: 7,
        label: "Redes",
        icon: require("../assets/icons/networking.png")
    },
    {
        id: 8,
        label: "Código",
        icon: require("../assets/icons/coding.png")
    },
]

const screens = {
    home: "Início",
    search: "Procurar",
    profile: "Conta"
}

const bottom_tabs = [
    {
        id: 0,
        label: screens.home,
        icon: require("../assets/icons/home.png")
    },
    {
        id: 1,
        label: screens.search,
        icon: require("../assets/icons/search.png")
    },
    {
        id: 2,
        label: screens.profile,
        icon: require("../assets/icons/profile.png")
    }
]

const class_types = [
    {
        id: 0,
        label: "Todos",
        icon: require("../assets/icons/all.png")
    },
    {
        id: 1,
        label: "Equipe",
        icon: require("../assets/icons/staff_pick.png")
    },
    {
        id: 2,
        label: "Original",
        icon: require("../assets/icons/original.png")
    },
]

const class_levels = [
    {
        id: 0,
        label: "Iniciantes"
    },
    {
        id: 1,
        label: "Intermediário"
    },
    {
        id: 2,
        label: "Avançado"
    }
]

const created_within = [
    {
        id: 0,
        label: "Tempo todo"
    },
    {
        id: 1,
        label: "Este mês"
    },
    {
        id: 2,
        label: "Esta semana"
    },
    {
        id: 3,
        label: "Hoje"
    },
    {
        id: 4,
        label: "2 Meses"
    },
    {
        id: 5,
        label: "4 Meses"
    }
]

export default {
    register_options,
    walkthrough,
    categories,
    screens,
    bottom_tabs,
    class_types,
    class_levels,
    created_within
}