#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

float rectshape(vec2 position, vec2 scale) {
    scale = vec2(0.5) - scale * 0.5;
    vec2 shaper = vec2(step(scale.x, position.x), step(scale.y, position.y));
    shaper *= vec2(step(scale.x, 1.0 - position.x), step(scale.y, 1.0 - position.y));
    return shaper.x * shaper.y;
}

void main() {
    vec2 coord = gl_FragCoord.xy / u_resolution;
    vec3 color = vec3(0.0);

    vec2 translate = vec2 (0.2 * sin(u_time), 0.5 * cos(u_time)); //Try changing these values.
    coord += translate * 0.5; //Divided in half for ease of use.

    color += vec3(rectshape(coord, vec2(0.3)));

    gl_FragColor = vec4(color, 1.0);
}