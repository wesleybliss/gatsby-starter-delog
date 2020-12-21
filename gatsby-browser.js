import './src/styles/main.scss'

const noop = () => {}
const _onload = window.onload || noop

// Elements
let body = null
let header = null

// State
let init = false

const handleScroll = () => {
    try {
        const top = body.scrollTop || 0
        const op = (top > 50) ? 'add' : 'remove'
        // console.log('@@@@', top, op)
        header.classList[op]('active')
    } catch (e) {
        console.error('handleScroll', e)
    }
}

window.onload = function() {
    
    if (!init)
    
    console.log('Initializing onload')
    
    // Elements
    body = document.querySelector('body')
    header = document.querySelector('header.site-header')
    
    // Handlers
    // window.onscroll = handleScroll
    body.addEventListener('scroll', handleScroll)
    
    // Initial Triggers
    handleScroll()
    
    // Don't bork original callbacks
    if (_onload) _onload()
    
    // Don't run init again
    init = true
    
}
