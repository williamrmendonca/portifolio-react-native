const images = [
  {
    uri:
      "https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80",
    title: "Burger",
  },
  {
    uri:
      "https://images.unsplash.com/photo-1506354666786-959d6d497f1a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTZ8fGZvb2R8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    title: "Pizza",
  },
  {
    uri:
      "https://images.unsplash.com/photo-1539252554453-80ab65ce3586?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8c2FuZHdpY2h8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    title: "Sandwich",
  },
  {
    uri:
      "https://images.unsplash.com/photo-1501200291289-c5a76c232e5f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hpY2tlbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    title: "Chicken",
  },
  {
    uri:
      "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTN8fGZvb2R8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    title: "Pancake",
  },
  {
    uri:
      "https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80",
    title: "Burger",
  },
  {
    uri:
      "https://images.unsplash.com/photo-1506354666786-959d6d497f1a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTZ8fGZvb2R8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    title: "Pizza",
  },
  {
    uri:
      "https://images.unsplash.com/photo-1539252554453-80ab65ce3586?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8c2FuZHdpY2h8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    title: "Sandwich",
  },
  {
    uri:
      "https://images.unsplash.com/photo-1501200291289-c5a76c232e5f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hpY2tlbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    title: "Chicken",
  },
  {
    uri:
      "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTN8fGZvb2R8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    title: "Pancake",
  },
];
export const data = images.map((data, index) => ({
  key: String(index + 1),
  image: data.uri,
  title: data.title,
  description:
    "É um fato estabelecido há muito tempo que um leitor se distrairá com o conteúdo legível de uma página ao examinar seu layout. O objetivo de usar Lorem Ipsum é que ele tem uma distribuição de letras mais ou menos normal",
}));
// É um fato estabelecido há muito tempo que um leitor se distrairá com o conteúdo legível de uma página ao examinar seu layout. O objetivo de usar Lorem Ipsum é que ele tem uma distribuição de letras mais ou menos normal
// It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters
