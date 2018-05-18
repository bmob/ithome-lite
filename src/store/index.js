import Vue from 'vue'
import Vuex from 'vuex'
import xml2json from 'xmlstring2json'
import { formatSlideList, formatNewsList, formatTopicList } from '@/utils'
import api from '@/utils/api'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    slides: [],
    news: [],
    topics: []
  },
  mutations: {
    slides (state, data) {
      state.slides = data
    },
    news (state, data) {
      state.news = data
    },
    topics (state, data) {
      state.topics = data
    }
  },
  actions: {
    async getSlides ({ commit }) {
      const slides = await api.getSlides()
      if (!slides) return
      console.log(slides)
      commit('slides', slides)
    },
    async getNewsList ({ state, commit }, init) {
      const news = await api.getNewsList()
      console.log(news)
      if (!news) return
      const formatedNews = news.newslist.map(formatNewsList)
      if (init) {
        commit('news', formatedNews)
      } else {
        commit('news', state.news.concat(formatedNews))
      }
    },
    async getTopics ({ state, commit }, init) {
      let replytime = Date.now()
      if (!init) {
        const lastTopic = state.topics[state.topics.length - 1]
        replytime = lastTopic.replytime.replace(/[^0-9]/ig, '')
      }
      const topics = await api.getTopics(replytime)
      if (!topics) return
      const formatedTopics = topics.map(formatTopicList)
      if (init) {
        commit('topics', formatedTopics)
      } else {
        commit('topics', state.topics.concat(formatedTopics))
      }
    }
  }
})

export default store
