// Filter publications and presentations by research direction
document.addEventListener('DOMContentLoaded', function() {
  var filterButtons = document.querySelectorAll('.filter-btn');
  var items = document.querySelectorAll('[data-topic]');

  if (!filterButtons.length || !items.length) return;

  filterButtons.forEach(function(btn) {
    btn.addEventListener('click', function() {
      var filter = this.getAttribute('data-filter');

      filterButtons.forEach(function(b) { b.classList.remove('active'); });
      this.classList.add('active');

      items.forEach(function(item) {
        if (filter === 'all') {
          item.classList.remove('pub-hidden');
        } else {
          var topic = item.getAttribute('data-topic');
          if (topic && topic.indexOf(filter) !== -1) {
            item.classList.remove('pub-hidden');
          } else {
            item.classList.add('pub-hidden');
          }
        }
      });
    });
  });

});
