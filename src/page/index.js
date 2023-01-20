import Centralise from "../components/contralize";
import Form from "../components/form";

import TextField from "@mui/material/TextField";
import InputAutoComplete from "../components/inputAutoComplete";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import Title from "../components/title";
import Conteiner from "../components/conteiner";
import { useState } from "react";
import { useAlert } from "../context/AlertContext";

import post from "../service";
import LinearLoading from "../components/linearProgress";

export default function HomePage() {
	const { setMessage } = useAlert();
	const [isLoading, setIsLoading] = useState(false);
	const [form, setForm] = useState({
		name: "",
		email: "",
		escolaridade: "",
		cargoDesejado: "",
		observacoes: "",
	});

	const [file, setFile] = useState(null);

	function handlerInput(e) {
		setForm({ ...form, [e.target.name]: e.target.value });
	}

	async function handlerSubmit(e) {
		e.preventDefault();
		setIsLoading(true);

		const dataForm = new FormData();
		dataForm.append("file", file);
		dataForm.append("nome", form.name);
		dataForm.append("email", form.email);
		dataForm.append("escolaridade", form.escolaridade);
		dataForm.append("cargoDesejado", form.cargoDesejado);
		dataForm.append("observacoes", form.observacoes);

		try {
			console.log(form);
			await post(dataForm);
			setIsLoading(false);
			setMessage({ text: "Envio concluido", type: "success" });
		} catch (erro) {
			setMessage({ text: "Tipo de arquivo incompativel" });
		}

		return;
	}

	return (
		<Centralise>
			<Conteiner>
				<Title>Candidate-se agora</Title>
				<Form onSubmit={(e) => handlerSubmit(e)} enctype="multipart/form-data">
					<TextField
						required
						label="Nome"
						name="name"
						value={form.name}
						onChange={(e) => handlerInput(e)}
					/>
					<TextField
						required
						type="email"
						label="Email"
						name="email"
						value={form.email}
						onChange={(e) => handlerInput(e)}
					/>
					<TextField
						required
						name="cargoDesejado"
						label="Cargo Desejado"
						value={form.cargoDesejado}
						onChange={(e) => handlerInput(e)}
					/>
					<InputAutoComplete obj={form} setObj={setForm} required />

					<TextField
						label="Obsevações"
						name="observacoes"
						value={form.observacoes}
						onChange={(e) => handlerInput(e)}
					/>
					<InputLabel>Curriculo (.pdf, .doc ou .docx):</InputLabel>
					<TextField
						required
						name="file"
						type="file"
						default="Nenhum arquivo escolhido"
						//value={file}
						onChange={(e) => setFile(e.target.files[0])}
					/>
					<Button
						type="submit"
						sx={{ height: 50, marginTop: 2 }}
						variant="contained"
					>
						{isLoading ? <LinearLoading /> : "Enviar Condidatura"}
					</Button>
				</Form>
			</Conteiner>
		</Centralise>
	);
}
