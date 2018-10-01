---
title: Recent Publications
---
<style>
.iconDetails {
	float:left; 
	width:20%;
    height:20%;
	max-height:140px;
	max-width:140px; 
} 

.container {
    width:100%;
    height:24%;
    padding:1%;
}
h4 {
    margin:0px;
}
</style>

<script>
function toggleAbstract() {
    var x = document.getElementById("abstract");
    if (x.innerHTML === "") {
        x.innerHTML = x.getAttribute("text");
    } else {
        x.innerHTML = "";
    }
}
</script>

<div class='container'>
    <div>
		<img src='papers/deep_proximics.jpg' class='iconDetails'>
    </div>  
    <div style='margin-left:25%;'>
    <h4>Investigating Deep Learning Approaches for Human-Robot Proxemics [<a href="papers/investigate-deep-learning-proximics.pdf">Download</a>]</h4>
    <div style="font-size:.8em"> Yuan Gao, Sebastian Wallkötter, Mohammad Obaid, Ginevra Castellano,</div>
	<h6></h6>
	<a markdown="0" id="quote_btn" onclick="toggleAbstract(); float:right;"  class="btn">Abstract</a>
	<div id="abstract" text="In this paper, we investigate the applicability of deep learning methods to adapt and predict comfortable human-robot proxemics."></div>
    <div style="float:right;font-size:.6em">RO-MAN, 2018</div>
    </div>
</div>

<div class='container'>
    <div>
		<img src='papers/when_help.jpg' class='iconDetails'>
    </div>  
    <div style='margin-left:25%;'>
    <h4>When robot personalisation does not help: Insights from a robot-supported learning study [<a href="papers/when-robot-does-not-help.pdf">Download</a>]</h4>
    <div style="font-size:.8em"> Yuan Gao, Wolmet Barendregt, Mohammad Obaid, Ginevra Castellano,</div>
    <div style="float:right;font-size:.6em">RO-MAN, 2018</div>
    </div>
</div>
<br\>