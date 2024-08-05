# Test 2 - UI-Basics

## Test-Anleitung

- Untersuche die Dateien `index.html` und `style.css` und den `./image/`-Ordner.
- Diese Dateien bilden die Grundlage für eine Landing-Page eines Computer-Ladens.
- Folge der Beschreibung unten, um die Aufgabe zu erfüllen.
- Ganz unten dieser `README` gibt es ein Referenz-Video, das das beendete Projekt zeigt.
- Viel Erfolg!

### Bilder 
* Verwende das Bild [hero.jpg](./images/hero.jpg) als Hintergrundbild im Header der Seite. Das Bild sollte den gesamten Header bedecken, es sollte sich nicht wiederholen und es sollte zentriert sein.  

### Positionierung
* Ändere die Position des Headers zu `fixed`. Der Header sollte oben auf der Seite sein und keinen Inhalt auf der Seite überdecken. 

### Attribute
*  Füge ein `fontawesome`-Icon bei allen Links ein, die das Attribut `"target="_blank"` haben. Nutze dieses Attribut, um die Elemente auszuwählen und füge das Icon direkt in der Css-Datei hinzu. Du solltest hierfür das Pseudo-element `::after` auf dem Attribut Selektor verwenden. Die Schriftart (`font-family`) soll "FontAwesome" sein und setze den Inhalt (`content`) auf `" \f35d"`.

### Responsive Design
* Verwende im Abschnitt "Product Card" `flex`, um das Layout der Karten (engl. "cards") responsiv zu machen. Die Karten sollten für "mobile"-Geräte als Spalte (engl. "column") und für Tablets/Desktops als Reihe dargestellt werden (Breakpoint: `768px`). Die Spalte bzw. Reihe sollte jeweile zentriert auf der Seite sein. Die Reihe sollte sich nicht über mehrere Zeilen strecken, d.h. sie soll keinen Umbruch haben. 

* Für Displays größer als `768px` soll auf der rechten Seite von `h1`-Überschriften ein Padding von `7rem` sein.

### Tabellen
* Füge unter dem `<h2>`-Tag im Abschnitt "Product Information" eine Tabelle mit folgender Struktur ein: 


* Einen grauen Rahmen um die Tabelle, die Tabellen-Header und die Tabellen-Reihen (rows). Die Rahmen sollten einander überlappen (engl. "collapse"). Jede ungerade (engl. "odd") Reihe sollte Weiß und jede gerade (engl. "even") Reihe sollte Grau sein. Die Tabelle sollte `100%` der Breite einnehmen.

#### Struktur für die Tabelle 
|------|Lenovo|Dell|Macbook|
|-----------|------|----|-------|
|**OS**|Ubuntu|Microsoft|MacOS|
|**Price**|$350|$450|$550|
|**Color**|Black|White|Silver|
|**RAM**|4GB|16GB|8GB|

### Formulare (engl. "Forms")

* Erstelle im Abschnitt "Contact Form" ein Formular. Füge das Formular unterhalb des existierenden `h2`-Elements ein. Das Formular soll die HTTP-Methode `POST` zum Versenden der Daten verwenden. Du kannst `div`-Elemente zum Formatieren verwenden.

* Erstelle die folgenden Formular-Elemente:
  1. ein Text-Input-Feld für den Nutzernamen
  2. ein Email-Input-Feld für die E-Mail-Adresse des Nutzers
  3. ein Textfeld (engl. "textarea") für eine Nachricht
  4. ein Submit-Button mit der css-Klasse `submit-btn`

* Erstelle `label`- Elemente für jedes Inputfeld und für das Textfeld, die Label sollen die folgenden Texte haben:
  1. "Tell us who you are"
  2. "Tell us how to contact you"
  3. "How can we help you?"

* Füge Platzhalter-Texte (engl. "placeholder texts") für die Inputfelder und das Textfeld ein:
  1. "Please fill in your name"
  2. "Please enter your email" 
  3. "Send us a message!"

* Füge Client-seitige Input-Validierung hinzu:
  1. `minimum-length` von "1"
  2. `minimum-length` von "5"
  3. `minimum-length` von "1"

Die "ouline color" der Inputfelder und des Textfeldes soll `blue` sein, wenn das jeweilige Element den Fokus (engl. "focus") erhält.

### Footer-Links
* Füge im Abschnitt "Footer Links" eine ungeordnete Liste (engl "unordered list") unter dem `h3`-Element ein. Diese Liste sollte die Klasse `icon-list` haben. Füge dieser Liste drei Listen-Elemente (engl. "list items") hinzu. Jedes Listenelement sollte die Klasse `icon` haben. In jedem Listenelement sollte ein Link eingebettet sein. Setze den Wert des `href`-Attributs auf "#". Finde drei Icons für soziale Medien (engl. "social media icons"), um sie in den Links zu verwenden, z.B. Instagram, Linked, Twitter.

## Referenz-Video

[Referenz-Video ansehen](simplescreenrecorder-2022-10-21_14.38.54.mp4)
