import Centralise from "../../components/contralize";
import Form from "../../components/form";

import TextField from "@mui/material/TextField";
import InputAutoComplete from "../../components/inputAutoComplete";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import Title from "../../components/title";
import Conteiner from "../../components/conteiner";

export default function HomePage() {
	return (
		<Centralise>
			<Conteiner>
				<Title>Candidate-se agora</Title>
				<Form>
					<TextField
						label="Name"
						//value={name}
						//onChange={handleChange}
					/>
					<TextField
						type="email"
						label="Email"
						//value={name}
						//onChange={handleChange}
					/>
					<TextField
						label="Cargo Desejado"
						//value={name}
						//onChange={handleChange}
					/>
					<InputAutoComplete></InputAutoComplete>
					<TextField
						label="Obsevações"
						//value={name}
						//onChange={handleChange}
					/>
					<InputLabel>Curriculo (.pdf, .doc ou .docx)</InputLabel>
					<TextField
						type="file"
						default="Nenhum arquivo escolhido"
						//value={name}
						//onChange={handleChange}
					/>
					<Button sx={{ height: 50, marginTop: 2 }} variant="contained">
						Enviar Condidatura
					</Button>
				</Form>
			</Conteiner>
		</Centralise>
	);
}
