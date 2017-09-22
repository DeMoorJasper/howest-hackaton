# Hackathon Howest 2017

Ayy, vandaag is het de bedoeling om een chat client te maken waarbij je chat berichtjes kan sturen naar de collega's die naast je zitten via een online server.
De code van de server staat reeds online, hier hoeven jullie dus geen rekening mee te houden.

## Bronfiles

De bronfiles bestaan uit een volledige mappen structuur zoals aangeleerd.
HTML -> de index.html bevat reeds x aantal code die ervoor zorgt dat de spa (single page application kan werken)
JS -> in de file helperFunctions.js zit de code voor het verbinden tussen de client en de server.
Alsook de code voor de single page application te laten werken (nadat je je groepsnaam ingevoerd hebt -> overschakelen naar de lobby).

Nadat je de lobbynaam hebt ingevuld, kom je op de chatpagina terecht. Zoals je zult zien is deze momenteel nog leeg.
Voorzie deze zelf van HTML (tussen de klasse lobby -> deze zijn belangrijk voor de spa werking).
Hiernaast dienen jullie zelf ook nog de script.js file aan te vullen zodat jullie berichtjes kunnen versturen en ontvangen.

## Tips and tricks

als je een bericht verstuurd triggerd dit automatisch x aantal acties in de server, hieronder zullen we oplijsten hoe en wat.

### ontvangen van de server

socket.on('hier de naam van wat je wilt triggeren', hier een functie die je wilt gebruiken waarbij je als inputparameter de waarde kunt ophalen die je terugkrijgt van de server)

### versturen naar de server

socket.emit('hier de naam van wat je wilt triggeren', 'hier je object met je data')

### wat triggerd wat

newMessage  (client - server) -> updateClients (server - client)

updateUserList -> (server - client) bij disconnect en connect wordt deze getriggerd

### example

#### Versturen

```
var bericht = "Hey joske";
socket.emit('zegHallo', bericht);
```


#### Ontvangen
```
socket.on('zegHallo',function(data){
  console.log(data) -> "Hey joske";
});
```
