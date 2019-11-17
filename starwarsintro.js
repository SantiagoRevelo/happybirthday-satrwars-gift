StarWars = (function() {
    /* 
     * Constructor
     */
    function StarWars(args) {
        this.spanify = false;
        // Context wrapper
        this.el = $(args.el);

        // Audio to play the opening crawl
        this.audio = this.el.find('audio').get(0);

        // Start the animation
        this.start = this.el.find('.start');

        // The animation wrapper
        this.animation = this.el.find('.animation');

        // Remove animation and shows the start screen
        this.reset();

        // Start the animation on click
        this.start.on('click', $.proxy(function() {
            this.start.hide();
            this.audio.play();
            this.el.append(this.animation);
            $('.stars-bg').addClass('on');
        }, this));

        // Reset the animation and shows the start screen
        $(this.audio).on('ended', $.proxy(function() {
            this.audio.currentTime = 0;
            //this.reset();
            //$('.stars-bg').removeClass('on');
        }, this));
    }

    /*
     * Resets the animation and shows the start screen.
     */
    StarWars.prototype.reset = function() {
        if (!this.spanify) {
            this.setLogo();
        }
        this.start.show();
        this.cloned = this.animation.clone(true);
        this.animation.remove();
        this.animation = this.cloned;
    };

    StarWars.prototype.setLogo = function() {
        var byline = $('#byline'); // Find the H2
        bylineText = byline.html(); // Get the content of the H2
        bylineArr = bylineText.split(''); // Split content into array
        byline.html(''); // Empty current content

        var span; // Create variables to create elements
        var letter;

        for (i = 0; i < bylineArr.length; i++) { // Loop for every letter
            span = $('<span></span>'); // Create a <span> element
            letter = document.createTextNode(bylineArr[i]); // Create the letter

            if (bylineArr[i] == ' ') { // If the letter is a space...
                byline.append(letter); // ...Add the space without a span
            } else {
                span.append(letter); // Add the letter to the span
                byline.append(span); // Add the span to the h2
            }
        }
        this.spanify = true;
    };

    return StarWars;
})();

$(document).ready(function() {
    new StarWars({
        el: '.starwars'
    });
});