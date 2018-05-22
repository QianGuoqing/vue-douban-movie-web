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

function concatDirectors(directors, character) {
  let arr = []
  directors.forEach(item => {
    arr.push(item.name)
  })
  return arr.join(character)
}

function concatWriters(writers, character) {
  let arr = []
  writers.forEach(item => {
    arr.push(item.name)
  })
  return arr.join(character)
}

function concatCasts(casts, character) {
  let arr = []
  casts.forEach(item => {
    arr.push(item.name)
  })
  return arr.join(character)
}

function concatGenres(genres, character) {
  return genres.join(character)
}

function concatPubdates(pubdates, character) {
  return pubdates.join(character)
}

function concatAlias(alias, character) {
  return alias.join(character)
}

function concatCountries(countries, character) {
  return countries.join(character)
}

function concatLanguages(languages, character) {
  return languages.join(character)
}


const Util = {
  stringifyDirectors,
  stringifyCasts,
  stringifyGenres,
  concatDirectors,
  concatWriters,
  concatCasts,
  concatGenres,
  concatPubdates,
  concatAlias,
  concatCountries,
  concatLanguages
}

export default Util