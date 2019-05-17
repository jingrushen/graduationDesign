import Request from './Request'

let host = 'https://easy-mock.com/mock/5cdbd482b62ba32b7a27f19b/example';

let apiName = {
  getNewList: '/v2/movie/in_theaters',  // 获取首页最新电影列表
  getMovieDetail: '/v2/movie/subject',   // 获取电影详情
  searchMovie: host + '/v2/movie/search', // 根据q或tag搜索电影
  getTopMovie: '/v2/movie/top250', // 获取电影top250
  getDetail: '/v2/movie/subject',  // 获取电影详情
}

export default class {
  // 获取首页最新电影列表
  static getNewList(data) {
    return Request.get(apiName.getNewList, data);
  }

  // 获取电影详情
  static getMovieDetail(data) {
    return Request.get(apiName.getMovieDetail, data);
  }

  // 搜索电影
  static searchMovie(data) {
    return Request.get(apiName.searchMovie, data);
  }

  // 获取Top250电影列表
  static getTopMovie(data) {
    return Request.get(apiName.getTopMovie, data);
  }

  // 获取电影详情
  static getDetail(data) {
    return Request.get(`${apiName.getDetail}/${data.id}`, data);
  }

  // 获取电影影评
  static getReviews(data) {
    return Request.get(`${apiName.getDetail}/${data.id}/reviews`, data);
  }
}