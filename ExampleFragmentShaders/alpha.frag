#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

void main() {
    vec2 coord = gl_FragCoord.xy / u_resolution;
    float alpha = sin(u_time * 4.0);
    
    gl_FragColor = vec4(1.0, 1.0, 1.0, alpha);
}