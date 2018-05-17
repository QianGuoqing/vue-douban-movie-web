function stringifyDirectors(directors) {
  let str = ''
  directors.forEach(director => {
    str += `${director.name} `
  })
  return str
}

function stringifyCasts(casts) {
  let str = ''
  casts.forEach(cast => {
    str += `${cast.name} `
  })
  return str
}

function stringifyGenres(genres) {
  let str = ''
  genres.forEach(genre => {
    str += `${genre} `
  })
  return str
}

const Util = {
  stringifyDirectors,
  stringifyCasts,
  stringifyGenres
}

export default Util