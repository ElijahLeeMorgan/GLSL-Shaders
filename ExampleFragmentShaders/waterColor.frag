#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

void main() {
    vec2 coord = 6.0 * gl_FragCoord.xy / u_resolution;

    for (float n = 1.0; n < 8.0; n++) {
        coord += vec2(0.7 / n * sin(n * coord.y + u_time + 0.3 * n) + 0.8, 0.4 / n * sin(coord.x + u_time + 0.3 * n) + 1.6);
    }
    
    vec3 color = vec3(0.5 * sin(coord.x) + 0.5, 0.5 * sin(coord.y) + 0.5, sin(coord.x + coord.y));

    gl_FragColor = vec4(color, 1.0);
}