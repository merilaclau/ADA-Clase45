/*************************************************
* Crear un objeto que sea un libro, con todos 
* sus detalles (nombre, autor, año, isbn). Ademas
* de esto, deberá tener una lista de reviews, y cada
* review deberá tener un formato de 
* {nombre, review, valoracion(entre 1 y 5)}.
* 
* Deberemos crear una funcion para promediar esta 
* valoracion. 
* Tambien, tendremos que crear un getter para 
* obtener el nombre, el autor y el isbn juntos 
* en un formato legible (libro [por] autor - isbn).
* Por último tendremos que crear una funcion que nos
* permita agregar nuevas reviews al libro.
*/


const book = {
    _name: "Nuestra parte de noche",
    author: "Mariana Enríquez",
    year: "2020",
    isbn: 456789321,
    reviewList: [],
    get name () {
        return `${this._name} por ${this.author} - ${this.isbn}`;
    },
    addNewReview: function (user, description, ranking) {
        let review = {
            user,
            description,
            ranking
        }
        this.reviewList.push(review);
    },
    rankingAverage: function () {
        let total = this.reviewList.reduce((total, review) => total += review.ranking, 0);
        return average = total/this.reviewList.length;
    }
}