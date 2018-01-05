var movies = [
  {
  	id: 1,
    title: 'Harry Potter',
    desc: 'Film o czarodzieju',
    poster: 'https://vignette.wikia.nocookie.net/harrypotter/images/b/bd/7xmtxRc9nQnCuWINuTT4SMP5NJc.jpg/revision/latest/scale-to-width-down/333?cb=20130803164345'
  },
  {
  	id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
    poster: 'http://1.fwcdn.pl/po/68/78/6878/6927221.3.jpg'
  },
  {
  	id: 3,
    title: 'Blow',
    desc: 'Film o przemytniku',
    poster: 'https://images-na.ssl-images-amazon.com/images/I/81z01NLruAL._RI_.jpg'
  },
  {
  	id: 4,
    title: 'Ojciec Chrzestny',
    desc: 'Film o rodzinie z NY',
    poster: 'https://fontmeme.com/images/The-Godfather-Poster.jpg'
  }
];

var moviesElements = movies.map(function(movie) {
  return React.createElement('li', {key: movie.id},
      React.createElement('h2', {}, movie.title),
      React.createElement('p', {}, movie.desc),
      React.createElement('img', {src: movie.poster})
    );
});

var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements)
  );

ReactDOM.render(element, document.getElementById('app'));