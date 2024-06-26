#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

void main() {
    vec2 coord = gl_FragCoord.xy / u_resolution;
    vec3 color = vec3(0.0);

    // Honestly, just play around with this. This is just a showcase.
    color += sin(coord.x * cos(u_time / 10.0) * 60.0) + sin(coord.y * cos(u_time / 15.0) * 10.0);
    color += sin(coord.y * cos(u_time / 10.0) * 60.0) + sin(coord.x * cos(u_time / 15.0) * 10.0);
    color /= vec3(0.1);
    color += sin(u_time / 10.0) + 0.5;

    gl_FragColor = vec4(color, 1.0);
}