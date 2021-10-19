export default function ({ store, redirect }) {
  if (store.state.cart.items.length === 0) {
    return redirect('/')
  }
}
