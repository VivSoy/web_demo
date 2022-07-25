setInterval(function () {
  // 创建rain元素
  var rain = document.createElement('div')

  // 初始化rain属性
  rain.style.position = 'fixed'
  rain.style.height = '50px'
  rain.style.width = '2px'
  rain.style.background = 'linear-gradient(rgba(255,255,255,.3),rgba(255,255,255,.6))'
  rain.style.filter = 'blur(1px)' /* filter 滤镜 */
  rain.style.top = '0px'
  rain.style.left = Math.random() * 1366 + 'px'
  rain.style.opacity = parseInt(Math.random() * 10) / 10 + '' /* 随机雨滴透明度 */

  document.body.appendChild(rain)

  var timer = setInterval(function () {
    var height = parseInt(rain.style.top)
    var k = 1
    k++

    rain.style.top = height + 5 * Math.pow(k, 2) + 'px' /* 模拟重力加速度 */

    // 当雨滴到达底部时消失并清除子节点rain
    if (rain.style.top >= '900px') {
      clearInterval(timer)
      rain.parentNode.removeChild(rain)
    }
  }, 10)
}, 10)
