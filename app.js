/* Animation 1 */
var controller = new ScrollMagic.Controller();
const tween1 = new TimelineLite();
tween1.add(
	TweenLite.to("#animate1", 1, {
		scale: 5
	})
);
var scene = new ScrollMagic.Scene({triggerElement: "#trigger1", duration: "200%", triggerHook:0})
	// animate color and top border in relation to scroll position
	.setTween(tween1) // the tween durtion can be omitted and defaults to 1
	.addTo(controller);

/* Animation 2 */

$(function () { // wait for document ready
		// build scene
		var scene = new ScrollMagic.Scene({triggerElement: "#trigger3", duration: "100%", triggerHook:0})
						.setPin("#row")
						//.addIndicators({name: "PIN_2"}) // add indicators (requires plugin)
						.addTo(controller);
	});

var animateElem2 = document.getElementById("animate2");
var scene2 = new ScrollMagic.Scene({triggerElement: "#trigger3", duration: "33%", triggerHook:0})
	.on("enter", function () {
		// trigger animation by changing inline style.
		animateElem2.style.color = "#302D26";
		animateElem2.style.fontSize = "8.5vw";
		animateElem2.style.textDecoration = "underline";
		//animateElem2.style.setProperty("text-decoration", "line-through");
		document.getElementById("myimg2").style.opacity = "1";
	})
	.on("leave", function () {
		// reset style
		animateElem2.style.color = "";
		animateElem2.style.fontSize = "";
		animateElem2.style.textDecoration = "";
		//animateElem2.style.setProperty("text-decoration", "");
		document.getElementById("myimg2").style.opacity = "0";
	})
	//.addIndicators({name: "-2"}) // add indicators (requires plugin)
	.addTo(controller);

var animateElem3 = document.getElementById("animate3");
var scene3 = new ScrollMagic.Scene({triggerElement: "#trigger3", duration: "33%", triggerHook:0, offset: $(window).height()/3})
	.on("enter", function () {
		// trigger animation by changing inline style.
		animateElem3.style.color = "#302D26";
		animateElem3.style.fontSize = "8.5vw";
		animateElem3.style.textDecoration = "underline";
		document.getElementById("myimg3").style.opacity = "1";
		document.getElementById("myimg4").style.opacity = "0";
	})
	.on("leave", function () {
		// reset style
		animateElem3.style.color = "";
		animateElem3.style.fontSize = "";
		animateElem3.style.textDecoration = "";
		document.getElementById("myimg3").style.opacity = "0";
	})
	//.addIndicators({name: "-------3"}) // add indicators (requires plugin)
	.addTo(controller);

var animateElem4 = document.getElementById("animate4");
var scene4 = new ScrollMagic.Scene({triggerElement: "#trigger3", duration: "33%", triggerHook:0, offset: ($(window).height()/3)*2})
	.on("enter", function () {
		// trigger animation by changing inline style.
		animateElem4.style.color = "#302D26";
		animateElem4.style.fontSize = "8.5vw";
		animateElem4.style.textDecoration = "underline";
		document.getElementById("myimg4").style.opacity = "1";
	})
	.on("leave", function () {
		// reset style
		animateElem4.style.color = "";
		animateElem4.style.fontSize = "";
		animateElem4.style.textDecoration = "";
		document.getElementById("myimg4").style.opacity = "1";
	})
	//.addIndicators({name: "4"}) // add indicators (requires plugin)
	.addTo(controller);



/* Animation 2.1 */
	$(function () { // wait for document ready
		// init
		var controller = new ScrollMagic.Controller();

		// define movement of panels
		var wipeAnimation = new TimelineMax()
			// animate to second panel
			.to("#slideContainer", 0.5, {x: "-10%"})	// move in to first panel

		// create scene to pin and link animation
		new ScrollMagic.Scene({
				triggerElement: "#pinContainer",
				triggerHook: 1,
				duration: "200%"
			})
			//.setPin("#pinContainer")
			.setTween(wipeAnimation)
			//.addIndicators() // add indicators (requires plugin)
			.addTo(controller);
	});


	$(function () { // wait for document ready
		// init
		var controller = new ScrollMagic.Controller();

		// define movement of panels
		var wipeAnimation = new TimelineMax()
			// animate to second panel
			.to("#slideContainer2", 0.5, {x: "20%"})	// move in to first panel

		// create scene to pin and link animation
		new ScrollMagic.Scene({
				triggerElement: "#pinContainer",
				triggerHook: 1,
				duration: "200%"
			})
			//.setPin("#pinContainer")
			.setTween(wipeAnimation)
			//.addIndicators() // add indicators (requires plugin)
			.addTo(controller);
	});


