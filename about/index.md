---
title: About
---
As a lifetime roboticist who wants to explore the boundaries of transhumanism, I am interested in developing **AI-driven** robots that can **think and feel** like real humans (e.g. [Ex Machina](https://en.wikipedia.org/wiki/Ex_Machina_(film))). In particular, I am interested in deep/reinforcement/neuro-based learning approaches to robotic **perception, control, and physical modeling** of the robot’s environment. Currently, I am working on projects that can fill the gap between deep reinforcement learning and social robotics.

In our Uppsala [social robotics lab](http://hri.research.it.uu.se), we aim to answer a fundamental question: **How could robots learn like humans ?** We achieve this by researching and developing new **robot learning models** using machine learning theories. The key of our research is to understand _what interactive elements make the learning process different_ and _how could we build efficient learning models for human robot interaction_. 
Our research is **multi-disciplinary** and it requires knowledge of different fields. Except machine leanring algorithms, we also investigate on computational psychology models. We conduct both fundamental and applied research together with our collabrators around the world.



#### Research Quote ? 

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
              '<img width="240" src="' + quote.img + '">';
	  document.getElementById("quote_btn").innerHTML = "Fold Quote";
      } else {
      	  document.getElementById("quote").innerHTML = "";
	  document.getElementById("quote_btn").innerHTML = "Want to See a Research Quote ?";
	  
      }
    }
</script>

<style>
.button {
    clear: left;
    background-color: #4CAF50; /* Green */
    border: none;
    color: white;
    padding: 4px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 12px;
    margin: 4px 2px;
    -webkit-transition-duration: 0.4s; /* Safari */
    transition-duration: 0.4s;
    cursor: pointer;
}

.green {
    background-color: white; 
    color: black; 
    border: 2px solid #4CAF50;
}

.green:hover {
    background-color: #4CAF50;
    color: white;
}

.blue {
    background-color: white; 
    color: black; 
    border: 2px solid #008CBA;
}

.blue:hover {
    background-color: #008CBA;
    color: white;
}

.red {
    background-color: white; 
    color: black; 
    border: 2px solid #f44336;
}

.red:hover {
    background-color: #f44336;
    color: white;
}

.gray {
    background-color: white;
    color: black;
    border: 2px solid #e7e7e7;
}

.gray:hover {background-color: #e7e7e7;}

.black {
    background-color: white;
    color: black;
    border: 2px solid #555555;
}

.black:hover {
    background-color: #555555;
    color: white;
}
</style>

<button id="quote_btn" class="button black" onclick="showQuote()" type="button">Want to See a Research Quote ?</button>

<div id="quote" style="font-size:.8em; text-align: justify;"></div>
