import React from 'react'
import ReactDOM from 'react-dom/client'
import Root, { loader as rootLoader, action as rootAction } from './Root.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ErrorPage from './ErrorPage.jsx'
import Contact, { loader as contactLoader } from './routes/Contact.jsx'
import EditContact, { action as editAction } from './routes/edit.jsx'
import { action as destroyAction } from "./routes/destroy";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        path: 'contacts/:contactId',
        element: <Contact />,
        loader: contactLoader
      },
      {
        path: 'contacts/:contactId/edit',
        element: <EditContact />,
        loader: contactLoader,
        action: editAction,
      },
      {
        path: "contacts/:contactId/destroy",
        action: destroyAction,
      }
    ]
  },
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>

      </RouterProvider>
    </Provider>
  </React.StrictMode>,
)
