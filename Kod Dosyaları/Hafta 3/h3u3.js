const eventDers = {
    name: 'dersler',
    dersListesi : ["Node.js", "derin öğrenme"],
    dersleriYazdir: function(){
        console.log(this.name + " listesi")
        this.dersListesi.forEach((ders) => {
            console.log(ders + " aldığım " + this.name)
        })
    }
} //* arrow fonksiyonu normal fonksiyonların aksine parent'ın kullandığı this objelerine erişebilir.
eventDers.dersleriYazdir()