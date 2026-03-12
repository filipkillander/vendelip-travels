# Vendelip Travels

Tillfällig reseapp för Filip och Vendela.

## Syfte

Det här projektet är en fristående shortlist och beslutsyta för en resa mellan `28 april 2026` och `1 maj 2026`.
Fokus är:

- att jämföra fyra städer på ett snabbt och begripligt sätt
- att väga romantik, kvarterskänsla och budget mot varandra
- att visa exakta hotellpriser för datumfönstret där det är möjligt
- att göra resultatet lätt att dela vidare

## Omfattning

Det här projektet ska hållas isolerat till den här mappen.

- Arbeta bara i `experiments/vendelip-travels`
- Rör inte övriga brainstorm-filer som del av det här arbetet
- Projektet är sannolikt tillfälligt och kan tas bort senare

## Vad som är byggt

- en lokal dashboard i svenska
- favoritfunktion med lokal lagring i webbläsaren
- snabbjämförelse för flyg och känsla
- slutsektion med redaktionellt kuraterade toppval
- budgetbalkar per alternativ
- hotellänkar med exakta datumparametrar
- Google Maps-länkar för hotellområden

## Prislogik

- `Hotellpris`: exakta hotellsidor för `28 april 2026 -> 1 maj 2026`, `2 vuxna`, `1 rum`
- `Flyg`: aktuell ruttsnapshot
- `Transport + hotell`: hotell + flyg + bagage + bil/parkering
- `Total resa`: ovanstående + antaget spend på plats om `6 000 kr`

## Tillfällig status

Det här är ett medvetet avgränsat sidoprojekt inne i ett brainstorm-repo. Om projektet lever vidare bör det sannolikt ligga i ett eget repo och förvaltas separat.
