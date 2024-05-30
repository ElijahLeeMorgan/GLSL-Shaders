#ifdef GL_ES
precision mediump float;
#endif

const float PI = 3.1415926535;

// This one is really fun to play with. Try messing with the numbers and trig functions.
// Try changing floor to ceil to reverse the affected area.
// Try playing with the return call.

uniform vec2 u_resolution;

float polygonshape(vec2 position, float radius, float sides) {
    position = position * 2.0 - 1.0;
    float angle = atan(position.x, position.y);
    float slice = PI * 2.0 / sides;

    return step(radius, cos(floor(0.5 + angle / slice) * slice - angle) * length(position));
}

void main() {
    vec2 position = (gl_FragCoord.xy / u_resolution);

    vec3 color = vec3(0.0);

    float polygon = polygonshape(position, 0.6, 6.0); //Sides doesn't have to be just an int.

    color = vec3(polygon);

    gl_FragColor = vec4(color, 1.0);
}