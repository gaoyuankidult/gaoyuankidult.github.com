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
    var x = this.nextSibling;
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
    	<h6></h6>
	<a markdown="0" id="quote_btn" onclick="toggleAbstract(); float:right;"  class="btn">Abstract</a>
	<div id="abstract" text="In the domain of robotic tutors, personalised tutoring has started to receive scientists' attention, but is still relatively underexplored. Previous work using reinforcement learning (RL) has addressed personalised tutoring from the perspective of affective policy learning. However, little is known about the effects of robot behaviour personalisation on user's task performance. Moreover, it is also unclear if and when personalisation may be more beneficial than a robot that adapts to its users and the context of the interaction without personalising its behaviour. In this paper we build on previous work on affective policy learning that used RL to learn what robot's supportive behaviours are preferred by users in an educational scenario. We build a RL framework for personalisation that allows a robot to select verbal supportive behaviours to maximise the user's task progress and positive reactions in a learning scenario where a Pepper robot acts as a tutor and helps people to learn how to solve grid-based logic puzzles. 
A between-subjects design user study showed that participants were more efficient at solving logic puzzles and preferred a robot that exhibits more varied behaviours compared with a robot that personalises its behaviour by converging on a specific one over time. We discuss insights on negative effects of personalisation and report lessons learned together with design implications for personalised robots."></div>
    <div style="float:right;font-size:.6em">RO-MAN, 2018</div>
    </div>
</div>