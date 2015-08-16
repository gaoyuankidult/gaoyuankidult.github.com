---
layout: page
title: About Alex Gao
tags: [author]
modified: 2014-08-08T20:53:07.573882-04:00
comments: true

---
Alex Gao wants to live in a world filled with innovative businesses, robots, books that come bundled with extra hot chocolate and a steampunk-styled force field around his keyboard that repels cats.


As an engineer with more than three year of experiences, he worked in Nokia, HIIT and Technobothnia to contribute to adavancement of current technology. However, at the same time, as a curious young man, who is not only intered in black magic, he studied in University of Helsinki in order to find solution to build a algorithmic hub for robot - what he calls "brain of robot".

### Research Quote ? 

<script>
    function showQuote() {
    	
        var quotes = [
      	{
	    text: " \"I have never looked upon ease and happiness as ends in themselves -- this critical basis I call the ideal of a pigsty.\" <p>-- Albert Einstein <p>  ",
	    img:  "http://images.mentalfloss.com/sites/default/files/styles/insert_main_wide_image/public/einstein1_7.jpg"
        },
        {
	    text: " \"That fondness for science, ... that affability and condescension which God shows to the learned, that promptitude with which he protects and supports them in the elucidation of obscurities and in the removal of difficulties, has encouraged me to compose a short work on calculating by al-jabr and al-muqabala , confining it to what is easiest and most useful in arithmetic.\" <p>--عبد الله محمد بن موسى الخوارزمی(al-Khwārizmī)</p>",
	    img:  "https://s3.amazonaws.com/files.digication.com/M2bae2c5dce10400fec56aceb9d58d08c.jpg",
         },
        {
	    text: "\"A huge tree that fills one's arms grows form a tiny seedling; a nine-storied tower rises from a heap of earth; A thousand li journey starts with the first step.\"<p> -- Laozi, Tao Te Ching </p> <br> <p>\"合抱之木,生于毫末,九层之台,起于累土;千里之行,始于足下\"</p> <p> -- 老子, 道德经</p>",
	    img:  "https://colinanderson9494.files.wordpress.com/2013/04/laozi.jpg",
        },
        {
	    text: "\"Oh, this fire so burns our brains, we would Dive to the depths of the gulf, Heaven or Hell, what matter? If only to find in the depths of the Unknown the New!\" <p> --Charles Baudelaire, The Flowers of Evil <\p> <br>\"Nous voulons, tant ce feu nous brûle le cerveau, Plonger au fond du gouffre, Enfer ou Ciel, qu'importe? Au fond de l'Inconnu pour trouver du nouveau!\" <p> --Charles Baudelaire, Les Fleurs du Mal <\p>",
	    img:  "https://upload.wikimedia.org/wikipedia/commons/1/16/%C3%89tienne_Carjat,_Portrait_of_Charles_Baudelaire,_circa_1862.jpg",
        }
      ];
      var quote = quotes[Math.floor(Math.random() * quotes.length)];
      if (document.getElementById("quote").innerHTML.length == 0){
          document.getElementById("quote").innerHTML =
              '<p>' + quote.text + '</p>' + '<br>' +
              '<img src="' + quote.img + '">';
	  document.getElementById("quote_btn").innerHTML = "Fold Quote";
      } else {
      	  document.getElementById("quote").innerHTML = "";
	  document.getElementById("quote_btn").innerHTML = "Want to See a Research Quote ?";
	  
      }
    }
</script>

<a markdown="0" id="quote_btn" href="javascript:showQuote()"  class="btn">Want to See a Research Quote ?</a>

<div id="quote"></div>