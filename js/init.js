$(document).ready(function(){

	// Animated page in
	if ($(window).width() > 800) {
		$(".page-wrapper").animate({opacity: 1}, 1000);
	}

	// See more logic
	$(".show-more").click(function() {
		if ($(".show-more").text() === "Show More") {
			$(".show-more").text("Show Less");
			$(".page-wrapper").addClass("show");
		} else {
			$(".show-more").text("Show More");
			$(".page-wrapper").removeClass("show");
		}
	});

	var baconIpsum = "Bacon ipsum dolor amet";
	var baconBits = [
		'alcatra', 'andouille', 'bacon', 'ball', 'beef', 'belly', 'biltong', 'boudin', 'bresaola', 
		'brisket', 'burgdoggen', 'capicola', 'chicken', 'chop', 'chuck', 'corned', 'cow', 'cupim', 
		'doner', 'drumstick', 'fatback', 'filet', 'flank', 'frankfurter', 'ground', 'ham', 
		'hamburger', 'hock', 'jerky', 'jowl', 'kevin', 'kielbasa', 'landjaeger', 'leberkas', 
		'loin', 'meatball', 'meatloaf', 'mignon', 'pancetta', 'pastrami', 'picanha', 'pig', 
		'porchetta', 'pork', 'prosciutto', 'ribeye', 'spare ribs', 'round', 'rump', 'salami', 'sausage', 
		'shank', 'shankle', 'short', 'shoulder', 'sirloin', 'steak', 'strip', 'swine', 
		't-bone', 'tail', 'tenderloin', 'tongue', 'tri-tip', 'turducken', 'turkey', 'venison'
	];
	// var baconBits = [
	// 	'ad', 'adipisicing', 'alcatra', 'aliqua', 'aliquip', 'andouille', 'anim', 'aute', 'bacon', 
	// 	'ball', 'beef', 'belly', 'biltong', 't-bone', 'boudin', 'bresaola', 'brisket', 'burgdoggen', 
	// 	'capicola', 'chicken', 'chop', 'chuck', 'cillum', 'commodo', 'consectetur', 'consequat', 
	// 	'corned', 'cow', 'culpa', 'cupidatat', 'cupim', 'deserunt', 'do', 'dolor', 'dolore', 'doner', 
	// 	'drumstick', 'duis', 'ea', 'eiusmod', 'elit', 'enim', 'esse', 'est', 'et', 'eu', 'ex', 'excepteur', 
	// 	'exercitation', 'fatback', 'filet', 'flank', 'frankfurter', 'fugiat', 'ground', 'ham', 'hamburger', 
	// 	'hock', 'id', 'in', 'incididunt', 'ipsum', 'irure', 'jerky', 'jowl', 'kevin', 'kielbasa', 'labore', 
	// 	'laboris', 'laborum', 'landjaeger', 'leberkas', 'loin', 'lorem', 'magna', 'meatball', 'meatloaf', 
	// 	'mignon', 'minim', 'mollit', 'nisi', 'non', 'nulla', 'occaecat', 'officia', 'pancetta', 'pariatur', 
	// 	'pastrami', 'picanha', 'pig', 'porchetta', 'pork', 'proident', 'prosciutto', 'qui', 'quis', 
	// 	'reprehenderit', 'ribeye', 'ribs', 'round', 'rump', 'salami', 'sausage', 'sed', 'shank', 'shankle', 
	// 	'short', 'shoulder', 'sint', 'sirloin', 'spare', 'steak', 'strip', 'sunt', 'swine', 'tail', 
	// 	'tempor', 'tenderloin', 'tri-tip', 'tongue', 'turducken', 'turkey', 'ullamco', 'ut', 'veniam', 'voluptate'];
	var filler = ['', 'for', 'of', 'what', 'that', 'the', 'over', 'to', 'from', 'with', 'then', 'and', 'i', 'a', 'this', 'hello', 'http', 'present'];
  //'jiexi', 'luan', 'interests', 'experience', 'education', 'projects', 'skills'
	var getAllWordsForPage = function() {
		var content = $('.page-wrapper').text();
		content = content.replace(/[^a-z\-]+/gi, ' ');
		content = content.replace(/\s\s+/g, ' ');
		words = _.uniq(content.split(" "));
		words = _.differenceBy(words, filler, _.toLower);
		words = _.sortBy(words, function(word) { return word.length; }).reverse();
		return words;
	};

	var replaceWordsForPage = function(wordsOnPage) {
		_.each(wordsOnPage, function(wordOnPage) {
			var baconBit = _.sample(baconBits);
	    $(".page-wrapper").children().each(function() {           
	    	var newHtml = $(this).html().replace((new RegExp('\\b'+wordOnPage+'\\b', 'g')), baconBit)
	      $(this).html(newHtml);
	    });
		});
    $(".page-wrapper h1").text(baconIpsum);
	};

	// Bacon Ipsum Logic
	$(".bacon").click(function() {
		if ($(".bacon").text() === "Lorem Bacon") {
			replaceWordsForPage(getAllWordsForPage());
			$(".bacon").text("Back to Normal");
		} else {
			location.reload();
		}
	});

});