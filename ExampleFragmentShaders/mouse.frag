#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;
uniform vec2 u_mouse;

void main() {
    vec2 coord = gl_FragCoord.xy;
    vec3 color = vec3(0.0);

    //Play around with these if you'd like.
    color.r = 1.0 - u_mouse.x / u_resolution.x;
    color.b = 1.0 - u_mouse.y / u_resolution.y;
    color.g = 1.0 - (u_mouse.y / u_mouse.x);

    gl_FragColor = vec4(color, 1.0);
}