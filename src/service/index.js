import axios from "axios";

const Base_URL = "http://localhost:4000";

export const instance = axios.create({
	baseURL: Base_URL,
});

export default async function post(date) {
	const response = await instance.post("/curriculo", date);
	return response;
}
