import './src/styles/main.scss'

const noop = () => {};
const _onload = window.onload || noop;

let header = null;

const handleScroll = () => {
    try {
        const top = window.pageYOffset
        const op = (top > 50) ? 'add' : 'remove'
        header.classList[op]('active')
    } catch (e) {
        console.error('handleScroll', e)
    }
}

window.onload = function() {
    
    console.log('Initializing onload')
    
    // Elements
    header = document.querySelector('header.site-header')
    
    // Handlers
    window.onscroll = handleScroll
    
    // Initial Triggers
    handleScroll()
    
    // Don't bork original callbacks
    if (_onload) _onload()
    
};
