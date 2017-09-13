# OsteAPI Dokumentation

## Resurser

**GET /cheeses**

Resursen repræsenterer alle oste i kartoteket.
Resursen er formateret på følgende måde:

```JSON
[{
	'varenr': number,
	'navn': string,
	'pris': number,
	'type': string,
	'producent': string,
	'antal': number, 
	'beskrivelse': {
		'tekst': string,
		'smag': string,
		'vægt': number,
		'billede': string
	}
},{
	...
}]
```

**GET /cheeses/\<varenummer>**

Resursen repræsenterer en enkelt ost i kartoteket.
Resursen er formateret på følgende måde:

```JSON
{
	'varenr': number,
	'navn': string,
	'pris': number,
	'type': string,
	'producent': string,
	'antal': number, 
	'beskrivelse': {
		'tekst': string,
		'smag': string,
		'vægt': number,
		'billede': string
	}
}
```

**POST /login**

Resursen varetager log-ind information og returnerer et AccessToken.
Resursens request body er formateret på følgende måde:

```JSON
{
	"username": string,
	"password": string
}
```

Resursens response er formateret på følgende måde:

```JSON
{
	"AccessToken": string
}
```

AccessToken er en 512 bit HEX streng, genereret med randomBytes.