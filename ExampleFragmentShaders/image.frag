#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;
uniform sampler2D u_tex0;

/*
If you view this in VS code, make sure you have the GLSL canvas extension installed,
and your settings.json file has been updated for your preffered texture.

NOTE, local textures seem to be bugged. Additonally, only some web links will work.

{
"glsl-canvas.textures": {
        "0": "https://rawgit.com/actarian/plausible-brdf-shader/master/textures/noise/cloud-1.png"
    }
}
Otherwise use GLSL Viewer from the command line to open this in a seprate window.
*/

void main() {
    vec2 coord = gl_FragCoord.xy / u_resolution;
    vec3 color = vec3(0.0);

    //Uncomment if you want to move the image around.
    coord.x += sin(u_time);
    
    //Texture2D is a deprecated function, but is easy to use.
    gl_FragColor = texture2D(u_tex0, coord);
}