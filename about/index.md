---
layout: page
title: About Alex Yuan Gao Gao
tags: [author]
modified: 2014-08-08T20:53:07.573882-04:00
comments: true

---
<link rel="stylesheet" type="text/css" href="https://www.cs.helsinki.fi/u/yuangao/Styles/style.css">

<script type="text/javascript">
$().ready(function(){

    $(".project").hover(
	function () {
	    var bg = $(this).css('background-image');  	 
	    $(this).animate({
		opacity: 0
	    }, 'fast', function () {
		$(this)
		    .css({
		    'background-image': bg
		})
		    .animate({
		    opacity: 1
		});
	    });
	},

	function () {

	}); 
});

</script>
<script type="text/javascript">
//<!--
function toggleBibtex(control) {

var children = control.parentNode.children
	var bibvar = children[children.length-1]; 
	bibvar.style.display= (bibvar.style.display == 'none' || bibvar.style.display == '') ? 'block' : 'none';
}


//-->
</script>


<!--<center>Quick Links:&nbsp; <a href="#edu">Education</a> &nbsp; <a href="#pub">Publications</a></center>-->

<div class="section" >
<h2>About</h2>
<div class="item">
<div class="description">
Alex Yuan Gao is a Ph.D. student, who wants to live in a world filled with innovative businesses, robots, books that come bundled with extra hot chocolate and a steampunk-styled force field around his keyboard that repels cats.
</div>
</div>
</div>


<div class="section" >
<h2>Manifesto</h2>
<div class="item">
Nous voulons, tant ce feu nous brûle le cerveau,
Plonger au fond du gouffre, Enfer ou Ciel, qu'importe?
Au fond de l'Inconnu pour trouver du nouveau!
<br>--<em>Charles Baudelaire</em>
</div>
<br>

<div class="item">
I have never looked upon ease and happiness as ends in themselves -- this critical basis I call the ideal of a pigsty.
<br>--<em>Albert Einstein</em>
</div>

<div class="item">
天下事有难易乎? 为之, 则难者亦易矣; 不为, 则易者亦难矣。
<br>--<em>彭端淑(Duanshu Peng)</em>
</div>

<div class="item">
That fondness for science, ... that affability and condescension which God shows to the learned, that promptitude with which he protects and supports them in the elucidation of obscurities and in the removal of difficulties, has encouraged me to compose a short work on calculating by al-jabr and al-muqabala , confining it to what is easiest and most useful in arithmetic.
<br>--<em>عبد الله محمد بن موسى الخوارزمی(al-Khwārizmī)</em>
</div>

</div>


<div class="section">
<h2>Interests</h2> <a name="int"></a>
<div class="item">
<div class="description">
<!--I'm interested in machine learning, as applied to robotics. In particular,
I'm interested in deep/reinforcement/feature learning approaches to robotic perception,
control, and physical modeling of the robot's environment.-->
I'm interested in machine learning, as applied to robotics. In particular,
I'm interested in deep/reinforcement/neuro-based learning approaches to robotic perception,
control, and physical modeling of the robot's environment.
</div>
</div>
</div>

<div class="section">
<h2>Education</h2> <a name="edu"></a>
<div class="item">

<div class="item">
<h3>University of Helsinki</h3>
<div class="date">2013-2015
</div>
<div class="description">
<p>M.S. in Machine Learning, Minor in Mathmatics</p>
</div>
</div>

<div class="item">
<h3>Vaasa University of Applied Sciences</h3>
<div class="date">2009-2013</div>
<div class="description">
<p>B.E. in Embedded System, Minor in Telecom. (<a href="https://www.cs.helsinki.fi/u/yuangao/Doc/thesis.pdf">Thesis: Strategy Design for Multi-agent Robots</a>)</p>

</div>
</div>
</div>
</div>

<div class="section">
<h2>Publications</h2>
</div>

<div class="section">
<h2>Tools</h2>
<div class="item">
  <figure>
    <div>
      <a href="https://www.google.com/calendar/embed?src=wonders.pc.hiit%40gmail.com&ctz=Europe/Helsinki">
	<div id = "tool_gpu_server" class = "tool"> </div> </a>
    </div>
    <figcaption>GPUs Management Tool</figcaption>
  </figure>
</div>
</div>

<div class="section">
<h2>Current Research</h2>

<div class="item">
  <figure>
  <div>
  <a href="https://github.com/gaoyuankidult/DRL-AI">
  <div id = "project_deep_learning" class = "project"> </div> </a>
  </div>
  <figcaption>Deep Reinforcement Learning</figcaption>
  </figure>
</div>

</div>

<div class="section">
<h2>Projects</h2>
	 <div class="item" >
		  <figure>
		  <div >
		  <a href="https://github.com/gaoyuankidult/DRL-AI">
		  <div id = "project_atari" class = "project"> </div></a>
		  </div>
		  <figcaption>Deep Q Networks for Agent Control</figcaption>
		  </figure>
		  <figure>
		  <div>
		  <a href="https://github.com/gaoyuankidult/random_walk_simulator">
		  <div id = "project_simu" class = "project"> </div></a>
		  </div>
		  <figcaption>Simulators for Planning Algorithm</figcaption>
		  </figure>
		   <figure>
		  <div>
		  <a href="https://github.com/gaoyuankidult/Robot_Learning">
		  <div id = "project_robot" class = "project"> </div> </a>
		  </div>
		  <figcaption>Multi-agent Strategy Software Design</figcaption>
		  </figure>
	  </div>


</div>



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