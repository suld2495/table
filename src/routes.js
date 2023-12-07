import { createHashRouter } from "react-router-dom";
import App from "../App.tsx";
import { Question } from "./components/Question.jsx";


const routes = [
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/question',
    element: <Question />,
  }
];

export default createHashRouter(routes);