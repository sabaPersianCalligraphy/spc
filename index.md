---
layout: default
title: Home
---

<h1 class="mb-24 text-center racing-sans-one-regular">Welcome to SaBa's Art Gallery</h1>

<article>
    <div class="float-right w-full mx-auto mb-20 md:mb-10 md:lg:w-1/2 lg:mt-0">

        {% capture slider_content %}
            {% for item in site.data.sliderImages %}
                <li class="m-0 splide__slide">
                    <a href="{{ item.permalink }}" class="flex flex-col items-center justify-center">
                        <img
                        src="{{ item.image }}"
                        alt="{{ item.title | escape }}"
                        class="object-cover w-auto h-full mx-auto"
                        >
                        <span class="w-full text-xs text-center text-stone-400">{{ item.title | escape }}</span>
                    </a>
                </li>
            {% endfor %}
        {% endcapture %}

        {% include slider-component.html content=slider_content %}

    </div>
    <div class="space-y-3 clear-left">

        <div>
            <h3 class="hidden lg:block">Opening Words:</h3>
            <h4 class="block lg:hidden">Opening Words:</h4>

            <p class="text-sm md:text-base lg:text-lg">My works are abstract art that manifest through the form of Siyah-Mashq in Persian Nastaʿlīq script.</p>
            <p class="text-sm md:text-base lg:text-lg">Not writings meant to be read by Persian speakers, but compositions intended to evoke reflection.</p>
            <p class="text-sm md:text-base lg:text-lg">They are forms to be seen, not texts to be read, though they are made of Persian letters and words.</p>
        </div>

        <div>
            <h3 class="hidden lg:block">Following Words:</h3>
            <h4 class="block lg:hidden">Following Words:</h4>

            <p class="text-sm md:text-base lg:text-lg">In these works, the letters and words are not chosen randomly or arbitrarily.</p>
            <p class="text-sm md:text-base lg:text-lg">They are selected verses from the poetic world of unparalleled Persian poets, each carrying a message that is linguistic, profound, and unique. </p>
        </div>

        <p class="text-sm md:text-base lg:text-lg">A paradox? Perhaps.</p>

        <div class="">
            <p class="text-sm md:text-base lg:text-lg">But like a choreographer who creates rhythm and harmony through the arrangement of movements, or like an abstract painter who conveys intellectual and emotional depth through geometric forms, regular or irregular, I create harmony, order, and motion using the letters and words of Nastaʿlīq.</p>
            <p class="text-sm md:text-base lg:text-lg">Therefore, my audience spans a broad spectrum, from those who know only the Persian language to those who do not, but who understand the language of visual form.</p>
            <p class="text-sm md:text-base lg:text-lg"></p>
        </div>
    </div>

</article>