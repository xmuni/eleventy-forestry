---
title: Home page title
layout: base_layout
---
Home page content.

{% for item in collections.home-content %}
    <img src="{{ item.data.image }}" alt="img"></img>
    {{ item.data.text }}
{% endfor %}