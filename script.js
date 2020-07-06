(function(){
    const main = () => {
        const graphUtils = GraphUtils();
        const gl = graphUtils.init(document.getElementById("display"));
        
        if(gl === undefined) {
            return;
        }
        
    };

    window.onload = main;

    function GraphUtils() {
        return {
            init: function(canvas) {
                const gl = canvas.getContext("webgl");

                if(gl === null) {
                    alert("There might be a problem with WebGL support on your browser");
                    throw new Error("Couldn't initialize WebGL");
                    return;
                }

                gl.clearColor(0.0, 0.0, 0.5, 1.0);
                gl.clear(gl.COLOR_BUFFER_BIT);

                return gl;
            }
        };   
    }
    
})();