---
title: Home page title
layout: base_layout
rerender: true
mainclass: home
---
Home page content.

{% for item in collections.home-content %}
<article>

<div class="display-row">
<section class="display-column">{{ item.data.text}}</section>
<section class="display-column"><img src="{{ item.data.image }}"/></section>
</div>

</article>
{% endfor %}