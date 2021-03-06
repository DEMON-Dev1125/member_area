/*************This is main route define part***************** */
import Content from "./views/Contents/content-route.js";
import Group from "./views/Groups/group-route.js";
var routes = [
  {
    path: "/content",
    name: "Conteúdos",
    icon: "fas fa-list-alt",
    component: Content,
    layout: "/main",
  },
  {
    path: "/group",
    name: "Turmas",
    icon: "fa fa-users",
    component: Group,
    layout: "/main",
  },
];

export default routes;
