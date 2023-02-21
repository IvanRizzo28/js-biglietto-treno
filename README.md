Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
- L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).


Inizialmete prendo in input i chilometri e l'età del passeggero
Faccio la moltiplicazione fra il prezzo per Km e i chilometri da percorrere
Successivaente se l'età del passeggero inserito è minore di 18 allora applico lo sconto del 20% del prezzo calcolato in precedenza
Se invece il passeggero ha 65 anni o più allora applico il 40% di sconto sul prezzo calcolato in precedenza
Come ultimo passaggio stampo in console il prezzo definitivo (con massimo due cifre decimali)