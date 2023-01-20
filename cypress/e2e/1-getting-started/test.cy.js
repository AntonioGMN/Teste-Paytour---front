/// <reference types="cypress" />

describe("example to-do app", () => {
	it("user should be able to log in", () => {
		cy.visit("http://localhost:3000");

		// fill in the form
		cy.get('input[name="name"]').type("candidato top");
		cy.get('input[name="email"]').type("cantidato@gmail.com");
		cy.get('input[name="cargoDesejado"]').type("dono");
		cy
			.get(".MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root")
			.click();
		cy.get(".MuiAutocomplete-popper").click();
		cy.get('input[name="observacoes"]').type("pode me contrar sem dono");
		cy.get("input[type=file]").selectFile("cypress/downloads/testFile.pdf");

		// submit the form
		cy.get(".MuiButton-root").click();
	});
});
