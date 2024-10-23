import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import { AuthProvider } from "./context/AuthProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<AuthProvider>
			<ChakraProvider>
				<BrowserRouter>
					<Routes>
						<Route path="/*" element={<App />} />
					</Routes>
				</BrowserRouter>
			</ChakraProvider>
		</AuthProvider>
	</React.StrictMode>
);
