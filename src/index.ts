const W = window.innerWidth
const wrapDiv = document.createElement('div')
wrapDiv.id = 'page-curtain'
const wrapDivStyle = {
    width: '50vw',
    height: '100vh',
    backgroundColor: '#efefef',
    zIndex: 1000,
    position: 'absolute',
    right: 0,
    top: 0,
}
Object.assign(wrapDiv.style, wrapDivStyle)

const tong = document.createElement('div')
const tongStyle = {
    width: '5px',
    height: '100vh',
    backgroundColor: '#dcdcdc',
    zIndex: 1001,
    position: 'absolute',
    left: 0,
    top: 0,
    cursor: 'col-resize',
    boxShadow: '1px 0px 1px #00000040'
}
Object.assign(tong.style, tongStyle)
wrapDiv.append(tong)

let isDragging = false

document.addEventListener('mouseup', () => {
    isDragging = false
})

document.addEventListener('mousemove', (e) => {
    const x = e.x
    const w = W - x
    if (isDragging && x > 20 && w > 20) {
        wrapDiv.style.width = w + 'px'
    }
})

tong.addEventListener('mousedown', () => {
    isDragging = true
})

document.body.append(wrapDiv)