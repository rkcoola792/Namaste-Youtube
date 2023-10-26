import Body from './components/Body';
import { Provider } from 'react-redux';
import store from "./utils/appStore"
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';
function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body></Body>,
      children: [
        {
          path: "/",
          element: <MainContainer></MainContainer>,
        },
        {
          path: "/watch",
          element: <WatchPage></WatchPage>,
        },
      ],
    },
  ]);
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <RouterProvider router={appRouter}></RouterProvider>
      </div>
    </Provider>
  );
}

export default App;
