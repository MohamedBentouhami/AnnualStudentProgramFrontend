import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import { Provider as ReduxProvider } from "react-redux"
import HomePage from "./pages/home-page/home-page.jsx"
import CoursePage from "./pages/course-page/course-page.jsx"
import StudentPage from "./pages/student-page/student-page.jsx"
import Header from "./containers/header/header.jsx"
import store from "./store/store.js"

function App() {

  return (
    <>
      <ReduxProvider store={store}>
        <Router>
          <Header></Header>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/courses" element={<CoursePage />} />
            <Route path="/students" element={<StudentPage />} />
          </Routes>
        </Router>
      </ReduxProvider>
    </>
  )
}

export default App
