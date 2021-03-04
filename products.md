---
title: Product title
layout: base_layout
---
PRODUCTS BELOW:
{% for item in collections.product %}
- [{{ item.data.name }}](/product/{{ item.data.slug }}) for ${{ item.data.price }}
{% endfor %}