import axios from 'axios'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.withCredentials = true

// 获取正在热映的电影
export function getMoviesInTheater() {
  return new Promise((resolve, reject) => {
    axios.get('/api/movie/in_theaters').then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}

// 口碑排行榜
export function getWeeklyRank() {
  return new Promise((resolve, reject) => {
    axios.get('/api/movie/weekly').then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}