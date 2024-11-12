---
layout: blog
title: Unix Commands
permalink: /categories/commands/
---

{% for post in site.categories.commands %}
<article class="post-preview">
    <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
    <div class="post-meta">
        <span class="date">{{ post.date | date: "%B %-d, %Y" }}</span>
    </div>
    <p>{{ post.excerpt }}</p>
    <a href="{{ post.url | relative_url }}" class="read-more">Read More</a>
</article>
{% endfor %}
