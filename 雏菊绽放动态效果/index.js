$(function () {
  // 获取雏菊盒子
  let flower = $('.flower')
  let sum = 9
  // 插入花蕊节点
  flower.append('<div class="blossom"></div>')
  for (let i = 0; i < sum; i++) {
    // 插入花瓣节点
    flower.append('<div class="petal"></div>')
  }
  flower.append('<div class="textLoading"></div>')

  // 获取花瓣节点
  for (let i = 0; i < sum; i++) {
    $('.petal:eq(' + i + ')').css('transform', 'translate(10px,10px) rotate(' + (i * 360) / sum + 'deg)')
  }
  let loadInt = 0 //加载文字
  let petalNum = 0 // 加载花瓣

  // 花瓣展开动画
  setInterval(function () {
    $('.textLoading').html(loadInt + '%')
    while (loadInt / 100 >= (petalNum + 1) / sum) {
      $('.petal:eq(' + petalNum + ')').removeClass('none')
      petalNum++
    }
  }, 100)

  // 加载数字动画
  // 设置定时器
  let loadTimer = null
  // 设置倒计时
  var isCountDown = null
  function load() {
    for (let i = 0; i < sum; i++) {
      // 将所有花瓣隐藏起来
      $('.petal:eq(' + i + ')').addClass('none')
    }
    loadInt = 0
    petalNum = 0
    if (!isCountDown) {
      loadInt = 0 //初始化加载文字
      isCountDown = true
      loadTimer = setInterval(function () {
        loadInt += 1
        if (loadInt >= 100) {
          isCountDown = false
          clearInterval(loadTimer)
        }
      }, 80)
    }
  }

  $('button').click(function () {
    load()
  })
})
