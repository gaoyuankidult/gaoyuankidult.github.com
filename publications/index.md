---
title: Recent Publications
---
<style>
.iconDetails {
	float:left; 
	height:120px;
	width:120px; 
} 

.container {
    width:100%;
    height:130px;
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
        x.innerHTML = "Swapped text!";
    } else {
        x.innerHTML = x.text;
    }
}
</script>

<div class='container'>
    <div>
		<img src='papers/deep_proximics.jpg' class='iconDetails'>
    </div>  
    <div style='margin-left:140px;'>
    <h4>Investigating Deep Learning Approaches for Human-Robot Proxemics [<a href="papers/investigate-deep-learning-proximics.pdf">Download</a>]</h4>
    <div style="font-size:.8em"> Yuan Gao, Sebastian Wallkötter, Mohammad Obaid, Ginevra Castellano,</div>
	<p></p>
	<a markdown="0" id="quote_btn" onclick="toggleAbstract();"  class="btn">Abstract</a>
	<div id="abstract" text="In this paper, we investigate the applicability of deep learning methods to adapt and predict comfortable human-robot proxemics. Proposing a network architecture, we experiment with three different layer configurations, obtaining three different end-to-end trainable models. Using these, we compare their predictive performances on data obtained during a human-robot interaction study. We find that our long short-term memory based model outperforms a gated recurrent unit based model and a feed-forward model. Further, we demonstrate how the created model can be exploited to create customized comfort zones that can help create a personalized experience for individual users."></div>
    <div style="float:right;font-size:.6em">RO-MAN, 2018</div>
    </div>
</div>

<div class='container'>
    <div>
		<img src='papers/when_help.jpg' class='iconDetails'>
    </div>  
    <div style='margin-left:130px;'>
    <h4>When robot personalisation does not help: Insights from a robot-supported learning study [<a href="papers/when-robot-does-not-help.pdf">Download</a>]</h4>
    <div style="font-size:.8em"> Yuan Gao, Wolmet Barendregt, Mohammad Obaid, Ginevra Castellano,</div>
    <div style="float:right;font-size:.6em">RO-MAN, 2018</div>
    </div>
</div>