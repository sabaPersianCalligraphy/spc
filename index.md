---
title: Home
description: Abstract Persian calligraphy in Siyah-Mashq Nastaʿlīq—visual poetry beyond words, blending tradition, form, and contemporary expression.
keywords:
  - persian calligraphy
  - persian calligraphy art
  - abstract art
  - black and white abstract art
  - modern abstract art
  - abstract art ideas
  - abstract art examples
  - famous abstract art
  - nastaliq
  - Persian Nastaʿlīq
  - modern persian calligraphy
  - persian calligraphy wall art
  - persian calligraphy generator
  - rumi
  - rumi quotes
  - persian poetry
  - persian poetry quotes
  - art commission
  - art commission websites
  - art commission sheet
  - art commission form
  - best art commission websites
  - art commission contract
  - art commission prices
  - average art commission prices
  - persian calligraphy commission
  - art gallery
  - artists
  - persian art
  - old persian art
  - modern persian art
  - ancient persian art
  - iranian art
  - traditional iranian art
  - modern iranian art
  - SaBa Art Gallery

image: https://storage.googleapis.com/artworks_img_public_bucket/saba-persian-calligraphy/BeyondWords/thumbnail/BeyondWords-S-01.jpg
layout: default
---

<h1 class="mb-24 text-center racing-sans-one-regular">Welcome to SaBa Persian Calligraphy</h1>

<article>
    <div class="float-right w-full mx-auto mb-20 md:mb-10 lg:w-1/2 lg:mt-0">

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
    <div class="clear-left">
        <div class="flex flex-col w-full md:w-auto gap-y-4">
            <div>
                <h3 class="hidden lg:block">Opening Words:</h3>
                <h4 class="block lg:hidden">Opening Words:</h4>
                <p class="text-sm md:text-base lg:text-lg">My works are abstract expressions that emerge at the intersection of language and form, shaped through Siyah-Mashq in Persian Nastaʿlīq script.</p>
                <p class="text-sm md:text-base lg:text-lg">Engage with these artworks visually, not linguistically. They are not traditional writings to be read, but visual composition shaped to evoke thought, emotion, and presence.</p>
                <p class="text-sm md:text-base lg:text-lg">Most people are taught to read words, not truly see them. We invite viewers to shift their experience from language to presence, from text to texture, and from reading to seeing.</p>
                <p class="text-sm md:text-base lg:text-lg">Visual language enters the realm where words can no longer reach.</p>
            </div>
            <div>
                <h3 class="hidden lg:block">Following Words:</h3>
                <h4 class="block lg:hidden">Following Words:</h4>
                <p class="text-sm md:text-base lg:text-lg">In these works, every letter and word is chosen with deliberate care and intention.</p>
                <p class="text-sm md:text-base lg:text-lg">Each verse is a chosen gem from the vast treasury of Persian poetry, carrying a message that is profound, lyrical, and uniquely resonant.</p>
            </div>
            <div>
                <p class="text-sm md:text-base lg:text-lg">Like a choreographer shaping rhythm and harmony through the movement of bodies, I create harmony, order, and motion using the letters and words of Nastaʿlīq.</p>
                <p class="text-sm md:text-base lg:text-lg">My audience spans a broad spectrum, from those who speak Persian to those who may not know the language, but understand the universal language of visual form.</p>
            </div>
        </div>
    </div>

</article>