function Telefon(marka, cena, kolor, przekatna, bateria) { 
	this.marka = marka; 
	this.cena = cena; 
	this.kolor = kolor;
	this.przekatna = przekatna;
	this.bateria = bateria;
} 
Telefon.prototype.printInfo = function() { 
	console.log("Marka telefonu to " + this.marka + ", kolor to " + this.kolor + ", cena to " + this.cena + " , przekatna ekranu " + this.przekatna +" , pojemność baterii to " + this.bateria + "."); 
}
Telefon.prototype.convertSize = function() {
	var przekatnaMM = przekatna * 2.54;
	console.log("Przekatna telefonu w mm to: ", przekatnaMM);
}

var iPhone7 = Telefon("Apple", "1800", "szary", "5,5 cala", "2700 mAh");
var sGSS6 = Telefon("Samsung", "1900", "czarny", "5,7 cala", "2930 mAh");
var onePlusOne = Telefon("OnePlus", "2640", "biały", "5,5 cala", "3130 mAh");
