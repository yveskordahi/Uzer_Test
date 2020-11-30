const form = document.querySelector('#form');
const xValue = document.querySelector('#xValue');
const yValue = document.querySelector('#yValue');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	const firstXValue = xValue.value.trim();
	const firstYValue = yValue.value.trim();
	
	if(firstXValue === '') {
		ErrorFor(xValue, 'Veuillez renseigner une valeur');
	} else {
		SuccessFor(xValue);
	}
	
	if(firstYValue === '') {
		ErrorFor(yValue, 'Veuillez renseigner une valeur');
	} else{
		SuccessFor(yValue);
	}
}

function ErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function SuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
