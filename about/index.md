---
title: About
---

<p class="page-intro fade-in">Somewhere between the laboratory and the gallery, between the algorithm and the gesture—this is where I work, and where I try to make sense of what it means to build things that move on their own.</p>

<div class="fade-in" markdown="1">

## The Space Between

</div>

<div class="fade-in stagger-1" markdown="1">

I am Yuan Gao (高源)—researcher, artist, and architect of machine behaviour.

</div>

<div class="fade-in stagger-2" markdown="1">

I lead the Heterogeneous Multi-Robot Systems group at the **Guangdong Embodied Intelligence Innovation Center**, where I explore how fundamentally different robotic forms learn to coexist. Humanoids, quadrupeds, drones, wheeled platforms—each carries its own grammar of movement, its own way of perceiving the world. My work asks what emerges when we let them negotiate, cooperate, and sometimes betray one another.

</div>

<div class="fade-in stagger-3" markdown="1">

Before settling in Shenzhen, I completed my Ph.D. at **Uppsala University, Sweden**, under the guidance of IEEE Fellow [Prof. Danica Kragic](https://www.kth.se/profile/dani) and [Prof. Ginevra Castellano](https://www.it.uu.se/katalog/ginca820). Those years shaped my conviction that the most interesting questions about robots are not technical—they are philosophical.

</div>

<div class="fade-in stagger-4" markdown="1">

I publish in venues like *Science Robotics*, *IEEE T-RO*, and *ACL*. But increasingly, I find myself drawn to the gallery as much as the conference hall. My installation *Game Theater* brings reinforcement learning algorithms into physical space, turning the Actor-Critic framework into a meditation on observation and action.

</div>

<div class="fade-in" style="transition-delay:0.5s;" markdown="1">

A question that haunts me: *When machines learn to watch us as closely as we watch them, will we still recognise ourselves?*

</div>

<div class="fade-in" style="transition-delay:0.6s;" markdown="1">

## Research Interests

- **Heterogeneous Multi-Robot Systems** — The choreography of difference: how robots of radically distinct forms learn to move together
- **Robot Learning** — Teaching machines to acquire skills through trial, error, and something approaching intuition
- **Embodied Intelligence** — The premise that thinking cannot be separated from having a body in the world
- **Human-Robot Interaction** — The social contract, rewritten for a world where not all agents are human

</div>

---

<div class="fade-in" style="transition-delay:0.2s;">

<h4>Research Quote</h4>

<script>
    function showQuote() {
        var quotes = [
      	{
	    text: " \"I have never looked upon ease and happiness as ends in themselves -- this critical basis I call the ideal of a pigsty.\" <p>-- Albert Einstein</p>",
	    img:  "http://images.mentalfloss.com/sites/default/files/styles/insert_main_wide_image/public/einstein1_7.jpg"
        },
        {
	    text: " \"That fondness for science, ... that affability and condescension which God shows to the learned, that promptitude with which he protects and supports them in the elucidation of obscurities and in the removal of difficulties, has encouraged me to compose a short work on calculating by al-jabr and al-muqabala, confining it to what is easiest and most useful in arithmetic.\" <p>-- al-Khwarizmi</p>",
	    img:  "https://s3.amazonaws.com/files.digication.com/M2bae2c5dce10400fec56aceb9d58d08c.jpg",
         },
        {
	    text: "\"A huge tree that fills one's arms grows from a tiny seedling; a nine-storied tower rises from a heap of earth; a thousand li journey starts with the first step.\"<p>-- Laozi, Tao Te Ching</p><br><p>\"合抱之木，生于毫末；九层之台，起于累土；千里之行，始于足下。\"</p><p>-- 老子《道德经》</p>",
	    img:  "https://colinanderson9494.files.wordpress.com/2013/04/laozi.jpg",
        },
        {
	    text: "\"Oh, this fire so burns our brains, we would dive to the depths of the gulf, Heaven or Hell, what matter? If only to find in the depths of the Unknown the New!\" <p>-- Charles Baudelaire, The Flowers of Evil</p>",
	    img:  "https://upload.wikimedia.org/wikipedia/commons/1/16/%C3%89tienne_Carjat,_Portrait_of_Charles_Baudelaire,_circa_1862.jpg",
        }
      ];
      var quote = quotes[Math.floor(Math.random() * quotes.length)];
      if (document.getElementById("quote").innerHTML.length == 0){
          document.getElementById("quote").innerHTML =
              '<blockquote>' + quote.text + '</blockquote>' +
              '<img width="200" src="' + quote.img + '" style="border-radius:4px; margin-top:0.5em;">';
	  document.getElementById("quote_btn").innerHTML = "Fold Quote";
      } else {
      	  document.getElementById("quote").innerHTML = "";
	  document.getElementById("quote_btn").innerHTML = "Want to See a Research Quote?";
      }
    }
</script>

<button id="quote_btn" class="pub-btn" onclick="showQuote()" type="button" style="cursor:pointer; padding:6px 16px; font-size:13px;">Want to See a Research Quote?</button>

<div id="quote" style="margin-top:1em;"></div>

</div>
