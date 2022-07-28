const text = document.querySelector('.text')

// 将每个字符用<span></span>标签包裹
text.innerHTML = text.textContent.replace(/\S/g, '<span>$&</span>')

const letters = document.querySelectorAll('span')
for (let i = 0; i < letters.length; i++) {
  letters[i].addEventListener('mouseover', function () {
    letters[i].classList.add('active') //对触碰到的每个字符添加avtive类
  })
}
