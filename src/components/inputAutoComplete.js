import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function InputAutoComplete({
	searchType,
	list,
	obj,
	setObj,
	placeholder,
	defaultValue,
}) {
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
			options={escolaridade}
			//onChange={(e, newValue) => search(newValue)}
			renderInput={(params) => (
				<TextField required {...params} label="Escolaridade" />
			)}
			placeholder={placeholder}
		/>
	);
}
