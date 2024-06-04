#ifdef GL_ES
precision mediump float;
#endif

void main() {
    //All is see is RED.
    gl_FragColor = vec4(1.0, 0.3, 0.3, 1.0);
}