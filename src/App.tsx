import "./App.css";
import Login from "./pages/login";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Admin from "./pages/admin";
import Layout from "./components/Layout";
import Editor from "./pages/editor";
import Lounge from "./pages/lounge";
import Missing from "./pages/missing";
import RequireAuth from "./components/RequireAuth";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Layout />}>
					{/**Public Routes */}
					<Route path="/login" element={<Login />} />

					{/**Private Routes */}
					<Route element={<RequireAuth />}>
						<Route path="/admin" element={<Admin />} />
						<Route path="/" element={<Home />} />
						<Route path="/editor" element={<Editor />} />
						<Route path="/lounge" element={<Lounge />} />
					</Route>

					{/**catch all */}
					<Route path="/*" element={<Missing />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
