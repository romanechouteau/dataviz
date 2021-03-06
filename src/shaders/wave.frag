precision highp float;

uniform float time;
uniform vec2 rez;
uniform float easing;
uniform vec3 waveColor;

varying vec2 vUv;

void main() {
   vec4 color1 = vec4(waveColor, 1.);
   vec4 color2 = vec4(0., 0., 0., 0.);

   float mixValue = step(vUv.x + easing * .4 - .4 + sin(vUv.y * 5. + easing) * .1 - .1, 1.);

   vec4 finalColor = mix(color1, color2, mixValue);

   gl_FragColor = vec4(finalColor);

}
