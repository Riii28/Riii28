export const initialState = {
    theme: localStorage.getItem('theme') || 'dark',
    navbar: {
        lastScroll: 0,
        isHidden: false,
        toggle: false
    },
    textEffects: '',
}

export const reducer = (state, action) => {
    switch (action.type) {
        case 'CLICK_THEME':
            const newTheme = state.theme === 'dark' ? 'light' : 'dark'
            localStorage.setItem('theme', newTheme)
            return {
                ...state, 
                theme: newTheme
            }
        case 'UPDATE_NAVBAR':
            const { lastScroll, isHidden } = action.payload
            return {
                ...state,
                navbar: {
                    ...state.navbar,
                    lastScroll: lastScroll ?? state.navbar.lastScroll,
                    isHidden: isHidden ?? state.navbar.isHidden
                }
            }
        case 'OPEN_NAVBAR': {
            return {
                ...state, 
                navbar: {
                    ...state.navbar,
                    toggle: !state.navbar.toggle
                }
            }
        }
        case 'CLOSE_NAVBAR': {
            return {
                ...state, 
                navbar: {
                    ...state.navbar,
                    toggle: false
                }
            }
        }
        case 'TYPE_EFFECT':
            return {
                ...state,
                textEffects: action.payload
            }
        default:
            throw new Error(`Unknown action type ${action.type}`)
    }
}

