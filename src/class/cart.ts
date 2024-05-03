import Product from '../interface/Product'

export default class Cart {
  items: Product[];

  constructor(items: Product[] = []) {
    this.items = items;
  }

  add(item: Product) {
    // Verifique se o item já existe no array
    const existingItem = this.items.find(i => i.id === item.id);

    if (existingItem) {
      // Se o item já existe, incremente a contagem
      existingItem.count += 1;
    } else {
      // Se o item não existe, adicione-o ao array
      this.items.push({ ...item, count: 1 }); // Inicie a contagem em 1
    }
  }

  remove(product: Product) {
    const index = this.items.findIndex(item => item.id === product.id);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }

  countAmountProduct() {
    let total = 0;
    for (let item of this.items) {
      total += item.count;
    }
    return total;
  }

  countPriceProduct() {
    let totalPrice = 0;
    for (let item of this.items) {
      totalPrice += item.price * item.count; // Multiplique o preço pelo count
    }
    return totalPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }

  countProduct() {
    return this.items.length;
  }

  addAmount(product: Product) {
    const item = this.items.find(item => item.id === product.id);
    if (item) {
      item.count += 1;
    }
  }

  removeAmount(product: Product) {
    const item = this.items.find(item => item.id === product.id);
    if (item && item.count > 1) {
      item.count -= 1;
    }
  }
}
