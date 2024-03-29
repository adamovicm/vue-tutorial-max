import Vue from 'vue';
import Vuex from 'vuex';

import counter from './modules/counter.js';
import * as actions from './actions'
import * as getters from './getters'
import * as mutations from './mutations'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        // counter: 0,
        value: 0
    },
    // getters: {
    //     doubleCounter: state => {
    //         return state.counter * 2;
    //     },
    //     stringCounter: state => {
    //         return state.counter + ' Clicks';
    //     },
    //     value: state => {
    //         return state.value;
    //     }
    // },
    // mutations: {
    //     increment: (state, payload) => {
    //         state.counter += payload;
    //     },
    //     decrement: (state, payload) => {
    //         state.counter-= payload;
    //     },
        // updateValue: (state, payload) => {
        //     state.value = payload;
        // }
    // },
    // actions: {
        // increment: context => {
        //     context.commit('increment');
        // }
        // increment: ({ commit }, payload) => {
        //     commit('increment', payload);
        // },
        // decrement: ({ commit }, payload) => {
        //     commit('decrement', payload);
        // },
        // asyncIncrement: ({ commit }, payload) => {
        //     setTimeout(() => {
        //         commit('increment', payload.by);
        //     }, payload.duration);
        // },
        // asyncDecrement: ({ commit }, payload) => {
        //     setTimeout(() => {
        //         commit('decrement', payload.by);
        //     }, payload.duration);
        // },
        // updateValue({commit}, payload) {
        //     commit('updateValue', payload);
        // }
    // },
    getters,
    mutations,
    actions,
    modules: {
        counter
    }
});