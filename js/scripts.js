// klasa do tworzenia obiektów

function Telefon(marka, cena, kolor) {
	this.marka = marka;
	this.cena = cena;
	this.kolor = kolor;
}


// Prototyp do klasy Telefon

Telefon.prototype.printInfo = function() {
    console.log("Marka telefonu to " + this.marka + ", kolor to " + this.kolor + ", a cena to " + this.cena + " zł.");
}

// utworzone obiekty

var SamsungGalaxyS6 = new Telefon('Samsung', 1500, 'czarny');
var iPhone6S = new Telefon("Apple", 3500, "czerwony");
var Lenovo = new Telefon('Lenovo', 999, 'srebrny');

// wywołanie metod

SamsungGalaxyS6.printInfo();
iPhone6S.printInfo();
Lenovo.printInfo();