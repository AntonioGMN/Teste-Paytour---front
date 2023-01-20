import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./page/";
import AlertProvide from "./context/AlertContext";

export default function App() {
	return (
		<BrowserRouter>
			<AlertProvide>
				<Routes>
					<Route path="/" element={<HomePage />} />
				</Routes>
			</AlertProvide>
		</BrowserRouter>
	);
}
