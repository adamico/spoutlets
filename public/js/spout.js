$(document).ready(function() {
    createStoryJS({
        type:        'timeline',
        width:        '100%',
        height:        '600',
        source:    	'/js/example_json.json',
        embed_id:	        'my-timeline',
        start_at_end:     true,
        start_zoom_adjust: '3'
    });
});