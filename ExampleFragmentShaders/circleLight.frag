#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;

//Don't go too high without adjusting brightness, or this will get very laggy.
const float numLights = 100.0;
const float brightness = 0.0002;

void main() {
    vec2 coord = gl_FragCoord.xy / u_resolution;
    vec3 color = vec3(0.0);
    vec2 translate = vec2(-0.5, -0.5);
    coord += translate;

    for (float i = 0.0; i < numLights; i++) {
        float radius = 0.3;
        float rad = radians(360.0 / numLights) * i;

        color += brightness / length(coord + vec2(radius * cos(rad), 
                                    radius * sin(rad)));
    }

    gl_FragColor = vec4(color, 1.0);
}