---
title: Blog title
layout: base_layout
---
BLOG POSTS BELOW:
{% for post in collections.post %}
- [{{ post.data.title }}]({{ post.url }})
{% endfor %}