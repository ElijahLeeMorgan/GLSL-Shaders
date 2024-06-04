#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

float random2d(vec2 coord) {
    return fract(sin(dot(coord.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

void main() {
    vec2 coord = gl_FragCoord.xy / u_resolution;
    vec3 color = vec3(0.0);
    float grain = 0.0;
    //Divide coord by a large number and remove resolution division if you want to see something cool.
    grain = random2d(vec2(sin(coord)) * u_time);

    color = vec3(grain);

    gl_FragColor = vec4(color, 1.0);
}