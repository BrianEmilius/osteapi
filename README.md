# OsteAPI Dokumentation

## Resurser

### GET /cheeses

Resursen repræsenterer alle oste i kartoteket.
Resursen er formateret på følgende måde:

```JSON
[{
	'varenr': 1234,
	'navn': 'St Clemens',
	'pris': 42.5,
	'type': 'Blåskimmel',
	'producent': 'St clemens',
	'antal': 15, 
	'beskrivelse': {
		'tekst': 'Den ost er bare super smagfuld og dejlig indeni...',
		'smag': 'mild',
		'vægt': 300,
		'billede': 'stclemensblaaskimmel.jpg'
	}
}]
```

### GET /cheeses/\<varenummer>

Resursen repræsenterer en enkelt ost i kartoteket.
Resursen er formateret på følgende måde:

```JSON
{
	'varenr': 1234,
	'navn': 'St Clemens',
	'pris': 42.5,
	'type': 'Blåskimmel',
	'producent': 'St clemens',
	'antal': 15, 
	'beskrivelse': {
		'tekst': 'Den ost er bare super smagfuld og dejlig indeni...',
		'smag': 'mild',
		'vægt': 300,
		'billede': 'stclemensblaaskimmel.jpg'
	}
}
```