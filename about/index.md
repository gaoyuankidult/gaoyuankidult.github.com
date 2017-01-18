---
layout: page
title: About Alex Yuan Gao
tags: [author]
modified: 2014-08-08T20:53:07.573882-04:00
comments: true

---
<style>
/* @group basics */

* {
  margin: 0;
  padding: 0;
}

html, body {
}

/*
body {
  font: 14px/20px Georgia, "Times New Roman", Times, serif;
}
*/

body.grid {
  background-image: url(../images/grid.png);
}


/* Modified settings */


figure {
    white-space: normal; 
    display: inline-block; 
    *zoom: 1; 
    *display: inline; 
    margin: 0; 
    padding: 0; 
    letter-spacing: normal;
    word-spacing : normal; 
  border: thin silver solid;
  margin: 1%;
  padding: 1%;
}

div.tool {
width: 150px; 
height: 80px; 
opacity: 1;
border: thin silver solid;
}

div#tool_gpu_server{
display: block; 
background-image: url(http://www.cs.helsinki.fi/u/yuangao/Img/calendar.jpg);
background-size: 140px 80px; 
background-repeat: no-repeat;
background-position:center; 
}

div.project {
width: 320px; 
height: 80px; 
opacity: 1;
border: thin silver solid;
}

div#project_atari{
display: block; 
background-image: url(http://www.cs.helsinki.fi/u/yuangao/Img/atari_agent.png); 
background-repeat: no-repeat;
background-position:center; 
}

div#project_robot{
display: block; 
background-image: url(http://www.cs.helsinki.fi/u/yuangao/Img/robocup.jpg); 
background-repeat: no-repeat;
background-position:center; 
}


div#project_simu{
display: block; 
background-image: url(http://www.cs.helsinki.fi/u/yuangao/Img/simulators.jpg); 
background-repeat: no-repeat;
background-position:center; 
}

div#project_deep_learning{
display: block; 
background-image: url(http://www.cs.helsinki.fi/u/yuangao/Img/research_helicopter.jpg); 
background-repeat: no-repeat;
background-position:center; 
opacity: 1;
}


img.project{
  width: 250px;
  height: 250px;
  overflow:hidden;
  border: thin silver solid;
  margin: 1%;
  padding: 1%;
}

#top_section {
    overflow: hidden;
    padding-bottom: 180px;
}

/* Modified settings */

p {
  margin-bottom: 15px;
}


/* @end */

/* @group header */

#header {
  height: 50px;
  background-image: url(../Styles/header.png);
  line-height: 38px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
}

#header ul {
  width: 950px;
  margin: 0 auto;
  padding: 7px 0 0;
  list-style-type: none;
  overflow: hidden;
}

#header ul li {
  display: inline;
  margin-right: 10px;
  float: left;
}

#header ul li a {
  line-height: 24px;
  font-size: 12px;
  font-style: italic;
  background: url(../Styles/header-right.png) right 0;
  float: left;
  -webkit-transition: opacity 0.2s linear;
  -moz-transition: opacity 0.2s linear;
}

#header ul li a:hover {
  text-decoration: none;
  opacity: 0.5;
}



#header ul li a span {
  display: block;
  height: 26px;
  float: left;
  background: url(../Styles/header-left.png) no-repeat;
  padding-left: 10px;
  padding-right: 10px;
}



/* @end */

/* @group about */

#about {
  width: 950px;
  padding: 80px 0 59px;
  margin: 0 auto;
  background: url(../Styles/line.png) repeat-x 0 bottom;
  overflow: hidden;
}

#about h1 {
  margin-bottom: 4px;
  margin-top: 2px;
}

#about h2 {
  font-size: 14px;
  line-height: 20px;
  font-style: italic;
  margin-bottom: 14px;
}

/* --- */

#story {
  font-size: 18px;
  line-height: 30px;
  width: 390px;
  float: left;
  padding-right: 90px;
}

#picture {
  width: 190px;
  float: left;
}

/* @group contact */

#contact {
  width: 230px;
  float: right;
  padding-right: 50px;
  padding-top: 20px;
  list-style-type: none;
  line-height: 20px;
}

#contact li {
  width: 230px;
  overflow: hidden;
  margin-bottom: 5px;
}

#contact li span {
  float: left;
}

#contact li strong {
  float: right;
  text-align: right;
  color: #3c3c3c;
  font-weight: normal;
  font-style: normal;
}

.bibtexCode {
 font-size: 11px;
 display: none;
 background-color: #e5e5e5;
 padding: 5px;
}
.bibtexLink {
 background-color: #5c3c5c;
 color: #ffffff;
 padding-left: 3px;
 padding-right: 2px;
 border-radius: 4px;
}


/* @end */



/* @end */

/* @group section */

