/**
 * 工具类
 */
class Util {
  // 对象数组去重
  static uniqueArray(arr) {
    let temp = {};
    let result = [];
    for(let item of arr){
      // 遇到重复项
      if(temp[item.id]) {
        continue;
      }
      // 没有遇到重复项
      temp[item.id] = true;
      result.push(item);
    }
    return result;
  }

  // 对象数组是否包含value
  static hasValue(arr, value) {
    let flag = false;
    for(let item of arr) {
      if(item.id === value) {
        flag = true;
        break;
      }
    }
    return flag;
  }


  // 获取star数量
  static getStar1(num) {
    let fullStar = parseInt(num / 2);
    let noStar = parseInt(5 - num / 2)
    return {
      fullStar,
      halfStar: 5 - fullStar - noStar,
      noStar
    }
  }

  static getStar2(num) {
    return {
      fullStar: num,
      noStar: 5 - parseInt(num)
    }
  }
}

export default Util