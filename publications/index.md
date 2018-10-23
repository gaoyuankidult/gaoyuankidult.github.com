---
title: Recent Publications
---
<style>
.iconDetails {
	clear: left;
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
	margin-bottom: 20px;
}
h4 {
    margin:0px;
}

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

<script>
function toggleAbstract(btn) {
    var x = btn.nextElementSibling.nextElementSibling;
    if (x.innerHTML === "") {
        x.innerHTML = x.getAttribute("text");
    } else {
        x.innerHTML = "";
    }
}
</script>

<div class='container'>
    <div>
		<img src='papers/social_behavior_learning.gif' class='iconDetails'>
    </div>  
    <div style='margin-left:25%;'>
    <h4>Social Behavior Learning with Realistic Reward Shaping</h4>
    <div style="font-size:.8em"> Yuan Gao, Fangkai Yang, Martin Frisk, Daniel Hernandez, Christopher Peters and Ginevra Castellano</div>
	<h6></h6>
	<button class="button black" onclick="window.open('https://github.com/usr-lab/PepperSocial')" type="button">GitHub</button><button id="abstract_btn" class="button black" onclick="toggleAbstract(this);" type="button">Abstract</button><button class="button black" onclick="window.open('https://arxiv.org/pdf/1810.06979')" type="button">Download</button>
	<div id="abstract" text="Deep reinforcement learning has been widely applied in the field of robotics recently to study tasks like locomotion and grasping, but applying it to social robotics remains a challenge. In this paper, we present a deep learning scheme that acquires a prior model of robot behavior in a simulator as a first phase to be further refined through learning from subsequent real-world interactions involving physical robots. The scheme, which we refer to as Staged Social Behavior Learning (SSBL), considers different stages of learning in social scenarios. Based on this scheme, we implement robot approaching behaviors towards a small group generated from F-formation and evaluate the performance of different configurations using objective and subjective measures. We found that our model generates more socially-considerate behavior compared to a state-of-the-art model, i.e. social force model. We also suggest that SSBL could be applied to a wide class of social robotics applications."></div>
	<div style="float:right;font-size:.6em">arXiv, 2018</div>
    </div>
</div>


<div class='container'>
    <div>
		<img src='papers/effect_posture.jpg' class='iconDetails'>
    </div>  
    <div style='margin-left:25%;'>
    <h4>Effects of Posture and Embodiment on Social Distance in Human-Agent Interaction in Mixed Reality</h4>
    <div style="font-size:.8em"> Chengjie Li, Theofronia Androulakaki, Yuan Gao, Fangkai Yang, Himangshu Saikia, Christopher Peters and Gabriel Skantze</div>
	<h6></h6>
	<button id="abstract_btn" class="button black" onclick="toggleAbstract(this);" type="button">Abstract</button>
	<button class="button black" onclick="alert('Sorry, the paper is not publically available yet.')" type="button"></button>
	<div id="abstract" text="Mixed reality offers new potentials for social interaction experiences with virtual agents. In addition, it can be used to experiment with the design of physical robots. However, while previous studies have investigated comfortable social distances between humans and artificial agents in real and virtual environments, there is little data with regards to mixed reality environments. In this paper, we conducted an experiment in which participants were asked to walk up to an agent to ask a question, in order to investigate the social distances maintained, as well as the subject's experience of the interaction. We manipulated both the embodiment of the agent (robot vs. human and virtual vs. physical) as well as closed vs. open posture of the agent. The virtual agent was displayed using a mixed reality headset. Our experiment involved 35 participants in a within-subject design. We show that, in the context of social interactions, mixed reality fares well against physical environments, and robots fare well against humans, barring a few technical challenges."></div>
	<div style="float:right;font-size:.6em">Intelligent Virtual Agents, October 2018</div>
    </div>
</div>

<div class='container'>
    <div>
		<img src='papers/deep_proximics.jpg' class='iconDetails'>
    </div>  
    <div style='margin-left:25%;'>
    <h4>Human-Robot Proxemics using Recurrent Neural Networks</h4>
    <div style="font-size:.8em"> Yuan Gao, Sebastian Wallkötter, Mohammad Obaid and Ginevra Castellano</div>
	<h6></h6>
	<button id="abstract_btn" class="button black" onclick="toggleAbstract(this);" type="button">Abstract</button><button class="button black" onclick="window.open('papers/investigate-deep-learning-proximics.pdf')" type="button">Download</button>
	<div id="abstract" text="In this paper, we investigate the applicability of deep learning methods to adapt and predict comfortable human-robot proxemics. Proposing a network architecture, we experiment with three different layer configurations, obtaining three different end-to-end trainable models. Using these, we compare their predictive performances on data obtained during a human-robot interaction study. We find that our long short-term memory based model outperforms a gated recurrent unit based model and a feed-forward model. Further, we demonstrate how the created model can be exploited to create customized comfort zones that can help create a personalized experience for individual users. "></div>
    <div style="float:right;font-size:.6em">RO-MAN, 2018</div>
    </div>
</div>

<div class='container'>
    <div>
		<img src='papers/when_help.jpg' class='iconDetails'>
    </div>  
    <div style='margin-left:25%;'>
    <h4>When robot personalisation does not help: Insights from a robot-supported learning study </h4>
    <div style="font-size:.8em"> Yuan Gao, Wolmet Barendregt, Mohammad Obaid and Ginevra Castellano,</div>
    <h6></h6>
	<button id="abstract_btn" class="button black" onclick="toggleAbstract(this);" type="button">Abstract</button><button class="button black" onclick="window.open('papers/when-robot-does-not-help.pdf')" type="button">Download</button>
	<div id="abstract" text="In the domain of robotic tutors, personalised tutoring has started to receive scientists' attention, but is still relatively underexplored. Previous work using reinforcement learning (RL) has addressed personalised tutoring from the perspective of affective policy learning. However, little is known about the effects of robot behaviour personalisation on user's task performance. Moreover, it is also unclear if and when personalisation may be more beneficial than a robot that adapts to its users and the context of the interaction without personalising its behaviour. In this paper we build on previous work on affective policy learning that used RL to learn what robot's supportive behaviours are preferred by users in an educational scenario. We build a RL framework for personalisation that allows a robot to select verbal supportive behaviours to maximise the user's task progress and positive reactions in a learning scenario where a Pepper robot acts as a tutor and helps people to learn how to solve grid-based logic puzzles. 
A between-subjects design user study showed that participants were more efficient at solving logic puzzles and preferred a robot that exhibits more varied behaviours compared with a robot that personalises its behaviour by converging on a specific one over time. We discuss insights on negative effects of personalisation and report lessons learned together with design implications for personalised robots."></div>
    <div style="float:right;font-size:.6em">RO-MAN, 2018</div>
    </div>
</div>
<br style/>
