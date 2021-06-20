import Alpine from 'alpinejs';

declare global {
  interface Window {
    Alpine: any;
  }
}

window.Alpine = Alpine;

Alpine.store('dropdown', {
  open: false,

  toggle() {
    this.open = !this.open;
  },
});

Alpine.store('show', true);

Alpine.data('counter', () => ({
  count: 0,
  customNumber: 0,

  increment(num: number) {
    this.count += num;
  },
  decrement() {
    this.count--;
  },
  reset() {
    this.count = 0;
  },
}));

Alpine.start();
