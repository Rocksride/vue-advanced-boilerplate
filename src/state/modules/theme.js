import * as types from '../mutationTypes.js'

export const state = {
  colorTheme: null,
  themes: ['primary', 'secondary', 'tertiary'],
  defaultColorTheme: 'primary'
}

export const getters = {
  colorTheme: state => state.colorTheme
}

export const mutations = {
  [types.SET_COLOR_THEME]: (state, newTheme) => {
    state.colorTheme = newTheme
  }
}

export const actions = {
  initColorTheme: ({ dispatch, state}) => {
    console.log('initiating color theme');
    const colorTheme = localStorage.getItem('colorTheme') || state.defaultColorTheme
    console.log('color theme is ' + colorTheme);
    dispatch('setColorTheme', colorTheme)
  },
  setColorTheme: ({ commit, dispatch }, newTheme) => {
    localStorage.setItem('colorTheme', newTheme);
    commit(types.SET_COLOR_THEME, newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)

    const html = document.documentElement
    if (html.classList.contains('theme-in-transition')) return
    html.classList.add('theme-in-transition')

    dispatch('setColorTheme', newTheme)
    setTimeout(() => {
      html.classList.remove('theme-in-transition')
    }, 750);
  }
}
