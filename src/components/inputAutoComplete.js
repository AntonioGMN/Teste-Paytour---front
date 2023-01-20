import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function InputAutoComplete({ name, obj, setObj }) {
	const escolaridade = [
		"Ensino Médio",
		"Tecnólogo",
		"Ensino Superior Incompleto",
		"Ensino Superior",
		"Pós-Graduação",
		"Mestrado",
		"Doutorado",
	];

	return (
		<Autocomplete
			valeu={obj.escolaridade}
			onChange={(e, newValeu) => setObj({ ...obj, escolaridade: newValeu })}
			inputValue={obj.escolaridade}
			onInputChange={(e, newInputValue) =>
				setObj({ ...obj, escolaridade: newInputValue })
			}
			options={escolaridade}
			renderInput={(params) => (
				<TextField required {...params} label="Escolaridade" />
			)}
		/>
	);
}
