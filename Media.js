// Media class as common starting point for
// Things like DVD, books, vinyl

class Media {
    constructor(someNewName){
        this.name = someNewName

        Media.count++
    }
    static count = 0
    getMediaName(){
        return this.name;
    }
    static version(){
        return "0.0.1"
    }
    version() {
        return "prototype version 0.0.1"
    }
}

// let someMedia = new Media();
// someMedia.name = "Cool generic media"
// console.log(someMedia.name);
// console.log(someMedia.getMediaName());

// console.log(Media.version());
// console.log(Media.prototype.version())

// let someOtherMedia = new Media();
// console.log(someOtherMedia.name);

// console.log(`Media library has ${Media.count} items`);

module.exports = {
    Media
}