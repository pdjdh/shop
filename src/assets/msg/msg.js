
const TIPS = 'msg-tip'// 提示框 默认隐藏
const TIPS_SHOW = 'msg-tip-show'// 提示框展示
const TIPS_INFO = 'msg-tip-info'// 消息
const TIPS_TOOL = 'msg-btn-tool'// 按钮栏
const TIPS_CLOSE = 'msg-btn-close' // 关闭按钮
const MASK = 'msg-mask'// 蒙版 默认隐藏
const MASK_SHOW = 'msg-mask-show'// 蒙版 展示
export const tipHandle = (function () {
  let timerID = null
  const tipInit = function () {
    const tipDiv = document.createElement('div')
    tipDiv.classList.add(TIPS)
    const msgDiv = document.createElement('span')
    msgDiv.classList.add(TIPS_INFO)
    tipDiv.appendChild(msgDiv)
    const btnDiv = document.createElement('div')
    btnDiv.classList.add(TIPS_TOOL)
    tipDiv.appendChild(btnDiv)
    document.body.appendChild(tipDiv)

    const maskDiv = document.createElement('div')
    maskDiv.classList.add(MASK)
    document.body.appendChild(maskDiv)

    maskDiv.addEventListener('click', function () {
      clearTimeout(timerID)
      timerID = null
      maskDiv.classList.remove(MASK_SHOW)
      tipDiv.classList.remove(TIPS_SHOW)
    })
  }
  tipInit()

  return function (msg = '', closeBtn = true, delay = -1) {
    if (delay === -1 && closeBtn === false) {
      throw new Error('closeBtn为false时，delay需要传值')
    }
    const tips = document.getElementsByClassName(TIPS)
    const tip = tips[0]
    const masks = document.getElementsByClassName(MASK)
    const mask = masks[0]
    const btnDiv = document.getElementsByClassName(TIPS_TOOL)[0]
    const msgDiv = document.getElementsByClassName(TIPS_INFO)[0]
    if (!document.getElementsByClassName(TIPS_CLOSE).length && closeBtn) {
      const closeBtnDiv = document.createElement('div')
      closeBtnDiv.innerText = '关闭'
      closeBtnDiv.classList.add(TIPS_CLOSE)
      btnDiv.appendChild(closeBtnDiv)
      btnDiv.addEventListener('click', function () {
        clearTimeout(timerID)
        timerID = null
        tip.classList.remove(TIPS_SHOW)
        mask.classList.remove(MASK_SHOW)
      })
    }

    msgDiv.innerText = msg
    tip.classList.add(TIPS_SHOW)
    mask.classList.add(MASK_SHOW)
    if (delay !== -1) {
      setTimeout(() => {
        tip.classList.remove(TIPS_SHOW)
        mask.classList.remove(MASK_SHOW)
      }, delay)
    }
  }
})()
