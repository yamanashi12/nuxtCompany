function formatMoney (num) {
  // 从后端获取的单位为分，不是元
  // 判断是否有值
  if (!num) {
    return '￥0.00'
  }
  num = num.toString().replace(/\$|,/g, '') / 100
  if (isNaN(num)) {
    num = '0'
  }
  let sign = (Number(num) === (num = Math.abs(num)))
  num = Math.floor(num * 100 + 0.50000000001)
  let cents = num % 100
  num = Math.floor(num / 100).toString()
  if (cents < 10) {
    cents = '0' + cents
  }
  for (var i = 0; i < Math.floor((num.length - (1 + i)) / 3); i++) {
    num = num.substring(0, num.length - (4 * i + 3)) + ',' + num.substring(num.length - (4 * i + 3))
  }
  return '￥' + (((sign) ? '' : '-') + num + '.' + cents)
}
function noPreformatMoney (num) {
  // 从后端获取的单位为分，不是元
  // 判断是否有值
  if (!num) {
    return '0.00'
  }
  num = num.toString().replace(/\$|,/g, '') / 100
  if (isNaN(num)) {
    num = '0'
  }
  let sign = (Number(num) === (num = Math.abs(num)))
  num = Math.floor(num * 100 + 0.50000000001)
  let cents = num % 100
  num = Math.floor(num / 100).toString()
  if (cents < 10) {
    cents = '0' + cents
  }
  for (var i = 0; i < Math.floor((num.length - (1 + i)) / 3); i++) {
    num = num.substring(0, num.length - (4 * i + 3)) + ',' + num.substring(num.length - (4 * i + 3))
  }
  return ((sign) ? '' : '-') + num + '.' + cents
}
function preformatMy (num) {
  let str = num.toString()
  // 判断是否有小数点，若有，则需要添加.00
  if (str.indexOf('.') === -1) {
    return str + '.00'
  } else {
    return str
  }
}
/*
* 认证状态
* 认证状态 0: 未认证，1：认证中，2：未通过，3：已通过 ,
*/
function authStatus (val) {
  switch (val) {
    case 0: return '未认证'
    case 1: return '认证中'
    case 2: return '未通过'
    case 3: return '已认证'
    case 4: return '已撤销'
  }
}
function hidPhone (phone) {
  if (!phone) {
    return
  }
  phone = phone.toString()
  let resPhone = phone.slice(0, 3) + '****' + phone.slice(-4)
  return resPhone
}
function hidName (name) {
  if (!name) {
    return
  }
  name = name.toString()
  let num = name.length - 1
  let resname = name.slice(0, 1)
  for (let i = 0; i < num; i++) {
    resname += '*'
  }
  return resname
}
function hidCompany (company) {
  if (!company) {
    return
  }
  company = company.toString()
  let rescompany = company.slice(0, 4) + '****' + company.slice(-4)
  return rescompany
}
function hidCode (idNo) {
  if (!idNo) {
    return
  }
  idNo = idNo.toString()
  let residNo = idNo.slice(0, 9) + '****' + idNo.slice(-4)
  return residNo
}
// 时间格式化
function formatDate (date, type) {
  if (!date) return ''
  date = date.toString()
  date = date.replace(/-/g, '/') // 2017-12-20 00:00:00 这样的格式换成ie可以new Date的格式
  date = new Date(date)
  // date = typeof date === 'number' ? new Date(date) : date
  type = type || 'yyyy-MM-dd HH:mm:ss'
  let obj = {
    'y': date.getFullYear(), // 年份，注意必须用getFullYear
    'M': date.getMonth() + 1, // 月份，注意是从0-11
    'd': date.getDate(), // 日期
    'q': Math.floor((date.getMonth() + 3) / 3), // 季度
    'w': date.getDay(), // 星期，注意是0-6
    'H': date.getHours(), // 24小时制
    'h': date.getHours() % 12 === 0 ? 12 : date.getHours() % 12, // 12小时制
    'm': date.getMinutes(), // 分钟
    's': date.getSeconds(), // 秒
    'S': date.getMilliseconds() // 毫秒
  }
  let week = ['天', '一', '二', '三', '四', '五', '六']
  for (let i in obj) {
    type = type.replace(new RegExp(i + '+', 'g'), function (m) {
      let val = obj[i] + ''
      if (i === 'w') return (m.length > 2 ? '星期' : '周') + week[val]
      for (let j = 0, len = val.length; j < m.length - len; j++) val = '0' + val
      return m.length === 1 ? val : val.substring(val.length - m.length)
    })
  }
  return type
}
// 时间分段显示-相对于设备当前时间
// 小于60分钟，            显示：XX分钟前；
// 1小时到24小时之内，      显示：：xx小时前；
// 24小时以上到48小时之内， 显示：1天前；
// 48小时以上到72小时之内， 显示：2天前；
// 72小时以上到96小时之内， 显示：3天前；
// 96小时以上到一年前，     显示：XX月XX日；//(达到4天的) 同年，不同年显示下面的
// 一年以上，              显示：XXXX年XX月XX日；
function formatTime (date) {
  if (!date) return ''
  let nowDate = new Date()
  date = date.toString()
  date = date.replace(/-/g, '/')
  date = new Date(date)
  let intervalTime = nowDate - date
  let intervalTimeDate = new Date(intervalTime)
  if (intervalTime < (60 * 1000)) { // XX分钟前
    return '刚刚'
  } else if ((60 * 1000) <= intervalTime && intervalTime < (60 * 60 * 1000)) {
    return intervalTimeDate.getMinutes() + '分钟前'
  } else if ((60 * 60 * 1000) <= intervalTime && intervalTime < (24 * 60 * 60 * 1000)) { // xx小时前
    return `${Math.floor(intervalTimeDate / 1000 / 60 / 60)}小时前`
  } else if ((24 * 60 * 60 * 1000) <= intervalTime && intervalTime < (4 * 24 * 60 * 60 * 1000)) { // 1-3天前
    return `${Math.floor(intervalTimeDate / 1000 / 60 / 60 / 24)}天前`
  } else if ((4 * 24 * 60 * 60 * 1000) <= intervalTime) { // XX月XX日
    if (date.getFullYear() === nowDate.getFullYear()) {
      return `${date.getMonth() + 1}月${date.getDate()}日`
    } else { // XXXX年XX月XX日
      return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`
    }
  } else {
    return '请准确的设置系统时间'
  }
}
// 图片格式化
/*
  图片格式化
  url(string):图片未格式化url
  type(number):剪裁方式，1：中心剪裁压缩， 2：中心适应剪裁压缩；其他值等比压缩，其他值默认只压缩不剪裁
  size(array):需要剪裁之后的图片大小;
 */
function formatPicture (url, type, size) {
  if (size.length === 0 || !url || (url && url.length < 5)) {
    return url
  }
  size = '_' + size.join('x')
  if (type === 1) {
    size = size + 'cc'// 中心剪裁压缩
  } else if (type === 2) {
    size = size + 'cac'// 中心适应剪裁压缩
  }
  let totalUrl = url.replace(/_\d+x\d+\./, '.').replace(/\/f\/20/, '/fv/20')
  let urlArr = totalUrl.split('.')
  let targetUrl = ''
  let pictureType = ['.jpg', '.png', '.gif', '.bmp', '.svg', '.jpeg']
  let judge = true
  pictureType.forEach((item) => {
    if (!judge) {
      return
    }
    let reg = new RegExp(item)
    if (reg.test(totalUrl)) {
      urlArr = totalUrl.split(item)
      targetUrl = urlArr[0] + size + item + urlArr[1]
      judge = false
    } else {
      targetUrl = 'url地址不符合规范'
    }
  })
  return targetUrl
}
export default {
  formatMoney,
  noPreformatMoney,
  preformatMy,
  hidPhone,
  formatDate,
  authStatus,
  hidCode,
  hidName,
  formatTime,
  hidCompany,
  formatPicture
}
