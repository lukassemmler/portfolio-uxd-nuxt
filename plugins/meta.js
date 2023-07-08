export default ({ app }, inject) => {
  // Inject $hello(msg) in Vue, context and store.
  //console.log(app);
  inject('pagemeta', msg => `Hello ${app.i18n.$t(msg)}!`)
}
