const NOT_STARTED = 0, STARTED = 1;

const game = new Vue({
  el: '#game',
  data: {
    _state: NOT_STARTED,
    tiles: [
      { id: 0, text: 'Sarah takes a nap' },
      { id: 1, text: 'Dad: "This is how it works..."' },
      { id: 2, text: 'Nana asks if the baby is cold' }
    ],
    get tileInput() {
      return this.tiles.map(t => t.text).join('\n');
    },
    set tileInput(newInput) {
      this.tiles = newInput.split('\n').map((text, id) => ({ id, text }));
    }
  }
});