// neural network random art generator

// settings

// actual size of generated image
var sizeh  = 32*5;
var sizew = sizeh;
var sizeImage = sizeh*sizew;

var nH, nW, nImage;
var mask;

// settings of nnet:
var networkSize = 16;
var nHidden = 8;
var nOut = 3; // r, g, b layers

// support variables:
var img;
var img2;
var G = new R.Graph(false);


var initModel = function() {
  "use strict";

  var model = [];
  var i;

  var randomSize = 1.0;

  // define the model below:
  model.w_in = R.RandMat(networkSize, 3, 0, randomSize); // x, y, and bias

  for (i = 0; i < nHidden; i++) {
    model['w_'+i] = R.RandMat(networkSize, networkSize, 0, randomSize);
  }

  model.w_out = R.RandMat(nOut, networkSize, 0, randomSize); // output layer

  return model;
};


var forwardNetwork = function(G, model, x_, y_) {
  // x_, y_ is a normal javascript float, will be converted to a mat object below
  // G is a graph to amend ops to
  var x = new R.Mat(3, 1); // input
  var i;
  x.set(0, 0, x_);
  x.set(1, 0, y_);
  x.set(2, 0, 1.0); // bias.
  var out;
  out = G.tanh(G.mul(model.w_in, x));
  for (i = 0; i < nHidden; i++) {
    out = G.tanh(G.mul(model['w_'+i], out));
  }
  out = G.sigmoid(G.mul(model.w_out, out));
  return out;
};

function getColorAt(model, x, y) {
  // function that returns a color given coordintes (x, y)
  // (x, y) are scaled to -0.5 -> 0.5 for image recognition later
  // but it can be behond the +/- 0.5 for generation above and beyond
  // recognition limits
  var r, g, b;
  var out = forwardNetwork(G, model, x, y);

  r = out.w[0]*255.0;
  g = out.w[1]*255.0;
  b = out.w[2]*255.0;

  return color(r, g, b);
}

function genImage(img, model) {
  var i, j, m, n;
  img.loadPixels();
  for (i = 0, m=img.width; i < m; i++) {
    for (j = 0, n=img.height; j < n; j++) {
      img.set(i, j, getColorAt(model, i/sizeh-0.5,j/sizew-0.5));
    }
  }
  img.updatePixels();
}

function setup() {

	"use strict";
	var myCanvas;

	myCanvas = createCanvas(window.innerWidth, window.innerHeight);
	nW = Math.max(Math.floor(sizew/sizew), 1);
	nH = Math.max(Math.floor(sizeh/sizeh), 1);
	nImage = nH*nW;
	mask = R.zeros(nImage);

	img = createImage(sizeh, sizew);
	model = initModel();
	genImage(img, model);

	strokeWeight(9);
	stroke(255, 100);
	
	frameRate(30);
}

function getRandomLocation() {
  var i, result=0, r;
  for (i=0;i<nImage;i++) {
    result += mask[i];
  }
  if (result === nImage) {
    mask = R.zeros(nImage);
  }
  do {
    r = R.randi(0, nImage);
  } while (mask[r] !== 0);
  mask[r] = 1;
  return r;
}


class Line {
	constructor(n,l) {
		this.x = [];
		this.y = [];
		this.segNum = n;
		this.segLength = l;

		for (var i = 0; i < this.segNum; i++) {
			this.x[i] = 0;
			this.y[i] = 0;
		}
	}
	dragSegment(i, xin, yin) {
		var dx = xin - this.x[i];
		var dy = yin - this.y[i];
		var angle = atan2(dy, dx);
		this.x[i] = xin - cos(angle) * this.segLength;
		this.y[i] = yin - sin(angle) * this.segLength;
		this.segment(this.x[i], this.y[i], angle);
	}

	segment(x, y, a) {
		push();
		translate(x, y);
		rotate(a);
		line(0, 0, segLength, 0);
		pop();
	}
}

function draw() {
	
	var n = getRandomLocation();
	var row = Math.floor(n/nW);
	var col = n % nW;
	background(255);
	l = new Line(20,18);
	l.dragSegment(0, mouseX, mouseY);
	for( var i=0; i<x.length-1; i++) {
		l.dragSegment(i+1, x[i], y[i]);
	}
}