/* Animation 3 */
/*$(function () { // wait for document ready
		// build scene
		var scene = new ScrollMagic.Scene({triggerElement: "#trigger5", duration: "100%", triggerHook:1})
						.setPin("#section")
						//.addIndicators({name: "PIN"}) // add indicators (requires plugin)
						.addTo(controller);
	});*/


// define images
	var images = [
		"./gif/gif_1.png",
		"./gif/gif_2.png",
		"./gif/gif_3.png",
		"./gif/gif_4.png",
		"./gif/gif_5.png",
		"./gif/gif_6.png",
		"./gif/gif_7.png",
		"./gif/gif_8.png",
		"./gif/gif_9.png",
		"./gif/gif_10.png",
		"./gif/gif_11.png"/*,
		"./gif/gif_12.png",
		"./gif/gif_13.png",
		"./gif/gif_14.png",
		"./gif/gif_15.png",
		"./gif/gif_16.png",
		"./gif/gif_17.png",
		"./gif/gif_18.png",
		"./gif/gif_19.png",
		"./gif/gif_20.png",
		"./gif/gif_21.png",
		"./gif/gif_22.png",
		"./gif/gif_23.png",
		"./gif/gif_24.png",
		"./gif/gif_25.png",
		"./gif/gif_26.png",
		"./gif/gif_27.png",
		"./gif/gif_28.png",
		"./gif/gif_29.png",
		"./gif/gif_30.png",
		"./gif/gif_31.png",
		"./gif/gif_32.png",
		"./gif/gif_33.png",
		"./gif/gif_34.png",
		"./gif/gif_35.png",
		"./gif/gif_36.png",
		"./gif/gif_37.png",
		"./gif/gif_38.png",
		"./gif/gif_39.png",
		"./gif/gif_40.png",
		"./gif/gif_41.png",
		"./gif/gif_42.png",
		"./gif/gif_43.png",
		"./gif/gif_44.png",
		"./gif/gif_45.png",
		"./gif/gif_46.png",
		"./gif/gif_47.png",
		"./gif/gif_48.png",
		"./gif/gif_49.png",
		"./gif/gif_50.png",
		"./gif/gif_51.png",
		"./gif/gif_52.png",
		"./gif/gif_53.png",
		"./gif/gif_54.png",
		"./gif/gif_55.png",
		"./gif/gif_56.png"*/
		
	];

	// TweenMax can tween any property of any object. We use this object to cycle through the array
	var obj = {curImg: 0};


	// create tween
	var tween2 = TweenMax.to(obj, 0.5,
		{
			curImg: images.length - 1,	// animate propery curImg to number of images
			roundProps: "curImg",				// only integers so it can be used as an array index
			repeat: 1,									// repeat 3 times
			immediateRender: true,			// load first image automatically
			ease: Linear.easeNone,			// show every image the same ammount of time
			onUpdate: function () {
			  //$("#myimg").attr("src", images[obj.curImg]); // set the image source

			  document.getElementById('trigger5').style.backgroundImage="url("+images[obj.curImg]+")";
			}
		}
	);

	// init controller
	var controller = new ScrollMagic.Controller();

	// build scene
	var scene = new ScrollMagic.Scene({triggerElement: "#trigger5", duration: "100%", triggerHook:1})
					.setTween(tween2)
					//.addIndicators({name: "PIN"}) // add indicators (requires plugin)
					.addTo(controller);


	// handle form change
	$("form.move input[name=duration]:radio").change(function () {
		scene.duration($(this).val());
	});


/* Animation 5
var controller = new ScrollMagic.Controller();
const tween5 = new TimelineLite();
tween5.add(
	TweenLite.to("#animate5", 1, {
		scale: 1
	})
);
var scene = new ScrollMagic.Scene({triggerElement: "#trigger5", duration: "100%", triggerHook:1})
	// animate color and top border in relation to scroll position
	.setTween(tween5) // the tween durtion can be omitted and defaults to 1
	
	.addTo(controller);
*/

/* Animation SVG 
function pathPrepare ($el) {
		var lineLength = $el[0].getTotalLength();
		$el.css("stroke-dasharray", lineLength);
		$el.css("stroke-dashoffset", lineLength);
	}

	var $word = $("path#word");

	// prepare SVG
	pathPrepare($word);

	// init controller
	var controller = new ScrollMagic.Controller();

	// build tween
	var tween6 = new TimelineMax()
		.add(TweenMax.to($word, 1, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw word for 0.9
		.add(TweenMax.to("path", 1, {stroke: "#33629c", ease:Linear.easeNone}), 0);			// change color during the whole thing

	// build scene
	var scene = new ScrollMagic.Scene({triggerElement: "#trigger5", duration: "100%", tweenChanges: true, triggerHook:0.3})
					.setTween(tween6)
					//.addIndicators() // add indicators (requires plugin)
					.addTo(controller); */