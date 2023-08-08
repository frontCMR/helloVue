import { createApp } from "vue";
import router from "./servicesProject/router";
import App from "./App.vue";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import "bootstrap";

const app = createApp(App);

// app.directive("fontSize", {
//   mounted(el, binding) {
//     el.style.fontSize = binding.value + "px";
//   },
// });
// app.directive("fontSize", {
//   mounted(el, binding) {
//     let size = "18px";
//     switch (binding.arg) {
//       case "sm":
//         size = "14px";
//         break;
//       case "md":
//         size = "18px";
//         break;
//       case "lg":
//         size = "24px";
//     }
//     el.style.fontSize = size;
//   },
// });
// app.directive("fontSize", {
//   mounted(el, binding) {
//     let size = "18px";
//     if (binding.modifiers.sm) {
//       size = "14px";
//     } else if (binding.modifiers.md) {
//       size = "18px";
//     } else if (binding.modifiers.lg) {
//       size = "24px";
//     }
//     el.style.fontSize = size;

//     if (binding.modifiers.red) {
//       el.style.color = "red";
//     } else if (binding.modifiers.green) {
//       el.style.color = "green";
//     } else {
//       el.style.color = "black";
//     }

//     if (binding.modifiers.bold) {
//       el.style.fontWeight = "bold";
//     } else {
//       el.style.fontWeight = "normal";
//     }

//     if (binding.modifiers.italic) {
//       el.style.fontStyle = "italic";
//     } else {
//       el.style.fontStyle = "normal";
//     }
//   },
// });

app.use(router).mount("#app"); 
