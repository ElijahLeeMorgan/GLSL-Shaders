#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

//EPILEPSY WARNING

//Simple and fast noise, but not truely sudorandom.
float noise1d(float value) {
    return cos(value + cos(value * 90.0) * 100.0) * 0.5 + 0.5;
}

void main() {
    vec2 coord = gl_FragCoord.xy / u_resolution;
    vec3 color = vec3(0.0);
    
    color.r += noise1d(u_time);
    //color.b += noise1d(u_time);
    color.g += noise1d(u_time);
    
    
    gl_FragColor = vec4(color, 1.0);
}