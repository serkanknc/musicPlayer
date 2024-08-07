class Music {
    constructor(title,singer,img,file) {
        this.title = title;
        this.singer = singer;
        this.img = img;
        this.file = file;
    }

    getName(){
        return this.title +" - "+ this.singer;
    }
}

const musicList = [
    new Music("Kufi", "Duman", "1.jpeg", "1.mp3"),    
    new Music("Bu da Geçer mi Sevgilim", "Yalın","2.jpeg","2.mp3"),    
    new Music("Aramızda Uçurumlar", "Suat Suna","3.jpeg","3.mp3"),
    new Music("Move On", "Deeprise", "4.jpeg", "4.mp3"),
    new Music("Küle Dönmüşsün", "Semicenk", "5.jpeg", "5.mp3"),
    new Music("Tereddüt", "Kayra", "6.jpeg", "6.mp3"),
    new Music("Nocturne", "Bor Pro", "7.jpeg", "7.mp3")
];