// Blog functionality - loads posts from blog.json
document.addEventListener('DOMContentLoaded', function() {
  const container = document.getElementById('blog-posts');
  if (!container) return;

  fetch('../blog.json')
    .then(function(response) { return response.json(); })
    .then(function(data) {
      var posts = data.posts;
      var html = '';

      posts.forEach(function(post) {
        var tagsHtml = '';
        if (post.tags) {
          post.tags.forEach(function(tag) {
            tagsHtml += '<span class="blog-tag">' + tag + '</span>';
          });
        }

        // Truncate excerpt
        var excerpt = post.excerpt || post.content.substring(0, 200) + '...';

        html +=
          '<article class="blog-card">' +
            '<div class="blog-date">' + post.date + '</div>' +
            '<div class="blog-tags">' + tagsHtml + '</div>' +
            '<h3><a href="' + post.url + '">' + post.title + '</a></h3>' +
            '<p>' + excerpt + '</p>' +
            '<a href="' + post.url + '" class="read-more">Read more →</a>' +
          '</article>';
      });

      container.innerHTML = html;
    })
    .catch(function(err) {
      container.innerHTML = '<p>No blog posts yet. Check back soon!</p>';
    });
});