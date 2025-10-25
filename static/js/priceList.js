// по переключателю должен менять список услуг/цен
// ниже реализован только визуальный функционал асамого перекл.чателя, списорк сейчас не меняется
document.addEventListener('DOMContentLoaded', () => {
  const adultBtn = document.querySelector('.adult-price-p')
  const kidsBtn = document.querySelector('.kids-price-p')
  const activeBg = document.querySelector('.toggle-active-bg')

  adultBtn.addEventListener('click', () => {
    activeBg.style.top = '0'
    adultBtn.classList.add('active-btn')
    kidsBtn.classList.remove('active-btn')
  })

  kidsBtn.addEventListener('click', () => {
    activeBg.style.top = '50%'
    kidsBtn.classList.add('active-btn')
    adultBtn.classList.remove('active-btn')
  })
})
