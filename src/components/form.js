import styled from "styled-components";

const Form = styled.form`
	//height: 60vh;
	background-color: whitesmoke;
	padding: 20px;
	border-radius: 15px;

	display: flex;
	flex-direction: column;
	justify-content: start;
	gap: 12px;
	@media (max-width: 700px) {
		width: 100%;
		justify-content: center;
		gap: 15px;
	}
`;

export default Form;
