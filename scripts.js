var a = prompt ('Podaj cyfrę (a)'),
	b = prompt ('Podaj cyfrę (b)'),
	value = (a * a) - (2 * a * b) - (b * b);

console.log(value);

if (value > 0) {
	console.log('Wynik dodatni')
} else if (value < 0) {
	console.log('Wynik ujemny')
} else if (value == 0) {
	console.log('Wynik jest równy 0')
}