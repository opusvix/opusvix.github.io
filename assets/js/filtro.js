// Filtro de projetos por ferramenta. Sem JavaScript, todos os cards aparecem.
(function () {
  var bar = document.querySelector('.filter');
  if (!bar) return;
  var chips = bar.querySelectorAll('.chip');
  var cards = document.querySelectorAll('#projetos .card, #outros .card');
  var outros = document.getElementById('outros');
  var empty = document.querySelector('.filter-empty');
  bar.hidden = false;

  function apply(tool) {
    var shownOutros = 0, shown = 0;
    cards.forEach(function (c) {
      var ok = !tool || c.getAttribute('data-tags').indexOf('|' + tool + '|') !== -1;
      c.hidden = !ok;
      if (ok) { shown++; if (outros.contains(c)) shownOutros++; }
    });
    outros.hidden = shownOutros === 0;
    empty.hidden = shown !== 0;
    chips.forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.getAttribute('data-filter') === tool));
    });
  }

  chips.forEach(function (b) {
    b.addEventListener('click', function () { apply(b.getAttribute('data-filter')); });
  });
})();
