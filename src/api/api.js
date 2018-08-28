import { httpGet } from './axios'
export default {
  // top250 25
  getGoodNew: httpGet('/api/movie/top250?start=25&count=25', 'get'),
  // 正在热映
  getHot: httpGet('/api/movie/in_theaters', 'get'),
  // 即将上映
  getshown: httpGet('/apimovie/coming_soon', 'get'),
  getfuli: httpGet('https://gank.io/api/data/%E7%A6%8F%E5%88%A9/50/1', 'get')

  // getagroup: httpGet('http://localhost:1996/api/articles/10/1', 'get')

}
