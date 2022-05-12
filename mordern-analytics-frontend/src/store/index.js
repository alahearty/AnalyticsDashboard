// import { createStore } from 'vuex'
// import axios from 'axios'

// const BASE_URL = "https://localhost:7145/api/Analytics/";

// export default createStore({
//     state: {
//       products: [],
//       revenue: [],
//       visitor: [],
//       transaction: [],
//       report: []
//     },
    
//     getters: {
//       getUsers: (state) => state.product
//     },

//     actions: {

//       async fetchAllProducts(context) {
//         console.log("fetchAllProducts Store");
//         await axios
//           .get('https://localhost:7145/api/Analytics/Products')
//           .then((response) => context.commit("loadProducts", response.data))
//           .catch((e) => console.log("Errors:", e));
//       },

//       async fetchAllRevenues(context) {
//         console.log("fetchRevenue Store");
//         await axios
//           .get('https://localhost:7145/api/Analytics/Revenue')
//           .then((response) => context.commit("loadRevenues", response.data))
//           .catch((e) => console.log("Errors:", e));
//       },
//       async fetchAllVisitor(context) {
//         console.log("fetchVisitor Store");
//         await axios
//           .get(`${BASE_URL}/Visitor`)
//           .then((response) => context.commit("loadVisitor", response.data))
//           .catch((e) => console.log("Errors:", e));
//       },
//       async fetchAllTransactions(context) {
//         console.log("fetchTransactions Store");
//         await axios
//           .get(`${BASE_URL}/Transaction`)
//           .then((response) => context.commit("loadTransaction", response.data))
//           .catch((e) => console.log("Errors:", e));
//       },
//       async fetchAllReports(context) {
//         console.log("fetchReports Store");
//         await axios
//           .get(`${BASE_URL}/Report`)
//           .then((response) => context.commit("loadReports", response.data))
//           .catch((e) => console.log("Errors:", e));
//       },
//     },

//     mutations: {
//     loadProducts(state, product) {
//       state.product = products;
//       console.log("Store product", state.product);
//     },
//     loadRevenues(state, revenue) {
//       state.revenue = revenue;
//       console.log("Store revenue", state.revenue);
//     },
//     
    
//   },
// })

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