.section {
  width: 950px;
  margin: 12px auto;
  padding: 20px 20px 0px 20px;
  background: url(../images/line.png) repeat-x 0 bottom;
  background-color: #f4f4f4;
  overflow: hidden;
}

.section h2 {
  width: 100px;
  padding-right: 5px;
  float: left;
  padding-top: 0;
  line-height: 22px;
}

.section h3 {
  line-height: 22px;
  margin-bottom: 20px;
  font-style: italic;
}

.section h4 {
  font-weight: normal;
  font-style: normal;
  margin-bottom: 3px;
  margin-top: -20px;
}

.section .date {
  position: absolute;
  top: 6px;
  right: 0;
}

.section .item {
  width: 710px;
  padding-left: 50px;
  float: right; 
  padding-top: 0;
  margin-bottom: 9px;
  position: relative;
  padding-bottom: 5px;
  background: url(../Styles/separator.png) no-repeat 0 bottom;
}

.section .description {
  width: 650px;
  text-align:left;
}



/* @end */

/* @group small */

body.small {
}

body.small #header ul  {
  width: 750px;
}

body.small #about {
  width: 750px;
  position: relative;
  padding-bottom: 65px;
  min-height: 260px;
}

body.small #about #story {
  float: none;
}

body.small #about #contact {
  float: none;
  padding-top: 0;
  padding-right: 0;
  clear: left;
}

body.small #about #picture {
  clear: none;
  float: none;
  position: absolute;
  top: 80px;
  right: 0;
}

/* --- */

body.small .section {
  width: 750px;
}

body.small .section .item {
  width: 510px;
}



/* @end */

/* @group footer */

#footer {
  font-size: 10px;
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;
}



/* @end */


/* bib */

#biblio 
{
	font-size: .8em;
	list-style: none;
	text-indent: 0px;
	padding: 0px;
	margin: 0px;
}

#biblio li
{ 
	padding-bottom: 20px; 
}

span.bibtitle { 
    font-weight: bold;
    color: #642424; }

span.bibpub { font-style: italic; }

h3.bib{ font-size: 13px; font-style: normal;}


/* The style of animation */

ul { display: block; }
ul li { display: inline-block; margin: 0 10px; }
ul li a { opacity: 0.5; }
ul li a:hover { opacity: 1; -webkit-transition:all 0.2s ease-in-out; }
ul li.bsa a { width: 33px; height: 33px; display: block; background: transparent url('bsa.png') top center no-repeat; text-indent: -9999px; }
ul li.contrastly a { width: 33px; height: 33px; display: block; background: transparent url('contrastly.png') top center no-repeat; text-indent: -9999px; }
ul li.twitter a { width: 33px; height: 33px; display: block; background: transparent url('twitter.png') top center no-repeat; text-indent: -9999px; }
ul li.dribbble a { width: 33px; height: 33px; display: block; background: transparent url('http://jonphillips.ca/images/dribbble_icn.png') top center no-repeat; text-indent: -9999px; }
ul li.email a { width: 33px; height: 33px; display: block; background: transparent url('email.png') top center no-repeat; text-indent: -9999px; }
ul li.blog a { width: 33px; height: 33px; display: block; background: transparent url('blog.png') top center no-repeat; text-indent: -9999px; }
ul li.facebook a { width: 33px; height: 33px; display: block; background: transparent url('facebook.png') top center no-repeat; text-indent: -9999px; }
ul li.linkedin a { width: 33px; height: 33px; display: block; background: transparent url('linkedin.png') top center no-repeat; text-indent: -9999px; }

.logo h1 a { width: 60px; height: 79px; display: block; background: url('http://jonphillips.ca/images/logo.png') top center no-repeat; text-indent: -9999px; padding: 0; margin: 0 auto; border: none; text-align: center; }
.logo h1 a:hover { -webkit-transform:rotate(360deg); -moz-transform:rotate(360deg); -o-transform:rotate(360deg); }
.content { max-width: 480px; padding: 0 20px; display: block; margin: 15% auto 0; }

.vegas-loading { display: none; }
.vegas-overlay { background: transparent url('http://jonphillips.ca/images/overlay.png'); opacity: 0.5; z-index: -1; }
.vegas-background { image-rendering: optimizeQuality; -ms-interpolation-mode: bicubic; z-index: -2; }ttp://www.cs.helsinki.fi/u/yuangao/Img/atari_agent.png
</style>

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
<div class="item">
Alex Yuan Gao is a Ph.D. student, who wants to live in a world filled with innovative businesses, robots, books that come bundled with extra hot chocolate and a steampunk-styled force field around his keyboard that repels cats.
</div>
</div>


<div class="section">
<h2>News</h2> <a name="int"></a>
<div class="item">
<div class="description">
This section will be updated soon.
</div>
</div>
</div>

<hr>

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