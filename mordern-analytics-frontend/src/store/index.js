import { createStore } from 'vuex'
import axios from 'axios'
export default createStore({
    state: {
        products: [],
        revenue: [],
        visitor: [],
        transaction: [],
        report: [],
        user: []
    },
    
    getters: {
      getProducts: (state) => state.products,
      getRevenue: (state) => state.revenue,
      getVisitor: (state) => state.visitor,
      getTransaction: (state) => state.transaction,
      getReport: (state) => state.report,
      getUser: (state) => state.user,

    },

    actions: {

      async fetchUsers({ commit }) {
          try {
            const data = await axios.get('https://localhost:7145/api/Analytics/User')
              commit('SET_USERS', data.data)
            }
            catch (error) {
                alert(error)
                console.log(error)
            }
        },
         async fetchProducts({ commit }) {
          try {
            const data = await axios.get('https://localhost:7145/api/Analytics/Products')
              commit('SET_PRODUCTS', data.data)
            }
            catch (error) {
                alert(error)
                console.log(error)
            }
        },
         async fetchAllRevenues({ commit }) {
          try {
            const data = await axios.get('https://localhost:7145/api/Analytics/Revenue')
              commit('SET_REVENUE', data.data)
            }
            catch (error) {
                alert(error)
                console.log(error)
            }
        },
        
        async fetchAllVisitor({ commit }) {
          try {
            const data = await axios.get('https://localhost:7145/api/Analytics/Visitor')
              commit('SET_VISITOR', data.data)
            }
            catch (error) {
                alert(error)
                console.log(error)
            }
        },
        
        async fetchAllTransaction({ commit }) {
          try {
            const data = await axios.get('https://localhost:7145/api/Analytics/Transaction')
              commit('SET_TRANSACTION', data.data)
            }
            catch (error) {
                alert(error)
                console.log(error)
            }
        }, 
        async fetchAllReport({ commit }) {
          try {
            const data = await axios.get('https://localhost:7145/api/Analytics/Report')
              commit('SET_REPORT', data.data)
            }
            catch (error) {
                alert(error)
                console.log(error)
            }
        },
        
    },
    mutations: {
      SET_USERS(state, user) {
          state.user = user
      },
      SET_PRODUCTS(state, products) {
          state.products = products
      },
      SET_REVENUE(state, revenue) {
          state.revenue = revenue
      },
      SET_VISITOR(state, visitor) {
        state.visitor = visitor;
        console.log("Store visitor", state.visitor);
      },
      SET_TRANSACTION(state, transaction) {
        state.transaction = transaction;
        console.log("Store transaction", state.transaction);
      },
      SET_REPORT(state, report) {
        state.report = report;
        console.log("Store report", state.report);
      },
    }
})
