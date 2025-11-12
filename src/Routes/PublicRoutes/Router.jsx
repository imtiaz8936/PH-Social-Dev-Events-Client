import { createBrowserRouter } from "react-router";
import Home from "../../Pages/Home";
import Root from "../../Layouts/Root/Root";
import Register from "../../Pages/Register";
import Login from "../../Pages/Login";
import CreateEvent from "../../Pages/CreateEvent";
import JoinedEvents from "../../Pages/JoinedEvents";
import ManageEvents from "../../Pages/ManageEvents";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import UpcomingEvents from "../../Pages/UpcomingEvents";
import EventDetails from "../../Pages/EventDetails";
import JoinEventForm from "../../Pages/JoinEventForm";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/auth-register",
        Component: Register,
      },
      {
        path: "/auth-login",
        Component: Login,
      },
      {
        path: "/upcoming-events",
        Component: UpcomingEvents,
      },
      {
        path: "/upcoming-events/event-details/:id",
        loader: ({ params }) =>
          fetch(
            `http://localhost:3000/upcoming-events/event-details/${params.id}`
          ),
        element: (
          <PrivateRoutes>
            <EventDetails></EventDetails>
          </PrivateRoutes>
        ),
      },
      {
        path: "/join-event-form/:id",
        loader: ({ params }) =>
          fetch(
            `http://localhost:3000/upcoming-events/event-details/${params.id}`
          ),
        element: (
          <PrivateRoutes>
            <JoinEventForm></JoinEventForm>
          </PrivateRoutes>
        ),
      },
      {
        path: "/manage-events",
        element: (
          <PrivateRoutes>
            <ManageEvents></ManageEvents>
          </PrivateRoutes>
        ),
      },
      {
        path: "/joined-events",
        element: (
          <PrivateRoutes>
            <JoinedEvents></JoinedEvents>
          </PrivateRoutes>
        ),
      },
      {
        path: "/create-event",
        element: (
          <PrivateRoutes>
            <CreateEvent></CreateEvent>
          </PrivateRoutes>
        ),
      },
    ],
  },
  {
    path: "/*",
    element: <div>Error | 404</div>,
  },
]);
